import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './cartSlice';
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <div>
          <h3>Total Quantity: {totalQuantity}</h3>
          <h3>Total Amount: ${totalAmount}</h3>
        </div>
      </div>
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div>{item.name}</div>
            <div>Price: ${item.price}</div>
            <div>
              Quantity:
              <button onClick={() => dispatch(removeItem(item.id))}>-</button>
              {item.quantity}
              <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>
            <div>Total: ${item.totalPrice}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
