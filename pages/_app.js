import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@config';
import { UserContext } from '@lib/context';
import { useUserData } from '@lib/hooks';

function MyApp({ Component, pageProps }) {
    const userData = useUserData();

    return (
        <UserContext.Provider value={userData}>
            <Elements stripe={stripePromise}>
                <Component {...pageProps} />
            </Elements>
        </UserContext.Provider>
    )
}

export default MyApp;
