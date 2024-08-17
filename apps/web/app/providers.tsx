'use client';

import { AuthorizationContextProvider } from "@shad/react-authorization";
import APP_POLICIES from "./policies";

export const Providers = ({ children }: React.PropsWithChildren) => {
    return <AuthorizationContextProvider value={{ policies: APP_POLICIES }}>
        {children}
    </AuthorizationContextProvider>;
};