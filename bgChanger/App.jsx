import React from 'react';
import { useState } from 'react';
import {Text , View, StatusBar, TouchableOpacity , StyleSheet} from 'react-native'

//--------------------------------------------------------------NOTE-------------------------
//HERE IN THIS COMMENTED CODE IS TASK THAT IS THAT THE CLICK ON PRESS DIFFEREN SHAPE WILL BE SHOW DIFFERENT COLOR ALONG WITH BACKGROUNDCOLOR.


function App(){
    const [randomBackground , setRandomBackground] = useState('#ffffff')
    // const [squareColor, setSquareColor] = useState('#ffffff');
    // const [circleColor , setCircleColor] = useState('#ffffff')

    const generateColor = () =>{
        const hexRange = "0123456789ABCDEF"
        let color = "#"
        for(let i=0 ; i<6 ;i++){
            color += hexRange[Math.floor(Math.random() * 16)]
        }
        setRandomBackground(color)
        // return color;
    }
    // const generateBackground = () => {
    //     setRandomBackground(generateColor());
    // };

    // const generateSquareColors = () => {
    //     setSquareColor(generateColor());
    // };
    // const generateCircleColors = () =>{
    //     setCircleColor(generateColor());
    // }
    return(
        <>
        <StatusBar backgroundColor={randomBackground}/>
        
        <View style={[Styles.container, {backgroundColor:randomBackground}] }>
            {/* <View style={[Styles.shapesquare,{backgroundColor:squareColor}]}></View>
            <View style={[Styles.shapesquaretwo , {backgroundColor:squareColor}]}></View> */}
                <TouchableOpacity onPress={generateColor}>
            {/* <TouchableOpacity onPress= {() =>{generateBackground(),generateSquareColors(), generateCircleColors()}}> */}
                <View style={Styles.actionbtn}>
                <Text style={Styles.actionbtntext}>Press Me</Text>
                </View>
            </TouchableOpacity>
            {/* <View style={[Styles.shaperound,{backgroundColor:circleColor}]}></View>
            <View style={[Styles.shaperoundtwo,{backgroundColor:circleColor}]}></View> */}
        </View>
        </>
    )

}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    actionbtn:{
        borderRadius:8,
        backgroundColor:'#61AB4D',
        paddingVertical:13,
        paddingHorizontal:20
    },
    actionbtntext:{
        fontSize:20,
        color:'#ffffff',
        textTransform:'uppercase'
    },
    // shapesquare:{
    //     width:120,
    //     height:120,
    //     borderRadius:8,
    //     // backgroundColor:"#ffffff",
    //     position:'absolute',
    //     top:'5%',
    //     left:"10%"
    // },
    // shapesquaretwo:{
    //     width:120,
    //     height:120,
    //     borderRadius:8,
    //     // backgroundColor:"#ffffff",
    //     position:'absolute',
    //     top:'5%',
    //     right:"10%"
    // },
    // shaperound:{
    //     width:120,
    //     height:120,
    //     borderRadius: 120 /2,
    //     // backgroundColor:"#ffffff",
    //     position:'absolute',
    //     bottom:'5%',
    //     right:"10%"
    // },
    // shaperoundtwo:{
    //     width:120,
    //     height:120,
    //     borderRadius: 120 /2,
    //     // backgroundColor:"#ffffff",
    //     position:'absolute',
    //     bottom:'5%',
    //     left:"10%"
    // },


})

export default App;