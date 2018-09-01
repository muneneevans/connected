import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";

import { theme } from "../../Store/Configuration/theme";

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    paddingBottom: 500
  },
  contentContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  titleText: {
    fontSize: theme.FONT_SIZE_MASSIVE,
    fontFamily: theme.PRIMARY_FONT_FAMILY_BOLD,
    paddingBottom:10
  },
  subTitleText: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.PRIMARY_FONT_FAMILY_SEMI_BOLD
  },
  sectionContainer: {
    paddingTop: 20,
    paddingBottom: 5
  },
  sectionTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.PRIMARY_FONT_FAMILY_BOLD
  },
  sectionText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.PRIMARY_FONT_FAMILY_LIGHT
  }
});

const bannerStyles = StyleSheet.create({
  parentContainer: {
    height: 200,
    overflow: "hidden",
    elevation: 2
  }
});

const speakerStyles = StyleSheet.create({
  parentContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  speakerAvatarContainer: {
    paddingRight: 10
  },
  speakerAvatar: {
    borderRadius: 50,
    height: 40,
    width: 40,
    borderWidth: 0.5,
    borderColor: "black"
  },
  speakerDetailsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  speakerNameText:{
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.PRIMARY_FONT_FAMILY_BOLD
  },
  speakerCompanyText:{
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.PRIMARY_FONT_FAMILY_SEMI_BOLD
  }
});

class TalkPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let talk = this.props.navigation.state.params.talk;
    return (
      <ScrollView style={styles.parentContainer}>
        <ImageBackground
          style={bannerStyles.parentContainer}
          source={{ uri: talk.image }}
        />

        {/* content section */}
        <View style={styles.contentContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.titleText}>{talk.title}</Text>
            <Text style={styles.subTitleText}>{talk.time}</Text>
            <Text style={styles.subTitleText}>{talk.location}</Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.sectionText}>
              Non repellat quam expedita molestiae qui et. Dolorem inventore et
              voluptates sit. Voluptatem et ut dignissimos. Voluptate inventore
              amet eius est est consequatur non magni. Perspiciatis commodi
              excepturi temporibus neque ullam eos aperiam. Commodi et velit
              accusantium non ea. Quia quae id voluptatum commodi tenetur illo
              non non. Ut saepe aut praesentium dicta. Commodi consequatur
              aspernatur unde. Voluptatem reprehenderit id qui et hic voluptas
              blanditiis autem. Ut veniam nulla eaque ipsum. Et quis officiis
              aspernatur corrupti. Voluptatem repellendus officia et vitae
              consequatur. Dignissimos et consequatur odit. Officia omnis omnis
              quia harum rem et. Suscipit aut voluptas consequatur enim maiores
              mollitia est. Enim esse ea impedit. Reprehenderit molestias fugiat
              est et velit hic quis maxime. Autem aut enim error fuga sint.
              Eaque minima ea et voluptate dolor inventore unde. Atque modi in
              aliquam recusandae qui voluptas et nostrum. Laudantium recusandae
              incidunt optio dolores occaecati beatae earum explicabo. Placeat
              vitae eaque consequatur quia deleniti. Quia dolore atque
              temporibus omnis dolorem doloremque. Voluptatum itaque eum saepe.
              Molestias vel aut maiores totam ad corrupti sed. Repudiandae
              placeat aspernatur sunt consequuntur minima animi autem.
              Praesentium aut est quam est error. Corrupti architecto iusto
              porro suscipit officia. Accusantium voluptatem amet omnis rem.
              Esse exercitationem quibusdam qui. Aut est eveniet recusandae. Est
              dignissimos maxime quisquam totam odit id porro praesentium.
              Aspernatur id atque pariatur quisquam eius et rerum.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Speaker</Text>
            <View style={speakerStyles.parentContainer}>
              <View style={speakerStyles.speakerAvatarContainer}>
                <Image
                  style={speakerStyles.speakerAvatar}
                  source={{ uri: talk.speaker.image }}
                />
              </View>
              <View style={speakerStyles.speakerDetailsContainer}>
                <Text style={speakerStyles.speakerNameText}>{talk.speaker.name}</Text>
                <Text style={speakerStyles.speakerCompanyText}>{talk.speaker.company}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default TalkPage;
