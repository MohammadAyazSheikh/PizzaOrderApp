import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';






export default class OrderComponent extends Component {
    constructor(props) {
        super(props);
        this.scrollY = new Animated.Value(0);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <View style={styles.txtHeaderView}>
                        <Text style = {styles.txtHeader}>Karachi Pizzaaa</Text>
                    </View>
                    <View style={styles.cartIconView}>
                        <Image source={require('../../assets/Buy.png')} style={styles.cartIconStyle} />
                    </View>
                </View>
            </View>
        );
    }
}

let { width, height } = Dimensions.get('window');

const widthToDp = (number) => {

    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);

}

const heightToDp = (number) => {

    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },

    headerView: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    txtHeaderView:{
        // backgroundColor:'red',
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    cartIconView:{
        flex:0.5
    },
    txtHeader:{
        fontSize:widthToDp(6),
        fontWeight:'bold',
        marginLeft:widthToDp(6)
    },
    cartIconStyle:{
        width:widthToDp(9),
        height:widthToDp(9)
    }

    
});




