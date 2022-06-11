import React, { useState } from "react";
import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";

import { styles } from "./style";

import { Header } from "../../components/Header";
import { InputRegister } from "../../components/InputRegister";
import { EvilIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/73862-confetti.json";
import Lottie from "lottie-react-native";

import { Background } from "../../components/Background";

export function Congratulations({ route }) {
    const navigation = useNavigation();
    function direcaoCheck() {
        navigation.navigate("Congratulations");
    }

    return (
        <View style={styles.containerP}>
            <Header object="arrow-left" />
            <View style={styles.container}>
                <SafeAreaView style={styles.Logo}>
                    <Lottie resizeMode="contain" source={Logo} autoPlay loop />
                </SafeAreaView>
                <SafeAreaView style={styles.Logo}>
                    <Lottie resizeMode="contain" source={Logo} autoPlay loop />
                </SafeAreaView>
                <View style={styles.containerInfos}>
                    <Text style={styles.text}>Evento Editado</Text>
                    <Text style={styles.text}>com sucesso</Text>
                    <RectButton
                        style={styles.button}
                        onPress={() => navigation.navigate("Events")}
                    >
                        <Text style={styles.textButton}>
                            Voltar Tela inicial
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
