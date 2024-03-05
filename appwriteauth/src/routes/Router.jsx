import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'

import { AppWriteContext} from '../appwrite/AppWriteContext';

import Loading from '../component/Loading'
//Routes
import { AppStack} from './AppStack'
import { AuthStack } from './AuthStack'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';

 export const Router = () => {
  const [isLoading , setIsLoading] = useState(true)
  const { appwrite , isLoggedIn, setIsLoggedIn} = useContext(AppWriteContext)
  useEffect(()=>{
    appwrite.getCurrentUser().then(response =>{
      setIsLoading(false)
      if(response){
        setIsLoggedIn(true)
      }
    })
    .catch(_ =>{
      setIsLoading(false);
      setIsLoggedIn(false)
    })
  },[appwrite,setIsLoggedIn])
  if(isLoading){
    return<Loading/>
  }
  return (
   <NavigationContainer>
    {isLoggedIn ? <AppStack/> : <AuthStack/>}
   </NavigationContainer>
  )
}

