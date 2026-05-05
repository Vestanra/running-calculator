import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  --bg: rgb(246, 247, 248);
  --text: black;
  --input-bg: white;
  --border: rgba(35, 31, 32, 0.2);
  --icon-fill: rgba(35, 31, 32, 0.8);
  --btn-preset-bg: rgba(255, 223, 18, 0.2);
  --modal-border: 1px solid rgba(35, 31, 32, 0.15);
}

[data-theme="dark"] {
  --bg: #1c1c1e;
  --text: #f0f0f0;
  --input-bg: #3a3a3c;
  --border: rgba(255, 255, 255, 0.15);
  --icon-fill: rgba(240, 240, 240, 0.75);
  --btn-preset-bg: rgba(170, 165, 120, 0.38);
  --modal-border: 1px solid rgba(255, 232, 85, 0.5);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg);
  color: var(--text);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

button {
    cursor: pointer;
    color: var(--text);
}

p {
  margin: 0;
}
h1, h2 {
  margin: 0;
  font-weight: 700;
}
`