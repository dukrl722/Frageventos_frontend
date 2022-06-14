import React, { useRef } from 'react';
import Background from '../../assets/background.png';

import { View, Animated, Pressable } from 'react-native';
import { ItensMenu } from '../../components/ItensMenu';
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    ModalMinimaze: boolean
}

export function Notify({ ModalMinimazeNotify }: Props) {
    const height = useRef(new Animated.Value(0)).current;

    Animated.timing(height, {
        toValue: 400,
        duration: 500,
        useNativeDriver: false
    }).start();

    return (
        <>
            <Animated.View style={{
                width: '100%',
                height: height,
            }}>
                <LinearGradient colors={['#D9D9D9', "#D5D5D5"]} style={styles.background}>

                </LinearGradient>
                <View >

                </View>
            </Animated.View>
            <Pressable style={styles.minimaze} onPress={() => ModalMinimazeNotify(false)} />
        </>
    );
}
