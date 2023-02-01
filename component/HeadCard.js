import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Linking,
} from "react-native";
import React from "react";
import SCard from "./SCard";
import search from "../assets/search.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LCard from "./LCard";
import CardSilder from "react-native-cards-slider";

const HeadCard = () => {
  return (
    <View style={Styles.Container}>
      <View style={Styles.cover}>
        <View style={Styles.SearchContainer}>
          <Image source={search} style={Styles.logo} />
          <TextInput style={Styles.Search} placeholder="Search" />
        </View>

        <View style={Styles.icon}>
          <MaterialCommunityIcons name="chat" size={34} color="#00aa54" />
        </View>
      </View>

      <View style={Styles.AnnounceContainer}>
        <View style={Styles.Announce}>
          <Text style={Styles.Announcement}>Announcements</Text>
        </View>
        <View style={Styles.view}>
          <Text style={Styles.ViewAll}>View All</Text>
        </View>
      </View>

      <CardSilder autoplay interval={4000}>
        <LCard />
        <SCard />
  
      </CardSilder>
    
    </View>
  );
};

export default HeadCard;

const Styles = StyleSheet.create({
  Container: {
    backgroundColor: "#d8d8d8",
    height: 350,

  },
  cover: {
    marginTop: 80,
    flexDirection: "row",
    width: 300,
    justifyContent: "space-evenly",
    marginHorizontal: 40,
  },

  SearchContainer: {
    backgroundColor: "#ffffff",
    marginHorizontal: 120,
    width: 270,
    alignItems: "center",

    padding: 1,
    borderRadius: 9,
    flexDirection: "row",
  },
  logo: {
    marginHorizontal: 7,
    width: 20,
    height: 20,
  },
  Search: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  icon: {
    width: 130,
    backgroundColor: "#d8d8d8",
    marginTop: 0,
  },
  AnnounceContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-around",
  },
  Announce: {
    // borderWidth: 20
  },
  Announcement: {
    color: "#222a37",
    fontSize: 13,
    fontWeight: "bold",
  },
  view: {
    borderBottomWidth: 1,
    borderBottomColor: "#339e67",
  },
  ViewAll: {
    color: "#339e67",
    fontSize: 13,
  },
});
