import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image
} from "react-native";

import Banner from "./Banner";
import SignUpCard from "./SignUpCard";

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "red"
  },
  signUpCardContainer: {
    marginTop: 10,
    padding: 10,
        

  }
});

const Home = () => {
  let { signUpCardContainer } = styles;
  const images = [
    "https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  ];
  return (
    <View>
      <Banner images={images} />
      <View style={signUpCardContainer}>
        <SignUpCard />
      </View>
    </View>
  );
};
export default Home;
