import React from "react";
import {Image,Dimensions} from "react-native";
const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
export const assets = [
    require("./assets/card1.png"),
    require("./assets/card2.png"),
    require("./assets/card3.png"),
    require("./assets/card4.png"),
    require("./assets/card5.png"),
    require("./assets/card6.png"),
];
export enum Cards {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
}

export interface CardProps {
    card: Cards
}

const Card = ({card}: CardProps) => {
    return (
        <Image source={assets[card]} style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            borderRadius: 16,
            backgroundColor: 'cyan'
        }}/>
    )
}

export default Card;
