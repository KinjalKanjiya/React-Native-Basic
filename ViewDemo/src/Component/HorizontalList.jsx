import React, { useState } from "react";
import {View, StyleSheet , FlatList,Text, Image} from 'react-native';
import { useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
const HorizontalList = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json =>{
           
            setProducts(json);
        }
        )
    }
   

    return(
        <View style={styles.container}>
            <View style={{marginTop:50}}>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({item , index})=>{
                return(
                    <View style={styles.itemView}>
                        <Image source = {{uri:item.image}} style={styles.productImage}/>
                        <View style={styles.nameView}>
                        <Text>{item.title.length>30 ? item.title.substring(0,30) + '...' : item.title}</Text>
                        <Text>{item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}</Text>
                        <Text style={styles.pricetext}>${item.price}</Text>
                        </View>
                        </View>
                )
            }}
            />
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    itemView:{
        width:250,
        height:230,
        backgroundColor:'#ffffff',
        marginLeft:10,
        elevation:5,
        borderRadius:10,
        marginBottom:10,
        marginTop:10
    },
    productImage:{
        height:100,
        width:100,
        alignSelf:'center'
    },
    nameView:{
        paddingLeft:20,
        paddingRight:10,
        width:'100%'

    },
    pricetext:{
        fontSize:20,
        fontWeight:'600',
        color:'green',
        marginTop:10
        
    }
})
export default HorizontalList;
