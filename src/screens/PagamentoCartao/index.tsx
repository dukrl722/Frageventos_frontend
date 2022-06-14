import React from 'react';
import {View, Image, Text} from 'react-native';
import { styles } from '../PagamentoCartao/styles';
import { CompraBackground } from "../../components/CompraBackground";
import { HeaderMenu } from '../../components/HeaderMenu';
import { CompraButton } from '../../components/CompraButton';
import { InputInformation } from '../../components/InputInformation'

import cartao from '../../assets/cartaozinho.png'

export function PagamentoCartao() { 

    return (
        <CompraBackground>
            <HeaderMenu/>
            <View style={styles.cabecalho}>
                <View style={styles.viewContent}>
                    <Image source={cartao} resizeMode="center" style={styles.image}/>
                    <Text style={styles.textContent}>Pagamento com cartão</Text>
                </View>
                
                <InputInformation />

                <CompraButton name="Realizar compra"/>
            </View>
        </CompraBackground>
    )
}