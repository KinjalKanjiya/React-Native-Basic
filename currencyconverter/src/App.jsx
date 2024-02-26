import React from "react";
import {Text, SafeAreaView , StatusBar , View, StyleSheet, TextInput, FlatList, Pressable} from  'react-native'
import { currencyByRupee } from "./Constant";
import CurrencyButton from "./Component/CurrencyButton";
import Snackbar from 'react-native-snackbar';
import { useState } from "react";
function App(){
  const [inputValue , setInputValue] = useState('')
  const [resultValue , setResultValue] = useState('')
  const [targetCurrency , setTargetCurrency] = useState('')

  const buttonPressed =(targetValue) =>{
    if(!inputValue){
      return Snackbar.show({
        text:'Enter a value to convert',
        backgroundColor:"#EA7773",
        textColor:'#000000'
      })
    }
    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }else{
      return Snackbar.show({
        text:'Not a valid number to convert',
        backgroundColor:'#EA7773',
        textColor:'#000000'

      })
    }
  }
  return(
      <>
        <StatusBar />
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.ruppesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            value={inputValue}
            clearButtonMode='always'
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder="Enter amount in Rupees"
            style={styles.inputText}
            />
            </View>
            {resultValue && (
              <Text style={styles.resultTxt}>{resultValue}</Text>
            )}
          </View>
          <View style={styles.bottomContainer}>
            <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item})=>(
              <Pressable
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected
              ]}
              onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item}/>
              </Pressable>
            )}
            />

          </View>
        </View>
      </>
    
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#BB2CD9'
  },
  topContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  ruppesContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupee:{
    marginRight: 8,

    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
  },
  resultTxt:{
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '800',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 80,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  inputText:{
    color:'#ffffff',
    fontWeight:'700'
  }
})
export default App;