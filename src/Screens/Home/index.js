import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { theme } from "../../Store/Configuration/theme";

import Banner from "./Banner";
import SignUpCard from "./SignUpCard";
import OngoingTalks from "./OngoingTalks";

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: theme.PRIMARY_BACKGROUND_COLOR
  },
  signUpCardContainer: {
    marginTop: 5,
    padding: 10
  }
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.navigateToTalk = this.navigateToTalk.bind(this);
  }

  navigateToTalk(talk) {
    this.props.navigation.navigate("TalkPage", { talk });
  }

  render() {
    let { signUpCardContainer, homeContainer } = styles;
    const images = [
      "https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    ];
    return (
      <ScrollView style={homeContainer}>
        <Banner images={images} />
        <View style={signUpCardContainer}>
          <SignUpCard />
        </View>
        <OngoingTalks cardPressAction={this.navigateToTalk} />
      </ScrollView>
    );
  }
}

export default Home;
