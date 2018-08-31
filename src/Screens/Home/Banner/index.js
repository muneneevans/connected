import React from "react";
import { Dimensions, ScrollView, Image ,View, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.5;

const styles = StyleSheet.create({
  bannerContainer: {
    height
  },
  image: {
    height,
    width
  }
});

const Banner = ({images}) => {
  let { bannerContainer, image } = styles;
  return (
    <View style={bannerContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
      >
        {images.map((city, i) => (
          <Image style={image} key={i} source={{ uri: city }} />
        ))}
      </ScrollView>
    </View>
  );
};


export default Banner