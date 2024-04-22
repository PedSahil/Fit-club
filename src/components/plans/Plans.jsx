import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import rightArrow from "../../assets/rightArrow.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur-container">
        <div className="blur plan-blur-1"></div>
        <div className="blur plan-blur-2"></div>
      </div>
      <div className="programs-header noto" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* Plan card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan jura" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="benefits">
              <span>See More Benefits </span>
              <img src={rightArrow} alt="" />
            </div>
            <button className="btn">Join Now </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
