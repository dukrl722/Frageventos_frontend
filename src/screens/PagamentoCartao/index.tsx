import React from 'react';
import {View, ImageBackground} from 'react-native';
import { styles } from '../PagamentoCartao/styles';
import { CompraBackground } from "../../components/CompraBackground";
import { HeaderMenu } from '../../components/HeaderMenu';
import { CompraButton } from '../../components/CompraButton';

export function PagamentoCartao() { 

    return (
        <CompraBackground>
            <HeaderMenu/>
            <View style={styles.cabecalho}>

                <CompraButton name="Realizar compra"/>
            </View>
        </CompraBackground>
    )
}