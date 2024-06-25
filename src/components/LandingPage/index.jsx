import React from "react";
import "./index.css";
import LandingpageText from "./landingpage-Text";
import Age from "./landingpage-Text/Age/age";

function Landingpage() {
  // Logic
  return (
    <>
      <div className="landingpage">
        <section className="landingpageImage">
          <section>
            <LandingpageText />
          </section>
        </section>
        {/* constructor */}
        <section>
          <div className="constructor">
            <h3>Select constructor</h3>
            <span>Price ($)</span>
            <input type="range" min="75" max="850" className="range" />

            <span>Age</span> 
            <Age /> <br />
            <span>Select Series</span> 
            <select name="series" id="series">
              <option value="">Series</option>
              <option value="">OPtion 2</option>
              <option value="">OPtion 3</option>
            </select>{" "}
            <br />
            <button type="button">Select</button>
          </div>
        </section>
      </div>
    </>
  );
}
export default Landingpage;
