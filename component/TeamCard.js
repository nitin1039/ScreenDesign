import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EmojiCard from './EmojiCard'
import MyteamEmployee from './MyteamEmployee'
const TeamCard = props => {
  return (
    <View style={Styles.Team}>
        <View style={Styles.teamtext}>
            
            <Text style={Styles.myteam}>My Team</Text>
            
           
            <Text style={Styles.viewall}>View All</Text>
                    </View>
        <View style={Styles.MyteamCard}>
      <EmojiCard style={{...Styles.EmojiCard5,...props.style}}>
        <Text style={Styles.R20}>R20</Text>
      </EmojiCard>
      <EmojiCard style={{...Styles.EmojiCard4,...props.style}}>
      <Text style={Styles.A20}>A20</Text>
      </EmojiCard>
      <EmojiCard style={{...Styles.EmojiCard4,...props.style}}>
      <Text style={Styles.L20}>L20</Text>
      </EmojiCard>
      <EmojiCard style={{...Styles.EmojiCard4,...props.style}}>
      <Text style={Styles.Al20}>AL20</Text>
      </EmojiCard>
      </View>
      <View style={Styles.list}>
      <MyteamEmployee/>
      </View>
      </View>
  )
}

export default TeamCard

const Styles=StyleSheet.create({
    Team:{
        elevation: 9,
        width: 350,
        height: 500,
       
        marginHorizontal: 20,
        marginTop:25,
        backgroundColor:"#ffffff",
        borderRadius: 20
    },
    myteam:{
        fontSize: 15,
        fontWeight: 'bold',
        fontSize: 20
    },
    list:{
        marginTop: 10
    },
  
    viewall:{
        fontSize: 15,
        color:'#0aa557',
        borderBottomWidth: 2,
        borderBottomColor:'#0aa557'
        
    },
    EmojiCard5:{
        alignItems:'center',
        elevation:0,
        borderWidth:2,
        width: 65,
        height: 65,
        borderColor:"#03a855",    
    },
    EmojiCard4:{
        alignItems:'center',
        elevation:0,
        width: 65,
        height: 65,
         
    },
    MyteamCard:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    teamtext:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        marginTop: 20
    },
    R20:{
        color:"#09a456",
        fontSize: 25,
        marginTop:15
    },
    A20:{
        color:"#c0010f",
        fontSize: 25,
        marginTop:15
    },
    L20:{
        color:"#f93a7b",
        fontSize: 25,
        marginTop:15
    },
    Al20:{
        color:"#0e6b96",
        fontSize: 25,
        marginTop:15
    }

})