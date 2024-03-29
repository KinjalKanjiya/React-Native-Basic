import React from 'react'
import {View ,StyleSheet , Text} from 'react-native'
import { Track } from 'react-native-track-player';

const SongInfo =(track) => {
    // console.log("------Final",track)
    // console.log("------Title",track.track?.title)

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.name}>{track.track?.title}</Text>
            <Text style={styles.artist}>
                {track.track?.artist}   .   {track.track?.album}
                </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'90%',
        marginTop:18
    },
    name:{
        marginBottom:8,
        textAlign:'center',
        color:'#fff',
        fontSize:24,
        fontWeight:'800'
    },
    artist:{
        color:'#d9d9d9',
        textAlign:'center'
    }
})

export default SongInfo
