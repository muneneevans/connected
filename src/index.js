import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//import redux store
import store, { persistor } from "./Store/configureStore";

import Routes from "./Screens/Routes";
import SplashScreen from "./Screens/SplashScreen";

class QuicklaneStores extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

export default QuicklaneStores;
