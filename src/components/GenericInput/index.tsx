import React from 'react';
import {Image, TextInput, View} from "react-native";

import { styles } from './style';
import { theme } from "../../global/styles/theme";

import UserIcon from '../../assets/user.png';
import LockIcon from '../../assets/lock.png';

type Props = {
    name: string;
    type: string;
}

export function GenericInput({name, type} : Props) {
    return (
        <View style={styles.container}>
            <Image source={type == 'password' ? LockIcon : UserIcon} style={styles.image} />
            <TextInput placeholder={name} placeholderTextColor={theme.colors.textInput} style={styles.input} />
        </View>
    )
}
