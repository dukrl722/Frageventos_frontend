import React, { useState } from 'react';

import { ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/theme';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './style';

export type EventProps = {
    id: string;
    name: string;
    image: string;
    day: number;
    month: string;
}

type Props = {
    data: EventProps;
}

export function EventCreated({ data }: Props) {
    const navigation = useNavigation()
    const [check, setCheck] = useState(data.day > 5);

    return (
        <View style={styles.container}>
            <RectButton enabled={check}>
                <ImageBackground source={data.image} style={[styles.imageContainer, {
                    opacity: data.day < 5
                        ? 0.4 : 1
                }]}>
                    {data.day < 5 ?
                        <View style={styles.expirado}>
                            <EvilIcons name="refresh" size={28} color={theme.colors.white} />
                            <Text>
                                Expirado
                            </Text>
                        </View>
                        :
                        <RectButton style={styles.pencil} onPress={() =>                     
                            navigation.navigate('EventEdit', {
                                paramKey: data,
                            })}
                        >
                            <EvilIcons name="pencil" size={28} color={theme.colors.white} />
                            <Text>
                                Editar
                            </Text>
                        </RectButton>
                    }
                    <View style={styles.date}>
                        <Text style={styles.dateDay}>
                            {data.day}
                        </Text>
                        <Text style={styles.dateMonth}>
                            {data.month}
                        </Text>
                    </View>
                    <Text style={styles.textContainer}>{data.name}</Text>
                </ImageBackground>
            </RectButton>
        </View>
    )
}
