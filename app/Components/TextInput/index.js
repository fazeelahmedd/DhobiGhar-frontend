import React, { useState } from "react";
import { View, TextInput as Input, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from "../../Utils/color";

const TextInput = (props) => {

    const [secureInput, setSecureInput] = useState(props.secureTextEntry);

    handleToggle = () => {
        secureInput ? setSecureInput(false) : setSecureInput(true)
    }

    return (
        <View style={{ backgroundColor: color.placeholder ,flexDirection: 'row', width: '100%', justifyContent: !props.multiline && 'center', height: props.multiline ? props.numberOfLines * 25 : 50, borderWidth: 1, borderRadius: 10, padding: 10, borderColor: color.white }}>
            {
                props.icon ?
                    <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name={props.icon} size={20} />
                    </View>
                    : null
            }
            <View style={{ flex: !props.icon && !props.secureTextEntry ? 1 : props.icon && props.secureTextEntry ? 0.8 : props.icon || props.secureTextEntry ? 0.9 : null, justifyContent: !props.multiline && 'center' }}>
                <Input
                    placeholder={props.name}
                    keyboardType={props.type}
                    autoCapitalize={props.autoCapitalize}
                    defaultValue={props.defaultValue}
                    onChangeText={value => props?.onChange(value)}
                    onBlur={props.onBlur}
                    secureTextEntry={secureInput}
                    value={props.value}
                    multiline={props.multiline}
                    numberOfLines={props.numberOfLines}
                    textAlignVertical='top'
                    style={{ fontFamily: 'Nunito-Regular' }}
                />
            </View>
            {
                props.secureTextEntry ?
                    <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={handleToggle}>
                            <Icon name={secureInput ? 'visibility-off' : 'visibility'} size={20} />
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </View>
    );
}

export default TextInput;