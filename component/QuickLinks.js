import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const QuickLinks = (props) => {
  return (
    <View style={{ ...Styles.container, ...props.style }}>
      <Text style={Styles.QuickLinks}>Quick Links</Text>
      <View style={Styles.listContainer}>
        <View style={Styles.listContainer2}>
          <View style={Styles.holicontent}>
            <Text style={Styles.holifontsize}>Holiday</Text>
            <Text style={Styles.holifontsize}>Calendar</Text>
          </View>
          <Feather name="arrow-up-right" size={24} color="#627380" />
        </View>
        <View style={Styles.listContainer2}>
          <View style={Styles.holicontent}>
            <Text style={Styles.holifontsize}>Leave</Text>
            <Text style={Styles.holifontsize}>Policy</Text>
          </View>
          <Feather name="arrow-up-right" size={24} color="#627380" />
        </View>
        <View style={Styles.listContainer2}>
          <View style={Styles.holicontent}>
            <Text style={Styles.holifontsize}>Payroll</Text>
            <Text style={Styles.holifontsize}>Manual</Text>
          </View>
          <Feather name="arrow-up-right" size={24} color="#627380" />
        </View>
      </View>
    </View>
  );
};

export default QuickLinks;
const Styles = StyleSheet.create({
  container: {
    elevation: 9,
    width: 350,
    height: 150,

    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  listContainer2: {
    marginTop: 20,
    backgroundColor: "#ddf6fa",
    borderRadius: 9,
    width: 100,
    height: 70,
    flexDirection: "row",
   justifyContent:'space-evenly'
  },
  holicontent:{
    alignItems: 'center',
    justifyContent:'center',
   padding:10
  },
  QuickLinks: {
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 15,
    fontWeight: 'bold'
  },
  holifontsize:{
    fontSize: 17,
  }
});
