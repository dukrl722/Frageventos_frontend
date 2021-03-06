import React from "react";

import { TextInput, View } from 'react-native';

import { styles } from './styles';

export function InputDescription() {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <View style={styles.labels}>
                    <TextInput
                        multiline
                        textAlignVertical="top"
                        numberOfLines={10}
                        placeholder='Descrição...'
                        keyboardType='default'
                        placeholderTextColor="white"
                        style={[{ color: '#000' }]}
                    />
                </View>
            </View>
        </View>
    )

}