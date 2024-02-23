import React from "react";
import {Text ,View, StyleSheet} from 'react-native'

function FlatCard(){
    return(
        <View>
            <Text style={styles.headingText}>FlatCard</Text>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardone]}>
                    <Text style={styles.cardText}>Red</Text>
                </View>
                <View style={[styles.card,styles.cardtwo]}>
                    <Text style={styles.cardText}>Green</Text>
                </View>
                <View style={[styles.card,styles.cardthree]}>
                    <Text style={styles.cardText}>Blue</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding:4
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,    
    },
    cardone:{
        backgroundColor:"#EF5354",     
    },
    cardtwo:{
        backgroundColor:"#50DBB4"
    },
    cardthree:{
        backgroundColor:"#5DA3FA"
    },
    cardText:{
        color:"#ffffff",
        fontWeight:"bold",
        fontSize:18
    }

})

export default FlatCard;