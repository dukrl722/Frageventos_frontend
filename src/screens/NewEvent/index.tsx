import React from 'react';
import { View, Text, ScrollView } from 'react-native';


import { styles } from './style';

import { Header } from '../../components/Header';
import { InputRegister } from '../../components/InputRegister';
import { ConfirmTerms } from '../../components/ConfirmTerms';
import { InputDescription } from '../../components/InputDescription';

export function NewEvent() {

    return (
        <ScrollView style={styles.container}>
            <Header object='arrow-left' />
            <View >
                <InputRegister placeholder='Nome do evento' />
                <InputRegister placeholder='Local' />
                <InputRegister placeholder='Data/Hora' />
                <InputRegister placeholder='Categoria' />
                <InputRegister placeholder='Atração' />
                <InputRegister placeholder='Privacidade' />
                <InputDescription />
            </View>
            <ConfirmTerms Name='Criar' />
        </ScrollView>
    );
}
