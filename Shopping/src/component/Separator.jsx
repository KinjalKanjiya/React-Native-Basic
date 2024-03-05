import React from "react";
import {View, Text , StyleSheet} from 'react-native'

const Separator = () =>{
    return(
        <View style={styles.separator}>
        </View>
    )
}
export default Separator

const styles = StyleSheet.create({
    separator:{
        height:0.8,
        backgroundColor:'#CAD5E2'
    }
})