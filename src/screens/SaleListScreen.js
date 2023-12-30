import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil'
import { Button, View } from 'react-native';
import { filterState } from '../states/filterState';
import Filter from '../components/Filter';
import styles from '../styles';
 
function SaleListScreen({ navigation }) {
  const products = [
    { id: 1, name: 'Slim shirt' , color: 'black', cost: '35 euros',imageLink: require('../images/cod4.png')},
    { id: 2, name: 'Jumper shirt', color: 'nude', cost: '50 euros', imageLink: require('../images/cod5.png') },
    { id: 3, name: 'Cotton Shirt', color: 'white', cost: '45 euros', imageLink: require('../images/cod1.png')},
  ];

  const [filteredProducts, setFilteredProducts] = useState(products)
  const searchValue = useRecoilValue(filterState)

  useEffect(() => {
    var temporal = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredProducts(temporal)
  }, [searchValue])
 
  return (
    <View style={styles.container}>
      <View>
        <Filter/>{}
      </View>
      {filteredProducts.map((product) => (
        <View style={styles.container}>
          <Button style={styles.button}
          color='mediumseagreen'
          padding={20}
          key={product.id}
          title={product.name}
          onPress={() => navigation.navigate('Clothes Details', { product })}
        />
        </View>
      ))}
    </View>
  );
}
	
export default SaleListScreen;