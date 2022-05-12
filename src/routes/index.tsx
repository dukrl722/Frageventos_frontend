import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../global/styles/theme';

import { ProfileEditing } from '../screens/ProfileEditing';
import { Categories } from "../screens/Categories";
import { Register } from "../screens/Register";
import { NewEvent } from '../screens/NewEvent';
import { TermsUse } from "../screens/TermsUse";
import { Events } from "../screens/Events";
import { Login } from "../screens/Login";
import { Menu } from '../screens/Menu';

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
                    name="Login"
                    component={Login}
                />
                <Screen
                    name="NewEvent"
                    component={NewEvent}
                />
                <Screen
                    name="TermsUse"
                    component={TermsUse}
                />
                <Screen
                    name="Register"
                    component={Register}
                />
                <Screen
                    name="Events"
                    component={Events}
                />
                <Screen
                    name="Categories"
                    component={Categories}
                />
                <Screen
                    name="Menu"
                    component={Menu}
                />
                 <Screen
                    name="ProfileEditing"
                    component={ProfileEditing}
                />
            </Navigator>
        </NavigationContainer>
    )
}
