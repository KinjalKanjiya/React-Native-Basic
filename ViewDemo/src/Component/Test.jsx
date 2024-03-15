import {View, Text, StyleSheet} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import React from 'react';
function Test() {
  return (
    <View style={styles.container}>        
    <Row size={12}>
      <Col sm={6} md={4} lg={3}>
        <Text>
          First Column
        </Text>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <Text>
          Second Column
        </Text>
      </Col>
    </Row>      
  </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
   
    }
})

export default Test
