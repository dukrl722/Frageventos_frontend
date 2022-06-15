import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from './styles';
import {useNavigation} from "@react-navigation/native";

type Props = {
    name: string;
}

export function CompraButton({name}: Props) {
    const navigation = useNavigation();

    function handleDirection() {
        // @ts-ignore
        navigation.navigate("Congratulations");
    }

    return (
        <RectButton onPress={handleDirection} style={styles.container}>
            <Text style={styles.textContainer}>{name}</Text>
        </RectButton>
    )
}