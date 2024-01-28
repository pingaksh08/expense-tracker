import { auth, provider } from '../../../config/firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const useAuthComponentHook = () => {
    const navigate = useNavigate();
    const handleSignInWithGoogle = async () => {
        const response = await signInWithPopup(auth, provider);
        const authInfoObj = {
            userId: response.user.uid,
            name: response.user.displayName,
            profilePhoto: response.user.photoURL,
            isAuth: true
        };
        localStorage.setItem("auth", JSON.stringify(authInfoObj));
        navigate("/expense-tracker");
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate("/");
        }
        catch (e) {
            console.log(e);
        }
    }

    return {
        handleSignInWithGoogle
    }
}

export default useAuthComponentHook