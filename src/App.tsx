import "./App.css";
import Navbar from "./comps/Navbar.jsx";
import Divider from "./comps/Divider.jsx";
import Hero from "./comps/Hero.jsx";
import Categories from "./comps/Categories.jsx";
import Products from "./comps/Products.jsx";
import Deal from "./comps/Deal.jsx";
import Email from "./comps/Email.jsx";
import Footer from "./comps/Footer.jsx";
import Data from "./Data.jsx";
import { useState } from "react";
// import ShoppingCart from "./comps/ShoppingCart";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
  qty: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
  qty: number;
}
interface Category {
  id: string;
  name: string;
  image: string;
  desc: string;
  disc: string;
}

function App() {
  const { products } = Data;
  const { categories } = Data;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const onAdd = (product: Product) => {
    const exist = cartItems.find((x: CartItem) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product: Product) => {
    const exist = cartItems.find((x: CartItem) => x.id === product.id);
    if (exist === undefined) return;
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x: Product) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Navbar onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Hero />
      <Divider />
      <Categories categories={categories} />
      <Products onAdd={onAdd} products={products} />
      <Deal />
      <Email />
      <Footer />
    </div>
  );
}

export default App;

// const onAdd = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist) {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//       )
//     );
//   } else {
//     setCartItems([...cartItems, { ...product, qty: 1 }]);
//   }
// };

// const onRemove = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist.qty === 1) {
//     setCartItems(cartItems.filter((x) => x.id !== product.id));
//   } else {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//       )
//     );
//   }
// };
