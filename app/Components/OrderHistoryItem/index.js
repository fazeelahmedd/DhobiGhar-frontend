import React from "react";
import { Pressable, View } from "react-native";
import Text from "../Text";
import color from "../../Utils/color";
import Pill from "../Pill";

const OrderHistoryItem = (props) => {
    return (
        <Pressable onPress={props.onPress} style={{
            height: 140,
            backgroundColor: color.white,
            margin: 10,
            paddingHorizontal: 20,
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
            <View style={{ flex: 0.6, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                <View style={{ flex: 0.7, justifyContent: 'space-around' }}>
                    <Text style={{ fontWeight: 'normal', fontSize: 18 }}>Shirt + Pant + Trouser</Text>
                    <Text style={{ fontWeight: 'normal', fontSize: 14, color: color.gray }}>Dry Cleaning</Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'normal', fontSize: 28 }}>200</Text>
                    <Text style={{ fontWeight: 'normal', fontSize: 16, color: color.gray }}>Rs</Text>
                </View>
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'normal', color: color.gray }}>24, April 10:50 PM</Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Pill title="Rejected" />
                </View>
            </View>
        </Pressable >
    );
}

export default OrderHistoryItem;