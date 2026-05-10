"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode, useMemo } from "react";

type ThemeRegistryProps = {
  children: ReactNode;
};

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#2563eb",
          },
          background: {
            default: "#f1f5f9",
          },
        },
        shape: {
          borderRadius: 10,
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
