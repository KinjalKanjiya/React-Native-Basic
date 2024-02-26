import React from 'react'
import {View , Text, StyleSheet} from 'react-native'
export default function CurrencyButton(props) {
  return (
   <View style={styles.buttonContainer}>
    <Text style={styles.flag}>{props.flag}</Text>
    <Text style={styles.country}>{props.name}</Text>
   </View>
  )

}

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    flag:{
        fontSize:28,
        color:'#ffffff',
        marginBottom:4

    },
    country:{
        fontSize:14,
        color:'#2d3436',
        marginBottom:4,
        fontWeight:'bold'
    }
})
