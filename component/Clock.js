import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Clock1 from "../assets/clock.png";
import { Ionicons } from '@expo/vector-icons';

const Clock = (props) => {
  return (
    <View style={{ ...Styles.Container, ...props.style }}>
      <View>
        <Image source={Clock1} style={Styles.Clock2} />
      </View>
      <View style={Styles.date}>
        <Text>03/01/23</Text>
        <Text>Clock In-hh:mm AM</Text>
        <Text>Clock Out-hh:mm PM</Text>
      </View>
      <View style={Styles.btn}>
        <Pressable onPress={()=>{}}>
           
            <Text style={Styles.btn1}>
                Clock In
            </Text>
           
            </Pressable>
            <Ionicons name="chevron-forward" size={24} color="#617180" style={{marginHorizontal: 9}}/>
       
      </View>
    </View>
  );
};

export default Clock;
const Styles = StyleSheet.create({
  Container: {
    backgroundColor: "#e8f6ff",
    width: 350,
    // justifyContent: 'space-evenly',
    alignItems: "center",
    marginLeft: 19,
    padding: 15,
    borderRadius: 20,
    flexDirection:'row'
  },
  Clock2: {
    width: 50,
    height: 50,
  },
  btn:{
    flexDirection:'row'
  },
  btn1:{
    backgroundColor:'#0189c7',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 15,
    color: "white"
  },
  date:{
    marginHorizontal: 10
  }
});
