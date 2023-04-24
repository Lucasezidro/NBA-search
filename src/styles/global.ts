import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --dark-900: #111517;
    --dark-700: #202c37;
    --dark-500: #2b3945;
    --light-900: #adb5bd;
    --light-700: #fafafa;
    --light-500: #ffffff;
    --blue: #457b9d;
    --red: #e63946;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--dark-900);
    color: var(--light-500);
    font-family: "Inter", sans-serif;
  }
`
