import React from "react";
import "./index.css";
import Stars from "./Stars";

function Recentlyviewed() {
  return (
    <>
      <h1 className="recent">Recently viewed</h1>

      <div className="recentlyviewed">
        <div className="card">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCqa1V7yRMZT3DV3EgQqchNiF4wIjEDVpS98b1roa7IsVQyLqV"
            alt="toy"
          />
          <span className="twenty-percent">-20%</span>
          <span className="heartIcon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <p className="cardText">
            Dagobah Jedi Training <br />
            Diorama 75330
          </p>
          <section className="spans">
            <div className="bei">
              &<strike>89.99</strike>
            </div>
            <div className="star-icon">
              <Stars />
            </div>
          </section>
          <div className="price">
            <div className="price-bei">$ 71.99</div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="card">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRynxgyHRh3Omx_JDz2ynPBWmY5-QeKJecqMVRpLw1Bjv51WyQ4"
            alt="toy"
          />
          <span className="twenty-percent">New</span>
          <span className="heartIcon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <p className="cardText">
            Tie Bomber 75347
          </p>
          <section className="spans">
            <div className="bei">
             
            </div>
            <div className="star-icon">
              <Stars />
            </div>
          </section>
          <div className="price">
            <div className="price-bei">$ 64.99</div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="card">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeCuFIG9yNwXiaLTJhAi6EyilJi8a8O7LD_EKEYxhwctpkZqUL"
            alt="toy"
          />
          <span className="twenty-percent">-25%</span>
          <span className="heartIcon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <p className="cardText">
           AT-TE Walker 75337
          </p>
          <section className="spans">
            <div className="bei">
              &<strike>139.99</strike>
            </div>
            <div className="star-icon">
              <Stars />
            </div>
          </section>
          <div className="price">
            <div className="price-bei">$ 104.99</div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        {/* CARD 4*/}
        <div className="card">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9mUbIklmzy4veMD3k0jfoV8wlVXozaArzmi4B2fQ1tZCOED1o"
            alt="toy"
          />
          <span className="twenty-percent">-20%</span>
          <span className="heartIcon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <p className="cardText">
           The Mandalorian's N-1 <br />
           Starfighter 75325
          </p>
          <section className="spans">
            <div className="bei">
              &<strike></strike>
            </div>
            <div className="star-icon">
              <Stars />
            </div>
          </section>
          <div className="price">
            <div className="price-bei">$ 59 .99</div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
     
        </div>
             
      </div>
    </>
  );
}
export default Recentlyviewed;
