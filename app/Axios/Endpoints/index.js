import { client } from ".."

export default Endpoints = {
    login: (payload) => {
        return client.post('api/v1/auth/login', payload)
    },
    getVendors: (token) => {
        return client.get('api/v1/business/get', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    getServices: (id, token) => {
        return client.get(`api/v1/business/details/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    getProducts: (business_id, service_id, token) => {
        return client.get(`api/v1/business/products?business_id=${business_id}&service_id=${service_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    placeOrder: (payload, token) => {
        return client.post(`api/v1/orders/create`, payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    getOrdersByBusiness: (status, token) => {
        return client.get(`api/v1/business/orders${status && `?order_status=${status}`}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    updateOrderStatus: (id, order_status) => {
        console.log("Id", id, "Status", order_status)
        return client.put(`api/v1/order/status/${id}`, { order_status })
    }
}