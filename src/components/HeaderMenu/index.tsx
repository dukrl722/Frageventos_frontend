import React, { useState } from 'react';

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/splash.png';
import { Image } from 'react-native';
import { styles } from './style';
import { ModalView } from '../ModalView';
import { Menu } from '../../screens/Menu';

export function HeaderMenu() {
    const { headerPrimary, headerSecondary } = theme.colors;

    const [openMenuModal, setOpenMenuModal] = useState(false);

    function ModalMinimaze() {
        setOpenMenuModal(false)
    }

    return (
        <LinearGradient colors={[headerPrimary, headerSecondary]} style={styles.container}>
            <Feather
                name={'menu'}
                color={'black'}
                size={25}
                onPress={() => {
                    setOpenMenuModal(!openMenuModal)
                }}
                style={styles.arrow}
            />
            <Image source={Logo} style={styles.imageContainer} />
            <ModalView visible={openMenuModal}
            >
                <Menu ModalMinimaze={ModalMinimaze} />
            </ModalView>
        </LinearGradient>
    )
}
