import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

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

export function Payment({ route }) {
    const navigation = useNavigation();
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    function direcaoCheck() {
        if (check1 != false) {
            navigation.navigate("Pix");
        } else if (check2 != false) {
            navigation.navigate("PagamentoCartao");
        } else if (check3 != false) {
            navigation.navigate("PagamentoCartao");
        }
    }

    return (
        <View style={styles.container}>
            <Header object="arrow-left" />
            <View style={styles.container_1}>
                <View style={styles.container_2}>
                    <Text style={styles.textEdit}> Formas de Pagamento</Text>
                </View>
                <View style={styles.container_3}>
                    <TouchableOpacity
                        style={styles.container_4}
                        onPress={() => {
                            setCheck1(!check1);
                            setCheck2(false);
                            setCheck3(false);
                        }}
                    >
                        <Image style={styles.tinyLogo} source={Logo} />
                        <Text style={styles.textEdit}>PIX</Text>
                        <RectButton
                            style={check1 ? styles.checked : styles.check}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.container_4}
                        onPress={() => {
                            setCheck2(!check2);
                            setCheck1(false);
                            setCheck3(false);
                        }}
                    >
                        <EvilIcons name="credit-card" size={55} color="black" />
                        <Text style={styles.textEdit}>Cartão de Credito</Text>
                        <RectButton
                            style={check2 ? styles.checked : styles.check}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.container_4}
                        onPress={() => {
                            setCheck3(!check3);
                            setCheck1(false);
                            setCheck2(false);
                        }}
                    >
                        <EvilIcons name="credit-card" size={55} color="black" />
                        <Text style={styles.textEdit}>Cartão de Debito</Text>
                        <RectButton
                            style={check3 ? styles.checked : styles.check}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.container_2}>
                    <RectButton style={styles.buttonPag} onPress={direcaoCheck}>
                        <Text style={styles.textButton}>Reservar Ingreço</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
