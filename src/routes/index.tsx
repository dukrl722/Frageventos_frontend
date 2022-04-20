import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from '../global/styles/theme';

import { Login } from "../screens/Login";
import { Events } from "../screens/Events";
import { Categories } from "../screens/Categories";
import { Register } from "../screens/Register";
import {TermsUse} from "../screens/TermsUse"
import { NavigationContainer } from '@react-navigation/native';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: theme.colors.primary
                    }
                }}>
                    
                <Screen
                    name="Register"
                    component={Register}
                />
                  <Screen
                    name="TermsUse"
                    component={TermsUse}
                />

            </Navigator>
        </NavigationContainer>
    )
}
