import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../Layout/Dashboard/StudentsBoard/CheckoutForm';
import useClass from '../Hooks/useClass';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {
    
    const [classes]=useClass();
    const total = classes.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
 <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
        <Elements stripe={stripePromise}>
            <CheckoutForm data={classes} price={price}></CheckoutForm>
        </Elements>
        </div>
       
    );
};

export default Payment;