import React, { useState, useEffect } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import color from '../../../Utils/color';
import Text from '../../../Components/Text';
import ProductListItem from '../../../Components/ProductListItem';
import Button from '../../../Components/Button';
import { navigate, routes } from '../../../Utils/navigation';
import { getProducts } from '../../../Axios/Services';
import LoadingOverlay from '../../../Components/LoadingOverlay';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { addToCart } from '../../../Redux/Slices/Cart';
import Modal from '../../../Components/Modal';

const DATA = [
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

export default Products = () => {

    const dispatch = useDispatch()
    const route = useRoute()
    const { vendorId, serviceId, serviceName } = route.params

    const { token } = useSelector(state => state.user)

    const [loading, setLoading] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        if (vendorId && serviceId) {
            getProducts(vendorId, serviceId, setLoading, setData, token)
        }
    }, [vendorId, serviceId])

    const onPressCheckout = () => navigate(routes.CHECKOUT)
    const toggleSuccessModal = () => setSuccessModal(!successModal)
    const onPressAddToCart = () => {
        dispatch(addToCart(data))
        toggleSuccessModal()
    }

    const setQuantity = (id, value) => {

        let products = [...data]
        let index = products.findIndex(item => item.id === id)
        products[index].quantity = value
        setData(products)

    }

    return (
        loading ? <LoadingOverlay /> :
            <>
                <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
                    <View style={{ flex: 0.8 }}>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'normal', fontSize: 36, color: color.primary }}>{serviceName}</Text>
                        </View>
                        <View style={{ flex: 0.2, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'normal', fontSize: 22 }}>Select Items</Text>
                            <Text style={{ fontSize: 14, color: 'gray' }}>Select the quantity of items</Text>
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <ProductListItem title={item.name} price={item.price} quantity={item.quantity} setQuantity={(value) => setQuantity(item.id, value)} />}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'space-evenly' }}>
                        <Pressable onPress={onPressAddToCart}>
                            <Button outlined name="Add to cart" />
                        </Pressable>
                        <Pressable onPress={onPressCheckout}>
                            <Button name="Proceed to checkout" />
                        </Pressable>
                    </View>
                </View >
                {
                    successModal && <Modal
                        heading="Add to cart"
                        text="Items are successfully added to cart"
                        buttons={[
                            {
                                text: "Ok",
                                onPress: toggleSuccessModal
                            }
                        ]}
                    />
                }
            </>

    )
}