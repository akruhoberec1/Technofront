import axios from 'axios';
import { createRoot } from 'react';
import EditOrderForm from './EditOrderForm';

export const fetchOrders = () => {
  return axios
    .get('https://localhost:44378/api/order')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching orders:', error);
      throw error;
    });
};

export const handleEditOrder = (orderId, updatedOrder) => {
  return axios
    .put(`https://localhost:44378/api/order/${orderId}`, updatedOrder)
    .then((response) => {
      console.log('Order successfully updated:', response.data);
      //maybe additional implementation of something here
    })
    .catch((error) => {
      console.error('Error updating order:', error);
      throw error;
    });
};

export const handleDeleteOrder = (orderId) => {
  return axios
    .delete(`https://localhost:44378/api/order/${orderId}`)
    .then((response) => {
      console.log('Order deleted successfully!');
    })
    .catch((error) => {
      console.error('Error deleting order', error);
      throw error;
    })
};

export const openEditOrder = (orderId) => {
  debugger;
  return axios
    .get(`https://localhost:44378/api/order/${orderId}`)
    .then((response) => {
      console.log("Here's the order for edit: ", response.data);
      const orderData = response.data;
      return orderData;
    })
    .catch((error) => {
      console.error('Error retrieving order data:', error);
      throw error;
    });
};
