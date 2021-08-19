import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://ray.test/api/v1/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default {
    getUsers() {
        return apiClient.get("users");
    },
};