    import React from "react";
    import "./Payment.css";
    import { FaArrowRight } from "react-icons/fa6";
    function Payment() {
    return (
        <div>
        <div className="payment-cart">
            <div className="pay-title">
            <h1>Payments</h1>
            </div>
            <div className="payment-heading">
            <div className="transaction">Transaction</div>
            <div className="amount">Amount</div>
            </div>
            <div className="products">
            <div className="item">
                <p>Consulation with doctor</p>
                <FaArrowRight color="blue" />
                <h6>20$</h6>
            </div>
            <div className="item">
                <p>Medicine </p>
                <FaArrowRight color="blue" />
                <h6>20$</h6>
            </div>{" "}
            <div className="item">
                <p>Consulation with doctor</p>
                <FaArrowRight color="blue" />
                <h6>20$</h6>
            </div>
            </div>
            <div className="bill">
                <div>
                    Total amount
                </div>
                <div>
                    40$
                </div>
            </div>
        </div>
        </div>
    );
    }

    export default Payment;
