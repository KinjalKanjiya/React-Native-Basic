import React from "react";
import { View , Image, Text, StyleSheet, ScrollView} from 'react-native'

function ContactList(){
    const contacts =[
        {
        uid:1,
        name:'Ishika',
        status:'Testing Perpose',
        imageUrl:'https://i.pinimg.com/736x/60/18/78/601878f1d854a71a76f81e9405f34042.jpg'
    },
    {
        uid:2,
        name:'Ruhi',
        status:'Testing Perpose .',
        imageUrl:'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp',
    },
    {
        uid:3,
        name:'Savi',
        status:'Testing Perpose ...',
        imageUrl:'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        uid:4,
        name:'Nitya',
        status:'Testing Perpose ...',
        imageUrl:'https://wallpapers.com/images/hd/instagram-profile-pictures-lop2xylvh6mwn7kn.jpg'
    },
  

]

    return(
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
            style={styles.container}
            scrollEnabled={true}
            >
                {contacts.map(({uid, name, status, imageUrl})=>(
                    <View key={uid} style={styles.userCard}>
                        <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                     <Text style={styles.userStatus}>{status}</Text>

                </View>
             </View>
                ))}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        padding:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#BB2CD9',
        padding:8,
        borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:16
    },
    userName:{
        fontSize:18,
        fontWeight:'900',
        color:'#000000'
    },
    userStatus:{
        fontSize:16,
        fontWeight:'bold',
        
    }
})

export default ContactList