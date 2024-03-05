import React from "react";
import { View , Text } from 'react-native'
//Navigation
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import Home from "./screens/Home";
import Detail from "./screens/Detail";

const Stack = createNativeStackNavigator()

function App(){
  return(
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
    name="Home"
    component={Home}
    options={{
      title:"Trending Products"
    }}
    />
     <Stack.Screen
    name="Detail"
    component={Detail}
    options={{
      title:"Products Detail"
    }}
    />

   
    </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;