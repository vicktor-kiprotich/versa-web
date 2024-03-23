import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "../../../utils/price_formatter";
import {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} from "../../../store/actions/cart_actions";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = [];

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.length > 0 && (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} - Quantity: {item.quantity}
                <button onClick={() => handleAddItem(item)}>+</button>
                <button onClick={() => handleRemoveItem(item.id)}>-</button>
                <input
                  type='number'
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, e.target.value)
                  }
                />
              </li>
            ))}
          </ul>
          <div>
            <p>Total: {formatCurrency("en-ke", "KES", cartTotal)}</p>
            <button onClick={handleClearCart}>Clear cart</button>
            <button onClick={() => alert("Checkout clicked!")}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
