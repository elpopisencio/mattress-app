import { useState } from "react";
import { assets } from "../assets";
import { Picture } from "./Picture";
import { Rating } from "./Rating";
import { SelectType } from "./SelectType";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Details = ({ cart, setCart, mattresses }) => {
  const [type, setType] = useState("loom");
  return (
    <div
      style={{
        backgroundColor: "#f6f5f3",
        width: "100%",
        height: "100vh",
        borderTop: "1px solid #d4d4d4",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div className="columns">
          <div className="column">
            <Picture
              image={assets[mattresses[type].imageFileName]}
              key={type}
            />
          </div>
          <div className="column">
            <h1
              className="title"
              style={{ fontFamily: "Source Serif Pro", fontWeight: "lighter" }}
            >
              Choose your mattress
            </h1>
            <SelectType type={type} setType={setType} mattresses={mattresses} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "1rem 0",
              }}
            >
              <p>
                <b>{mattresses[type].name} Mattress</b>
              </p>
              <p>${numberWithCommas(mattresses[type].price)}</p>
            </div>
            <Rating mattresses={mattresses} type={type} />
            <button
              className="button is-fullwidth"
              style={{
                backgroundColor: "#d4aa63",
                color: "white",
                margin: "4rem 0",
              }}
              onClick={() => setCart([...cart, mattresses[type]])}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
