import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Text from '../../../Components/Text';
import TextInput from '../../../Components/TextInput';
import color from '../../../Utils/color';
import Button from '../../../Components/Button';
import { navigate, routes } from '../../../Utils/navigation';
import { login } from '../../../Axios/Services';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../Redux/Slices/User';

export default Login = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const onPressLogin = () => {
        login({ email, password }, setLoading, dispatch, setUserData)
    }

    const onPressRegister = () => navigate(routes.REGISTER)

    const onChangeEmail = (value) => setEmail(value)
    const onChangePassword = (value) => setPassword(value)

    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Text style={{ fontSize: 36, fontWeight: '600' }}>Login</Text>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Are you new to Dhobighar? <Pressable onPress={onPressRegister}><Text style={{ color: color.primary, fontWeight: '600' }}>Register Now</Text></Pressable></Text>
            </View>
            <View style={{ flex: 0.5 }}>
                <View style={{ flex: 0.5, justifyContent: 'space-evenly' }}>
                    <TextInput type="email-address" onChange={onChangeEmail} name="Enter Email" value={email} />
                    <TextInput onChange={onChangePassword} name="Enter Password" secureTextEntry value={password} />
                </View>
                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 16, color: color.gray }}>Forgot Password?</Text>
                </View>
            </View>
            <View style={{ flex: 0.1 }} />
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Pressable onPress={onPressLogin}>
                    <Button name="Login" loading={loading} />
                </Pressable>
            </View>
        </View>
    )
}