import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItem, addItemToCart, removeItemAll } = useContext(CartContext);

  const decreaseItemQuantity = () => removeItem(cartItem);
  const increaseItemQuantity = () => addItemToCart(cartItem);
  const removeCheckOutItem = () => removeItemAll(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={decreaseItemQuantity}>
          &lt;
        </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={increaseItemQuantity}>
          &gt;
        </div>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeCheckOutItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
