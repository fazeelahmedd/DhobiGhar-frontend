import * as React from 'react';
import { View, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import color from '../../Utils/color';
import Text from '../Text';

const Button = (props) => {
    return (
        props.loading === true ? (
            <View style={styles.loadingBtn}>
                <ActivityIndicator size={Platform.OS === 'android' ? 36 : 'large'} color={color.primary} />
            </View>
        ) : (
            <View
                style={[styles.btn,
                {
                    backgroundColor: props.outlined ? color.white : color.primary,
                    borderWidth: props.outlined ? 1 : 0,
                    borderColor: color.primary
                }]}>
                <Text style={{ ...styles.btnTxt, color: props.outlined ? color.primary : color.white }}>{props.name}</Text>
            </View>
        )
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        backgroundColor: color.primary,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'normal'
    },
    loadingBtn: {
        backgroundColor: color.white,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        color: color.white,
        fontSize: 18,
        fontWeight: 'normal'
    }
});

export default Button;