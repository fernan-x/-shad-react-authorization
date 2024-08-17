import { createContext, useContext } from "react";
import { POLICIES } from "../types/";

export type AuthorizationContextType<KEYS extends string, ARGS> = {
    policies: POLICIES<KEYS, ARGS>;
};

export const AuthorizationContext = createContext<AuthorizationContextType<string, any>>(
    undefined as any
);

export const AuthorizationContextProvider = AuthorizationContext.Provider;
export const AuthorizationContextConsumer = AuthorizationContext.Consumer;

export const useAuthorization = <KEYS extends string, ARGS>() => {
    const context = useContext<AuthorizationContextType<KEYS, ARGS>>(AuthorizationContext);
    if (!context) {
        throw new Error(
            "useAuthorization must be used within a AuthorizationContextProvider"
        );
    }
    return context;
};