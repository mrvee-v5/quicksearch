import { storeItem } from "../../data";
import { ItemProp, searchParams } from "./types";
import _uniqueBy from "lodash.uniqby";
const isEmpty = (obj: any) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

type indexType = { [key: string]: any };
const runFilter = (type: string, val: string[]) => {
  const result = storeItem.filter((item) => {
    let data = (item as indexType)[type];
    const result = val.includes(data);
    return result;
  });
  return result;
};

export const getItems = async (payload: searchParams) => {
  let response: ItemProp[] | [] = [];
  try {
    if (isEmpty(payload)) {
      response = storeItem;
      return Promise.resolve(response);
    }
    for (let key in payload) {
      if ((payload as indexType)[key] && (payload as indexType)[key].length) {
        const result = runFilter(key, (payload as indexType)[key]);
        response = _uniqueBy([...response, ...result], "itemId");
      } else {
        response = [];
      }
    }
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
