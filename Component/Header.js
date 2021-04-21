import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class MainHeader extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle={'gray'} />
                <Header transparent>
                    <Left>
                        <Button transparent>
                            <Icon style={{ color: 'black' }} name='menu' />
                        </Button>
                    </Left>
                    {/* <Body>
                        <Title style={{ color: 'black' }}>Ecom</Title>
                    </Body> */}
                    <Right >
                        <Button transparent>
                            <Text >
                                <Icon style={{ color: 'black', fontSize: 36 }} name='person-circle' />
                            </Text>
                        </Button>
                    </Right>
                </Header>

            </View>
        );
    }
}