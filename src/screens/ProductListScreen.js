import React, { useState, useEffect } from 'react'
import { Button, View } from 'react-native'
import Filter from '../components/Filter';
import styles from '../styles';
import { useRecoilValue } from 'recoil'
import { filterState } from '../states/filterState';
 
function ProductListScreen({ navigation }) {

  const products = [
    { id: 1, name: 'Slim Fit shirt Man' , color: ' black', cost: '30 euros', imageLink: require('../images/cod1.png')},
    { id: 2, name: 'Comfy shirt Man', color: 'brown', cost: '30 euros', imageLink: require('../images/cod2.png')}, 
    { id: 3, name: 'Slim Fit Cotton Shirt Man', color: 'black', cost: '30 euros', imageLink: require('../images/cod3.png')},
    { id: 4, name: 'Slim Fit Cotton Shirt Man', color: 'black', cost: '35 euros', imageLink: require('../images/cod4.png')},
    { id: 5, name: 'Slim Fit Cotton Shirt Woman', color: 'green', cost: '35 euros', imageLink: require('../images/cod5.png')}
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