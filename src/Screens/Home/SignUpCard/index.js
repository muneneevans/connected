import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {theme} from "../../../Store/Configuration/theme"


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
  contentContainer: {
    borderRadius: 5,
    flex: 2,
    padding: 10
  },
  titleText:{
    fontSize: theme.FONT_SIZE_MASSIVE,
    fontFamily: theme.PRIMARY_FONT_FAMILY_SEMI_BOLD,
    color: theme.PRIMARY_TEXT_COLOR    
  },
  secondaryText:{
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.PRIMARY_FONT_FAMILY_LIGHT,
  }
});

const SignUpCard = () => {
  let { cardContainer, imageContainer, contentContainer, titleText, secondaryText } = styles;
  return (
    <View style={cardContainer}>
      <ImageBackground
        style={imageContainer}
        source={require("./images/rocket3.png")}
      />

      <View style={contentContainer}>
        <Text style={titleText}>Sieze the moment</Text>
        <Text style={secondaryText}>Register and get access to all the conference benefits</Text>
      </View>
    </View>
  );
};

export default SignUpCard;
