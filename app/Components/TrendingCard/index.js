import React from 'react';
import { Image, Pressable, View } from 'react-native';
import color from '../../Utils/color';
import Text from '../Text';
import Pin from '../../Assets/Images/location-pin.png';
import Clock from '../../Assets/Images/clock.png';

const TrendingCard = (props) => {
    return (
        <Pressable onPress={props.onPress} style={{
            height: 150,
            width: 300,
            backgroundColor: color.white,
            marginHorizontal: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
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
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <View style={{ flex: 0.4 }}>
                    <Text style={{ fontSize: 20 }}>{props.title}</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Rs. 108.00</Text>
                </View>
                <View style={{ flex: 0.1 }}></View>
                <View style={{ flex: 0.25, flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <Image source={Pin} style={{ width: 20, height: 20 }} resizeMode='contain' />
                    <Text style={{ fontSize: 12, marginHorizontal: 5 }}>G-35, NG / 14 Karachi.</Text>
                </View>
                <View style={{ flex: 0.25, flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <Image source={Clock} style={{ width: 20, height: 20 }} resizeMode='contain' />
                    <Text style={{ fontSize: 12, marginHorizontal: 5 }}>9:00 AM - 10:00 PM</Text>
                </View>
            </View>
        </Pressable >
    )
}

export default TrendingCard;