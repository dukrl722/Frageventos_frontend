import React from "react";

import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold,Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import AppLoading from "expo-app-loading";

import {StatusBar} from 'react-native';
import{ AuthRoutes } from "./src/routes";

export default function App() {

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <AuthRoutes />
        </>
    );
}
