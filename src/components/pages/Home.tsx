import React from "react";
import "../../assets/styles/home.scss";
import { ReactComponent as HOME } from "../../assets/svg-images/home.svg";
import Footer from "../Footer";

function Top() {
  return (
    <div>
      <div className="home-body">
        <div className="blank"></div>
        <div className="flexbox">
          <section className="greet-msg">
            <p>Welcome to Yuki's PortFolio</p>
          </section>
          <section className="home">
            <HOME className="home-img" />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Top;
