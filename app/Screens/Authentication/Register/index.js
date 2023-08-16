import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Text from '../../../Components/Text';
import TextInput from '../../../Components/TextInput';
import color from '../../../Utils/color';
import Button from '../../../Components/Button';
import { navigate, routes } from '../../../Utils/navigation';
import Tag from '../../../Components/Tag';

const Roles = [
    {
        name: "Vendor"
    },
    {
        name: "Rider"
    },
    {
        name: "Customer"
    }
]

export default Register = () => {

    const [role, setRole] = useState('Customer')

    const onPressRegister = () => navigate(routes.HOME)
    const onPressLogin = () => navigate(routes.LOGIN)

    const onPressTag = name => setRole(name)

    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Text style={{ fontSize: 36, fontWeight: '600' }}>Register</Text>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Already have an account? <Pressable onPress={onPressLogin}><Text style={{ color: color.primary, fontWeight: '600' }}>Login here</Text></Pressable></Text>
            </View>
            <View style={{ flex: 0.15, justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Register as</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    {
                        Roles.map((item) => <Pressable onPress={() => onPressTag(item.name)}><Tag text={item.name} selected={role === item.name} /></Pressable>)
                    }
                </View>
            </View>
            <View style={{ flex: 0.45, justifyContent: 'space-evenly' }}>
                <TextInput onChange={() => { }} name="Enter Name" />
                <TextInput type="email-address" onChange={() => { }} name="Enter Email" />
                <TextInput onChange={() => { }} name="Enter Password" secureTextEntry />
                <TextInput onChange={() => { }} name="Re-Enter Password" secureTextEntry />
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Pressable onPress={onPressRegister}>
                    <Button name="Register" />
                </Pressable>
            </View>
        </View>
    )
}