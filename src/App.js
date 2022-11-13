import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([]);
  const [totalCost, setCost] = useState(0);

  const updateCost = (cost) => {
    setCost(totalCost + cost);
  };

  const updateCart = (item, cost) => {
    updateCost(cost);

    // setCart((prevCarts) => {
    // for (let i = 0; i < cart.length; i++) {
    //   if (cart[i].name == item) {
    //     cart[i].quantity += 1;
    //     setCart([...cart]);
    //     return;
    //   }
    // }
    // setCart([
    //   ...prevCarts,
    //   {
    //     name: item,
    //     quantity: 1,
    //   },
    // ]);
    // });

    setCart((prevCarts) => {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == item) {
          cart[i].quantity += 1;
          return [...cart];
        }
      }
      return [
        ...prevCarts,
        {
          name: item,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="itemContainer">
        {bakeryData.map(
          (
            item,
            index // TODO: map bakeryData to BakeryItem components
          ) => (
            <div class="BakeryItem">
              <BakeryItem
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
              <button onClick={() => updateCart(item.name, item.price)}>
                Add to Cart
              </button>
            </div>
          )
        )}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <p>
            {item.name} x {item.quantity}
          </p>
        ))}

        <p>Total: ${totalCost}</p>
      </div>
    </div>
  );
}

export default App;
