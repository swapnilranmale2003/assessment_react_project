import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import "./Payment.css";
function Payment() {
  return (
    <>
      <div className="payment-card">
        <h1>Payments</h1>
        <div className="one">
          <div className="payment-header">
            <div className="transaction">
              <h5>Transaction</h5>
            </div>
            <div className="amount">
              <h5>Amount</h5>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="transaction-details">
            <div className="transaction-name">
              <div className="name">
                <FaCircle color="green" size={"15px"} />
                Consultation with doctor
              </div>
              <div className="arrow">
                <FaArrowRight size={"1.3rem"} color={"royalblue"} />
              </div>
            </div>
            <div className="transaction-price">20 $</div>
            
          </div>
          <div className="transaction-details">
            <div className="transaction-name">
              <div className="name">
                <FaCircle color="green" size={"15px"} />
                Medicine
              </div>
              <div className="arrow">
                <FaArrowRight  size={"1.3rem"}  color={"royalblue"} />
              </div>
            </div>
            <div className="transaction-price">50 $</div>
          </div>
          <div className="transaction-details">
            <div className="transaction-name">
              <div className="name">
                <FaCircle color="green" size={"15px"} />
                Consultation with doctor
              </div>
              <div className="arrow">
                <FaArrowRight  size={"1.3rem"} color={"royalblue"} />
              </div>
            </div>
            <div className="transaction-price">20 $</div>
          </div>
        </div>
        <div className="three">
          <div className="payment-bottom">
            <div className="total-amount"><h5>Total Amount:</h5></div>
            <div className="total"><h5>90 $</h5></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
