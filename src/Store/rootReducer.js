import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import all reducers
// import ordersReducer from "./Orders/reducers";
// import ouletReducer, { outletReducer } from "./Outlet/reducers";
// import authReudcer from "./Authentication/reducers";
import configReducer from "./Configuration/reducers";

const persistConfig = {
  key: "root",
  blacklist: [],
  storage
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    config: configReducer
    // orders: function(){}
    // orders: ordersReducer,
    // auth: authReudcer,
    // outlet: outletReducer
  })
);

export default rootReducer;
