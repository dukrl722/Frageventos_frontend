import React from 'react';
import {Image, TextInput, View} from "react-native";
import { styles } from './style';

import UserIcon from '../../assets/user.png';
import LockIcon from '../../assets/lock.png';

export function GenericInput(name, type) {
    return (
        <View style={styles.container}>
            <Image source={type == 'password' ? LockIcon : UserIcon} style={styles.image} />
            <TextInput placeholder={name} style={styles.input} />
        </View>
    )
}
