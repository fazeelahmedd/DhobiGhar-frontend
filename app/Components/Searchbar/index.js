import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../Utils/color';
import Text from '../Text';

const Searchbar = (props) => {
    return (
        <View
            style={{
                height: 50,
                width: '100%',
                flexDirection: 'row',
                backgroundColor: color.placeholder,
                borderRadius: 30,
                paddingHorizontal: 25
            }}
        >
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'normal', color: color.gray }}>Search any keyword</Text>
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Icon name="search" size={26} />
            </View>
        </View>
    )
}

export default Searchbar;