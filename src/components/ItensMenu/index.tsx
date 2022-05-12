import React from 'react';

import { MaterialCommunityIcons, Fontisto, EvilIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { View, Text } from 'react-native';
import { styles } from './style';
import { useNavigation } from "@react-navigation/native";

type Props = {
    admin: boolean
}

export function ItensMenu({ admin }: Props) {
    const navigation = useNavigation()

    function handleNewEvent() {
        //@ts-ignore
        navigation.navigate("NewEvent");
    }
    function handleEditProfile() {
        //@ts-ignore
        navigation.navigate("ProfileEditing");
    }
    return (
        <View style={styles.container}>
            <RectButton style={styles.buttons} onPress={handleEditProfile}>
                <EvilIcons name="pencil" size={28} color={theme.colors.white} />
                <Text style={[styles.text, { marginLeft: 0 }]}>Editar Perfil</Text>
            </RectButton>
            <RectButton style={styles.buttons}>
                <MaterialCommunityIcons name="bell" size={24} color={theme.colors.white} />
                <Text style={styles.text}>Notificações</Text>
            </RectButton>
            <RectButton style={styles.buttons}>
                <Fontisto name="locked" size={24} color={theme.colors.white} />
                <Text style={[styles.text, { marginLeft: 9 }]}>Alterar Senha</Text>
            </RectButton>
            <View style={admin == true ? { display: 'none' } : { display: 'flex' }}>
                <RectButton style={styles.buttons}>
                    <MaterialCommunityIcons name="calendar-clock" size={24} color={theme.colors.white} />
                    <Text style={styles.text}>Historico de Eventos</Text>
                </RectButton>
            </View>
            <View style={admin == false ? { display: 'none' } : { display: 'flex' }}>
                <RectButton style={styles.buttons} onPress={handleNewEvent}>
                    <MaterialCommunityIcons name="calendar-check" size={24} color={theme.colors.white} />
                    <Text style={styles.text}>Criar Eventos</Text>
                </RectButton>
                <RectButton style={styles.buttons}>
                    <MaterialCommunityIcons name="calendar-clock" size={24} color={theme.colors.white} />
                    <Text style={styles.text}>Eventos Criados</Text>
                </RectButton>
            </View>
        </View>
    )
}
