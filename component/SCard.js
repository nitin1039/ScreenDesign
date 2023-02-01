import { View, Text, StyleSheet, Image } from 'react-native'
import image from '../assets/image2.png'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const SCard = () => {
  return (
    <View style={Styles.Container}>
      <View style={Styles.card}>
      <FontAwesome5 name="tree" size={24} color="#fe0000" />
      </View>
      <View>
        <Text style={Styles.text}>Employees Are Expected To Clock...</Text>
        <Text style={Styles.text2}>1 hour ago</Text>
      </View>
    </View>
  )
}

export default SCard
const Styles=StyleSheet.create({
  Container:{
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor:'#deacab',
    width: 300,
    height: 65,
    borderRadius: 20,
    marginHorizontal: 20
  },
  card:{
    backgroundColor: "#ffa589",
    width: 45,
    height: 45,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 13
  },
  text2:{
    color:"#677179"
  },
  image:{
    width: 20,
    height: 20,
    color: "#fb8502"
  }
})
