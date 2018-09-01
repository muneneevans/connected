import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground
} from "react-native";
import { theme } from "../../../Store/Configuration/theme";

const { width } = Dimensions.get("window");
const height = width * 0.5;

const styles = StyleSheet.create({
  bannerContainer: {
    height
  },
  image: {
    height,
    width
  },
  bannerTextContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, .6)"
  },
  bannerPrimaryText: {
    fontSize: theme.FONT_SIZE_MASSIVE + 10,
    fontFamily: theme.PRIMARY_FONT_FAMILY_BOLD,
    color: "#000000",
    textAlign: "center"
  },
  bannerSecondaryText:{
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.PRIMARY_FONT_FAMILY,
    color: "#000000",
    textAlign: "center"
  }
});

const Banner = ({ images }) => {
  let {
    bannerContainer,
    image,
    bannerPrimaryText,
    bannerSecondaryText,
    bannerTextContainer
  } = styles;
  return <View style={bannerContainer}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {images.map((city, i) => (
          <ImageBackground style={image} key={i} source={{ uri: city }}>
            <View style={bannerTextContainer}>
              <Text style={bannerPrimaryText}>CONNECTED KENYA 2018</Text>
              <Text style={bannerSecondaryText}>
                Paservering Heritage, Pioneering Technology
              </Text>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>;
};

export default Banner;
