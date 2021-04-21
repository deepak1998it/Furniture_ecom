import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Badge, ListItem } from 'native-base';
import MainHeader from '../Component/Header'
import FooterTabs from '../Component/Footer'
import ProductCard from '../Product/ProductCard'
import ProductDetail from './Detail';


const Products = require('../assets/product.json')

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: Products,
            badge: ['Chair', 'Bed', 'Sofa', 'Bean bag'],
            activeBadge: 0
        };
    }

    filter = (name) => {
        var data = Products.filter((i) => i.name.toLowerCase().includes(name.toLowerCase()))
        this.setState({ productData: data })
        console.log(data)
    }

    badge = () => {
        return (
            <View style={{ flexDirection: 'row', padding: 5, marginLeft: 7 }}>
                {this.state.badge.map((item, index) =>
                    <TouchableOpacity key={index} onPress={() => this.setState({ activeBadge: index })}>
                        <Badge style={{ padding: 7, marginRight: 16, width: 80, height: 35, backgroundColor: index === this.state.activeBadge ? 'orange' : 'lightblue' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}> {item} </Text>
                        </Badge>
                    </TouchableOpacity>
                )
                }
            </View>
        )
    }

    render() {
        const { productData } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <MainHeader navigation={this.props.navigation} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.title, { paddingTop: 6 }]}>
                        Choose Your Best
                    </Text>
                    <Text style={styles.title}>Furniture</Text>
                </View>
                <Text style={styles.body}>High Quality furniture</Text>
                <ScrollView>
                    <Header transparent searchBar rounded>
                        <Item style={{ borderRadius: 15 }}>
                            <Icon name="ios-search" />
                            <Input onChangeText={(text) => this.filter(text)} placeholder="Search" />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>

                    {this.badge()}

                    <ProductCard data={productData} navigation={this.props.navigation} />

                </ScrollView>
                <FooterTabs navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 15,
        //margin: 9
    },
    body: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15,
        paddingLeft: 18
    }
});

export default Home;