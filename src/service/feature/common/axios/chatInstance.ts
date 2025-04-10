import axiosInstance from './axiosInstance';

const base = process.env.REACT_APP_BASE_DOMAIN;
const port = process.env.REACT_APP_CHAT_PORT;

const chatInstance = axiosInstance;
chatInstance.defaults.baseURL = `${base}:${port}/chat`;

export default chatInstance;