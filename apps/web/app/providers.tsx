'use client';

import { AuthorizationContextProvider } from "@shad/react-authorization";
import { POLICIES } from "./policies";

export const Providers = ({ children }: React.PropsWithChildren) => {
    return <AuthorizationContextProvider value={{ policies: POLICIES }}>
        {children}
    </AuthorizationContextProvider>;
};