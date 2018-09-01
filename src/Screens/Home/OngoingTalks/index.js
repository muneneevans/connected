import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
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

const OngoingTalks = () => {
  let {
    parentContainer,
    titleText,
    viewAllButton,
    viewAllButtonText,
    header,
    talksContainer
  } = styles;
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
        contentOffset={{x: 40, y: 0}}
    >
        <TalkCard />
        <TalkCard />
        <TalkCard />
        <TalkCard />
      </ScrollView>
    </View>
  );
};

export default OngoingTalks;
