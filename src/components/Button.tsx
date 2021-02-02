import StyleGuide from "./StyleGuide";
import {RectButton} from "react-native-gesture-handler";
import {View, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import Text from "./Text";

interface ButtonProps {
    label: string;
    primary?: boolean;
    onPress: () => void;
}

const styles = StyleSheet.create({
    container: {
        padding: StyleGuide.spacing * 2
    },
    label: {
        textAlign: "center"
    }
})

const Button = ({label, primary, onPress}: ButtonProps) => {
    const color = primary ? "white" : undefined;
    const backgroundColor = primary ? StyleGuide.palette.backgroundPrimary : undefined;
    return (
        <RectButton onPress={onPress}>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text type="headline" style={[styles.label, {color}]}>
                        {label}
                    </Text>
                </View>
            </SafeAreaView>
        </RectButton>
    )
}

export default Button;
