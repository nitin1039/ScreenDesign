import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import EmojiCard from "./EmojiCard";
import Boy2 from "../assets/boy2.png"
const RaviCard = props => {
    return (
        <View>
          <EmojiCard style={Styles.EmojiCard2}>
            <View style={{ ...Styles.Circle, ...props.style }}>
            <Image source={Boy2} style={{width: 55, height: 55,marginTop: 7}}/>
              <View style={Styles.textView}>
                <View style={Styles.view}>
                  <Text style={Styles.Ravi}>Ravi</Text>
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
}

export default RaviCard
const Styles = StyleSheet.create({
  Circle: {
    backgroundColor: "#fec6d3",
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
    height: '100%'
  },
  view: {

   
    height: "100%",
    alignItems: "center",
  },
  Ravi: {
    marginTop:20,
    width: "100%",
    fontSize: 18,
    fontWeight:'bold',
    color: "#be0e31",
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
  EmojiCard2: {
    shadowColor: "#f2b2bf",
    borderColor:"#f2b2bf",
    borderWidth:1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },
});
