import React, { useState } from 'react';

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/splash.png';
import { Image, View } from 'react-native';
import { styles } from './style';
import { ModalView } from '../ModalView';
import { Menu } from '../../screens/Menu';
import { Notify } from '../../screens/Notify';

export function HeaderMenu() {
    const { headerPrimary, headerSecondary } = theme.colors;

    const [openMenuModal, setOpenMenuModal] = useState(false);
    const [openNotifyModal, setopenNotifyModal] = useState(false);

    function ModalMinimaze() {
        setOpenMenuModal(false)
    }
    function ModalMinimazeNotify() {
        setopenNotifyModal(false)
    }

    return (
        <LinearGradient colors={[headerPrimary, headerSecondary]} style={styles.container}>
            <View style={styles.arrow}>
                <Feather
                    name={'menu'}
                    color={'white'}
                    size={25}
                    onPress={() => {
                        setOpenMenuModal(!openMenuModal)
                    }}
                />
            </View>
            <Image source={Logo} style={styles.imageContainer} />
            <View style={styles.bell}>
                <Feather
                    name={'bell'}
                    color={'white'}
                    size={25}
                    onPress={() => {
                        setopenNotifyModal(!openNotifyModal)
                    }}
                />
            </View>
            <ModalView visible={openMenuModal}>
                <Menu ModalMinimaze={ModalMinimaze} />
            </ModalView>
            <ModalView visible={openNotifyModal}>
                <Notify ModalMinimazeNotify={ModalMinimazeNotify} />
            </ModalView>
        </LinearGradient>
    )
}
