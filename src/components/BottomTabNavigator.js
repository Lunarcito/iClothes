import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FavoritesStackNavigator, MainStackNavigator } from './MainStackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStackNavigator}/>
            <Tab.Screen name="MyCartScreen" component={FavoritesStackNavigator} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;