import React, { useState } from "react";

import { TextInput, View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';

type Props = {
    type?: string;
    placeholder: string
    security?: boolean
}

export function InputRegister({ security, type, placeholder, ...rest }: Props) {
    const [eyes, setEyes] = useState(true);
    return (

        <View style={styles.container}>
            <View style={[styles.input, security ? { display: 'none' } : { display: 'flex' }]}>
                <View style={styles.labels}>
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={security ? true : false}
                        keyboardType={type ? type : 'default'}
                        placeholderTextColor="white"
                        style={[{ color: 'white' }]}
                    />
                </View>
            </View>
            <View style={[styles.input, security ? { display: 'flex' } : { display: 'none' }]}>
                <View style={styles.labels}>
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={eyes}
                        keyboardType='default'
                        placeholderTextColor="white"
                        style={[{ color: 'white' }]}
                    />
                </View>
                <RectButton
                    style={styles.eyes}
                    onPress={() => {
                        setEyes(!eyes)
                    }}
                >
                    <View>
                        <Feather
                            name={eyes ? 'eye-off' : "eye"}
                            size={15}
                            color='#bfc6d5'
                        />
                    </View>
                </RectButton>
            </View>
        </View>
    )
}