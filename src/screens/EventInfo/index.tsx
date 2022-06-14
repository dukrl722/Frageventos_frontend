import React, { useState } from "react";

import { Feather, Ionicons, FontAwesome, EvilIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Header } from "../../components/Header";
import { Text, View } from "react-native";
import { Image } from "react-native";
import { styles } from "./style";

export function EventInfo({ route }) {
    const navigation = useNavigation();
    const [check, setCheck] = useState(false);
    const data = route.params.paramKey;

    function handlePayment() {
        navigation.navigate("Payment");
    }

    return (
        <Background>
            <Header object="arrow-left" />
            <View style={styles.container}>
                <View style={styles.box}>
                    <LinearGradient
                        colors={[
                            theme.colors.boxImageLinear1,
                            theme.colors.boxImageLinear2,
                        ]}
                        style={styles.boxImage}
                    >
                        <Image source={data.image} style={styles.Image} />
                        <View style={styles.iconCamera}>
                            <View style={styles.date}>
                                <Text style={styles.dateDay}>{data.day}</Text>
                                <Text style={styles.dateMonth}>
                                    {data.month}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.nameEvent}>
                            <Text style={styles.nameEventText}>
                                {data.name}
                            </Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.boxInfo}>
                        <View style={styles.info}>
                            <Ionicons name="time" size={24} color="black" />
                            <Text style={[styles.infoText, { marginLeft: 4 }]}>
                                Inicio as: {data.time}
                            </Text>
                        </View>
                        <View style={styles.info}>
                            <FontAwesome name="users" size={20} color="black" />
                            <Text style={[styles.infoText, { marginLeft: 5 }]}>
                                {data.quant} pessoas confirmadas
                            </Text>
                        </View>
                        <View style={styles.info}>
                            <FontAwesome name="user" size={24} color="black" />
                            <Text style={[styles.infoText, { marginLeft: 9 }]}>
                                Evento de:{" "}
                                <Text style={styles.nameLocal}>
                                    {data.Event}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.info}>
                            <FontAwesome
                                name="map-marker"
                                size={24}
                                color="black"
                            />
                            <Text style={[styles.infoText, { marginLeft: 12 }]}>
                                {data.Local}
                            </Text>
                        </View>
                        <View style={styles.info}>
                            <FontAwesome name="globe" size={24} color="black" />
                            <Text style={[styles.infoText, { marginLeft: 6 }]}>
                                Privacidade: {data.privacy}
                            </Text>
                        </View>
                        <View style={styles.info}>
                            <FontAwesome name="money" size={24} color="black" />
                            <Text style={[styles.infoText, { marginLeft: 2 }]}>
                                Valor R$: {data.value}
                            </Text>
                        </View>
                    </View>
                </View>
                <View></View>
                <RectButton style={styles.buttonPag} onPress={handlePayment}>
                    <Text style={styles.textButton}>Formas de Pagamento</Text>
                </RectButton>
            </View>
        </Background>
    );
}
