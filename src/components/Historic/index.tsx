import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';

import { RectButton } from 'react-native-gesture-handler';

export type EventProps = {
    id: string;
    day: string;
    name: string;
    entry: string;
    exit: string;
    value: string;
}

type Props = {
    data: EventProps;
}

export function Historic({ data }: Props) {
    return (

        <RectButton style={styles.container}>
            <View style={styles.historic}>
                <Text style={styles.Title}>
                    {data.day}
                </Text>
                <Text style={styles.SubTitle}>
                    Local: {data.name}
                </Text>
                <Text style={styles.SubTitle}>
                    Check In: {data.entry}
                </Text>
                <Text style={styles.SubTitle}>
                    Check Out: {data.exit}
                </Text>
                <Text style={styles.SubTitle}>
                    Valor Total: {data.value}
                </Text>
            </View>
        </RectButton>
    )
}