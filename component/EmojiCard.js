import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const EmojiCard = props => {
  return (
    <View style={{...Styles.EmojiCard, ...props.style}}>
         {props.children}
    </View>
  )
}

export default EmojiCard
const Styles=StyleSheet.create({
    EmojiCard:{
        backgroundColor:'#e8f6ff',
        width: 105,
        height: 135,
        borderRadius: 20,
        elevation: 15,
        marginTop: 20
    },
    
})