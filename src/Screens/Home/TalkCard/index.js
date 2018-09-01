import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { theme } from "../../../Store/Configuration/theme";

const styles = StyleSheet.create({
  parentContainer: {
    width: 200,
    backgroundColor: "red",
    borderRadius: 3,
    overflow: "hidden",
    justifyContent: "flex-end",
    elevation: 2,
    margin: 2
  },
  contentContainer: {
    // flex: 1,
    padding: 5,
    paddingTop: 15,
    backgroundColor: "rgba(61, 61, 61, .5)",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleContainer: {
    flex: 3
  },
  title: {
    fontFamily: theme.PRIMARY_FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.SECONDARY_TEXT_COLOR
  },
  authorContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  authorAvatar: { height: 40, width: 40, borderRadius: 40 },
  authorText: {
    fontFamily: theme.PRIMARY_FONT_FAMILY_LIGHT,
    fontSize: theme.FONT_SIZE_SMALL - 4,
    color: theme.SECONDARY_TEXT_COLOR,
    textAlign: "right"
  }
});

const talkCard = () => {
  let {
    parentContainer,
    contentContainer,
    titleContainer,
    authorContainer,
    authorAvatar,
    authorText,
    title
  } = styles;
  return (
    <TouchableOpacity>
      <ImageBackground
        style={parentContainer}
        source={{
          uri:
            "https://images.pexels.com/photos/274886/pexels-photo-274886.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        }}
      >
        <View style={contentContainer}>
          <View style={titleContainer}>
            <Text style={title}>Protection in the land of cyber security </Text>
          </View>
          <View style={authorContainer}>
            <Image
              style={authorAvatar}
              // source={{
              //   uri:
              //     "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              // }}
              source={{
                uri:
                  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              }}
            />
            <Text style={authorText}>Wed 4th </Text>
            <Text style={authorText}>Evans Munene</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default talkCard;
