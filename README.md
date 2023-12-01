## Personal Portfolio

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm run dev` to view project in browser

Old package.json
{
  "name": "portfolio_nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start"
  },
  "dependencies": {
    "next": "10.2.3",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "styled-components": "^5.3.0",
    "styled-normalize": "^8.0.7",
    "react-icons": "^4.2.0"
  }
}

removed .babelrc file completely 
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}