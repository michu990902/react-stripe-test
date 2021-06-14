import { auth, firestore, googleAuthProvider } from '@lib/firebase';

const SignIn = () => {
    const signIn = async () => {
        const credential = await auth.signInWithPopup(googleAuthProvider);
        const { uid, email, displayName } = credential.user;
        firestore.collection('users').doc(uid).set({ email: email, username: displayName }, { merge: true });
    };

    return (
        <button onClick={signIn}>Sign In with Google</button>
    );
};

export default SignIn;