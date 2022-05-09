import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Pressable } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { styles } from './style';

import Logo from '../../assets/splash.png';
import Background from '../../assets/background.png';

import { GenericInput } from "../../components/GenericInput";
import { GenericButton } from "../../components/GenericButton";
import { GenericButtonSocialMedia } from "../../components/GenericButtonSocialMedia";

export function Login() {
    const navigation = useNavigation()

    function handleRegister() {
        //@ts-ignore
        navigation.navigate("Register");
    }
    return (
        <ImageBackground style={styles.background} source={Background}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.viewContent}>
                        <Image source={Logo} resizeMode="stretch" style={styles.image} />
                        <Text style={styles.textTitle}>Log in</Text>
                    </View>

                    <View>
                        <GenericInput name="Email" type="email" />
                        <GenericInput name="Senha" type="password" />
                        <Text style={styles.forgot}>Esqueceu sua senha?</Text>
                    </View>

                    <View style={styles.buttonContent}>
                        <GenericButton name="Entrar" />
                    </View>

                    <View>
                        <GenericButtonSocialMedia name="Facebook" type="facebook" />
                        <GenericButtonSocialMedia name="Google" type="google" />
                    </View>
                    <View style={styles.forgotView}>
                        <Text style={styles.forgot}>Não tem uma conta?

                            <Text onPress={handleRegister}> Cadastre-se</Text>

                        </Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
