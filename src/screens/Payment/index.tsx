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

import { Background } from "../../components/Background";

import Logo from "../../assets/logo-pix.png";

export function Payment() {
    const [check, setCheck] = useState(false);
    return (
        <View style={styles.container}>
            <Header object="arrow-left" />
            <View style={styles.container_1}>
                <View style={styles.container_2}>
                    <Text> Formas de Pagamento</Text>
                </View>
                <View style={styles.container_3}>
                    <View style={styles.container_4}>
                        <Image style={styles.tinyLogo} source={Logo} />
                        <Text>PIX</Text>
                        <RectButton
                            style={check ? styles.checked : styles.check}
                            onPress={() => {
                                setCheck(!check);
                            }}
                        />
                    </View>
                    <View style={styles.container_4}>
                        <EvilIcons name="credit-card" size={70} color="black" />
                        <Text>Cartão de Credito</Text>
                        <RectButton
                            style={check ? styles.checked : styles.check}
                            onPress={() => {
                                setCheck(!check);
                            }}
                        />
                    </View>
                    <View style={styles.container_4}>
                        <EvilIcons name="credit-card" size={70} color="black" />
                        <Text>Cartão de Debito</Text>
                        <RectButton
                            style={check ? styles.checked : styles.check}
                            onPress={() => {
                                setCheck(!check);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.container_2}>
                    <RectButton style={styles.buttonPag}>
                        <Text style={styles.textButton}>
                            Formas de Pagamento
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
