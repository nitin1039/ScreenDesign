import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Boy1 from '../assets/boy1.png'
import Boy2 from '../assets/boy2.png'
import Boy3 from '../assets/boy3.png'
import Girl1 from '../assets/girl1.png'
import Girl2 from '../assets/girl2.png'
import Girl3 from '../assets/girl3.png'

const MyteamEmployee = () => {
  return (
    <View >
    <View style={Styles.Container}>
      <View style={Styles.Circle1}>
      <Image source={Girl1} style={{width: 45, height: 45, marginLeft:3}}/>

      </View>
      <Text style={{marginLeft:9}}>Ramesh</Text>
      <Text style={{marginLeft:15,color:"#64727e"}}>Trainee</Text>
      <View style={Styles.dotCircle1}>
             </View>
      <Text style={{color:"#64727e"}}>Present</Text>
    </View>

    <View style={Styles.Container}>
      <View style={Styles.Circle2}>
      <Image source={Girl3} style={{width: 45, height: 45, marginLeft:3}}/>

      </View>
      <Text style={{marginLeft:10}}>Rashmi</Text>
      <Text style={{marginLeft:20, color:"#64727e"}}>Trainee</Text>
      <View style={Styles.dotCircle2}></View>
      <Text style={{color:'#64727e'}}>Present</Text>
    </View>

    <View style={Styles.Container}>
      <View style={Styles.Circle3}>
      <Image source={Girl2} style={{width: 50, height: 50, marginLeft:3}}/>

      </View>
      <Text style={{marginLeft:10}}>Manisha</Text>
      <Text style={{marginLeft:15, color:"#64727e"}}>HR</Text>
      <View style={Styles.dotCircle3}></View>
      <Text style={{color:"#64727e"}}>Present</Text>
    </View>

    <View style={Styles.Container}>
      <View style={Styles.Circle4}>
      <Image source={Boy1} style={{width: 50, height: 50, margin:3}}/>

      </View>
      <Text style={{marginLeft:10}}>Abhishek</Text>
      <Text style={{marginLeft:10,color:'#64727e'}}>Developer</Text>
      <View style={Styles.dotCircle4}></View>
      <Text style={{color:"#64727e"}}>Present</Text>
    </View>

    <View style={Styles.Container}>
      <View style={Styles.Circle5}>
      <Image source={Boy2} style={{width: 50, height: 50, margin:4}}/>

      </View>
      <Text style={{marginLeft:10}}>Aditya</Text>
      <Text style={{marginLeft:25, color:"#64727e"}}>Trainee</Text>
      <View style={Styles.dotCircle5}></View>
      <Text style={{color:"#64727e"}}>Absent</Text>
    </View>

    <View style={Styles.Container}>
      <View style={Styles.Circle6}>
      <Image source={Boy3} style={{width: 50, height: 50, margin:3}}/>

      </View>
      <Text style={{marginLeft:10}}>Neeraj</Text>
      <Text style={{marginLeft:25, color:"#64727e"}}>HR</Text>
      <View style={Styles.dotCircle6}></View>
      <Text style={{color:"#64727e"}}>Absent</Text>
    </View>
    </View>

    
  )
}

export default MyteamEmployee
const Styles=StyleSheet.create({
    Container:{
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:"center",
        margin:3
    },
    Circle1:{
        width: 50,
        height: 50,
        backgroundColor:'#ffe59a',
        borderRadius: 30,
        marginLeft: -5
    },
    Circle2:{
        width: 50,
        height: 50,
        backgroundColor:'#febbb8',
        borderRadius: 30,
        marginLeft: -3
    },
    Circle3:{
        width: 50,
        height: 50,
        backgroundColor:'#dcd1fb',
        borderRadius: 30,
        marginLeft: -2
    },
    Circle4:{
        width: 50,
        height: 50,
        backgroundColor:'#c0f0c9',
        borderRadius: 30,
        marginLeft: 0
    },
    Circle5:{
        width: 50,
        height: 50,
        backgroundColor:'#ded7fb',
        borderRadius: 30,
        marginLeft: -3
    },
    Circle6:{
        width: 50,
        height: 50,
        backgroundColor:'#ffd7a1',
        borderRadius: 30,
        marginLeft: -5
    },
    dotCircle1:{
        width: 15,
        height: 15,
        backgroundColor:'#00aa54',
        borderRadius: 20,
        marginLeft: 20
    },
    dotCircle2:{
        width: 15,
        height: 15,
        backgroundColor:'#00aa54',
        borderRadius: 30,
        marginLeft: 20
    },
    dotCircle3:{
        width: 15,
        height: 15,
        backgroundColor:'#00aa54',
        borderRadius: 30,
        marginLeft:50
    },
    dotCircle4:{
        width: 15,
        height: 15,
        backgroundColor:'#00aa54',
        borderRadius: 30,
        marginLeft: 10
    },
    dotCircle5:{
        width: 15,
        height: 15,
        backgroundColor:'#00aa54',
        borderRadius: 30,
        marginLeft: 20
    },
    dotCircle6:{
        width: 15,
        height: 15,
        backgroundColor:'#00aa54',
        borderRadius: 30,
        marginLeft: 45
    }
})