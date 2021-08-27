import { Navbar } from "./components/Navbar";
import { Details } from "./components/Details";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Navbar cartItems={cart} />
      <Details mattresses={data.mattresses} cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
