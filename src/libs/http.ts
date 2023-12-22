import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.CRM_API_URL,
  headers: { 'X-Api-Key': process.env.CRM_AUTH_API_KEY },
});
