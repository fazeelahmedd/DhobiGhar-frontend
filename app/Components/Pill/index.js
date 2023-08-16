import React from 'react';
import { View } from 'react-native';
import Text from '../Text';

const Pill = (props) => {

    var backgroundColor, textColor;

    if (props.title === 'Delivered') {
        backgroundColor = "rgba(144,238,144,0.3)"
        textColor = "green"
    } else if (props.title === 'Pending') {
        backgroundColor = "rgba(255,165,0,0.3)"
        textColor = "darkorange"
    } else if (props.title === 'Rejected') {
        backgroundColor = "rgba(255,99,71,0.3)"
        textColor = "red"
    } else if (props.title === 'Cancelled') {
        backgroundColor = "rgba(255,99,71,0.3)"
        textColor = "red"
    }

    return (
        <View style={{ height: 25, width: 100, borderRadius: 30, backgroundColor, justifyContent: 'center', paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 'normal', fontSize: 14, textAlign: 'center', color: textColor }}>{props.title}</Text>
        </View>
    )
}

export default Pill;