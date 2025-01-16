import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalButtonComponent = ({ammount}) => {
  //const amount = 50.00; // The amount you want to charge

  const onSuccess = (payment) => {
    console.log('Payment Successful!', payment);
    // You can send payment data to your backend here for processing or storing
  };

  const onError = (error) => {
    console.error('Error in payment:', error);
  };

  const onCancel = (data) => {
    console.log('Payment cancelled:', data);
  };

  return (
    <div className="flex justify-start items-center">
      <PayPalButton
        amount={ammount}
        shippingPreference="NO_SHIPPING" // "NO_SHIPPING" for no shipping, "GET_FROM_FILE" to get shipping details from your backend, etc.
        onSuccess={onSuccess}
        onError={onError}
        onCancel={onCancel}
        options={{
          clientId: 'AWqxcH4Dvhb_nV3sKB252Hki_BQzEH7rvVJJC5wUV6L6sQ2sZE1ALJuDDL8vujXHihSeht2qmXFunIbM',  // Replace with your PayPal Client ID
          currency: 'USD',  // Set your currency
        }}
      />
    </div>
  );
};

export default PayPalButtonComponent;
