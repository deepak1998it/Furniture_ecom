import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Image, ScrollView, SafeAreaView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Badge, Thumbnail, Footer, FooterTab, } from 'native-base';
import { AddToCart, GetCartProduct } from '../Component/Auth';

const width = Dimensions.get("window").width;

const Cart = (props) => {
    const [cartProduct, setCartProduct] = useState([])
    const [total_amount, totalAmount] = useState(0)

    useEffect(async () => {
        var productdata = await GetCartProduct()
        if (productdata) {
            setCartProduct(JSON.parse(productdata))
            await CalculatePrice(JSON.parse(productdata))
        }

    }, [])

    const CalculatePrice = (productdata) => {
        console.log('started')
        var price = 0
        productdata.map(item => {
            price = price + Number(item['price'])
            console.log(price)
        })
        totalAmount(price)
    }

    return (
        <SafeAreaView style={{ padding: 9, backgroundColor: '#e5e6f1', flex: 1 }}>
            <ScrollView>
                {
                    cartProduct.length == 0 ?
                        <Text style={{ textAlign: 'center', flex: 1 }}>No products in cart</Text> : null
                }
                {
                    cartProduct.map((item, index) =>
                        <Card key={index} style={{ borderRadius: 12 }}>
                            <CardItem >
                                <Thumbnail style={{ borderRadius: 12 }} source={{ uri: item.image_url }} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: 'bold' }}> {item.name}</Text>
                                    <Text style={{ paddingLeft: 20, }}>${item.price}</Text>
                                </View>
                                <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                                    <Button transparent><Icon name="remove-circle" /></Button>
                                    <Text>1 </Text>
                                    <Button transparent><Icon name="add-circle" /></Button>
                                </View>
                            </CardItem>
                        </Card>
                    )
                }
            </ScrollView>
            {
                cartProduct.length != 0 ?
                    <Card style={{ borderRadius: 9, height: width / 2.5 }}>
                        <ScrollView>
                            {
                                cartProduct.map((item, index) =>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} key={index}>
                                        <Text style={{ paddingLeft: 20, fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text style={{ paddingRight: 20, fontWeight: 'bold', justifyContent: 'flex-end' }}>${item.price}</Text>
                                    </View>
                                )
                            }
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ paddingLeft: 20, fontWeight: 'bold' }}>Total price</Text>
                                <Text style={{ paddingRight: 20, fontWeight: 'bold' }}>${total_amount}</Text>
                            </View>
                        </ScrollView>
                        <Button style={{ backgroundColor: 'orange', borderRadius: 22, width: '100%' }} vertical>
                            <Text style={{ color: 'white', fontSize: 14, padding: 10 }}>Checkout</Text>
                        </Button>
                    </Card> : null
            }
        </SafeAreaView >
    )
}

export default Cart;