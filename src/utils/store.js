import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { SET_DATA, UPLOAD_FILE } from "./actions";

const initialState = {
  selectedCurrency: "",
  flyingFrom: "",
  flyingTo: "",
  adultCount: 1,
  childCount: 0,
  infantCount: 0,
  classes: "",
  tripType: ["one-way"],
  returnDate: "",
  date: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        selectedCurrency: action.payload.selectedCurrency,
        flyingFrom: action.payload.flyingFrom,
        flyingTo: action.payload.flyingTo,
        adultCount: action.payload.adultCount,
        childCount: action.payload.childCount,
        infantCount: action.payload.infantCount,
        classes: action.payload.classes,
        tripType: action.payload.tripType,
        returnDate: action.payload.returnDate,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  mainReducer: reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);

export default store;
