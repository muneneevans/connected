import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

import Home from "../Home";
import TalkPage from "../TalkPage";

const DefaultRoute = createStackNavigator({
  Home: {
    screen: Home,
    header: null,
    navigationOptions: {
      header: null
    }
  },
  TalkPage: {
    screen: TalkPage,
    header: null,
    navigationOptions: {
      header: null
    }
  }
});

const Route = () => <DefaultRoute />;

export default Route;
