import { auth, firestore } from '@lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useUserData() {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // turn off realtime subscription
        let unsubscribe;

        if (user) {
            const ref = firestore.collection('users').doc(user.uid);
            unsubscribe = ref.onSnapshot((doc) => {
                setUserData(doc.data());
            });
        } else {
            setUserData(null);
        }

        return unsubscribe;
    }, [user]);

    return { user, ...userData };
}