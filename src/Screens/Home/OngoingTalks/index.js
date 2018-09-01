import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { theme, colorOptions } from "../../../Store/Configuration/theme";

import TalkCard from "../TalkCard";

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colorOptions.orange.faint,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingRight: 15
  },
  titleText: {
    fontFamily: theme.PRIMARY_FONT_FAMILY
  },
  viewAllButton: {
    backgroundColor: colorOptions.orange.faint,
    borderWidth: 1,
    borderColor: colorOptions.orange.light,
    borderRadius: 50
  },
  viewAllButtonText: {
    fontFamily: theme.PRIMARY_FONT_FAMILY,
    color: colorOptions.orange.light,
    paddingLeft: 10,
    paddingRight: 10
  },
  talksContainer: {
    paddingTop: 15
  }
});

const OngoingTalks = ({ cardPressAction }) => {
  let {
    parentContainer,
    titleText,
    viewAllButton,
    viewAllButtonText,
    header,
    talksContainer
  } = styles;

  let defaultTalk = {
    image:
      "https://images.pexels.com/photos/274886/pexels-photo-274886.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Protection in the land of cyber security ",
    time: "Wed 4th ",
    location: "Conference Hall 2",
    speaker: {
      name: "Evans Munene",
      company: "Microsoft",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    }
  };
  return (
    <View style={parentContainer}>
      <View style={header}>
        <Text style={titleText}>Currently ongoing </Text>
        <TouchableOpacity style={viewAllButton}>
          <Text style={viewAllButtonText}>View All </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={talksContainer}
        contentOffset={{ x: 40, y: 0 }}
      >
        <TalkCard cardPressAction={cardPressAction} talk={defaultTalk} />
        <TalkCard cardPressAction={cardPressAction} talk={defaultTalk} />
        <TalkCard cardPressAction={cardPressAction} talk={defaultTalk} />
        <TalkCard cardPressAction={cardPressAction} talk={defaultTalk} />
        <TalkCard cardPressAction={cardPressAction} talk={defaultTalk} />
      </ScrollView>
    </View>
  );
};

export default OngoingTalks;
