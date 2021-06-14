import { loadStripe } from '@stripe/stripe-js';

export const firebaseConfig = {
    apiKey: 'AIzaSyAUzu622-f23fl0LX1rf6nxzzy0MP5ERLA',
    authDomain: 'stripe-js-course.firebaseapp.com',
    databaseURL: 'https://stripe-js-course.firebaseio.com',
    projectId: 'stripe-js-course',
    storageBucket: 'stripe-js-course.appspot.com',
    messagingSenderId: '84918842518',
    appId: '1:84918842518:web:d23dedb546fd2e8ee63eb7',
};
  
export const stripePromise = loadStripe(
    'pk_test_TYooMQauvdEDq54NiTphI7jx' //Publishable key from https://dashboard.stripe.com/test/apikeys or test key
);