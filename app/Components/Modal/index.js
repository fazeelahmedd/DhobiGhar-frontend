import React, { useState } from 'react';
import { Modal as RNModal, StyleSheet, Pressable, View } from 'react-native';
import Text from '../Text';
import Button from '../Button';

const Modal = (props) => {
    return (
        <RNModal
            animationType="fade"
            transparent={true}
            visible={true}>
            <View style={{ ...styles.centeredView, backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <View style={styles.modalView}>
                    {
                        props?.heading || props?.text || props?.buttons ? (
                            <>
                                <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'normal', fontSize: 28 }}>{props.heading}</Text>
                                </View>
                                <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'normal', fontSize: 18 }}>{props.text}</Text>
                                </View>
                                <View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    {
                                        props?.buttons.map((item, index) => (
                                            <Pressable key={index} onPress={item.onPress} style={{ flex: 0.3 }}>
                                                <Button name={item.text} outlined={item.outlined} />
                                            </Pressable>
                                        ))
                                    }
                                </View>
                            </>
                        ) : (
                            props.children
                        )
                    }
                </View>
            </View>
        </RNModal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        minHeight: 220,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});

export default Modal;