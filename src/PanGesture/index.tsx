import React, {lazy, useState} from "react";
import Card, {CARD_HEIGHT, CARD_WIDTH, Cards} from "./Card";
import {View, Dimensions, LayoutRectangle} from "react-native";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue, withDecay,
    withSpring
} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";
import {clamp} from "react-native-redash";

const {width, height} = Dimensions.get("window")
const PanGesture = () => {
    const [container, setContainer] = useState<null | LayoutRectangle>(null);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const boundX = container ? container.width - CARD_WIDTH : 0;
    const boundY = container ? container.height - CARD_HEIGHT : 0;
    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context: any) => {
            context.offsetX = translateX.value
            context.offsetY = translateY.value
        },
        onActive: (event, context) => {
            translateY.value = clamp(context.offsetY + event.translationY, 0, boundY);
            translateX.value = clamp(context.offsetX + event.translationX, 0, boundX)
        },
        onEnd: (event, context) => {
            translateX.value = withDecay({
                velocity: event.velocityX,
                clamp: [0,boundX],
            });
            translateY.value = withDecay({
                velocity: event.velocityY,
                clamp: [0, boundY],
            });
        }
    })

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: translateX.value},
                {translateY: translateY.value}
            ],
        }
    })
    return (
        <View style={{flex: 1}} onLayout={({nativeEvent: {layout}}) => {
            setContainer(layout)
        }}>
            {container && <PanGestureHandler onGestureEvent={onGestureEvent}>
              <Animated.View style={[style]}>
                <Card card={Cards.Card2}/>
              </Animated.View>
            </PanGestureHandler>}
        </View>

    )
}

export default PanGesture
