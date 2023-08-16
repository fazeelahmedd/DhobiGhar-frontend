import React from "react";
import { Pressable, View } from "react-native";
import color from "../../Utils/color";
import Text from "../Text";
import Pill from "../Pill";
import { capitalizeFirstLetter } from "../../Utils";
import moment from "moment";

export default OrderListItem = ({ data, onClickStatus }) => {
    return (
        <View style={{ minHeight: 500, backgroundColor: color.placeholder, marginVertical: 10, marginHorizontal: 20, borderRadius: 10, padding: 25 }}>
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 0.7 }}>
                    <Text>Order Id</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{data?.id}</Text>
                </View>
                <View style={{ flex: 0.3 }}>
                    <Pressable onPress={onClickStatus}>
                        <Pill title={capitalizeFirstLetter(data?.order_status)} />
                    </Pressable>
                </View>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <Text>Order Date & Time</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{moment(data?.order_time).format('DD MMM, YYYY hh:mm A')}</Text>
            </View>
            <View style={{ paddingVertical: 30 }}>
                <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Items
                        </Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Quantity
                        </Text>
                    </View>
                </View>
                {
                    data?.products?.map((item) => (
                        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', borderBottomColor: color.gray, borderBottomWidth: 1 }}>
                            <View style={{ flex: 0.5 }}>
                                <Text>
                                    {item?.item}
                                </Text>
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Text>
                                    {item?.quantity}
                                </Text>
                            </View>
                        </View>
                    ))
                }
                <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Total Price
                        </Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            {data?.total_amount} Rs
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingVertical: 30 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Order Description</Text>
                <Text>{data?.order_description} </Text>
            </View>
        </View>
    )
}