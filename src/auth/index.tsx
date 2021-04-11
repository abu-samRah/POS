import React, { createContext, useState, useEffect } from 'react';
import { User } from '../types';
import login from './login';

const initial: IAuthContext = {
    isAuthenticated: false,
    signin() {},
    signout(cb) {},
    user: undefined,
};

interface IAuthContext {
    isAuthenticated: boolean;
    signin: (
        userName: string,
        password: string,
        cb: (isAuthinticated: boolean) => void
    ) => void;
    signout: (cb: () => void) => void;
    user: User | undefined;
}

//this context will be shared throughout the whole application so i can have access to the user attributes such as name.
export const AuthContext = createContext<IAuthContext>(initial);

// this function is eventualy responseble for signing the user in and out.it will update the user state so the whole application can rerender
function useProvideAuth() {
    const [user, setUser] = useState<User | undefined>();

    const signin: IAuthContext['signin'] = (userName, password, cb) => {
        // posAxios.post(url.{})
        return login(userName, password).then((user) => {
            setUser(user);
            cb(Boolean(user));
        });
        // you are using inital here because its the shared context and we are updating the user state inside it, so whenever something change the app will rerender and use the updated context
    };

    const signout = (cb: () => void) => {
        setUser(undefined);
        cb();
    };

    return {
        user,
        signin,
        signout,
        isAuthenticated: Boolean(user),
    };
}

// this function is resposible for calling the useProvideAuth function, initializing the user and passing the context through the whole app
export const ProvideAuth: React.FC = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
