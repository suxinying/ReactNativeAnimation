import {ScrollView, Text, View,StyleSheet} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";
import StyleGuide from "../components/StyleGuide";
import {StackNavigationProp} from "@react-navigation/stack";
import {Routes} from "../Routes";

export const examples = [
    {
        screen: "Worklets",
        title: "👩‍🏭 Worklets",
    },
]

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
    },
    content: {
        paddingBottom: 32,
    },
    thumbnail: {
        backgroundColor: "white",
        padding: StyleGuide.spacing * 2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: StyleGuide.palette.background,
    },
    title: {
        ...StyleGuide.typography.headline,
    },
});
const Examples = () => {
    const { navigate } = useNavigation();
    return (
        <ScrollView>
            {
                examples.map(thumbnail => (
                    <RectButton key={thumbnail.screen}
                                onPress={() => navigate(thumbnail.screen)}
                    >
                        <View style={styles.thumbnail}>
                            <Text style={styles.title}>{thumbnail.title}</Text>
                        </View>
                    </RectButton>
                ))
            }
        </ScrollView>
    )
}

export default Examples;
