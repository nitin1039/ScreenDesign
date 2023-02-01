import { View, Text, StyleSheet, ScrollView } from "react-native";
import MainCard from "./MainCard";
import React from "react";
import SahilCard from "./SahilCard";
import MeghaCard from "./MeghaCard";
import RaviCard from "./RaviCard";
const SecondCard = (props) => {
  return (
    <View style={Styles.Container}>
      <MainCard>
        <View style={Styles.TextContainer}>
          <Text style={Styles.welcome}>Welcome</Text>
        </View>
        <ScrollView 
        horizontal={true} 
        style={{ scaleX: -1 }}
        contentContainerStyle={Styles.ScrollContainer}
        >
          <View style={Styles.SahilMegha}>
            <View style={Styles.SahilCardSpace}>
              <SahilCard />
            </View>
            <View style={Styles.SahilCardSpace}>
              <MeghaCard />
            </View>
            <View style={Styles.SahilCardSpace}>
              <RaviCard />
            </View>
          </View>
        </ScrollView>
      </MainCard>
    </View>
  );
};

export default SecondCard;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  TextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },
  welcome: {
    fontFamily: "sans-serif",
    fontSize: 25,
    color: "#fcb684",
  },
  SahilMegha: {
    flexDirection: "row",

    // justifyContent:'space-evenly'
  },
  SahilCardSpace: {
    marginHorizontal: 39,
  },
  
});
