import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const MyTasks = () => {
  return (
    <View style={Styles.Team}>
        <Text style={Styles.mytext}>My Tasks</Text>
        <View style={Styles.Attendance1}>
            <Text style={{marginLeft:-15,}}>Attendence</Text>
            <Text  style={{marginLeft:40, color:"#64727f"}}>17</Text>
            <Text style={{borderBottomColor:'#179d59',borderBottomWidth:2, color:"#179d59"}}>View</Text>
        </View>

        <View style={Styles.Attendance2}>
            <Text style={{marginLeft:-15}}>Leave</Text>
            <Text style={{marginLeft:70, color:"#64727f"}}>8</Text>
            <Text style={{borderBottomColor:'#179d59',borderBottomWidth:2, color:"#179d59"}}>View</Text>
        </View>

        <View style={Styles.Attendance3}>
            <Text style={{marginLeft:-15}}>Job Offers</Text>
            <Text style={{marginLeft:40, color:"#64727f"}}>11</Text>
            <Text style={{borderBottomColor:'#179d59',borderBottomWidth:2, color:"#179d59"}}>View</Text>
        </View>

        <View style={Styles.Attendance4}>
            <Text style={{marginHorizontal: -15,}}>InterView Schedule</Text>
            <Text  style={{color:"#64727f"}}>4</Text>
            <Text style={{borderBottomColor:'#179d59',borderBottomWidth:2, color:"#179d59"}}>View</Text>
        </View>
    </View>
  )
}

export default MyTasks
const Styles=StyleSheet.create({
    Team:{
        elevation: 9,
        width: 350,
        height: 400,
       
        marginHorizontal: 20,
        marginTop:25,
        backgroundColor:"#ffffff",
        borderRadius: 20
    },
    mytext: {
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 15,
        fontWeight: "bold",
      },
      Attendance1:{
        backgroundColor:"#ffffff",
        borderColor:"#ddd6f1",
        borderWidth: 1,
        elevation: 2,
        width: 310,
        height: 70,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center"
      },
      Attendance2:{
        backgroundColor:"#ffffff",
        borderColor:"#d2eaf5",
        borderWidth: 1,
        elevation: 2,
        width: 310,
        height: 70,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center"
      },
      Attendance3:{
        backgroundColor:"#ffffff",
        borderColor:"#f9e0e7",
        borderWidth: 1,
        elevation: 2,
        width: 310,
        height: 70,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center"
      },
      Attendance4:{
        backgroundColor:"#ffffff",
        borderColor:"#faedc8",
        borderWidth: 1,
        elevation: 2,
        width: 310,
        height: 70,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center"
      }
})