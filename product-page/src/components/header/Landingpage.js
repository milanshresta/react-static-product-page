import "./Landingpage.css";
import productimage from "../../Assets/product-image.jpg";
import { BiShoppingBag } from "react-icons/bi";

export default function Landingpage() {
  return (
    <>
      <div className="landing-page">
        <div className="main-div">
          {/*Left side of the Landing Page*/}

          <div className="sub-headline-div">
            <div className="1headline">
              <h2 className="product-headline">Unblanced Sculpture</h2>
            </div>
            <div className="1subheadline">
              <span className="subline1">
                <p className="subline-text">
                  Creative Solutions For All Your Sculpture Need. You Can
                  Explore Many Collections Here.
                </p>
              </span>
            </div>
            <Buttons />
          </div>

          {/*Rigth side of the Landing Page*/}

          <div className="product-div">
            <div className="product-image">
              <img src={productimage} alt="bag" id="product-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Buttons() {
  return (
    <div className="landingpage-buttons">
      <div className="shop-now-button">
        <a href="#">
          <button id="shop-button">
            <BiShoppingBag size={"1.4rem"} className="shopping-icon2" />
            Shop Now
          </button>
        </a>
      </div>
      <div className="for-more-button">
        <a href="#">
          <button id="more-button">Explore More</button>
        </a>
      </div>
    </div>
  );
}
