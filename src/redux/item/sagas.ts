import { StrictEffect } from "@redux-saga/types";
import { call, put, delay } from "redux-saga/effects";
import { getItems } from "./api";
import { ItemProp, searchParams } from "./types";
import { setItem, setLoading } from "./reducer";

function* getItemsSaga(payload: {
  payload: searchParams;
}): Generator<StrictEffect> {
  yield put(setLoading(true));
  try {
    yield delay(2000);
    const data = yield call(getItems, payload.payload);
    const result = data as ItemProp[] | [];
    yield put(setItem(result));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setLoading(false));
    console.log("ERROR ==", err);
  }
}

export { getItemsSaga };
