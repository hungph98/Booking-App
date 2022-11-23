import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE_ADMIN = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

export const AuthContextAdmin = createContext(INITIAL_STATE_ADMIN);

const AuthReducerAdmin = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export const AuthContextProviderAmin = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducerAdmin, INITIAL_STATE_ADMIN);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContextAdmin.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContextAdmin.Provider>
    );
};