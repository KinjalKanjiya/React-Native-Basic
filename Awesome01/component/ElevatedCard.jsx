import React from "react";
import {ScrollView, View , Text, StyleSheet} from 'react-native'

function ElevatedCard(){
    return(
        <View>
            <Text style={styles.headingText}>Elevated Card</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Tap</Text>
                </View>
            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
    headingText :{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:8,
        borderRadius:4

    },
    cardElevated:{
        backgroundColor:'#696969',
        // elevation:4,
        // shadowOffset:{
        //     width:1,
        //     height:1
        // }
    },
    cardText:{
        color:"#ffffff",
        fontWeight:'bold'
    }
})
export default ElevatedCard;