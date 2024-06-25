import React from "react";
import "./index.css";
const Searchbar = () => {
  // logic
  return (
    <>
      <div className="searchbar">
        <div className="search">
          <img
            src="/src/assets/istockphoto-183247818-2048x2048-removebg-preview.png"
            alt="logo"
          />

          <section className="title">
            <h1>Brick House</h1>
          </section>

          <section className="catalog">
            <span class="material-symbols-outlined">grid_view</span>
            Catalog
          </section>
          <section className="input">
            <div className="input-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
                className="input-icon"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
              <input type="text" placeholder="Search" />
            </div>
          </section>
        </div>
        <div className="icons">
          <i class="fa-regular fa-heart"></i>
          <section>
              <span class="material-symbols-outlined">shopping_cart</span>
            
          </section>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </>
  );
};
export default Searchbar;
