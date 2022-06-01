import React, { useState } from 'react';

import { ImageBackground, Text, View } from 'react-native';

import { EventProps } from '../../components/EventCreated';


export function Teste({route}) {
    
    return (
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Text>
            {route.params.paramKey.day}
            </Text>
        </View>
    )
}
