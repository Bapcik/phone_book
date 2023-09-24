import axios from "axios";

export const axiosOrders = axios.create({
    baseURL: "https://homework-72-8a45a-default-rtdb.asia-southeast1.firebasedatabase.app/"
})

