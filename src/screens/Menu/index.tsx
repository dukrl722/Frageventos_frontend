import React from 'react';

import { useNavigation } from "@react-navigation/native";
import { ItensMenu } from '../../components/ItensMenu';
import Background from '../../assets/background.png';
import { View, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';
import { theme } from '../../global/styles/theme';

export function Menu() {
    const navigation = useNavigation()
    return (
        <ImageBackground style={styles.background} source={Background}>
            <View style={styles.header}>
                <Feather
                    name={'arrow-left'}
                    color={theme.colors.black}
                    size={25}
                    onPress={navigation.goBack}
                    style={styles.arrow}
                />
            </View>
            <ItensMenu admin={true} />
        </ImageBackground>
    );
}
