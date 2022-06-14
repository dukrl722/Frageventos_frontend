import React from 'react';
import {View, Image, TextInput, Text} from 'react-native';
import { styles } from './styles';

import cartao from '../../assets/cartaozinho.png'

export function InputInformation() {

    return (
        <View style={styles.container}>
            <View style={styles.viewContent}>
                <Text style={[styles.smallText]}>Numero</Text>
                <Image source={cartao} resizeMode="center" style={styles.smallImage}/>
                <TextInput placeholder="1234567789" style={[styles.input]}/>
                <Text style={[styles.bottomLine]}>-----------------------------------------------</Text>
            </View>

            <View style={[styles.viewContent, styles.viewContent2]}>
                <Text style={[styles.smallText]}>Nome do Titular</Text>
                <TextInput placeholder="RAFAEL DA SILVA PINTO" style={[styles.input, styles.input2]}/>
                <Text style={[styles.bottomLine, styles.bottomLine2]}>-----------------------------------------------</Text>
            </View>

            <View style={[styles.viewContent, styles.viewContent3]}>
                <Text style={[styles.smallText, styles.smallText2]}>Validade</Text>
                <TextInput placeholder="MM/YY" style={[styles.input, styles.input3]}/>
                <Text style={[styles.bottomLine, styles.bottomLine3]}>---------------------</Text>
            </View>

            <View style={[styles.viewContent, styles.viewContent4]}>
                <Text style={[styles.smallText, styles.smallText2]}>CVV</Text>
                <TextInput placeholder="123" style={[styles.input, styles.input4]}/>
                <Text style={[styles.bottomLine, styles.bottomLine4]}>---------------------</Text>
            </View>

            <View style={[styles.viewContent, styles.viewContent5]}>
                <Text style={[styles.smallText]}>CPF do titular</Text>
                <TextInput placeholder="123.456.789-01" style={[styles.input, styles.input5]}/>
                <Text style={[styles.bottomLine, styles.bottomLine5]}>--------------------------------------------</Text>
            </View>


        </View>
    )
}