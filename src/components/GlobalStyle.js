import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  --accent: #ffcf33;
  --accent-strong: #ffb800;
  --on-accent: #231f20;

  --bg: #f6f4ee;
  --text: #211f1c;
  --input-bg: #ffffff;
  --border: rgba(33, 31, 28, 0.14);
  --icon-fill: rgba(33, 31, 28, 0.80);
  --btn-preset-bg: rgba(255, 223, 18, 0.20);
  --modal-border: 1px solid rgba(33, 31, 28, 0.15);

  --shadow-sm: 0 1px 2px rgba(20, 20, 25, .06), 0 1px 3px rgba(20, 20, 25, .05);
  --shadow-md: 0 4px 14px rgba(20, 20, 25, .08), 0 2px 6px rgba(20, 20, 25, .05);
  --shadow-lg: 0 18px 50px rgba(20, 20, 25, .18);

  --font-ui: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Archivo', 'Space Grotesk', sans-serif;
  --font-num: 'Outfit', 'Space Grotesk', sans-serif;
}

[data-theme="dark"] {
  --bg: #2b2824;
  --text: #efe9df;
  --input-bg: #363230;
  --border: rgba(255, 255, 255, 0.12);
  --icon-fill: rgba(239, 233, 223, 0.75);
  --btn-preset-bg: rgba(170, 165, 120, 0.38);
  --modal-border: 1px solid rgba(255, 232, 85, 0.50);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, .4);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, .45);
  --shadow-lg: 0 18px 50px rgba(0, 0, 0, .6);
}

body {
  margin: 0;
  font-family: var(--font-ui);
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
    font-family: var(--font-ui);
}

p {
  margin: 0;
}
h1, h2 {
  margin: 0;
  font-weight: 700;
}
`
