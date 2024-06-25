import React from "react";
import "./index.css";
import Stars from "../RecentlyViewed/Stars";

const New = () => {
  return (
    <>
      <h1 className="title-news">New</h1>
      <div className="new-section">
        <div className="card">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtoU1IetMVc49pySi8Ccy_nEwmduLIHgHQ0LaCTfuLX8NgtBko"
            alt="toy"
          />
          <span className="twenty-percent">-25%</span>
          <span className="heartIcon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <p className="cardText">
           501st Clone Troopers <br />
           Battle Pack 75345
          </p>
          <section className="spans">
            <div className="bei">
              &<strike>$19.99</strike>
            </div>
            <div className="star-icon">
              <Stars />
            </div>
          </section>
          <div className="price">
            <div className="price-bei">$ 14.99</div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTQFbD78KqIiYUg1NWvgSoeH9950GadeEHlw8gzpIFeK0ecJ2DI"
          />
          <span className="twenty-percent">-20%</span>
          <span className="heartIcon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <p className="cardText">
         Toruk Makto & Tree of Souls <br />
         75574
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
            <div className="price-bei">$ 149.99</div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDJFVvTv5YJGah6Ti21i_zq-sC47DWiPcawh1kJfIegdhgSY9k"
            alt="toy"
          />
          <span className="twenty-percent">-20%</span>
          <span className="heartIcon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <p className="cardText">
           Payakun the Tulkun & <br />
           Crabsuit 75579
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
            <div className="price-bei">$ 51.99</div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
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
           Gandalf the Grey & Barlog <br /> 
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
      
       
      </div>
    </>
  );
};
export default New;
