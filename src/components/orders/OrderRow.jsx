import React from 'react';
import { openEditOrder, handleDeleteOrder } from './OrderService';

function OrderRow({ order }) {
    console.log('Order:', order);
    
  function handleEdit(orderId) {
    console.log('Edit order by the Id of:', orderId);
    openEditOrder(orderId);
  }

  function handleDelete() {
    handleDeleteOrder(order.id);
  }

  return (
    <tr key={order.id}>
      <td>#</td>
      <td>{order.person.firstName} {order.person.lastName}</td>
      <td>{order.shippingAddress.streetName} {order.shippingAddress.streetNumber}, {order.shippingAddress.city}</td>
      <td>{order.billingAddress.streetName} {order.billingAddress.streetNumber}, {order.billingAddress.city}</td>
      <td>{order.totalPrice}€</td>
      <td>
        <button onClick={() => handleEdit(order.id)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default OrderRow;
