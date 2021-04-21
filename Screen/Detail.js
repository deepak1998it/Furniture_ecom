import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Badge, Thumbnail, Footer, FooterTab, } from 'native-base';
import { AddToCart, ValidateProduct } from '../Component/Auth';

const width = Dimensions.get("window").width;

const ProductDetail = (props) => {
    const [productDetail, setProductDetail] = useState({})
    const [productExistinCart, verifyproduct] = useState(false)

    useEffect(async () => {
        setProductDetail(props.route.params['data'])
        verifyproduct(await ValidateProduct(props.route.params['data']['id']))
    }, [])


    const Add = async () => {
        if (productExistinCart) {
            alert('Product already exist in cart')
        }
        AddToCart(productDetail)
        verifyproduct(true)

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{ uri: productDetail['image_url'] }}
                />
                <Text style={styles.name}>{productDetail['name']}</Text>
                <Text style={styles.description}>{productDetail['description']} </Text>
            </ScrollView>
            <Footer >
                <FooterTab style={{ backgroundColor: 'white' }}>
                    <Button transparent style={{ borderRadius: 10 }} vertical>
                        <Text style={styles.price}>${productDetail['price']}</Text>
                    </Button>
                    <Button onPress={() => Add()} style={{ backgroundColor: !productExistinCart ? 'orange' : 'lightblue', borderRadius: 22 }} vertical>
                        <Icon style={{ fontSize: 25, color: 'white' }} name="cart" />
                        <Text style={{ color: 'white', fontSize: 11, }}>Cart</Text>
                    </Button>


                </FooterTab>
            </Footer>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    image: {
        width: '100%',
        height: width
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10
    },
    description: {
        padding: 10,
        color: 'gray'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    }

});
export default ProductDetail;