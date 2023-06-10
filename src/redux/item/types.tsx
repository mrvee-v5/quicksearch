export type ItemProp = {
  orderID: string;
  itemId: string;
  type: string;
  category: string;
  description: string;
};
export interface ItemType {
  readonly items: ItemProp[] | [];
  readonly loading: boolean;
}

export type searchParams = {
  itemId: string[];
  orderID: string[];
  type: string[];
};

export type indexingType = {
  [key: string]: number[];
};
