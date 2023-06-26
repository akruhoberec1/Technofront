import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import { fetchAddressesByPersonId } from '../addresses/AddressService';
import { fetchProductsByOrderId } from '../products/ProductService';

const EditOrderForm = ({ orderData }) => {
    const [products, setProducts] = useState(orderData.products);
    const [shippingAddresses, setShippingAddresses] = useState([]);
    const [billingAddresses, setBillingAddresses] = useState([]);
  
    //shipping hook
    useEffect(() => {
      debugger;
      const fetchShippingAddresses = async () => {
        try {
          const addresses = await fetchAddressesByPersonId(orderData.personId);
          setShippingAddresses(addresses);
        } catch (error) {
          console.error('Error retrieving shipping addresses:', error);
        }
      };

      fetchShippingAddresses();
    }, [orderData.personId]);
  
    //billing hook
    useEffect(() => {
      const fetchBillingAddresses = async () => {
        debugger;
        try {
          const addresses = await fetchAddressesByPersonId(orderData.personId);
          setBillingAddresses(addresses);
        } catch (error) {
          console.error('Error retrieving billing addresses:', error);
        }
      };
  
      fetchBillingAddresses();
    }, [orderData.personId]);
  

    //hook for products

    useEffect(() => {
        const fetchOrderProducts = async () => {
          try {
            const products = await fetchProductsByOrderId(orderData.id); // Replace 'fetchProductsByOrderId' with your actual API call to fetch products by order ID
            setProducts(products);
          } catch (error) {
            console.error('Error retrieving order products:', error);
          }
        };
    
        fetchOrderProducts();
      }, [orderData.orderId]);

  return (
    <div id="edit-order-form">

        <label>Shipping Address:</label>
        <select>
        {shippingAddresses.map((address) => (
            <option key={address.id}>{address.streetName} {address.streetNumber}, {address.city}</option>
        ))}
        </select>

        <label>Billing Address:</label>
        <select>
        {billingAddresses.map((address) => (
            <option key={address.id}>{address.streetName} {address.streetNumber}, {address.city}</option>
        ))}
        </select>

        

      
    </div>
  );
};

export default EditOrderForm;
