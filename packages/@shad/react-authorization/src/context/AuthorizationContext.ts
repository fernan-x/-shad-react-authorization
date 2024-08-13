import { createContext, useContext } from "react";
import { POLICIES } from "../types";

type AuthorizationContextType<T> = {
    policies: POLICIES<T>;
} | null;

export const AuthorizationContext = createContext<AuthorizationContextType<any>>(
    undefined as any
);

export const AuthorizationContextProvider = AuthorizationContext.Provider;
export const AuthorizationContextConsumer = AuthorizationContext.Consumer;

export const useAuthorization = <T,>() => {
    const context = useContext<AuthorizationContextType<T>>(AuthorizationContext);
    if (!context) {
        throw new Error(
            "useAuthorization must be used within a AuthorizationContextProvider"
        );
    }
    return context;
};