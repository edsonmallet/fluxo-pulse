import axios from 'axios';

const BASE_URL = process.env.API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

export const endpoints = {
  clients: '/clients',
  users: '/users',
  so: '/services_orders',
  auth: '/sessions',
};
