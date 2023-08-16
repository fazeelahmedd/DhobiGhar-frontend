import * as React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '../../../Components/Text';
import color from '../../../Utils/color';
import Button from '../../../Components/Button';
import { navigate, routes } from '../../../Utils/navigation';

const DATA = [
    {
        id: 1,
        title: 'The Sunshine Dryers'
    },
    {
        id: 2,
        title: 'Nice Washer'
    },
    {
        id: 3,
        title: 'Moonlight Excel'
    },
    {
        id: 4,
        title: 'Ariel Fighter'
    },
    {
        id: 5,
        title: 'Clothers Cleaner'
    },
    {
        id: 6,
        title: '24/7 Dryers'
    }
]

export default Checkout = () => {

    const { items } = useSelector(state => state.cart)

    const onPressDone = () => navigate(routes.CHECKOUT_FORM)

    const renderItem = ({ item }) => (
        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
            <View style={{ flex: 0.5 }}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </View>
            <View style={{ flex: 0.25 }}>
                <Text style={{ fontSize: 18 }}>{item.quantity}</Text>
            </View>
            <View style={{ flex: 0.25 }}>
                <Text style={{ fontSize: 18 }}>{item.price * item.quantity}</Text>
            </View>
        </View>
    )

    const itemSeperator = () => (
        <View style={{ height: 1, backgroundColor: color.placeholder, width: '100%' }} />
    )

    const headerComponent = () => (
        <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: color.white, paddingVertical: 20 }}>
            <View style={{ flex: 0.5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Name</Text>
            </View>
            <View style={{ flex: 0.25 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Quantity</Text>
            </View>
            <View style={{ flex: 0.25 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Price</Text>
            </View>
        </View>
    )

    const footerComponent = () => (
        <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: color.white, paddingVertical: 20 }}>
            <View style={{ flex: 0.5 }}>
                <Text style={{ fontSize: 18, color: color.secondary, fontWeight: 'bold' }}>Total</Text>
            </View>
            <View style={{ flex: 0.25 }}>
                <Text style={{ fontSize: 18, color: color.secondary, fontWeight: 'bold' }}>{items?.reduce((prev, curr) => (prev + parseInt(curr.quantity)), 0)}</Text>
            </View>
            <View style={{ flex: 0.25 }}>
                <Text style={{ fontSize: 18, color: color.secondary, fontWeight: 'bold' }}>Rs. {items?.reduce((prev, curr) => (prev + parseInt(curr.quantity * curr.price)), 0)} /=</Text>
            </View>
        </View>
    )

    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
            <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Checkout</Text>
            </View>
            <View style={{ flex: 0.6 }}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.business_service_product_id}
                    ItemSeparatorComponent={itemSeperator}
                    ListHeaderComponent={headerComponent}
                    ListFooterComponent={footerComponent}
                    stickyHeaderIndices={[0]}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', borderRadius: 10, borderWidth: 1, borderColor: color.gray, padding: 20 }}>
                    <View style={{ flex: 0.5, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18 }}>Cash on Delivery</Text>
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Icon name='check-circle' size={28} color={color.secondary} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Pressable onPress={onPressDone}>
                    <Button name="Done" />
                </Pressable>
            </View>
        </View>
    )
}