import { navigate, routes } from "../../Utils/navigation";
import { setValueInStorage } from "../../Utils/storage";
import Endpoints from "../Endpoints"

export const login = (payload, setLoading, dispatch, setUserData) => {

    setLoading(true)

    return Endpoints.login(payload).then(async (res) => {
        setLoading(false);
        if (res.status === 200) {
            console.log("Res from Login", res.data)
            let data = { ...res.data.data }
            dispatch(setUserData({
                auth: true,
                token: data.access_token,
                user: data.user
            }))
            // navigate(routes.VENDOR_HOME)
        }
    }).catch((err) => console.log("Error Message", err))

}

export const getVendors = (setLoading, setData, token) => {

    setLoading(true)

    return Endpoints.getVendors(token).then((res) => {
        setLoading(false);
        if (res.status === 200) {

            let data = [...res.data.data]

            let arr = data.map((item) => ({
                id: item.id,
                title: item.business_name,
                urgent_delivery: item.urgent_delivery
            }))

            console.log("Res from Vendors", res.data)

            setData(arr)
            // navigate(routes.HOME)
        }
    }).catch((err) => console.log("Error Message", err))

}

export const getServices = (id, setLoading, setData, token) => {

    setLoading(true)

    return Endpoints.getServices(id, token).then((res) => {
        setLoading(false);
        if (res.status === 200) {

            let data = { ...res.data.data }

            data.title = data.business_name
            data.urgent_charges = data.urgent_charges_percentage
            data.description = data.business_description

            delete data.business_name
            delete data.urgent_charges_percentage
            delete data.business_description

            console.log("Res from Services", res.data)

            setData(data)
        }
    }).catch((err) => console.log("Error Message", err))

}

export const getProducts = (b_id, s_id, setLoading, setData, token) => {

    setLoading(true)

    return Endpoints.getProducts(b_id, s_id, token).then((res) => {
        setLoading(false);
        if (res.status === 200) {

            let data = [...res.data.data.products]

            let alteredData = data.map(item => ({ ...item, quantity: 0 }))

            console.log("Altered", alteredData)

            setData(alteredData)
        }
    }).catch((err) => console.log("Error Message", err))

}

export const placeOrder = (payload) => {

    // setLoading(true)

    let business_service_products = payload.items.map(item => ({ id: item.business_service_product_id, unit: item.quantity }))

    let data = {
        total_amount: 2000,
        business_service_products,
        address: payload.address,
        order_description: payload.description,
        order_status: "pending",
        consumer_id: 2,
        is_payment_completed: true,
        business_id: 7,
        longitude: "100.92",
        latitude: "900.2"
    }

    console.log(JSON.stringify(data, null, 2))

    // return;

    return Endpoints.login(data).then(async (res) => {
        setLoading(false);
        if (res.status === 200) {
            console.log("Res from place order", res.data)
            // let data = { ...res.data.data }
            // dispatch(setUserData({
            //     auth: true,
            //     token: data.access_token,
            //     user: data.user
            // }))
            // navigate(routes.HOME)
        }
    }).catch((err) => console.log("Error Message", err))

}

export const getOrdersByBusiness = (status, setData, setLoading, token) => {
    setLoading(true)

    return Endpoints.getOrdersByBusiness(status, token).then((res) => {
        setLoading(false);
        if (res.status === 200) {
            let alteredData = res.data?.data.map(item => ({
                ...item,
                products: item?.products.map((itm, index) => ({ item: itm, quantity: item.quantities[index] }))
            }))
            delete alteredData.quantities
            setData(alteredData)
        }
    }).catch((err) => console.log("Error Message", err))
}

export const updateOrderStatus = (id, status, setLoading, toggleModal) => {
    setLoading(true)

    return Endpoints.updateOrderStatus(id, status).then((res) => {
        setLoading(false);
        toggleModal()
        if (res.status === 200) {

        }
    }).catch((err) => {
        setLoading(false);
        toggleModal()
        console.log("Error Message", err)
    })
}

