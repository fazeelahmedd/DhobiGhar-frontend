import React from 'react';
import { Image, Pressable, View } from 'react-native';
import color from '../../Utils/color';
import Text from '../Text';

const Card = (props) => {
    return (
        <Pressable onPress={props.onPress} style={{
            height: 150,
            width: 150,
            backgroundColor: color.white,
            margin: 10,
            padding: 10,
            borderRadius: 15,
            shadowColor: color.gray,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }}>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={props.icon} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{props.title}</Text>
            </View>
        </Pressable >
    )
}

export default Card;