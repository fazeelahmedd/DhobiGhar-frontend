import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import color from '../../Utils/color';

const Tag = (props) => {

    return (
        <View style={{ height: 35, width: 100, borderRadius: 10, backgroundColor: props.selected ? color.primary : color.placeholder, justifyContent: 'center', paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 'normal', fontSize: 16, textAlign: 'center', color: props.selected ? color.white : color.black }}>{props.text}</Text>
        </View>
    )
}

export default Tag;