import { createStore, applyMiddleware, combineReducers } from "redux";
import { dataReducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createSelectorHook } from "react-redux";
import { userReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = composeWithDevTools({});
export const rootReducer = combineReducers({
  data: dataReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector = createSelectorHook<RootState>();

const keyStoragePersist = {
  key: "root",
  storage,
};
const reducerPersist = persistReducer(keyStoragePersist, rootReducer);

export const store = createStore(
  reducerPersist,
  composeEnhancers(applyMiddleware(thunk))
);

export const persist = persistStore(store);
