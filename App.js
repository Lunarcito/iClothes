import React, { useState } from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import ProductListScreen from './src/screens/ProductListScreen'
import ProductDetailsScreen from './src/screens/ProductDetailsScreen'
import SaleListScreen from './src/screens/SaleListScreen'
import MyCartScreen from './src/screens/MyCartScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import { RecoilRoot } from 'recoil'
import styles from './src/styles'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <RecoilRoot>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator style={styles.title}>
          {!isAuthenticated ? (
            <Stack.Screen name="Login" styles={styles.title} >
              {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} style={styles.title}/>}
            </Stack.Screen>
          ) :
          (
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Clothes Details" component={ProductDetailsScreen} />
            <Stack.Screen name="New Arrivals" component={ProductListScreen} />
            <Stack.Screen name="Flash Sale" component={SaleListScreen} />
            <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
            <Stack.Screen name="Payment Screen" component={PaymentScreen} />
          </Stack.Group>
          )}
        </Stack.Navigator>
        </NavigationContainer>
    </RecoilRoot>
  );
}