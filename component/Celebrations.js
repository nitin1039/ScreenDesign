import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Boy1 from '../assets/boy1.png'
import Boy2 from '../assets/boy2.png'
import Girl1 from '../assets/girl1.png'
import Boy3 from '../assets/boy3.png'
import { Ionicons } from '@expo/vector-icons';

const Celebrations = () => {
  return (
    <View style={Styles.Celebration}>
      <Text style={Styles.celebtext}>Celebrations</Text>

      <View style={Styles.BirthdayCard1}>
        <View style={{marginLeft:-10}}>
        <Text>Birthday</Text>
        </View>
      
        <View style={Styles.BirthdayCircle}>
          <Image source={Boy1} style={{width: 100,height: 100}}/>
        </View>
        <Text style={{color:"#01921b",fontSize: 20,marginHorizontal:-10}}>Shubham</Text>
        <Ionicons name="chevron-forward" size={24} color="#617180" style={{marginHorizontal: -8}}/>
      </View>

      <View style={Styles.BirthdayCard2}>
        <View style={{marginLeft:-10}}>
          <Text>Marriage</Text>
          <Text>Anniversary</Text>
        </View>
        <View style={Styles.BirthdayCircle2}>
        <Image source={Boy2} style={{width: 100,height: 100, marginTop: 10}}/>
        </View>
        <Text style={{color:"#037eb5",fontSize: 20, marginHorizontal: 20 }}>Yash</Text>
        <Ionicons name="chevron-forward" size={24} color="#617180" style={{marginHorizontal: -10}}/>
      </View>


      <View style={Styles.BirthdayCard3}>
        <View style={{marginLeft:-20}}>
          <Text>Work</Text>
          <Text>Anniversary</Text>
        </View>
        <View style={Styles.BirthdayCircle3}>
        <Image source={Girl1} style={{width: 100,height: 100, marginTop: -5}}/>
        </View>
        <Text style={{color:"#1d027e",fontSize: 20, marginHorizontal: 25 }}>Riku</Text>
        <Ionicons name="chevron-forward" size={24} color="#617180" style={{marginHorizontal: -19}}/>
      </View>


      <View style={Styles.BirthdayCard4}>
        <View style={{marginLeft:-30}}>
          <Text>kid's</Text>
          <Text>Birthday</Text>
        </View>
        <View style={Styles.BirthdayCircle4}>
        <Image source={Boy3} style={{width: 100,height: 100, marginTop: 10}}/>
        </View>
        <Text style={{color:"#a86100",fontSize: 20, marginHorizontal: -10 }}>Priyank</Text>
        <Ionicons name="chevron-forward" size={24} color="#617180" style={{marginHorizontal: -30}}/>
      </View>
    </View>
  );
};

export default Celebrations;
const Styles = StyleSheet.create({
  Celebration: {
    elevation: 9,
    width: 350,
    height: 510,
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
  celebtext: {
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 15,
    fontWeight: "bold",
  },

  BirthdayCard1: {
    backgroundColor: "#c2f0cb",
    width: 320,
    height: 70,
    margin: 15,
    marginTop: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  BirthdayCard2: {
    backgroundColor: "#c4ebfc",
    width: 320,
    height: 70,
    margin: 15,
    marginTop: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent:'space-evenly'
  },
  BirthdayCard3: {
    backgroundColor: "#dcd1fb",
    width: 320,
    height: 70,
    margin: 15,
    marginTop: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  BirthdayCard4: {
    backgroundColor: "#ffdaa6",
    width: 320,
    height: 70,
    margin: 15,
    marginTop: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  BirthdayCircle: {
    backgroundColor: "#c2f0cb",
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  BirthdayCircle2: {
    backgroundColor: "#c4ebfc",
    width: 100,
    height: 100,
    borderRadius: 80,
    marginHorizontal: -40,
    marginLeft: -25
  },
  BirthdayCircle3: {
    backgroundColor: "#dcd1fb",
    width: 100,
    height: 100,
    borderRadius: 80,
    marginLeft: -30,
    marginHorizontal:-45
  },
  BirthdayCircle4: {
    backgroundColor: "#ffdaa6",
    width: 100,
    height: 100,
    borderRadius: 80,
    marginHorizontal: -20
  },
});
