import React from "react";

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView
} from 'react-native'

//form Validaion
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength:Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16 , 'Should be max of 16 characters')
  .required('Length is Required')
})



function App(){
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

export default App;
