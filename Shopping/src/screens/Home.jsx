import React from 'react'
import {View, Text , StyleSheet, FlatList, Pressable} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import ProductItem from '../component/ProductItem'
import Separator from '../component/Separator'

import { PRODUCTS_LIST } from '../data/constant'

function Home({navigation}) {
  return (
    <View style={styles.container}>
        <FlatList 
        data={ PRODUCTS_LIST}
        keyExtractor={item =>item.id}
        ItemSeparatorComponent={Separator}
        renderItem ={({item}) => (
            <Pressable onPress={() =>{
                console.log('Product:', item);
                navigation.navigate('Detail',{
                    product:item
                })
            }}>
                <ProductItem product={item}/>
            </Pressable>
        )}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#ffffff'
    }
})

export default Home
