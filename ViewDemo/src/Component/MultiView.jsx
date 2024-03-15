import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity , Image } from 'react-native'

function MultiView() {

    const [data, setData] = useState([
      {title:'post 1',isBlocked:false},
      {title:'post 2',isBlocked:true},
      {title:'post 3',isBlocked:false},
      {title:'post 4',isBlocked:false},
      {title:'post 5',isBlocked:false}



    ])


    return (
        <View styles={styles.container}>
            <View styles={{ marginTop: 50 }} >
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                          <View>
                            {item.isBlocked ?(
                                  <View style={styles.itemview1}>
                                  <Text>I am Blocked</Text>
                              </View>
                            ):(
                                <View style={styles.itemview}>
                                </View>
                        
                            )
                        }
                           
                            </View>
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
        marginTop: 20,
        padding: 20
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
export default MultiView;