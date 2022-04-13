import { createGlobalStyle } from "styled-components";

// act as global.css
// <Global /> in index.tsx
export const Global = createGlobalStyle`
body {
    background: hsl(218, 23%, 16%);
    color: #FFFFFF;

    h1 {
      color: hsl(150, 100%, 66%);
      font: 800 14px 'Manrope', sans-serif; 
    }

    blockquote {
      color: hsl(193, 38%, 86%);
      font: 800 28px 'Manrope', sans-serif; 
    }

    p {
      color: hsl(220, 15%, 55%);
      font: 800 15px 'Manrope', sans-serif;
    }
}
`;
