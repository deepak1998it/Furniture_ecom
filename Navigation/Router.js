import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, Dimensions, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import MainHeader from '../Component/Header';
import Home from '../Screen/Home'
import ProductDetail from '../Screen/Detail';
import Cart from '../Screen/Cart';
import { Container, Header, Item, Input, Icon, } from 'native-base';
import { clearCart } from '../Component/Auth';

const Stack = createStackNavigator();


function Navigation({ navigation }) {
    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    // headerTintColor: '#fff',
                    headerTitleStyle: {
                        color: 'black'
                    },
                }}  >

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }} initial={true} />
                <Stack.Screen name="Detail" options={({ navigation }) => ({
                    headerRight: () => (<Icon name="heart" style={{ padding: 6 }} />)
                })} component={ProductDetail} />
                <Stack.Screen name="Cart" options={({ navigation }) => ({
                    headerRight: () => (<Icon onPress={() => clearCart()} name="trash" style={{ padding: 6 }} />)
                })} component={Cart} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

// enableScreens();
// const Stack = createNativeStackNavigator();

// function Navigation() {
//     return (
//         <NavigationContainer>

//             <Stack.Navigator initialRouteName="Home" component={Home}>
//                 <Stack.Screen name="Home" component={Home} />
//                 {/* <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} /> */}
//             </Stack.Navigator>
//         </ NavigationContainer>
//     );
// }
export default Navigation;