import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        iClothes
      </Text>
      <View style={styles.container}>
      <Button style={styles.button} color='mediumseagreen'
        title="New Arrivals"
        onPress={() => navigation.navigate('New Arrivals')}
      />
      </View> 
      <View style={styles.container}>
      <Button style={styles.button} color='mediumseagreen'
        title="Flash Sale"
        onPress={() => navigation.navigate('Flash Sale')}
      />
      </View>
      <View style={styles.container}>
      <Button style={styles.button} color='mediumseagreen'
        title="My Cart"
        onPress={() => navigation.navigate('MyCartScreen')}
      />
      </View>            
    </View>
  );
}


