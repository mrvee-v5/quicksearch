import rootReducer from "./rootReducers";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleWare],
});

const configStore = () => {
  sagaMiddleware.run(sagas);
  return { store };
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default configStore;
