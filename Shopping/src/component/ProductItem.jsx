import React from "react";
import {View, Text, StyleSheet , Image} from 'react-native'

const ProductItem = ({product}) =>{
    return(
        <View style={styles.container}>
            <Image
            source={{uri:product.imageUrl}}
            style={styles.image}
            />
            <View>
                <Text style={styles.name}>{product.name}</Text>
                <View style={[styles.rowcontainer,styles.ratingcontainer]}></View>
                <View style={styles.rating}>
                    <Text style={styles.ratingtext}>{product.rating} ✯ </Text>
                </View>
                <Text style={styles.ratingcount}>({product.ratingCount.toLocaleString()})</Text>
                <View style={[styles.rowcontainer,styles.pricecontainer]}>
                    <Text style={styles.originalPrice}>
                    ₹  {product.originalPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.discountPrice}>
                    ₹  {product.discountPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.offerPercentage}>
                    % {product.offerPercentag} off
                    </Text>
                </View>

            </View>
        </View>
    
)

}
const styles = StyleSheet.create({
    container:{
        margin:8,
        flexDirection:'row'
    },
    rowcontainer:{
        flexDirection:'row'
    },
    image:{
        width:90,
        height:150,
        // resizeMode: 'contain',
        marginRight:12,
    },
    name:{
        marginBottom:4,
        fontSize:15 , 
        fontWeight:'500'
    },
    originalPrice:{
        fontSize:18,
        marginRight:4,
        fontWeight:'400',
        color:'rgba(0,0,0,0.5)',
        textDecorationLine:'line-through'
    },
    pricecontainer:{
        marginBottom:12
    },
    ratingcontainer:{
        marginBottom:8
    },
    rating:{
            borderRadius:4,
            paddingHorizontal:8,
            justifyContent:'center',
            backgroundColor:'#008c00',
            marginRight:4
    },
    ratingtext:{
        color:'#fff',
        fontSize:12,
        fontWeight:'600',
    },
    ratingCount:{
        color:'#878787'
    },
    offerPercentag:{
        fontSize:17,
        fontWeight:'600',
        color:'#4bb550'
    },
    discountPrice:{
        fontSize:18,
        marginRight:4,
        fontWeight:'600',
        color:'#000000'
    },


})
export default ProductItem
        