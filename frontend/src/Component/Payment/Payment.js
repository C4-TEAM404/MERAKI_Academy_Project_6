//====================================================//Require
import React, { useState, useEffect } from "react";
import StripeCheckOut from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
//CSS File
import "./Payment.css";

const Payment = ({ Title, description, price }) => {
  //product object
  toast.configure();
  const product = {
    name: Title,
    price: price,
    description: description,
  };
  console.log("Title", product);

  const handleToken = async (token, addresses) => {
    console.log("from inside handleToken");
    const response = await axios.post("http://localhost:5000/payment", {
      token,
      product,
    });

    if (response.status === 200) {
      toast("success payment is completed ", { type: "success" });
    } else {
      toast("Failure payment is not completed");
    }
  };
  return (
    <div className="paymentMainDiv">
      <StripeCheckOut
        name={product.name}
        panelLabel="Pay"
        stripeKey="pk_test_51KcwscCdUO4dNrLKishlMt5e5GiErs6CmcjIKyhKK3Q6Szgmnpc5vFLuVCLfWAZWN1KYL28OgkI4L9GfplH7OsJR00SXbp7yfA"
        token={handleToken}
        amount={product.price * 100}
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default Payment;
