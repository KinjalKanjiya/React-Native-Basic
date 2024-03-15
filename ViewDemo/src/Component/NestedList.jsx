import React, { useState } from "react";
import {StyleSheet, View, FlatList,Text} from 'react-native'

function NestedList(){

    const [data , setData] = useState([
        {data:[1,1,1,1,1,1]},
        {data:[2,2,2,2,2,2]}
    ])

    return(
        <View styles={styles.container}> 
            <View styles={{marginTop:50}}>
                <FlatList 
                data={data}
                renderItem={({item,index})=>{
                    return(
                        <View style={styles.itemview}>
                            <Text style={styles.itemtext}>{'item'+ (index+1)}</Text>
                            <FlatList
                            data={item.data}
                            renderItem={({item, index})=>{
                                return(
                                <View style={styles.subview}>
                                    <Text style={styles.subtext}>{'Sub item' + (index+1)}</Text>
                                    </View>
                     ) }}
                            />
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
        flex:1,
    },
    itemview:{
        width:'90%',
        backgroundColor:'#ffffff',
        marginLeft:10,
        alignSelf:'center',
        borderRadius:10,
        elevation:5,
        marginBottom:10,
        marginTop:30,
        padding:20
    },
    itemtext:{
        fontSize:20,
        fontWeight:'800',
        color:'red'
    },
    subview:{
        margin:15
    },
    subtext:{
        fontSize:18,
        fontWeight:'700',
        color:'blue'
    }
})
export default NestedList;