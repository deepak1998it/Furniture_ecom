import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Text, Thumbnail } from 'native-base';

const width = Dimensions.get("window").width;

const ProductCard = (props) => {
    const [products, setProducts] = useState([]);


    return (
        <View style={{ padding: 8 }}>
            {
                props.data.length == 0 ?
                    <Text style={{ textAlign: 'center', paddingTop: 18 }}>No product found</Text> : null
            }
            {
                props.data.map((item, index) =>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Detail', { 'data': item })} key={index}>
                        <Card style={{ borderRadius: 9, backgroundColor: '#e5e6f1', height: width / 2.5, marginBottom: 25 }}>
                            <CardItem style={{ backgroundColor: '#e5e6f1' }} >
                                <Thumbnail style={{ padding: 16, borderRadius: 9, width: width / 3.5, height: width / 3 }} source={{ uri: item.image_url }} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: 'bold' }}> {item.name}</Text>
                                    <Text style={{ paddingLeft: 20, color: 'gray', fontSize: 10 }}> {item.title}</Text>
                                    <Text style={{ paddingLeft: 20, }}>⭐⭐⭐⭐⭐⭐</Text>
                                    <Text style={{ paddingLeft: 20, }}>${item.price}</Text>
                                </View>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                )
            }
        </View>

    )
}

export default ProductCard;