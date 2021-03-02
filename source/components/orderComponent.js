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

        this.chilliAnim1 = new Animated.ValueXY({ x: widthToDp(-40), y: heightToDp(-10) })
        this.chilliAnim2 = new Animated.ValueXY({ x: widthToDp(100), y: heightToDp(33) })
        this.chilliAnim3 = new Animated.ValueXY({ x: widthToDp(-40), y: heightToDp(-10) })

        this.panArr = []
        this.panResponderArr = []
        for (let i = 0; i < 5; i++) {

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
                    }
                }
            });

            this.panArr.push(pan);
            this.panResponderArr.push(panResponder)
        }
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
                                    { scale: this.scaleImage },
                                    { rotate: this.rotateImage }
                                ]
                            }]} />
                        </View>
                        <Animated.Image source={require('../../assets/chilli.png')} style={[styles.ImageTop, { transform: [{ translateX: this.chilliAnim1.x }, { translateY: this.chilliAnim1.y }] }]} />
                        <Animated.Image source={require('../../assets/chilli.png')} style={[styles.ImageTop, { transform: [{ translateX: this.chilliAnim2.x }, { translateY: this.chilliAnim2.y }] }]} />
                        

                        {/* <Animated.Image source={require('../../assets/chilli.png')} style={[styles.ImageTop, { transform: [{ translateX: this.chilliAnim1.x }, { translateY: this.chilliAnim1.y }] }]} /> */}
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
                                        left: index * 65
                                    }
                                    ]}
                                        {...this.panResponderArr[index].panHandlers} key={item.id}

                                    >
                                        <TouchableOpacity onPress={() => {
                                            if (index == 3) {
                                                Animated.spring(this.chilliAnim1, { toValue: { x: widthToDp(-40), y: heightToDp(-10) }, useNativeDriver: true }).start();
                                                Animated.spring(this.chilliAnim2, { toValue: { x: widthToDp(100), y: heightToDp(33) }, useNativeDriver: true }).start();
                                            }
                                        }}>
                                            <Image source={item.image} style={styles.toppingImageStyle} />
                                        </TouchableOpacity>

                                    </Animated.View>
                                )
                            })
                        }
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
        position: 'relative'
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
    // pizzaToppingView: {
    //     backgroundColor: 'transparent',
    //     flex: 1.5,
    //     paddingLeft: 10,
    //     paddingRight: 10,


    // },
    // toppingScrollStyle: {
    //     justifyContent: 'center',
    //     alignItems: 'center',

    // },
    btnTopping: {
        position: 'absolute',
        bottom: 20,
    },
    toppingImageStyle: {
        width: widthToDp(9),
        height: widthToDp(9),
        margin: widthToDp(5),
        borderRadius: 100,

    },

    ImageTop: {
        position: "absolute",
        width: widthToDp(7),
        height: widthToDp(7),
        // top:40,
        // // left:-60,
        transform: [
            { translateX: widthToDp(40) },
            { translateY: heightToDp(-23) }
        ]
    }

});




