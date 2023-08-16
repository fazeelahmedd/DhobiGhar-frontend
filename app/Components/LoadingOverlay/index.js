import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import color from "../../Utils/color";

const LoadingOverlay = () => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={true}>
            <View style={{ ...styles.centeredView, backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <ActivityIndicator color={color.black} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingOverlay;