import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../PagamentoCartao/styles';
import { CompraBackground } from "../../components/CompraBackground";
import { HeaderMenu } from '../../components/HeaderMenu';
import { CompraButton } from '../../components/CompraButton';
import { InputInformation } from '../../components/InputInformation'

import cartao from '../../assets/cartaozinho.png'
import { ScrollView } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';

export function PagamentoCartao() {

    return (
        <View style={styles.container} >
            <HeaderMenu />
            <ScrollView>
            <View style={styles.screen}>
                <View style={styles.viewContent}>
                    <Image source={cartao} resizeMode="center" style={styles.image} />
                    <Text style={styles.textContent}>Pagamento com cartão</Text>
                </View>
                <View style={styles.infos}>
                    <InputInformation />
                </View>
                <CompraButton name="Realizar compra" />
            </View>
            </ScrollView>
        </View>

    )
}