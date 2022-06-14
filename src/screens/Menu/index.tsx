import React, { useRef } from 'react';
import Background from '../../assets/background.png';

import {  ImageBackground, Animated, Pressable } from 'react-native';
import { ItensMenu } from '../../components/ItensMenu';
import { styles } from './style';

type Props = {
    ModalMinimaze: boolean
}

export function Menu({ ModalMinimaze }: Props) {
    const width = useRef(new Animated.Value(0)).current;
    
    Animated.timing(width, {
        toValue: 300,
        duration: 500,
        useNativeDriver: false
    }).start();
    
    return (
        <>
            <Animated.View style={{
                width: width,
                height: '100%',
            }}>
                <ImageBackground style={styles.background} source={Background}>
                    <ItensMenu admin={true} ModalMinimaze={ModalMinimaze} />
                </ImageBackground>
            </Animated.View>
            <Pressable style={styles.minimaze} onPress={() => ModalMinimaze(false)} />
        </>
    );
}
