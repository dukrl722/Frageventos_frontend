import React from 'react';
import Background from '../../assets/background.png';
import Logo from '../../assets/splash.png';

import { FlatList, RectButton } from 'react-native-gesture-handler';
import { View, Text, ImageBackground, Image } from 'react-native';
import { InputProfiles } from '../../components/InputProfiles';
import { useNavigation } from "@react-navigation/native";
import { theme } from '../../global/styles/theme';
import { Fontisto } from '@expo/vector-icons';
import { profile } from '../../utils/Profile';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';

export function PasswordEditing() {
    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.background} source={Background}>
            <View style={styles.cabecalho}>
                <Feather
                    name={'arrow-left'}
                    color={theme.colors.black}
                    size={25}
                    onPress={navigation.goBack}
                    style={styles.arrow}
                />
                <Image source={Logo} style={styles.imageContainer} />
            </View>
            <View style={styles.profileInfos}>
                <FlatList keyExtractor={item => item.id} data={profile} renderItem={({ item }) => (
                    <>
                        <View style={styles.imgProfileContainer}>
                            <Image source={item.image} style={styles.imageProfile} />
                            <Text style={styles.NameUser}>
                                {item.name}
                            </Text>
                        </View>
                    </>
                )} />
                <View style={styles.title}>
                    <Fontisto name="locked" size={15} color={theme.colors.white} />
                    <Text style={styles.subtitle}>
                        Alterar Senha
                    </Text>
                </View>
                <View style={styles.inputs}>
                    <InputProfiles textPlace='Senha Atual' security />
                    <InputProfiles textPlace='Nova Senha' security />
                    <InputProfiles textPlace='Repetir Nova Senha' security />
                </View>
                <RectButton style={styles.button}>
                    <Text style={styles.textButton}>
                        Alterar Senha
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    );
}