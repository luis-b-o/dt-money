import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle((props) => {
  const { theme } = props;
  return {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    ":focus": {
      outline: 0,
      boxShadow: `0 0 0 2px ${theme["green-500"]}`,
    },

    body: {
      backgroundColor: theme["gray-800"],
      color: theme["gray-100"],
      webkitFontSmoothing: "antialiased",
    },

    "body, input, textarea, button": {
      font: "400 1rem Roboto, sans-serif",
    },
  };
});
