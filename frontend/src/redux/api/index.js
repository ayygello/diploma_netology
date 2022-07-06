import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7070/api';

export const fetchTopSales = async () => {
  const response = await axios.get('/top-sales');
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get('/categories');
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchAllItems = async () => {
  const response = await axios.get('/items');
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchSelectedItems = async (id) => {
  const response = await axios.get('/items/', {
    params: { categoryId: id },
  });
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchLoadMoreItems = async (count) => {
  const response = await axios.get('/items', {
    params: { offset: count },
  });
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchLoadMoreSelectedItems = async (id, count) => {
  const response = await axios.get(`/items?categoryId=${id}&offset=${count}`);
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const searchProducts = async (search) => {
  const params = new URLSearchParams({ q: search });
  const response = await axios.get(`http://localhost:7070/api/items?${params}`);
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};
