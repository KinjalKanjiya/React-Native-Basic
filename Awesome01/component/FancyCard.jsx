import React from 'react'
import {Text , View , Image , StyleSheet} from 'react-native'

function FancyCard(){
    return (
        <View>
            <Text style={styles.headingText}>Trading Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                source={{
                    uri:"https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4-1200-80.jpg"
                }}
                style={styles.cardImage}
                />
                <View style={styles.Body}>
                <Text style={styles.cardTitle}> Taj Mahal</Text>
                <Text style={styles.cardLabel}> Wonder of the World</Text>
                <Text style={styles.cardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</Text>

                <Text style={styles.cardFooter}>15 Mins Away</Text>
                </View>
                  
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    headingText:{
        fontSize:24,
        fontWeight:'bold',
        padding:8
    },
    card:{
        width:350,
        height:400,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
       flex:1,
       flexGrow:1,
       paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:22,
        marginBottom:4
    },
    cardLabel:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:14,
        marginBottom:6

    },
    cardDescription:{
        color:'#000000',
        // fontWeight:'bold',
        fontSize:12,
        marginBottom:12

    },
    cardFooter:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:10
    }

})
export default FancyCard;