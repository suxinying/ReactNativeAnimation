import React, {useState} from "react";
import Animated, {runOnJS, runOnUI, useSharedValue} from "react-native-reanimated";
import {View, Text} from "react-native";
import Button from "../components/Button";
import { ReText } from "react-native-redash";

const formatDatetime = (datetime: Date) => {
    "worklet";
    return `${datetime.getFullYear()}-${
        datetime.getMonth() + 1
    }-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
};
const sayHello = (
    text: Animated.SharedValue<string>,
    from: string,
    cb: () => void
) => {
    "worklet";
    text.value = `Hello from ${from} at ${formatDatetime(new Date())}`;
    runOnJS(cb)();
}
const Worklets = () => {
    const [jsText, setJsText] = useState("");
    const text = useSharedValue("");
    const sayHelloOnTheJSThread = () =>
        setJsText(`Hello world at ${formatDatetime(new Date())}`);
    return (
        <View style={{
            flex: 1, justifyContent: "center",
            alignContent: "center"
        }}>
            <Text>JS thread says：</Text>
            <Text>{jsText}</Text>
            <Text>UI thread says:</Text>
            <ReText {...{ text }} />
            <Button onPress={() => {
                runOnUI(sayHello)(text, "Beautiful Zuerich Switzerland",
                    sayHelloOnTheJSThread)
            }}
                    label="Say Hello"
                    primary/>

        </View>
    )
}

export default Worklets
