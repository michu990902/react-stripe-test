import { loadStripe } from '@stripe/stripe-js';

export const firebaseConfig = {
    apiKey: "AIzaSyClowNI2pZbz3tRq5H3H4alf4twFGJfnAs",
    authDomain: "next-stripe-firebase-test.firebaseapp.com",
    projectId: "next-stripe-firebase-test",
    storageBucket: "next-stripe-firebase-test.appspot.com",
    messagingSenderId: "144494654941",
    appId: "1:144494654941:web:00c5d1c5ae9b061b5df234"
};
  
export const stripePromise = loadStripe(
    'pk_test_TYooMQauvdEDq54NiTphI7jx' //Publishable key from https://dashboard.stripe.com/test/apikeys or test key
);