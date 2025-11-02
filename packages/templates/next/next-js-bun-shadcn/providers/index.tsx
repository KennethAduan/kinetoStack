import React from "react";
import { ThemeProvider } from "./theme-provider";
import ReactQueryProvider from "./ReactQueryProvider";
import { Provider as JotaiProvider } from "jotai";
const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <JotaiProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </JotaiProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
