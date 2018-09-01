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
  speakerContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  speakerAvatar: { height: 40, width: 40, borderRadius: 40 },
  speakerText: {
    fontFamily: theme.PRIMARY_FONT_FAMILY_LIGHT,
    fontSize: theme.FONT_SIZE_SMALL - 4,
    color: theme.SECONDARY_TEXT_COLOR,
    textAlign: "right"
  }
});

const talkCard = ({ cardPressAction, talk }) => {
  let {
    parentContainer,
    contentContainer,
    titleContainer,
    speakerContainer,
    speakerAvatar,
    speakerText,
    title
  } = styles;
  return (
    <TouchableOpacity
      onPress={() => {
        cardPressAction(talk);
      }}
    >
      <ImageBackground
        style={parentContainer}
        source={{
          uri: talk.image
        }}
      >
        <View style={contentContainer}>
          <View style={titleContainer}>
            <Text style={title}>{talk.title}</Text>
          </View>
          <View style={speakerContainer}>
            <Image
              style={speakerAvatar}
              source={{
                uri: talk.speaker.image
              }}
            />
            <Text style={speakerText}>{talk.speaker.name}</Text>
            <Text style={speakerText}>{talk.time} </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default talkCard;
