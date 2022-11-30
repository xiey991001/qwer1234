import axios from "axios";

const server = axios.create({
    baseURL: "http://127.0.0.1:3333",
});

export const getApiList = () => server.get("/api/list").then((res) => res.data);
