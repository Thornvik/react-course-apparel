import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //dollars to cents
  const publishablekey =
    "pk_test_51HizlGJLUgCXSYtp9PUApnP8CwRLjiJJ2ro2kKrMmdxmKACiETeIX622NlfQ1GuHAlpwpM8BzjcP3eVq5cOa8wOs00OmkPVqIX";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful"); //do something here with popup instead of an alert
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
