import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../global/styles/theme";

import { PasswordEditing } from "../screens/PasswordEditing";
import { PagamentoCartao } from "../screens/PagamentoCartao";
import { Congratulations } from "../screens/Congratulations";
import { HandleHistoric } from "../screens/HandleHistoric";
import { ProfileEditing } from "../screens/ProfileEditing";
import { EventsCreated } from "../screens/EventsCreated";
import { EditConfirmed } from "../screens/EditConfirmed";
import { Categories } from "../screens/Categories";
import { EventEdit } from "../screens/EventEdit";
import { EventInfo } from "../screens/EventInfo";
import { Register } from "../screens/Register";
import { NewEvent } from "../screens/NewEvent";
import { TermsUse } from "../screens/TermsUse";
import { Events } from "../screens/Events";
import { Notify } from '../screens/Notify';
import { Payment } from "../screens/Payment";
import { Login } from "../screens/Login";
import { Menu } from "../screens/Menu";
import { Pix } from "../screens/Pix";
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
                <Screen
                    name="PasswordEditing"
                    component={PasswordEditing}
                />
                <Screen
                    name="EventsCreated"
                    component={EventsCreated}
                />
                <Screen
                    name="HandleHistoric"
                    component={HandleHistoric}
                />
                <Screen
                    name="EventEdit"
                    component={EventEdit}
                />
                <Screen
                    name="EditConfirmed"
                    component={EditConfirmed}
                />

                <Screen
                    name="EventInfo"
                    component={EventInfo}
                />
                <Screen
                    name="Notify"
                    component={Notify}
                />
                <Screen
                    name="Payment"
                    component={Payment}
                />
                <Screen
                    name="PagamentoCartao"
                    component={PagamentoCartao}
                />
                <Screen
                    name="Pix"
                    component={Pix}
                />
                <Screen
                    name="Congratulations"
                    component={Congratulations}
                />

            </Navigator >
        </NavigationContainer >
    );
}
