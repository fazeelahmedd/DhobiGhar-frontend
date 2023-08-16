import axios from "axios";

let request = axios.create({
    baseURL: 'https://59fe-37-111-139-42.ngrok-free.app/'
})

let client = {
    get: (url, options) => request.get(url, { ...options }),
    post: (url, options) => request.post(url, { ...options }),
    put: (url, options) => request.put(url, { ...options }),
    delete: (url, options) => request.delete(url, { ...options })
}

export { client }