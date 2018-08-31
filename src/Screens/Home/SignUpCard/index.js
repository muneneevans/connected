import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { theme, colorOptions } from "../../../Store/Configuration/theme";

const styles = StyleSheet.create({
  cardContainer: {
    // height: 100,

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
    // padding: 10
  },
  titleText: {
    fontSize: theme.FONT_SIZE_MASSIVE,
    fontFamily: theme.PRIMARY_FONT_FAMILY_SEMI_BOLD,
    color: theme.PRIMARY_TEXT_COLOR
  },
  secondaryText: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.PRIMARY_FONT_FAMILY_LIGHT
  },
  registerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  socialButton:{
    borderRadius: 50,
    borderWidth: 1,
    padding: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 5

  },
  socialButtonText:{
    paddingLeft: 7,
    paddingRight: 7,
    fontFamily: theme.PRIMARY_FONT_FAMILY
  },
  googleButton: {
    backgroundColor: colorOptions.orange.faint,
    color: colorOptions.orange.medium,
    borderColor: colorOptions.orange.medium,
  },
  googleText:{
    color: colorOptions.orange.medium
  },
  facebookButton: {
    backgroundColor: colorOptions.blue.faint,
    color: colorOptions.blue.medium,
    borderColor: colorOptions.blue.medium,
    borderWidth: 1,
  },
  facebookText:{
    color: colorOptions.blue.medium,
  },
  socialImage: {
    height: theme.FONT_SIZE_LARGE,
    width: theme.FONT_SIZE_LARGE
  }
});

const SignUpCard = () => {
  let {
    cardContainer,
    imageContainer,
    contentContainer,
    titleText,
    secondaryText,
    registerButtonsContainer,
    googleButton,
    googleText,
    facebookButton,
    facebookText,
    socialButton,
    socialButtonText,
    socialImage
  } = styles;
  return (
    <View style={cardContainer}>
      <ImageBackground
        style={imageContainer}
        source={require("./images/rocket3.png")}
      />

      <View style={contentContainer}>
        <Text style={titleText}>Sieze the moment</Text>
        <Text style={secondaryText}>
          Register and get access to all the conference benefits
        </Text>
        <View style={registerButtonsContainer}>
          <TouchableOpacity style={[googleButton, socialButton]}>
            <Text style={[secondaryText, socialButtonText, googleText]}>login</Text>
            <Image
              source={require("./images/google.png")}
              style={socialImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[facebookButton, socialButton]}>
            <Text style={[secondaryText, socialButtonText, facebookText]}>login</Text>
            <Image
              source={require("./images/facebook.png")}
              style={socialImage}
            />
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

export default SignUpCard;
