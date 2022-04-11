import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AuthRoutes} from "./src/routes";

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <AuthRoutes />
        </>
    );
}
