import "./App.css";
import { useState } from "react";
import { Product } from "./components/Product";

const products = [
  {
    id: "P01",
    name: "Sensible shoes",
    price: 500
  },
  {
    id: "P02",
    name: "Jolly jeans",
    price: 300
  },
  {
    id: "P03",
    name: "Sultry socks",
    price: 60
  },
  {
    id: "P04",
    name: "Humble hat",
    price: 100
  },
  {
    id: "P05",
    name: "Tingly t-shirt",
    price: 200
  }
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (item) => {
    setCartItems((state) => [...state, item]);
  };

  const cartItemElements = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <div className="cart-item-name">{item.name}</div>
      <div className="cart-item-price">
        {item.price} HRK
      </div>
    </div>
  ));

  const productElements = products.map((product) => {
    const handleAddToCart = () => {
      addCartItem(product);
    };

    return (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        onAddToCart={handleAddToCart}
      />
    );
  });

  const itemCount = cartItems.length;

  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price;
  }

  return (
    <div className="app">
      <div className="cart">
        <div className="cart-total-items">
          {itemCount === 0 && "Your cart is empty"}
          {itemCount > 0 &&
            `You have ${itemCount} item(s) in your cart`}
        </div>
        <div className="cart-total-price">
          {totalPrice > 0 &&
            `The total value of your cart is ${totalPrice} HRK`}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-item-list">
            {cartItemElements}
          </div>
        )}
      </div>
      <div className="product-list">{productElements}</div>
    </div>
  );
}
