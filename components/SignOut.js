import { auth } from '@lib/firebase';

const SignOut = () => {
    const signOut = () => {
        auth.signOut();
    };

    return (
        <button onClick={signOut}>Sign Out</button>
    );
};

export default SignOut;