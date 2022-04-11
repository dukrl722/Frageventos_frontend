import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from './style';
import {useNavigation} from "@react-navigation/native";

type Props = {
    name: string;
}

export function GenericButton({name} : Props) {

    const navigation = useNavigation();

    function handleLogin() {
        // @ts-ignore
        navigation.navigate('Events');
    }

    return (
        <RectButton onPress={handleLogin} style={styles.container}>
            <Text style={styles.textContainer}>{name}</Text>
        </RectButton>
    )
}
