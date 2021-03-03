import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated, PanResponder } from 'react-native';

export const topping = [
    {
        id: 5,
        image: require('../../assets/shimla2.png')
    },
    {
        id: 1,
        image: require('../../assets/onion2.png')
    },
    {
        id: 2,
        image: require('../../assets/olive.png')
    },
    {
        id: 3,
        image: require('../../assets/chilli.png')
    },
    // {
    //     id: 4,
    //     image: require('../../assets/chicken.png')
    // },
]



// const panArr = []
// const panResponderArr = []



// for (let i = 0; i < 5; i++) {

//     const pan = new Animated.ValueXY();

//     const panResponder = PanResponder.create({
//         onMoveShouldSetPanResponder: () => true,
//         onPanResponderMove: Animated.event([
//             null,
//             { dx: pan.x, dy: pan.y }
//         ],
//             { useNativeDriver: false }
//         ),
//         onPanResponderRelease: () => {
//             Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
//         }
//     });

//     panArr.push(pan);
//     panResponderArr.push(panResponder)
// }

// export { panArr, panResponderArr };
