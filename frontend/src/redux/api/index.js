import axios from 'axios';

export const fetchTopSales = async () => {
  const response = await axios.get('http://localhost:7070/api/top-sales');
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get('http://localhost:7070/api/categories');
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchAllItems = async () => {
  const response = await axios.get('http://localhost:7070/api/items');
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchSelectedItems = async (id) => {
  const response = await axios.get(
    `http://localhost:7070/api/items?categoryId=${id}`
  );
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};
