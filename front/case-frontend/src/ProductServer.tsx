import axios from 'axios';
import { Product } from './types';

const API_URL = 'http://localhost:8080/products/';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar produtos', error);
    throw error;
  }
};

export const createProduct = async (product: Product) => {
  try {
    const response = await axios.post(API_URL, product, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    throw error;
  }
};
