import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,

    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "center",
    borderRadius: 5,
    padding: 5,
    borderColor: "black",
    overflow: "hidden",
    elevation: 1
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  image: {
    flex: 0.7,
    width: null,
    height: null
  },
  contentContainer: {
    borderRadius: 5,
    flex: 2,
    padding: 10
  }
});

const SignUpCard = () => {
  let { cardContainer, imageContainer, contentContainer, image } = styles;
  return (
    <View style={cardContainer}>
      <ImageBackground
        style={imageContainer}
        source={require("./images/rocket3.png")}
      />

      <View style={contentContainer}>
        <Text>Sieze the moment</Text>
        <Text>Register and get access to all the conference benefits</Text>
      </View>
    </View>
  );
};

export default SignUpCard;
