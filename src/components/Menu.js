import MenuItems from "./MenuItems";
import "./Menu.css";
import { useState } from "react";

const Menu = (props) => {
  const [ff, setFF] = useState(false);

  const [addToMenu, setAddToMenu] = useState([]);

  console.log(addToMenu);

  return (
    <div className="menu-container">
      <div className="menu">
        {props.menu.map((meals) => {
          return (
            <div className="menu-item">
              <div className="left-side">
                <h3>{meals.name}</h3>
                <p className="item-description">{meals.description}</p>
                <p className="price-tag">${meals.price}</p>
              </div>
              <div className="right-side">
                <button className="button"
                  onClick={() =>
                    setAddToMenu([
                      ...addToMenu,
                      { name: meals.name, price: meals.price },
                    ])
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
