import React from "react";
import { View } from "react-native";
import NumberInput from "../NumberInput";
import Text from "../Text";

const ProductListItem = (props) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 25 }}>
            <View style={{ flex: 0.3 }}>
                <Text style={{ fontWeight: 'normal', fontSize: 18 }}>
                    {props.title}
                </Text>
            </View>
            <View style={{ flex: 0.3 }}>
                <Text style={{ fontWeight: 'normal', fontSize: 16, color: color.gray }}>
                    Rs. {props.price}
                </Text>
            </View>
            <View style={{ flex: 0.4, alignItems: 'flex-end' }}>
                <NumberInput quantity={props.quantity} setQuantity={props.setQuantity} />
            </View>
        </View>
    );
}

export default ProductListItem;