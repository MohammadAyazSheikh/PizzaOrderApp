import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated, PanResponder } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    topping, //panArr, panResponderArr
} from '../shared/topping';




export default class OrderComponent extends Component {
    constructor(props) {
        super(props);
        this.scaleImage = new Animated.Value(1);


        this.rotateImage = this.scaleImage.interpolate({
            inputRange: [0.8, 1, 1.2],
            outputRange: ['-50deg', '0deg', '50deg'],
        });

        this.moveToCartScaleAnim = new Animated.Value(1);
        this.moveToCartAnim = new Animated.ValueXY({ x: 0, y: 0 });



        this.chilliAnim1 = new Animated.ValueXY({ x: widthToDp(-40), y: heightToDp(-10) })
        this.chilliAnim2 = new Animated.ValueXY({ x: widthToDp(100), y: heightToDp(33) })
        this.onionAnim1 = new Animated.ValueXY({ x: widthToDp(-40), y: heightToDp(-10) })
        this.onionAnim2 = new Animated.ValueXY({ x: widthToDp(100), y: heightToDp(33) })
        this.oliveAnim1 = new Animated.ValueXY({ x: widthToDp(-40), y: heightToDp(-10) })
        this.oliveAnim2 = new Animated.ValueXY({ x: widthToDp(100), y: heightToDp(33) })
        this.shimlaAnim1 = new Animated.ValueXY({ x: widthToDp(-40), y: heightToDp(-10) })
        this.shimlaAnim2 = new Animated.ValueXY({ x: widthToDp(100), y: heightToDp(33) })


        this.panArr = []
        this.panResponderArr = []
        for (let i = 0; i < 4; i++) {

            const pan = new Animated.ValueXY();

            const panResponder = PanResponder.create({
                onMoveShouldSetPanResponder: () => true,
                onPanResponderMove: Animated.event([
                    null,
                    { dx: pan.x, dy: pan.y }
                ],
                    { useNativeDriver: false }
                ),
                onPanResponderRelease: () => {
                    console.log('released')

                    Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
                    if (i == 3) {
                        Animated.spring(this.chilliAnim1, { toValue: { x: widthToDp(40), y: heightToDp(10) }, useNativeDriver: true }).start();
                        Animated.spring(this.chilliAnim2, { toValue: { x: widthToDp(36), y: heightToDp(23) }, useNativeDriver: true }).start();
                        this.setState({ price: this.state.price + 5 })
                    }
                    else if (i == 1) {
                        Animated.spring(this.onionAnim1, { toValue: { x: widthToDp(29), y: heightToDp(18) }, useNativeDriver: true }).start();
                        Animated.spring(this.onionAnim2, { toValue: { x: widthToDp(53), y: heightToDp(20) }, useNativeDriver: true }).start();
                        this.setState({ price: this.state.price + 5 })
                    }
                    else if (i == 2) {
                        Animated.spring(this.oliveAnim1, { toValue: { x: widthToDp(44), y: heightToDp(18) }, useNativeDriver: true }).start();
                        Animated.spring(this.oliveAnim2, { toValue: { x: widthToDp(32), y: heightToDp(14) }, useNativeDriver: true }).start();
                        this.setState({ price: this.state.price + 5 })
                    }
                    else if (i == 0) {
                        Animated.spring(this.shimlaAnim1, { toValue: { x: widthToDp(50), y: heightToDp(15) }, useNativeDriver: true }).start();
                        Animated.spring(this.shimlaAnim2, { toValue: { x: widthToDp(48), y: heightToDp(23) }, useNativeDriver: true }).start();
                        this.setState({ price: this.state.price + 5 })
                    }
                }
            });

            this.panArr.push(pan);
            this.panResponderArr.push(panResponder)
        }
        this.state = {
            price: 150,
            orders: null
        }
    }




    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView> */}

                <View style={styles.headerView}>
                    <View style={styles.txtHeaderView}>
                        <Text style={styles.txtHeader}>Karachi Pizza</Text>
                    </View>
                    <TouchableOpacity style={styles.cartIconView}>
                        <Image source={require('../../assets/Buy.png')} style={styles.cartIconStyle} />
                        {
                            this.state.orders ?
                                <View style={styles.txtOrderNumberView}>
                                    <Text style={styles.txtOrderNumber}>{this.state.orders}</Text>
                                </View>
                                :
                                <View></View>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.orderView}>
                        <Animated.Image source={require('../../assets/pizza3.png')} style={[styles.pizzaBackImageStyle, {
                            transform: [
                                { scale: this.moveToCartScaleAnim },
                                { translateY: this.moveToCartAnim.x },
                                { translateX: this.moveToCartAnim.y }

                            ]
                        }]} />

                        <View style={styles.pizzaImageView}>
                            <Animated.Image source={require('../../assets/pizza3.png')} style={[styles.pizzaImageStyle, {
                                transform: [
                                    { scale: this.scaleImage },
                                    { rotate: this.rotateImage }
                                ]
                            }]} />
                        </View>

                        <Animated.Image source={require('../../assets/chilli.png')} style={[styles.ImageTop, { transform: [{ translateX: this.chilliAnim1.x }, { translateY: this.chilliAnim1.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />
                        <Animated.Image source={require('../../assets/chilli.png')} style={[styles.ImageTop, { transform: [{ translateX: this.chilliAnim2.x }, { translateY: this.chilliAnim2.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />
                        <Animated.Image source={require('../../assets/onion2.png')} style={[styles.ImageTop, { transform: [{ translateX: this.onionAnim1.x }, { translateY: this.onionAnim1.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />
                        <Animated.Image source={require('../../assets/onion2.png')} style={[styles.ImageTop, { transform: [{ translateX: this.onionAnim2.x }, { translateY: this.onionAnim2.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />
                        <Animated.Image source={require('../../assets/olive.png')} style={[styles.ImageTop, { transform: [{ translateX: this.oliveAnim1.x }, { translateY: this.oliveAnim1.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />
                        <Animated.Image source={require('../../assets/olive.png')} style={[styles.ImageTop, { transform: [{ translateX: this.oliveAnim2.x }, { translateY: this.oliveAnim2.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />
                        <Animated.Image source={require('../../assets/shimla2.png')} style={[styles.ImageTop, { transform: [{ translateX: this.shimlaAnim1.x }, { translateY: this.shimlaAnim1.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />
                        <Animated.Image source={require('../../assets/shimla2.png')} style={[styles.ImageTop, { transform: [{ translateX: this.shimlaAnim2.x }, { translateY: this.shimlaAnim2.y }, { scale: this.scaleImage }, { rotate: this.rotateImage }] }]} />



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
                                                stiffness: 150,
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
                                                stiffness: 150,
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
                                                stiffness: 150,
                                            }
                                        ).start();
                                    }}
                                >
                                    <Text style={styles.txtBtn}>L</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            topping.map((item, index) => {
                                return (
                                    <Animated.View style={[styles.btnTopping,
                                    {
                                        transform: [{ translateX: this.panArr[index].x }, { translateY: this.panArr[index].y }]
                                    },
                                    {
                                        left: index * 85,

                                    }
                                    ]}
                                        {...this.panResponderArr[index].panHandlers} key={item.id}

                                    >
                                        <TouchableOpacity onPress={() => {
                                            if (index == 3) {
                                                Animated.spring(this.chilliAnim1, { toValue: { x: widthToDp(-40), y: heightToDp(-10) }, useNativeDriver: true }).start();
                                                Animated.spring(this.chilliAnim2, { toValue: { x: widthToDp(100), y: heightToDp(33) }, useNativeDriver: true }).start();
                                                this.setState({ price: this.state.price - 5 })
                                            }
                                            else if (index == 1) {
                                                Animated.spring(this.onionAnim1, { toValue: { x: widthToDp(-40), y: heightToDp(10) }, useNativeDriver: true }).start();
                                                Animated.spring(this.onionAnim2, { toValue: { x: widthToDp(100), y: heightToDp(33) }, useNativeDriver: true }).start();
                                                this.setState({ price: this.state.price - 5 })
                                            }
                                            else if (index == 2) {
                                                Animated.spring(this.oliveAnim1, { toValue: { x: widthToDp(-40), y: heightToDp(10) }, useNativeDriver: true }).start();
                                                Animated.spring(this.oliveAnim2, { toValue: { x: widthToDp(100), y: heightToDp(33) }, useNativeDriver: true }).start();
                                                this.setState({ price: this.state.price - 5 })
                                            }
                                            else if (index == 0) {
                                                Animated.spring(this.shimlaAnim1, { toValue: { x: widthToDp(-40), y: heightToDp(10) }, useNativeDriver: true }).start();
                                                Animated.spring(this.shimlaAnim2, { toValue: { x: widthToDp(100), y: heightToDp(33) }, useNativeDriver: true }).start();
                                                this.setState({ price: this.state.price - 5 })
                                            }
                                        }}
                                            style={styles.btnToppingTouchStyle}
                                        >
                                            <Image source={item.image} style={styles.toppingImageStyle} />
                                        </TouchableOpacity>

                                    </Animated.View>
                                )
                            })
                        }
                        <TouchableOpacity style={styles.btnOrder}
                            onPress={() => {


                                Animated.sequence([
                                    Animated.parallel([
                                        Animated.timing(
                                            this.moveToCartScaleAnim,
                                            { toValue: 0, duration: 1500, useNativeDriver: true }
                                        ),
                                        Animated.timing(
                                            this.moveToCartAnim,
                                            {
                                                toValue: { x: widthToDp(-30), y: heightToDp(30) },
                                                useNativeDriver: true,
                                                duration: 350,
                                            }
                                        ),
                                    ]),

                                    Animated.parallel([
                                        Animated.timing(
                                            this.moveToCartScaleAnim,
                                            {
                                                toValue: 1, duration: 400, useNativeDriver: true
                                            }),
                                        Animated.timing(
                                            this.moveToCartAnim,
                                            {
                                                toValue: { x: widthToDp(0), y: heightToDp(0) },
                                                useNativeDriver: true,
                                                duration: 400,
                                            }
                                        ),
                                    ]),
                                ]).start();
                                this.setState({ orders: this.state.orders + 1 })
                            }}
                        >
                            <Text style={styles.txtOrder}>Add to Cart</Text>
                        </TouchableOpacity>
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
        // backgroundColor: '#f2f2f2',
        backgroundColor: '#343434'
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
        flex: 0.7
    },
    txtHeader: {
        fontSize: widthToDp(8),
        fontWeight: 'bold',
        marginLeft: widthToDp(6),
        // color: '#604f56',
        color: '#fefefe',
    },
    cartIconStyle: {
        width: widthToDp(9),
        height: widthToDp(9),
        backgroundColor: '#ffad0d',
        borderRadius: 10,
        marginTop: 3
    },
    mainView: {
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderView: {
        backgroundColor: '#060606',
        width: widthToDp(87),
        height: heightToDp(78),
        elevation: 4,
        marginBottom: heightToDp(6),
        borderRadius: 10,
        position: 'relative'
    },
    pizzaImageView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pizzaImageStyle: {
        width: widthToDp(45),
        height: widthToDp(45),
        borderRadius: 100,

    },
    pizzaDetailView: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    txtPrice: {
        color: '#604f56',
        fontSize: widthToDp(7),
        fontWeight: 'bold',

    },
    sizeBtnView: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
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

    btnTopping: {
        position: 'absolute',
        bottom: 20,

    },
    btnToppingTouchStyle: {

    },
    toppingImageStyle: {
        width: widthToDp(9),
        height: widthToDp(9),
        margin: widthToDp(5),
        borderRadius: 100,
        backgroundColor: '#f2f2f2',
        padding: 20,
    },

    ImageTop: {
        position: "absolute",
        width: widthToDp(7),
        height: widthToDp(7),
    },
    btnOrder: {

        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthToDp(30),
        height: heightToDp(7),
        backgroundColor: '#ffad0d',
        borderRadius: 50,
        position: 'absolute',
        bottom: -20,
        elevation: 3
    },
    txtOrder: {
        fontSize: widthToDp(4),
        fontWeight: 'bold',
        color: '#060606',
    },
    pizzaBackImageStyle: {
        width: widthToDp(31),
        height: widthToDp(31),
        borderRadius: 100,
        position: 'absolute',
        left: widthToDp(27),
        top: heightToDp(9)
    },
    txtOrderNumberView: {
        position: 'absolute',
        left: widthToDp(8.2),
        bottom: heightToDp(3),
        backgroundColor: 'red',
        borderRadius: 100,
        width: widthToDp(5),
        height: widthToDp(5),
        justifyContent: 'center',
        alignItems: 'center',

    },
    txtOrderNumber: {
        margin: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: widthToDp(4)
    }

});




