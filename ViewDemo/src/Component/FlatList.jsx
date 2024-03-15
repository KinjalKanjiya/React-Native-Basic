import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { useQuery } from 'react-query';

const AllFlatList = () => {
    const { status, data, error } = useQuery('products', async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    if (status === 'loading') {
        return <Text>Loading...</Text>;
    }

    if (status === 'error') {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.itemView}>
                        <View style={styles.nameView}>
                            <Text>{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}</Text>
                            {/* <Text>{item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}</Text> */}
                            <Text style={styles.pricetext}>${item.price}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemView: {
        width: '90%',
        height: 80,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        marginBottom:20,
        elevation:5,
        borderRadius:10
    },
    productImage: {
        height: 100,
        width: 100
    },
    nameView: {
        paddingLeft: 20,
        paddingRight: 10,
    },
    pricetext: {
        fontSize: 20,
        fontWeight: '600',
        color: 'green',
        marginTop: 10
    }
});

export default AllFlatList;
