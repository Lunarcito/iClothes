import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ProductListScreen from '../screens/ProductListScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import SaleListScreen from '../screens/SaleListScreen'
import MyCartScreen from '../screens/MyCartScreen'
import PaymentScreen from '../screens/PaymentScreen'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Clothes Details" component={ProductDetailsScreen} />
                <Stack.Screen name="New Arrivals" component={ProductListScreen} />
                <Stack.Screen name="Flash Sale" component={SaleListScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const FavoritesStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
                <Stack.Screen name="Payment Screen" component={PaymentScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
export { MainStackNavigator, FavoritesStackNavigator };

