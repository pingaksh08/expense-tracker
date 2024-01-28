import React from 'react';
import useAuthComponentHook from './hooks/useAuthComponentHook';

const AuthComponent = () => {
    const { handleSignInWithGoogle } = useAuthComponentHook();
    return (
        <div className='login-page'>
            <p> Sign in with google to continue
            </p>
            <button className='login-page-btn' onClick={handleSignInWithGoogle} > Sign in </button>
        </div>
    )
}

export default AuthComponent