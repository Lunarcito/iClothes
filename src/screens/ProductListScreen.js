import React from 'react'
import { Button, View } from 'react-native'
import Filter from '../components/Filter';
import styles from '../styles';
 
function ProductListScreen({ navigation }) {
  const products = [
    { id: 1, name: 'Slim Fit shirt' , color: ' black', cost: '500 euros', imageLink: require('../images/cod1.png')},
    { id: 2, name: 'Comfy shirt', color: 'white', cost: '500 euros', imageLink: require('../images/cod2.png')}, 
    { id: 3, name: 'Slim Fit Cotton Shirt', color: 'green', cost: '700 euros', imageLink: require('../images/cod3.png')},
  ];
 
  return (
    <View style={styles.container}>
      <View>
        <Filter/>{}
      </View>
      {products.map((product) => (
        <View style={styles.container}>
          <Button color='mediumseagreen'
            key={product.id}
            title={product.name}
            onPress={() => navigation.navigate('Clothes Details', { product })}
          />
        </View>
      ))}
    </View>
  );
}
	
export default ProductListScreen;