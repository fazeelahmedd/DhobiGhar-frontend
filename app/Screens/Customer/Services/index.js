import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import moment from 'moment';
import color from '../../../Utils/color';
import Text from '../../../Components/Text';
import Card from '../../../Components/Card';
import HouseService from '../../../Assets/Images/house-service.png';
import Iron from '../../../Assets/Images/iron.png';
import OrderHistory from '../../../Assets/Images/order-list.png';
import PlaceOrder from '../../../Assets/Images/place-order.png';
import TrendingCard from '../../../Components/TrendingCard';
import { navigate, routes } from '../../../Utils/navigation';
import { getServices } from '../../../Axios/Services';
import LoadingOverlay from '../../../Components/LoadingOverlay';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        title: 'Washing',
        icon: PlaceOrder,
        onPress: () => navigate(routes.PRODUCTS, null)
    },
    {
        id: 2,
        title: 'Dry Cleaning',
        icon: OrderHistory
    },
    {
        id: 3,
        title: 'Iron',
        icon: Iron
    }
]

// temp
let images = [OrderHistory, Iron, PlaceOrder]

export default Services = () => {

    const route = useRoute()
    const { id } = route.params

    const { token } = useSelector(state => state.user)

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        if (id) {
            getServices(id, setLoading, setData, token)
        }
    }, [id])

    const onPressService = (serviceId, serviceName) => navigate(routes.PRODUCTS, { vendorId: id, serviceId, serviceName })

    return (
        loading ? <LoadingOverlay /> :
            <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
                <View style={{ flex: 0.4 }}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={{ fontWeight: 'normal', fontSize: 28 }}>{data?.title}</Text>
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <Text style={{ fontWeight: 'normal', fontSize: 16, textAlign: 'justify', color: color.gray }}>{data?.description}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.7 }}>
                    <View style={{ flex: 0.2, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'normal', fontSize: 22 }}>Select Service</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }}>Choose any of our services</Text>
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <FlatList
                            data={data?.services}
                            numColumns={2}
                            renderItem={({ item }) => <Card title={item.name} icon={item.name === "Washing" ? images[0] : item.name === "Dry cleaning" ? images[1] : images[2]} onPress={() => onPressService(item.id, item.name)} />}
                            keyExtractor={item => item.title}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                        />
                    </View>
                </View>
            </View >
    )
}