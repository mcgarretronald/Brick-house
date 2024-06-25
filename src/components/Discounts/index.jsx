import React from "react";
import "./index.css";

const Discount = () => {
  return (
    <>
      <h1 className="dicount-title">Discounts</h1>
      <div className="content">
          <div id="discount">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dRmiO6BC_BDrDbxNvdrU01G8tPPY3QzROsQQW6WgNb7ps7fg"
              alt=""
            />
            <div className="discount-text">
                New Year's discounts on <br />
                all Advent calenders !
            </div>
          </div>
          {/* second */}
          <div id="discount">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUlGUZpEYGR7rzxcOVTmXVueWn9GbqI6mrs2tASdlhuHLo_pjL"
              alt=""
            />
            <div className="discount-text">
               Birthday promo set
            </div>
          </div>
          {/* third */}
          <div id="discount">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTo9u3SFOLQ21SgFy7jmVKpJ61_T61cSjPg3Md7G9bipAcDHlSI"
              alt=""
            />
            <div className="discount-text">
               Explore pandora with new <br />
               the avatar sets
            </div>
          </div>
      </div>


      <div className="discount-bar">
        <p>Get a 5% discount on your first purchase</p>
        <section>
            <input type="text" placeholder="Your e-mail" />
            <button type="button">Send</button>
        </section>
      </div>

    </>
  );
};
export default Discount;
