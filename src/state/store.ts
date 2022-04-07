import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { ui } from "./reducer/ui.reducer";

const rootReducer = combineReducers({
  ui,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
