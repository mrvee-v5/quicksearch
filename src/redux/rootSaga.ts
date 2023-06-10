import { takeLatest, all, fork } from "redux-saga/effects";
import { searchParams } from "./item/types";
import { getItemsSaga } from "./item/sagas";
import { GET_ITEMS } from "../constants";

// register all sagas here
function* sagas() {
  yield takeLatest<{ type: string; payload: searchParams }>(
    GET_ITEMS,
    getItemsSaga
  );
}

export default function* rootSaga(): Generator<any, any, any> {
  yield all([fork(sagas)]);
}
