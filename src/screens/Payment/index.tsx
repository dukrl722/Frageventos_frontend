import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./style";
import { Header } from "../../components/Header";
import { EvilIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import Logo from "../../assets/logo-pix.png";
import cartao from '../../assets/cartaozinho.png'

export function Payment() {
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
                    <Text style={styles.title}> Formas de Pagamento</Text>
                </View>
                <View style={styles.container_3}>
                    <TouchableOpacity
                     style={[check1?styles.container_4:styles.container_5]}
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
                       style={[check2?styles.container_4:styles.container_5]}
                        onPress={() => {
                            setCheck2(!check2);
                            setCheck1(false);
                            setCheck3(false);
                        }}
                    >
                         <Image style={styles.tinyLogo} source={cartao} />
                        <Text style={styles.textEdit}>Cartão de Credito</Text>
                        <RectButton
                            style={check2 ? styles.checked : styles.check}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[check3?styles.container_4:styles.container_5]}
                        onPress={() => {
                            setCheck3(!check3);
                            setCheck1(false);
                            setCheck2(false);
                        }}
                    >
                        <Image style={styles.tinyLogo} source={cartao} />
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
