import React from "react";
import {View , Text , StyleSheet , TouchableOpacity , Image ,Linking} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";


function ActionCard(){

    function Openwebsite(websiteUrl){
        Linking.openURL(websiteUrl)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card , styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>What's new in Javascript 21 - ES12</Text>
            </View>
            <Image style={styles.cardImage}
            source={{
                uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAz1BMVEX////OqAv80yns7OzLowDz69bNpgDt7e/l3cbguRjLpQjzyiT80h780AD80iPNpQD94Xrt7/TawGn82E/x58jizYn81j/933LPqgD9/PXUszro1p/810b82lb93WXu8Pf+8cX+7rns37TTs0L++ODInQDYu1ro16b38eD69+rkvy/SrybYulDdxHT93F/94oP95ZT+663v477k0JH+88zp5dPwyjPYsyTrxCT967DhyoH+6J7SsC707NDdtxzcuC3l2rvh06ntyTvqyETgv0MDlMefAAAJCElEQVR4nO2d+1vaSBSGIcR4aUgENIC3qlAVQcXbduutrfX//5s2J0BmBhI4k4Ezdp/z/raukL7PhMzHN5NYKjEMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzDMX0x7zS7tlRvufHNt8m1n5YZrbtkm7trKDXuWDVd/lpYsG65esNTyLAp6LQLDPauGewSGZ1YNzwgM61YN6wSGu6FFw3CXwPDcquE5geGpoeFWAYThKYHhjtmEePmlAOmr3dWHtlLpwshw69LR50s6iO4FgWHP6CwtZPhPahj2CAzbRrOFqSFBLI1jG7nhv6mhRyFY6psMYiHDy4mh1ycxHFg0HJAYXpEbvk1e7V2RGBrFtkKG3yevJgltpdI+uWE/NdwnMbwzmfILGaavJglthrGtkKGINBShzbBtK2IYCcPVN21Am9pQiqUUoS2G+kojIk1II1gqa0yInowwDBbiJwTwy++T45E0bYBG2+bVJaDDGhtGMQcJjRGHCdcJR2OazWYjkMeQpGkDNNo2ryb4uhGODf0b7KGe/fjXN4lDm1bb1lqvpKwLw23soYZg+DM9SymaNkAjtpka3iSGk3cjCm1abZup4REYpu9GFNq02rYcwyb2UMmVRhjShDat2GZqGCmGRKFNq20zNUzmQ+rQprVIOmv4pmPY9tVYShTadIJpq5JpeIQ8Uq/qyE0bxQLwCPR86GWPYaBlSB9LNdo2U8MuGIoeqrxSKxl022Zq+JAYpu/WWamVDLptyzO8Rh7oBAypmzYAHdu8spnhD7iWiqbtaaVWMui2LcNwU8cw+Wohmrb7lVrJoNu2PMND+d2aVd+vToCvvVXxX45iSBXaNGIbynDbn19i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'
            }}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
                </Text>
            </View>
            <View style={styles.footercontainer}>
                <TouchableOpacity
                onPress={() => Openwebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                    <Text style={styles.SocialLink}>Read More </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Openwebsite('https://github.com/KinjalKanjiya')}>
                    <Text style={styles.SocialLink}>Follow Me</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    headingText :{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:360,
        marginHorizontal:16,
        marginVertical:12,
        borderRadius:6

    },
    elevatedCard:{
        backgroundColor:'#74B9FF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:16

    },
    cardImage:{
        height:190
    },
    bodyContainer:{
        padding:10,
       

    },
    footercontainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'

    },
    SocialLink:{
        fontSize:16,
        backgroundColor:'#000000',
        color:'#ffffff',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:6
        
    }

})
export default  ActionCard