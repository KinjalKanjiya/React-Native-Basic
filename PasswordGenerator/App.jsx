import React from "react";
import { useState } from "react";
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native'

//form Validaion
import * as Yup from 'yup'
import { Formik } from "formik";
const PasswordSchema = Yup.object().shape({
  passwordLength:Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16 , 'Should be max of 16 characters')
  .required('Length is Required')
})



function App(){
  const [password, setPassword]= useState('')
  const[isPasswordGenerated , setIsPasswordGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase , setupperCase] = useState(false)
  const [numbers, setNumbers ] = useState(false)
  const [symbols , setSymbols] = useState(false)

  const generatePasswordString = (passwordLength) =>{
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const SpecialChars = '!@#$%^&*()-+';

    if(upperCase){
      characterList += upperCaseChars
    }
    if(lowerCase){
      characterList += lowerCaseChars
    }
    if(numbers){
      characterList += digitChars
    }
    if(symbols){
      characterList += SpecialChars
    }

    const passwordResult = createPassword(characterList, passwordLength)
    setPassword(passwordResult)
    setIsPasswordGenerated(true)

  }

  const createPassword = (characters,passwordLength) =>{

    let result =''
    for(let i=0; i<passwordLength;i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
      
    }
    return result
  }



  const colorScheme = useColorScheme(); 

  const resetPasswordState = () => {
    setPassword('')
    setIsPasswordGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
    
    
  }
    return(
      <ScrollView>
        <SafeAreaView style={styles.appContainetr}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
      onSubmit = {values =>{
        console.log("---------",values);
        generatePasswordString(+values.passwordLength)
      }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength &&(
              <Text style={styles.errorText}>{errors.passwordLength}</Text>
            )}
        
          </View>
          <TextInput style={styles.inputStyle}
          value={values.passwordLength}
          onChangeText={handleChange('passwordLength')}
          placeholder="Ex. 8"
          keyboardType="numeric"
          />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor="#29AB87"
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Include UperCase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={upperCase}
          onPress={() => setupperCase(!upperCase)}
          fillColor="#FED85D"
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Include Numbers</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={numbers}
          onPress={() => setNumbers(!numbers)}
          fillColor="#C9A0DC"
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Include Symbols</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={symbols}
          onPress={() => setSymbols(!symbols)}
          fillColor="#FC80A5"
          />
         </View>
         <View style={styles.inputWrapper}></View>
          <View style={styles.formActions}>
            <TouchableOpacity disabled={!isValid} style={styles.primaryBtn} onPress={handleSubmit}>
              <Text style={styles.primaryBtnText}>Generate Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.secondryBtn}
            onPress={ () =>{
              handleReset();
              resetPasswordState()
            }}
            ><Text style={styles.secondryBtnText}>Reset</Text></TouchableOpacity>
          </View>
         </>
       )}
     </Formik>
        </View>
        {isPasswordGenerated ?(
          <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.subTitle} >Result: </Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ):null}
        </SafeAreaView>
      </ScrollView>
  
    )
}

const styles = StyleSheet.create({
    appContainetr:{
      flex:1
    },
    formContainer:{
      padding:8,
      margin:8
    },
    title:{
        fontSize:24,
        fontWeight:'700',
        marginBottom:5,
        marginTop:3
    },
    inputWrapper:{
      marginBottom:15,
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row'
    },
    inputColumn:{
      flexDirection: 'column',
    },
    heading:{
      fontSize:15
    },
    inputStyle:{
      padding: 8,
      width: '30%',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#16213e',
    },
    formActions:{
        flexDirection:'row',
        justifyContent:'center',
    },
    errorText:{
      fontSize: 12,
      color: '#ff0d10',
    },
    primaryBtn:{
      width: 120,
      padding: 10,
      borderRadius: 8,
      marginHorizontal: 8,
      backgroundColor: '#3498DB',
    },
    primaryBtnText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
    },
    secondryBtn:{
      width: 120,
      padding: 10,
      borderRadius: 8,
      marginHorizontal: 8,
      backgroundColor: '#758AA2',
    },
    secondryBtnText:{
      textAlign: 'center',
      fontWeight:'900'
    },
    card: {
      padding: 12,
      borderRadius: 6,
      marginHorizontal: 12,
    },
    cardElevated: {
      backgroundColor: '#ffffff',
      elevation: 1,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    generatedPassword: {
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 12,
      color:'#000'
    },
    subTitle: {
      fontSize: 26,
      fontWeight: '400',
      marginBottom: 2,
      color:'#000000'
    },
    description: {
      color: '#758283',
      marginBottom: 8,

    },

 
})

export default App;
