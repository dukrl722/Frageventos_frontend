import React from 'react';
import { View, Image, TextInput, Text } from 'react-native';
import { styles } from './styles';

import cartao from '../../assets/cartaozinho.png'
import { ScrollView } from 'react-native-gesture-handler';

export function InputInformation() {

    return (
        <View style={styles.container}>

            <View style={styles.viewContent}>
                <Text style={[styles.smallText]}>Numero</Text>
                <Image source={cartao} resizeMode="center" style={styles.smallImage} />
                <TextInput placeholder="1234567789" keyboardType='numeric' style={[styles.inputImage]} />
                <Text style={[styles.bottomLine]}>-----------------------------------------------</Text>
            </View>
            <View style={styles.viewContent}>
                <Text style={[styles.smallText]}>Nome do titular</Text>
                <TextInput placeholder="RAFAEL DA SILVA PINTO" style={[styles.input]} />
                <Text style={[styles.bottomLine]}>-----------------------------------------------</Text>
            </View>
            <View style={{ flexDirection: "row"}}>
                <View style={styles.viewContentMini}>
                    <Text style={[styles.smallText]}>Validade</Text>
                    <TextInput placeholder="MM/YY" keyboardType='numeric' style={[styles.input]} />
                    <Text style={[styles.bottomLine]}>-------------------</Text>
                </View>
                <View style={styles.viewContentMini}>
                    <Text style={[styles.smallText]}>CVV</Text>
                    <TextInput placeholder="123" keyboardType='numeric' style={[styles.input]} />
                    <Text style={[styles.bottomLine]}>-------------------</Text>
                </View>
            </View>
            <View style={[styles.viewContent, { marginBottom: 50 }]}>
                <Text style={[styles.smallText]}>CPF do Titular</Text>
                <TextInput placeholder="123.456.789-01" keyboardType='numeric' style={[styles.input]} />
                <Text style={[styles.bottomLine]}>-----------------------------------------------</Text>
            </View>

        </View>
    )
}