import * as React from 'react';
import { FlatList, View } from 'react-native';
import moment from 'moment';
import color from '../../../Utils/color';
import Text from '../../../Components/Text';
import Card from '../../../Components/Card';
import HouseService from '../../../Assets/Images/house-service.png';
import TrackOrder from '../../../Assets/Images/track-order.png';
import OrderHistory from '../../../Assets/Images/order-list.png';
import PlaceOrder from '../../../Assets/Images/place-order.png';
import TrendingCard from '../../../Components/TrendingCard';
import { navigate, routes } from '../../../Utils/navigation';
import { useSelector } from 'react-redux';

const DATA = [
    {
        id: 1,
        title: 'Place Order',
        icon: PlaceOrder,
        onPress: () => navigate(routes.FIND_VENDOR, null)
    },
    {
        id: 2,
        title: 'Order History',
        icon: OrderHistory,
        onPress: () => navigate(routes.ORDER_HISTORY, null)
    },
    {
        id: 3,
        title: 'Track Order',
        icon: TrackOrder
    },
    {
        id: 4,
        title: 'In House Service',
        icon: HouseService,
        onPress: () => navigate(routes.INHOUSE_SERVICE, null)
    }
]

export default Home = () => {

    const { user } = useSelector(state => state.user)

    const onPressVendor = () => {
        navigate(routes.SERVICES)
    }

    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
            <View style={{ flex: 0.15, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'normal', fontSize: 22, color: color.gray }}>Welcome</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 36 }}>Mr. {user.full_name}</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 16 }}>{moment().format("dddd, MMMM DD YYYY")}</Text>
            </View>
            <View style={{ flex: 0.5 }}>
                <FlatList
                    data={DATA}
                    numColumns={2}
                    renderItem={({ item }) => <Card title={item.title} icon={item.icon} onPress={item.onPress} />}
                    keyExtractor={item => item.title}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                />
            </View>
            <View style={{ flex: 0.35 }}>
                <View style={{ flex: 0.3 }}>
                    <Text style={{ fontWeight: 'normal', fontSize: 22 }}>Trending Dhobi's</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>Tap any vendor to directly place your order.</Text>
                </View>
                <View style={{ flex: 0.7 }}>
                    <FlatList
                        data={DATA}
                        horizontal
                        renderItem={({ item }) => <TrendingCard title={item.title} onPress={onPressVendor} />}
                        keyExtractor={item => item.title}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    // contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                    />
                </View>
            </View>
        </View >
    )
}