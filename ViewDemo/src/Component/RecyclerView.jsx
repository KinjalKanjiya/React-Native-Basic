import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width:'50%',
    backgroundColor:'#ffffff',
    elevation:5,
    borderRadius:10,
    alignSelf:'center',
    marginLeft:'30%',
    marginTop:'auto'
  },
});

const dataProvider = new DataProvider((r1, r2) => r1 !== r2);

const layoutProvider = new LayoutProvider(
  index => 0,
  (type, dim) => {
    dim.width = 300;
    dim.height = 50; 
  }
);

const rowRenderer = (type, data) => (
  <Text style={styles.item}>{data}</Text>
);

const MyRecyclerListView = () => {
  const data = Array.from({ length: 1000 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <RecyclerListView
          layoutProvider={layoutProvider}
          dataProvider={dataProvider.cloneWithRows(data)}
          rowRenderer={rowRenderer}
        />
      </View>
    </View>
  );
};

export default MyRecyclerListView;
