import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import EmojiCard from "./EmojiCard";
import Girl1 from "../assets/girl1.png"
const MeghaCard = props => {
    return (
        <View>
          <EmojiCard style={Styles.EmojiCard3}>
            <View style={{ ...Styles.Circle, ...props.style }}>
            <Image source={Girl1} style={{width: 55, height: 55,marginTop: 1}}/>
              <View style={Styles.textView}>
                <View style={Styles.view}>
                  <Text style={Styles.Megha}>Megha</Text>
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

export default MeghaCard

const Styles = StyleSheet.create({
    Circle: {
      backgroundColor: "#c5eafc",
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
    Megha: {
      marginTop:20,
      width: "100%",
      fontSize: 18,
      fontWeight:'bold',
      color: "#01608e",
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
    EmojiCard3: {
      shadowColor: "#9ed3ed",
      borderColor:"#9ed3ed",
      borderWidth:1,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
    },
  });
  