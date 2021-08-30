import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Products from './pages/Products/Products'
import Detail from './pages/ProductDetail/Detail'


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ProductsPage"
                    component={Products}
                    options={{
                        title: 'Dükkan',
                        headerStyle: { backgroundColor: '#64b5f6' },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: 'white' }
                    }}
                />
                <Stack.Screen
                    name="DetailPage"
                    component={Detail}
                    options={{
                        title: 'Detay',
                        headerStyle: { backgroundColor: '#64b5f6' },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;