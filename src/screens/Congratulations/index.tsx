import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import lott from "../../assets/73862-confetti.json";
import { Text, View } from "react-native";
import Lottie from "lottie-react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";

export function Congratulations() {
    const navigation = useNavigation();
    function Volta() {
        navigation.navigate("Events");
    }

    return (
        <View style={styles.container}>
            <Header object="arrow-left" />
            <SafeAreaView style={styles.lott}>
                <Lottie resizeMode="contain" source={lott} autoPlay loop />
            </SafeAreaView>
            <View style={styles.containerInfos}>
                <Text style={styles.text}>Parabens ingresso reservado com</Text>
                <Text style={styles.text}>sucesso. Tenha um ótimo Evento!</Text>
                <View style={styles.container4}>
                    <RectButton style={styles.buttonPag} onPress={Volta}>
                        <Text style={styles.textButton}>Voltar ao Menu</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
