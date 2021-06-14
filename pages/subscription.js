import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function Subscription(){
    const stripe = useStripe();
    const elements = useElements();

    const [plan, setPlan] = useState();
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <CardElement />
        </div>
    );
};

