import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const key = 'pk_test_JZYCJaS8y5sqjqsqMXzXNutr00tjlc4UHX';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce React"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
    />
  )
};

export default StripeButton;