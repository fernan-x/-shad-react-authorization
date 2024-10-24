'use client';

import { AuthorizationContextProvider } from "@shad/react-authorization";
import { APP_POLICIES } from "@/features/authorization";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
    /** Put your mantine theme override here */
});

export const Providers = ({ children }: React.PropsWithChildren) => {
    return <AuthorizationContextProvider value={{ policies: APP_POLICIES }}>
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    </AuthorizationContextProvider>;
};