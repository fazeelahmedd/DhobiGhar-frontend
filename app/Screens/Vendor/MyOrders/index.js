import React, { useEffect, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import color from "../../../Utils/color";
import Text from "../../../Components/Text";
import OrderListItem from "../../../Components/OrderListItem";
import { getOrdersByBusiness, updateOrderStatus } from "../../../Axios/Services";
import { useSelector } from "react-redux";
import LoadingOverlay from "../../../Components/LoadingOverlay";
import Tag from "../../../Components/Tag";
import Modal from "../../../Components/Modal";
import Button from "../../../Components/Button";

export default MyOrders = () => {

    const { token } = useSelector(state => state.user)

    const [status, setStatus] = useState("pending")
    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(false)

    const [updatedStatus, setUpdatedStatus] = useState(status)
    const [selectedItem, setSelectedItem] = useState()

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (status) {
            getOrdersByBusiness(status, setOrders, setLoading, token)
        }
    }, [status])

    let statuses = [
        { label: "Pending", value: 'pending' },
        { label: "Delivered", value: 'delivered_to_consumer' },
        { label: "Cancelled", value: 'cancelled' },
    ]

    const onClickUpdate = () => {
        console.log("Checkerr")
        updateOrderStatus(selectedItem?.id, updatedStatus, setLoading, toggleModal)
    }

    const toggleModal = () => setModalOpen(!modalOpen)

    return (
        <>
            {
                modalOpen &&
                <Modal>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20 }}>Change Order Status</Text>
                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            {
                                statuses.map((item) => <Pressable onPress={() => setUpdatedStatus(item.value)} ><Tag text={item.label} selected={updatedStatus === item.value} /></Pressable>)
                            }
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Pressable style={{ flex: 0.4 }} onPress={onClickUpdate}>
                                <Button name={"Update"} />
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            }
            <View style={{ flex: 1, backgroundColor: color.white }}>
                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15 }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>My Orders</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }}>All Orders that are in queue for you.</Text>
                    </View>
                </View>
                <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    {
                        statuses.map((item) => <Pressable onPress={() => setStatus(item.value)} ><Tag text={item.label} selected={status === item.value} /></Pressable>)
                    }
                </View>
                <View style={{ flex: 0.8 }}>
                    {
                        loading ? <LoadingOverlay /> :
                            <FlatList
                                data={orders}
                                renderItem={({ item }) => <OrderListItem data={item} onClickStatus={() => {
                                    setSelectedItem(item)
                                    toggleModal()
                                }} />}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false} x
                            />
                    }
                </View>
            </View>
        </>
    )
}