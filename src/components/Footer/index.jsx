import React from "react";
import "./index.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-links">
          <section>
            <ul>
              <li>
                <h3>Company</h3>
              </li>

              <li>
                <a href="#">About BrickHouse</a>
              </li>
              <li>
                <a href="#">Our shops</a>
              </li>
              <li>
                <a href="#">Bonus program</a>
              </li>
              <li>
                <a href="#">Our partners</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </section>

          {/* HELP */}
          <section>
            <ul>
              <li>
                <h3>Help</h3>
              </li>

              <li>
                <a href="#">Shipping and pay</a>
              </li>
              <li>
                <a href="#">Return and exchange</a>
              </li>
              <li>
                <a href="#">Review</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </section>

          {/* CONTACT */}
          <section className="social">
            <h3>Contacts</h3>

            <li>
              <a href="#">0(800)111-22-33</a>
            </li>
            <li>
              <a href="#">info.bhouse@gmail.com</a>
            </li>

            <h3>We works:</h3>

            <li>Mon-Fri:09:00-20:00</li>
            <li>Sat-Sun:10:00-20:00</li>
          </section>

          {/* social network */}
          <section className="social">
            <h3>Social Networks:</h3>
            <div className="icon-social">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            <h3>You can pay:</h3>
            <div className="icon-social">
              <i class="fa-brands fa-cc-visa"></i>
              <i class="fa-brands fa-cc-mastercard"></i>
              <i class="fa-brands fa-google-pay"></i>
              <i class="fa-brands fa-apple-pay"></i>
            </div>
          </section>
        </div>
        <div id="copyright">
          <section>
            <img
              src="/src/assets/istockphoto-183247818-2048x2048-removebg-preview.png"
              alt=""
            />

            <h1>BrickHouse</h1>
          </section>
          <section>
            <ul>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Copyright</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
export default Footer;
