import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Text from '../../../Components/Text';
import VendorCard from '../../../Components/VendorCard';
import color from '../../../Utils/color';
import Searchbar from '../../../Components/Searchbar';
import { navigate, routes } from '../../../Utils/navigation';
import { getVendors } from '../../../Axios/Services';
import LoadingOverlay from '../../../Components/LoadingOverlay';
import { useSelector } from 'react-redux';

const DATA = [
    {
        id: 1,
        title: 'The Sunshine Dryers',
        urgent_delivery: true
    },
    {
        id: 2,
        title: 'Nice Washer',
        urgent_delivery: false
    },
    {
        id: 3,
        title: 'Moonlight Excel',
        urgent_delivery: false
    },
    {
        id: 4,
        title: 'Ariel Fighter',
        urgent_delivery: true
    },
    {
        id: 5,
        title: 'Clothers Cleaner',
        urgent_delivery: true
    },
    {
        id: 6,
        title: '24/7 Dryers',
        urgent_delivery: true
    }
]

export default FindVendor = () => {

    const { token } = useSelector(state => state.user)

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        getVendors(setLoading, setData, token)
    }, [])

    const onPressVendor = (id) => {
        navigate(routes.SERVICES, { id })
    }

    return (
        loading ? <LoadingOverlay /> :
            <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
                <View style={{ flex: 0.25, justifyContent: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15 }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Find Vendors</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }}>Find vendors according that are suitable for you.</Text>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <Searchbar />
                    </View>
                </View>
                <View style={{ flex: 0.75 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <VendorCard title={item.title} urgent={item.urgent_delivery} onPress={() => onPressVendor(item.id)} />}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
    )
}