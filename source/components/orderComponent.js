import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated, PanResponder } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';






export default class OrderComponent extends Component {
    constructor(props) {
        super(props);
        this.scaleImage = new Animated.Value(1);
        this.pan = new Animated.ValueXY();
        // this.rotateImage = this.scaleImage.interpolate({
        //     inputRange: [1, 2, 3],
        //     outputRange: ['red', 'yellow', 'green'],
        // });

        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: this.pan.x, dy: this.pan.y }
            ]),
            onPanResponderRelease: () => {
                Animated.spring(this.pan, { toValue: { x: 0, y: 0 },useNativeDriver:true }).start();
            }
        });

        this.state = {
            price: 100
        }
    }




    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView> */}
                <View style={styles.headerView}>
                    <View style={styles.txtHeaderView}>
                        <Text style={styles.txtHeader}>Karachi PiZzaa</Text>
                    </View>
                    <TouchableOpacity style={styles.cartIconView}>
                        <Image source={require('../../assets/Buy.png')} style={styles.cartIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.orderView}>
                        <View style={styles.pizzaImageView}>
                            <Animated.Image source={require('../../assets/pizza3.png')} style={[styles.pizzaImageStyle, {
                                transform: [
                                    { scale: this.scaleImage }
                                ]
                            }]} />
                        </View>
                        <View style={styles.pizzaDetailView}>

                            <Text style={styles.txtPrice}>{this.state.price} $</Text>
                            <View style={styles.sizeBtnView}>
                                <TouchableOpacity style={styles.btnSize}
                                    onPress={() => {
                                        this.setState({ price: 100 })
                                        Animated.spring(
                                            this.scaleImage,
                                            {
                                                toValue: 0.8,
                                                useNativeDriver: true,
                                                stiffness: 200,
                                            }
                                        ).start();
                                    }}
                                >
                                    <Text style={styles.txtBtn}>S</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}
                                    onPress={() => {
                                        this.setState({ price: 150 })
                                        Animated.spring(
                                            this.scaleImage,
                                            {
                                                toValue: 1,
                                                useNativeDriver: true,
                                                stiffness: 200,
                                            }
                                        ).start();
                                    }}
                                >
                                    <Text style={styles.txtBtn}>M</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}
                                    onPress={() => {
                                        this.setState({ price: 200 })
                                        Animated.spring(
                                            this.scaleImage,
                                            {
                                                toValue: 1.2,
                                                useNativeDriver: true,
                                                stiffness: 200,
                                            }
                                        ).start();
                                    }}
                                >
                                    <Text style={styles.txtBtn}>L</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={styles.pizzaToppingView}> */}
                            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} */}
                                {/* contentContainerStyle={styles.toppingScrollStyle}> */}
                                {/* <Animated.View style={[styles.btnTopping, {
                                    transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
                                }]}  {...this.panResponder.panHandlers}>
                                    <Image source={require('../../assets/chilli.png')} style={styles.toppingImageStyle} />
                                </Animated.View>
                                <TouchableOpacity style={styles.btnTopping}>
                                    <Image source={require('../../assets/olive.png')} style={styles.toppingImageStyle} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnTopping}>
                                    <Image source={require('../../assets/shimla2.png')} style={styles.toppingImageStyle} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnTopping}>
                                    <Image source={require('../../assets/onion2.png')} style={styles.toppingImageStyle} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnTopping}>
                                    <Image source={require('../../assets/chicken.png')} style={styles.toppingImageStyle} />
                                </TouchableOpacity> */}
                            {/* </ScrollView> */}
                        {/* </View> */}
                    </View>
                </View>
                {/* </ScrollView> */}
            </View >
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    txtHeaderView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartIconView: {
        flex: 0.5
    },
    txtHeader: {
        fontSize: widthToDp(6),
        fontWeight: 'bold',
        marginLeft: widthToDp(6),
        color: '#604f56',
    },
    cartIconStyle: {
        width: widthToDp(9),
        height: widthToDp(9)
    },
    mainView: {
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderView: {
        backgroundColor: 'white',
        width: widthToDp(87),
        height: heightToDp(78),
        elevation: 4,
        marginBottom: heightToDp(6),
        borderRadius: 10,
        // flexDirection:'row'
    },
    pizzaImageView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pizzaImageStyle: {
        width: widthToDp(40),
        height: widthToDp(45),
        borderRadius: 100,
        // position:'absolute'
    },
    pizzaDetailView: {
        // backgroundColor: 'yellow',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'transparent',
    },
    txtPrice: {
        color: '#604f56',
        fontSize: widthToDp(7),
        fontWeight: 'bold',

    },
    sizeBtnView: {
        flexDirection: 'row',
        backgroundColor:'transparent',
    },
    btnSize: {
        backgroundColor: '#f2f2f2',
        width: widthToDp(10),
        height: widthToDp(10),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: widthToDp(3),
        elevation: 4,
      
    },
    txtBtn: {
        color: '#604f56',
        fontSize: widthToDp(4),
        fontWeight: 'bold'
    },
    pizzaToppingView: {
        backgroundColor:'transparent',
        flex: 1.5,
        paddingLeft: 10,
        paddingRight: 10,
        // zIndex:10000, 
        overflow:'visible'
    },
    toppingScrollStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'visible'
    },
    toppingImageStyle: {
        width: widthToDp(9),
        height: widthToDp(9),
        margin: widthToDp(5),
        borderRadius: 100,
        
    //    zIndex:+1000,
       
        // position:'absolute'
    },

});




