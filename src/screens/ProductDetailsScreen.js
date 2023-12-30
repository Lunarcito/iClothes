import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles'
import AddToWishlist from '../components/AddToWishList'
 
function ProductDetailsScreen({ route }) { 
  return (
    <View>
      {
        (route != null && route.params != null) ? 
        <View style={styles.container}>
          <Text> Code: {route.params.product.id}</Text>
          <Text> Design: {route.params.product.name}</Text>
          <Text> Color: {route.params.product.color}</Text>
          <Text> Cost: {route.params.product.cost}</Text>
          <Image source={route.params.product.imageLink} style={styles.image}/>
          <AddToWishlist product={route.params.product}/>
        </View>
        : null
      }
    </View>
  );
}
export default ProductDetailsScreen;