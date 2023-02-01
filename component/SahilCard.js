import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import EmojiCard from "./EmojiCard";
import Boy1 from "../assets/boy1.png"
const SahilCard = (props) => {
  return (
    <View>
      <EmojiCard style={Styles.EmojiCard}>
        <View style={{ ...Styles.Circle, ...props.style }}>
          <Image source={Boy1} style={{width: 55, height: 55,marginTop: 4}}/>
          <View style={Styles.textView}>
            <View style={Styles.view}>
              <Text style={Styles.Sahil}>Sahil</Text>
            </View>
            <View>
              <Text style={Styles.UX}>UX Designer</Text>
            </View>
            <View style={Styles.Join}>
              <Text style={Styles.Joined}>Joined Today</Text>
            </View>
          </View>
        </View>
      </EmojiCard>
    </View>
  );
};

export default SahilCard;
const Styles = StyleSheet.create({
  Circle: {
    backgroundColor: "#fee9aa",
    borderRadius: 300,
    width: 60,
    height: 60,
    marginHorizontal: 23,
    alignItems: "center",
    marginTop: 5,
  },
  textView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    // marginTop: 65,
    height: '100%'
  },
  view: {

   
    height: "100%",
    alignItems: "center",
  },
  Sahil: {
    marginTop:20,
    width: "100%",
    fontSize: 18,
    fontWeight:'bold',
    color: "#c0a246",
    
  },
  UX: {
    color: "#66717c",
    fontSize: 15,
    width: "100%",
  },

  Joined: {
    color: "#66717c",
    fontSize: 15,
    width: "100%",
  },
  EmojiCard: {
    shadowColor: "#f7de99",
    borderColor:"#f7de99",
    borderWidth:1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },
});
