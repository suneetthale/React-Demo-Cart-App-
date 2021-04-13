import React from "react";
import tech from "../assets/tech.jpg";

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={tech} alt="tech" />
        </div>
        <div className="text-wrapper item">
          <span>IPhone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
