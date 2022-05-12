import React, { useState } from "react";

import { TextInput, View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from "../../global/styles/theme";

type Props = {
    type?: string;
    security?: boolean;
    textPlace: string
}

export function InputProfiles({ security, type, textPlace, ...rest }: Props) {
    const [eyes, setEyes] = useState(true);
    return (

        <View style={styles.container}>

            <View style={[styles.input, security ? { display: 'none' } : { display: 'flex' }]}>
                <Text style={styles.textPlace}>
                    {textPlace}
                </Text>
                <View style={styles.labels}>

                    <TextInput
                        secureTextEntry={security ? true : false}
                        keyboardType={type ? type : 'default'}
                        placeholderTextColor={theme.colors.white}
                        style={{color:theme.colors.white}}
                    />

                </View>
            </View>

            <View style={[styles.input, security ? { display: 'flex' } : { display: 'none' }]}>
                <Text style={styles.textPlace}>
                    {textPlace}
                </Text>
                <View style={styles.labels}>

                    <TextInput
                        secureTextEntry={eyes}
                        keyboardType='default'
                        placeholderTextColor={theme.colors.white}
                        style={styles.textInput}
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
                            color={theme.colors.EyesIcons}
                        />
                    </View>
                </RectButton>
            </View>
        </View>
    )
}