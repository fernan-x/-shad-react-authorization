import type { Metadata } from "next";
import { Providers } from "./providers";
import { ColorSchemeScript } from "@mantine/core";
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: "React Authorization demo",
  description: "A demo to show how to use @shad/react-authorization package for Precision-Based Access Control (PBAC)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
