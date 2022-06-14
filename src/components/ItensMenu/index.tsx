import React from 'react';

import { MaterialCommunityIcons, Fontisto, EvilIcons, Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { theme } from '../../global/styles/theme';
import { View, Text } from 'react-native';
import { styles } from './style';

type Props = {
    admin: boolean;
    ModalMinimaze?: boolean
}

export function ItensMenu({ admin, ModalMinimaze }: Props) {
    const navigation = useNavigation()

    function handlePrincipal() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("Events");
    }
    function handleNewEvent() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("NewEvent");
    }
    function handleEditProfile() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("ProfileEditing");
    }
    function handleEditPassword() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("PasswordEditing");
    }
    function handleEventsCreate() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("EventsCreated");
    }
    function handleHistoric() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("HandleHistoric");
    }
    function handleEventEdit() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("EventEdit");
    }
    function handleExit() {
        //@ts-ignore
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container}>
            <RectButton style={styles.buttons}>
                <Feather name="home" size={24} color={theme.colors.white} onPress={handlePrincipal} />
                <Text style={[styles.text, { marginLeft: 4 }]} onPress={handlePrincipal}>Principal</Text>
            </RectButton>
            <RectButton style={styles.buttons}>
                <EvilIcons name="pencil" size={28} color={theme.colors.white} onPress={handleEditProfile} />
                <Text style={[styles.text, { marginLeft: 0 }]} onPress={handleEditProfile}>Editar Perfil</Text>
            </RectButton>
            <RectButton style={styles.buttons} >
                <Fontisto name="locked" size={24} color={theme.colors.white} onPress={handleEditPassword} />
                <Text style={[styles.text, { marginLeft: 9 }]} onPress={handleEditPassword}>Alterar Senha</Text>
            </RectButton>
            <View style={admin == true ? { display: 'none' } : { display: 'flex' }}>
                <RectButton style={styles.buttons}>
                    <MaterialCommunityIcons name="calendar-clock" size={24} color={theme.colors.white} onPress={handleHistoric} />
                    <Text style={styles.text} onPress={handleHistoric}>Historico de Eventos</Text>
                </RectButton>
            </View>
            <View style={admin == false ? { display: 'none' } : { display: 'flex' }}>
                <RectButton style={styles.buttons} >
                    <MaterialCommunityIcons name="calendar-check" size={24} color={theme.colors.white} onPress={handleNewEvent} />
                    <Text style={styles.text} onPress={handleNewEvent}>Criar Eventos</Text>
                </RectButton>
                <RectButton style={styles.buttons}>
                    <MaterialCommunityIcons name="calendar-clock" size={24} color={theme.colors.white} onPress={handleEventsCreate} />
                    <Text style={styles.text} onPress={handleEventsCreate} >Eventos Criados</Text>
                </RectButton>
                <RectButton style={styles.buttons}>
                    <MaterialCommunityIcons name="exit-run" size={24} color={theme.colors.white} onPress={handleExit} />
                    <Text style={styles.text} onPress={handleExit}>Sair</Text>
                </RectButton>
            </View>
        </View>
    )
}
