import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery} from 'react-query';


// Custom hook to fetch data
function useProductData() {
  return useQuery('products', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

const Home = () => {
  const { status, data, error } = useProductData();

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {data.map(product => (
        <Text style={styles.text}  key={product.id}>{product.title}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        width:'90%',
        backgroundColor:'#ffffff',
        elevation:5,
        fontSize:20,

    }
})
export default Home;