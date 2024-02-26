import React from "react";
import { useState } from "react";
import {Text, View , Image , StyleSheet , Pressable} from 'react-native';
import DiceOne from '../assets/dice-1.png'
import DiceTwo from '../assets/dice-2.png'
import DiceThree from '../assets/dice-3.png'
import DiceFour from '../assets/dice-4.png'
import DiceFive from '../assets/dice-5.png'
import DiceSix from '../assets/dice-6.png'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(){
  const [diceImage , setDiceImage ] = useState(DiceOne);

  const DiceRoll = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);

  }
  return(
    <>
    <View style={styles.container}>
    <View>
      <Image style={styles.diceImage} source={diceImage}/>
    </View>
      <Pressable onPress={DiceRoll}>
        <Text style={styles.rolldicebtntext}>Roll The Dice</Text>
      </Pressable>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  diceImage:{
    height:150 ,
    width:150
  },
  container:{
    margin:8,
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  rolldicebtntext:{
    fontSize:20,
    borderColor:'#E5E0FF',
    borderWidth:2,
    borderRadius:8,
    paddingHorizontal:40, 
    paddingVertical:10,
    color:'#8EA7E9',
    marginTop:20
  }
})
export default App;