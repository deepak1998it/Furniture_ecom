import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { GetCartProduct } from '../Component/Auth';

export default class FooterTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_product: 0
        };
    }

    async componentDidMount() {
        var data = await GetCartProduct()
        if (data) {
            this.setState({ total_product: JSON.parse(data).length })
        }
    }


    render() {
        return (
            <Footer >
                <FooterTab style={{ backgroundColor: 'white' }}>
                    <Button style={{ backgroundColor: 'orange', borderRadius: 10 }} active vertical>
                        <Icon style={{ fontSize: 30, }} active name="home" />
                    </Button>
                    <Button vertical>
                        <Icon style={{ fontSize: 30 }} name="star" />
                    </Button>

                    <Button onPress={() => this.props.navigation.navigate('Cart')} badge vertical>
                        <Badge ><Text>{this.state.total_product}</Text></Badge>
                        <Icon name="cart" style={{ fontSize: 30, }} />
                    </Button>
                    <Button vertical>
                        <Icon name="person" style={{ fontSize: 30 }} />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}