import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import cat from "../../assets/73862-confetti.json";
import balao from "../../assets/76411-confetti-effects-lottie-animation.json";
import { Text, View } from "react-native";
import Lottie from "lottie-react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";

export function Congratulations() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.cat}></SafeAreaView>
            <SafeAreaView style={styles.balao}>
                <Lottie resizeMode="contain" source={balao} autoPlay loop />
            </SafeAreaView>
            <View style={styles.containerInfos}>
                <Text style={styles.text}>Evento Editado</Text>
                <Text style={styles.text}>com sucesso</Text>
                <RectButton
                    style={styles.button}
                    onPress={() => navigation.navigate("Events")}
                >
                    <Text style={styles.textButton}>Voltar Tela inicial</Text>
                </RectButton>
            </View>
        </View>
    );
}
