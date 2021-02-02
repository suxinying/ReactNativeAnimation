import {Dimensions, StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";
import StyleGuide from "../components/StyleGuide";
import Card, {Cards} from "../PanGesture/Card";
import Animated, {useAnimatedStyle, useDerivedValue, useSharedValue, withSpring} from "react-native-reanimated";
import {mix} from "react-native-redash";
import Button from "../components/Button";

const {width} = Dimensions.get("window");

const cards = [
    Cards.Card1,
    Cards.Card2,
    Cards.Card3,
    Cards.Card4,
    Cards.Card5,
    Cards.Card6,
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleGuide.palette.background,
        justifyContent: "flex-end",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    }
})

export const useSpringTransition = (state: boolean | number) => {
    const value = useSharedValue(0);
    useEffect(() => {
        value.value = typeof state === "boolean" ? (state ? 1 : 0) : state;
    },[state,value])
    return useDerivedValue(() => {
        return withSpring(value.value);
    });
}
const origin = { x: -(width / 2 - StyleGuide.spacing * 2), y: 0 };

const Transitions = () => {
    const [toggled, setToggled] = useState(true);
    const transition = useSpringTransition(toggled);
    return (
        <View style={styles.container}>
            {
                cards.slice(0, 3).map((card, index) => {
                    const style = useAnimatedStyle(() => {
                        const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
                        return {
                            transform: [
                                { translateX: origin.x },
                                {rotate: `${rotate}rad`},
                                { translateX: -origin.x },
                            ]
                        }
                    })
                    return (
                        <Animated.View key={card} style={[styles.overlay, style]}>
                            <Card card={card}/>
                        </Animated.View>
                    )
                })
            }
            <Button
                label={toggled ? "Reset" : "Start"}
                onPress={() => setToggled(!toggled)}
                primary
            />

        </View>
    )
}

export default Transitions
