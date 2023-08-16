import React from 'react';
import { Text as RnText } from 'react-native';

const Text = (props) => {

    return (
        <RnText
            {...props}
            style={{ ...props.style, fontWeight: props?.style?.fontWeight ? props?.style?.fontWeight : 'normal', fontFamily: (props?.style?.fontWeight == 'bold' ? 'Nunito-Bold' : props?.style?.fontWeight === '600' ? 'Nunito-SemiBold' : 'Nunito-Bold') }}
        >
            {props.children}
        </RnText>
    )
}

export default Text;