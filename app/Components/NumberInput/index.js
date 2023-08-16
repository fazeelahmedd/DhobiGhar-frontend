import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '../Text';
import color from '../../Utils/color';

const NumberInput = (props) => {

    let { quantity, setQuantity } = props

    const onClickPlus = () => {
        setQuantity(quantity + 1)
    }

    const onClickMinus = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <View style={{ height: 30, width: 120, flexDirection: 'row', alignItems: 'center' }}>
            <Pressable onPress={onClickMinus} style={{
                flex: 0.25, height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: color.secondary, borderRadius: 10, shadowColor: color.gray,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <Icon name='horizontal-rule' size={20} color={color.white} />
            </Pressable>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'normal', fontSize: 20 }}>{quantity}</Text>
            </View>
            <Pressable onPress={onClickPlus} style={{
                flex: 0.25, height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: color.secondary, borderRadius: 10, shadowColor: color.gray,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <Icon name='add' size={20} color={color.white} />
            </Pressable>
        </View>
    )
}

export default NumberInput;