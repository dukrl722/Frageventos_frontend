import React from 'react';
import {Image, Text, View} from 'react-native';

import { styles } from './style';

export type CategoryProps = {
    id: string;
    name: string;
    image: string;
}

type Props = {
    data: CategoryProps;
}

export function Category({data} : Props) {
    return (
        <View style={styles.container}>
            <Image source={data.image} style={styles.imageContainer} />
            <Text style={styles.textContainer}>{data.name}</Text>
        </View>
    )
}
