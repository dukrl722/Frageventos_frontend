import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { styles } from "./style";

import { Header } from "../../components/Header";
import { InputRegister } from "../../components/InputRegister";
import { ConfirmTerms } from "../../components/ConfirmTerms";
import { InputDescription } from "../../components/InputDescription";
import { EvilIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";

import Logo from "../../assets/logo-pix.png";

export function Pix({ route }) {
    const navigation = useNavigation();
    function direcaoCheck() {
        navigation.navigate("Congratulations");
    }

    return (
        <View style={styles.containerP}>
            <Header object="arrow-left" />
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Image style={styles.tinyLogo} source={Logo} />
                    <Text style={styles.textEdit}>Pagamento com Pix</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.textEdit2}>
                        1- Copie código de pagamento abaixo
                    </Text>
                    <Text style={styles.textEdit2}>
                        2- Abra o App do seu banco e encontre a opção de
                        pagamento com Pix
                    </Text>
                    <Text style={styles.textEdit2}>
                        3- selecione a função colar Pix.
                    </Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.textEdit2}>
                        copiar código de pagamento Pix:
                    </Text>
                    <Text style={styles.textEdit3}>
                        00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426655440000
                    </Text>
                </View>
                <View style={styles.container4}>
                    <RectButton style={styles.buttonPag} onPress={direcaoCheck}>
                        <Text style={styles.textButton}>Reservar Ingreço</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
