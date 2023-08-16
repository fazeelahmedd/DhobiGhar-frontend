import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Text from '../../../Components/Text';
import color from '../../../Utils/color';
import Button from '../../../Components/Button';
import TextInput from '../../../Components/TextInput';
import { placeOrder } from '../../../Axios/Services';
import { useSelector } from 'react-redux';

const initialValues = {
    name: "",
    contactNumber: "",
    address: "",
    description: ""
}

export default CheckoutForm = () => {

    const { items } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.user)
    const [data, setData] = useState(initialValues)

    const onChange = (key, value) => {

        let info = { ...data }

        info[key] = value

        setData(info)

    }

    console.log("Uyew", user)

    const onPressConfirm = () => {
        placeOrder({ ...data, items })
    }

    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Enter Details</Text>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'space-evenly' }}>
                <TextInput name="Enter your name ..." value={data?.name} onChange={(value) => onChange('name', value)} />
                <TextInput name="Enter your contact number ..." value={data?.contactNumber} onChange={(value) => onChange('contactNumber', value)} />
                <TextInput name="Enter complete address..." value={data?.address} multiline numberOfLines={5} onChange={(value) => onChange('address', value)} />
                <TextInput name="Add note here ..." value={data?.description} multiline numberOfLines={5} onChange={(value) => onChange('description', value)} />
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Pressable onPress={onPressConfirm}>
                    <Button name="Confirm" />
                </Pressable>
            </View>
        </View>
    )
}