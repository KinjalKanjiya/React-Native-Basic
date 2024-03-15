import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity , Image , RefreshControl} from 'react-native'

function GridView() {

    const [data, setData] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        getData();
    },[]);

    const getData = () =>{
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json =>{
           
            setLoading(false)
            setData(json);

        }
        )
    }


    return (
        <View styles={styles.container}>
            <RefreshControl onRefresh={() =>{getData();}} refreshing={loading}>
            <View styles={{ marginTop: 50 , width:'100%',justifyContent:'center',alignItems:'center' }} >
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                         <View style={styles.itemview}>
                            </View>
                        )
                    }}
                />
            </View>
            </RefreshControl>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',

       
    },
    itemview: {
        width: '40%',
        height:100,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 5,
        marginTop: 20,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        marginHorizontal: 20, 
        marginBottom:10
    },
    itemview1:{
        width:'90%',
        height:200,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#AFAFAF',
        alignSelf:'center'
    },
    itemtext: {
        fontSize: 20,
        fontWeight: '800',
        color: 'red'
    },
    subview: {
        margin: 15
    },
    subtext: {
        fontSize: 18,
        fontWeight: '700',
        color: 'blue'
    },
    image:{
        width:24,
        height:24,
        position:'absolute',
        top:20,
        right:20
    }
})
export default GridView;