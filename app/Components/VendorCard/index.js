import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../Utils/color';
import Text from '../Text';

const VendorCard = (props) => {
    return (
        <Pressable onPress={props.onPress} style={{
            height: 120,
            flexDirection: 'row',
            backgroundColor: color.white,
            margin: 10,
            padding: 20,
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
            <View style={{ flex: 0.4, backgroundColor: '#F6F6F6' }}>

            </View>
            <View style={{ flex: 0.6, paddingHorizontal: 15, justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 20 }}>{props.title}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Urgent Delivery</Text>
                    <Icon name={props.urgent ? "checkmark-circle" : "close-circle"} size={18} style={{ marginHorizontal: 5 }} color={props.urgent ? color.success : color.danger} />
                </View>
                {/* <View>

                </View> */}
            </View>
        </Pressable >
    )
}

export default VendorCard;