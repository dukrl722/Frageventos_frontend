import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';

type Props = {
    Name: string
}
export function ConfirmTerms({ Name }: Props) {
    const [check, setCheck] = useState(false);

    const navigation = useNavigation()

    function TermsUse() {
        //@ts-ignore
        navigation.navigate("TermsUse");
    }

    return (
        <View style={styles.container}>
            <View style={styles.terms}>
                <RectButton
                    style={check ? styles.checked : styles.check}
                    onPress={() => {
                        setCheck(!check)
                    }} />
                <Text>
                    <Text>Li e concordo com os</Text>
                    <Text style={{ fontWeight: "bold" }} onPress={TermsUse}>
                        Termos de Uso
                    </Text>
                </Text>

            </View>
            <View style={styles.teste}>
                <RectButton style={check ? styles.buttonChecked : styles.buttonCheck}
                    enabled={check}
                >
                    <Text style={styles.titleButton}>
                        {Name}
                    </Text>

                </RectButton>
            </View>
        </View>
    )
}
