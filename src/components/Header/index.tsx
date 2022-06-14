import React from 'react';

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/splash.png';
import { Image} from 'react-native';
import { styles } from './style';

type Props = {
    object?: string;
}

export function Header({ object, ...rest }: Props) {
    const { headerPrimary, headerSecondary } = theme.colors;
    const navigation = useNavigation()

    function handleMenu() {
        //@ts-ignore
        navigation.navigate("Menu");
    }

    return (

        <LinearGradient colors={[headerPrimary, headerSecondary]} style={styles.container}>
            <Feather
                name={object ? object : ""}
                color={'white'}
                size={25}
                onPress={object == 'menu' ? handleMenu : navigation.goBack}
                style={styles.arrow}
            />
            <Image source={Logo} style={styles.imageContainer} />
            
        </LinearGradient>
    )
}
