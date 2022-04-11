import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import {useNavigation} from "@react-navigation/native";

import {styles} from './style';

import Logo from '../../assets/splash.png';
import Background from '../../assets/background.png';

import {BackgroundImage} from '../../components/BackgroundImage';
import {GenericInput} from "../../components/GenericInput";
import {GenericButton} from "../../components/GenericButton";
import {GenericButtonSocialMedia} from "../../components/GenericButtonSocialMedia";

export function Login() {

    return (
        <ImageBackground source={Background} resizeMode="cover" style={styles.imageContainer}>

            <View style={styles.container}>
                <View style={styles.viewContent}>
                    <Image source={Logo} resizeMode="stretch" style={styles.image}/>
                    <Text style={styles.textTitle}>Log in</Text>
                </View>

                <View>
                    <GenericInput name="Email" type="email"/>
                    <GenericInput name="Senha" type="password"/>
                    <Text style={styles.forgot}>Esqueceu sua senha?</Text>
                </View>

                <GenericButton name="Entrar"/>

                <View>
                    <GenericButtonSocialMedia name="Facebook" type="facebook"/>
                    <GenericButtonSocialMedia name="Google" type="google"/>
                    <Text style={styles.forgot}>Não tem uma conta? Cadastre-e</Text>
                </View>
            </View>

        </ ImageBackground>
    );
}
