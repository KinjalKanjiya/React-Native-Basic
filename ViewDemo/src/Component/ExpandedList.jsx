import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity , Image } from 'react-native'

function ExpandedList() {

    const [data, setData] = useState([
        { data: [1, 1, 1, 1, 1, 1], isSelected: false },
        { data: [2, 2, 2, 2, 2, 2], isSelected: false }
    ])

    const select = index =>{
        let tempData = data;
        tempData.map((item,ind)=>{
            if(index == ind){
                item.isSelected = !item.isSelected;
            }else{
                item.isSelected = false;
            }
        });
        let temp =[];
        tempData.map((item)=>{
            temp.push(item)
        })
        setData(temp);
    }

    return (
        <View styles={styles.container}>
            <View styles={{ marginTop: 50 }} >
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.itemview} onPress={()=>{select(index);}}>
                                <Text style={styles.itemtext}>{'item' + (index + 1)}</Text>
                                {item.isSelected && (
                                    <FlatList
                                        data={item.data}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View style={styles.subview}>
                                                    <Text style={styles.subtext}>{'Sub item' + (index + 1)}</Text>
                                                </View>
                                            )
                                        }}
                                    />
                                )}

                                {item.isSelected ?(
                     <Image source={require('../assets/up.png')}  style={styles.image}/>

                                ):(
                                    <Image source={require('../assets/down.png')}  style={styles.image}/>

                                )}

                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemview: {
        width: '90%',
        backgroundColor: '#ffffff',
        marginLeft: 10,
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 5,
        marginBottom: 10,
        marginTop: 30,
        padding: 20
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
export default ExpandedList;