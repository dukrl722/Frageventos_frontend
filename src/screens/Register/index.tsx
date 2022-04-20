import React from 'react';
import { View, Text, ScrollView } from 'react-native';


import { styles } from './style';

import { Header } from '../../components/Header';
import { InputRegister } from '../../components/InputRegister';
import { ConfirmTerms } from '../../components/ConfirmTerms';

export function Register() {

    return (
        <ScrollView style={styles.container}>
            <Header object='arrow-left' />
            <View >
                <InputRegister placeholder='CPF/CNPJ' type='numeric' />
                <InputRegister placeholder='Nome' />
                <InputRegister placeholder='Sobrenome' />
                <InputRegister placeholder='Gênero' />
                <InputRegister placeholder='Data Nascimento' type='numeric' />
                <InputRegister placeholder='Email' type='email-address' />
                <InputRegister placeholder='Confirme o Email' type='email-address' />
                <InputRegister placeholder='Telefone' type='numeric' />
                <InputRegister placeholder='Senha' security />
                <InputRegister placeholder='Confirme a Senha' security />
            </View>
            <ConfirmTerms Name='Cadastrar'/>
        </ScrollView>
    );
}
