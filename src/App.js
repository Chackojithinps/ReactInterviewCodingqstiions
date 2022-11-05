import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bool, setBool] = useState(false);
  const [hide, setHide] = useState("Add to cart");
  const handleChange = () => {
    setBool(!bool);
    !bool ? setHide("Add to cart") : setHide("remove from cart");
  };
  return (
    <div className="App">
      <button onClick={handleChange}>{hide}</button>
    </div>
  );
}
