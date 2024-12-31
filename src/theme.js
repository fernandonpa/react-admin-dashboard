import { createContext, useState, useMemo } from "react"; // Add this line
import { createTheme, Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },

        primary: {
          100: "#d0d1d3",
          200: "#a1a4a7",
          300: "#72767b",
          400: "#43494f",
          500: "#141b23",
          600: "#10161c",
          700: "#0c1015",
          800: "#080b0e",
          900: "#040507",
        },

        greenAccent: {
          100: "#dbf5ef",
          200: "#b7ebde",
          300: "#94e2ce",
          400: "#70d8bd",
          500: "#4ccead",
          600: "#3da58a",
          700: "#2e7c68",
          800: "#1e5245",
          900: "#0f2923",
        },

        redAccent: {
          100: "#f8dcdf",
          200: "#f1b9bf",
          300: "#e9959f",
          400: "#e2727f",
          500: "#db4f5f",
          600: "#af3f4c",
          700: "#832f39",
          800: "#582026",
          900: "#2c1013",
        },

        blueAccent: {
          100: "#e1e3fc",
          200: "#c3c6f9",
          300: "#a4aaf5",
          400: "#868df2",
          500: "#6871ef",
          600: "#535abf",
          700: "#3e448f",
          800: "#2a2d60",
          900: "#151730",
        },
      }
    : {
        // Add light mode color tokens here
        grey: {
          900: "#e0e0e0",
          800: "#c2c2c2",
          700: "#a3a3a3",
          600: "#858585",
          500: "#666666",
          400: "#525252",
          300: "#3d3d3d",
          200: "#292929",
          100: "#141414",
        },
        primary: {
          900: "#d0d1d3",
          800: "#a1a4a7",
          700: "#72767b",
          600: "#43494f",
          500: "#141b23",
          400: "#f2f0f0",
          300: "#0c1015",
          200: "#080b0e",
          100: "#040507",
        },
        greenAccent: {
          900: "#dbf5ef",
          800: "#b7ebde",
          700: "#94e2ce",
          600: "#70d8bd",
          500: "#4ccead",
          400: "#3da58a",
          300: "#2e7c68",
          200: "#1e5245",
          100: "#0f2923",
        },
        redAccent: {
          900: "#f8dcdf",
          800: "#f1b9bf",
          700: "#e9959f",
          600: "#e2727f",
          500: "#db4f5f",
          400: "#af3f4c",
          300: "#832f39",
          200: "#582026",
          100: "#2c1013",
        },
        blueAccent: {
          900: "#e1e3fc",
          800: "#c3c6f9",
          700: "#a4aaf5",
          600: "#868df2",
          500: "#6871ef",
          400: "#535abf",
          300: "#3e448f",
          200: "#2a2d60",
          100: "#151730",
        },
      }),
});

// mui theme settings

export const themeSettings = (mode) => {
  const colorTokens = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colorTokens.primary[500],
            },
            secondary: {
              main: colorTokens.greenAccent[500],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              light: colorTokens.grey[100],
            },
            background: {
              default: colorTokens.primary[500],
            },
          }
        : {
            primary: {
              main: colorTokens.primary[100],
            },
            secondary: {
              main: colorTokens.greenAccent[500],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              light: colorTokens.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Theme context
export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
