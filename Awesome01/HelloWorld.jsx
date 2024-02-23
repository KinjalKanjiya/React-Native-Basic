import React from "react";

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView
} from 'react-native'

function Hello(){
  const colorScheme = useColorScheme(); 

  
    const  isDarkMode = useColorScheme() === 'dark'
    return(
      <SafeAreaView style={styles.container}>
      <View >
        <Text style={isDarkMode?styles.whiteText:styles.blackText}>Hello World !</Text>
      </View>
    </SafeAreaView>
  
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    // alignItems:'flex-start'
    // alignItems:'flex-end'
    justifyContent:'center',
  },
  whiteText :{
    color : '#FFFFFF'
  },
  blackText :{
    color : '#000000'
  }
})

export default Hello;
