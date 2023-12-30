import React from 'react';
import { Button, View } from 'react-native';
 
function SaleListScreen({ navigation }) {
  const products = [
    { id: 1, name: 'Slim shirt' , color: 'black', cost: '35 euros',imageLink: require('../images/cod4.png')},
    { id: 2, name: 'Jumper shirt', color: 'nude', cost: '50 euros', imageLink: require('../images/cod5.png') },
    { id: 3, name: 'Cotton Shirt', color: 'white', cost: '45 euros', imageLink: require('../images/cod1.png')},
  ];
 
  return (
    <View style={{padding: 30}}>
      {products.map((product) => (
        <Button color='green'
          key={product.id}
          title={product.name}
          onPress={() => navigation.navigate('Clothes Details', { product })}
        />
      ))}
    </View>
  );
}
	
export default SaleListScreen;