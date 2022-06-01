import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import balao from '../../assets/balao.json'
import { Text, View } from 'react-native';
import Lottie from 'lottie-react-native';
import cat from '../../assets/cat.json'
import { styles } from './style';

export function EditConfirmed() {
    const navigation = useNavigation()
    return (

        <View style={styles.container}>
            <SafeAreaView style={styles.cat}>
                <Lottie resizeMode='contain' source={cat} autoPlay loop />
            </SafeAreaView>
            <SafeAreaView style={styles.balao}>
                <Lottie resizeMode='contain' source={balao} autoPlay loop />
            </SafeAreaView>
            <View style={styles.containerInfos}>
                <Text style={styles.text}>
                    Evento Editado
                </Text>
                <Text style={styles.text}>
                    com sucesso
                </Text>
                <RectButton style={styles.button}
                    onPress={() =>
                        navigation.navigate('Events')}>
                    <Text style={styles.textButton}>
                        Voltar Tela inicial
                    </Text>
                </RectButton>
            </View>
        </View>
    );
}