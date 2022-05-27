import React, { useState } from 'react';

import { Feather, Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Background } from "../../components/Background";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { Header } from '../../components/Header';
import { event } from '../../utils/Event';
import { Text, View } from 'react-native';
import { Image } from 'react-native';
import { styles } from './style';

export function EventEdit() {
    const [check, setCheck] = useState(false);

    return (
        <Background>
            <Header object='arrow-left' />
            <View style={styles.container}>
                {

                    event.map((request, i) => (
                        <>
                            <View key={i} style={[styles.box, request.id === '1' ? { display: 'flex' } : { display: 'none' }]}>
                                <LinearGradient
                                    colors={[theme.colors.boxImageLinear1, theme.colors.boxImageLinear2]}
                                    style={styles.boxImage}>
                                    <Image source={request.image} style={styles.Image} />
                                    <View style={styles.iconCamera}>
                                        <View style={styles.date}>
                                            <Text style={styles.dateDay}>
                                                {request.day}
                                            </Text>
                                            <Text style={styles.dateMonth}>
                                                {request.month}
                                            </Text>
                                        </View>
                                        <RectButton style={styles.camera}>
                                            <Feather name="camera" size={40} color="white" />
                                        </RectButton>
                                    </View>
                                    <View style={styles.nameEvent}>
                                        <Text style={styles.nameEventText}>
                                            {request.name}
                                        </Text>
                                    </View>
                                </LinearGradient>
                                <View style={styles.boxInfo}>
                                    <RectButton style={styles.edit}>
                                        <EvilIcons name="pencil" size={28} color={theme.colors.black} />
                                    </RectButton>
                                    <View style={styles.info}>
                                        <Ionicons name="time" size={24} color="black" />
                                        <Text style={[styles.infoText, { marginLeft: 4 }]}>
                                            Inicio as: {request.time}
                                        </Text>
                                    </View>
                                    <View style={styles.info}>
                                        <FontAwesome name="users" size={20} color="black" />
                                        <Text style={[styles.infoText, { marginLeft: 5 }]}>
                                            79 pessoas confirmadas
                                        </Text>
                                    </View>
                                    <View style={styles.info}>
                                        <FontAwesome name="user" size={24} color="black" />
                                        <Text style={[styles.infoText, { marginLeft: 9 }]}>
                                            Evento de: <Text style={styles.nameLocal}>{request.Event}</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.info}>
                                        <FontAwesome name="map-marker" size={24} color="black" />
                                        <Text style={[styles.infoText, { marginLeft: 12 }]}>
                                            {request.Local}
                                        </Text>
                                    </View>
                                    <View style={styles.info}>
                                        <FontAwesome name="globe" size={24} color="black" />
                                        <Text style={[styles.infoText, { marginLeft: 6 }]}>
                                            Privacidade: {request.privacy}
                                        </Text>
                                    </View>
                                    <View style={styles.info}>
                                        <FontAwesome name="money" size={24} color="black" />
                                        <Text style={[styles.infoText, { marginLeft: 2 }]}>
                                            Valor R$: {request.value}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[request.id === '1' ? { display: 'flex' } : { display: 'none' }]}>
                                <View style={styles.confirm}>
                                    <Text onPress={() => {
                                        setCheck(!check)
                                    }} style={!check ? styles.confirmText : { display: 'none' }}>
                                        Confirmar edições
                                    </Text>
                                </View>
                                <RectButton style={check ? styles.buttonChecked : styles.buttonCheck}
                                    enabled={check}
                                >
                                    <Text style={styles.textButton}>
                                        Publicar Evento
                                    </Text>
                                </RectButton>
                            </View>
                        </>
                    ))
                }

            </View>
        </Background >
    );
}