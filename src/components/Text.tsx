import React, {ReactNode} from "react";
import {TextProps as OriginalTextProps, Text as OriginalText} from "react-native"
import StyleGuide from "./StyleGuide";

export interface TextProps extends OriginalTextProps {
    dark?: boolean;
    children: ReactNode;
    type?: keyof typeof StyleGuide["typography"]
}

const Text = ({dark, style, type, children}: TextProps) => {
    const color = dark ? "white" : "black";
    return (
        <OriginalText style={[StyleGuide.typography[type || "body"], {color}, style]}>
            {children}
        </OriginalText>
    )
}
export default Text;
