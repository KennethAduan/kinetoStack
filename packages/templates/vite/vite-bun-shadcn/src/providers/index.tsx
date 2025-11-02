import React from "react";
import { ThemeProvider } from "./theme-provider";
import ReactQueryProvider from "./ReactQuery.provider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
