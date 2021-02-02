import {ScrollView, Text} from "react-native";
import React from "react";
import Animated, {useAnimatedStyle, useSharedValue} from "react-native-reanimated";

const Examples = () => {
    const size = useSharedValue(true)
    const style = useAnimatedStyle(() => {
        return {
            backgroundColor: size.value ? 'red' : 'yellow'
        }
    })
    return (
        <ScrollView>
            <Animated.View style={style} onPress={() => {
                alert('?x')
                size.value = false
            }}>
                <Text>???</Text>
            </Animated.View>
        </ScrollView>
    )
}

export default Examples;
