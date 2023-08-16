import * as React from 'react';
import { FlatList, View } from 'react-native';
import color from '../../../Utils/color';
import Text from '../../../Components/Text';
import ProductListItem from '../../../Components/ProductListItem';
import Button from '../../../Components/Button';
import OrderHistoryItem from '../../../Components/OrderHistoryItem';

const data = [
    {
        id: 1,
        title: 'Shirt',
    },
    {
        id: 2,
        title: 'Pant'
    },
    {
        id: 3,
        title: 'T-Shirt'
    },
    {
        id: 4,
        title: 'Shirt',
    },
    {
        id: 5,
        title: 'Pant'
    },
    {
        id: 6,
        title: 'T-Shirt'
    }
]

export default OrderHistory = () => {
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'normal', fontSize: 28 }}>My Orders</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 16, textAlign: 'justify', color: color.gray }}>Lorem ipsum dolor sit amet</Text>
            </View>
            <View style={{ flex: 0.8 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <OrderHistoryItem title={item.title} />}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View >
    )
}