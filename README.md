# React router V7 demo

This is a sample projet on how to define routes with react router V7.

**Disclaimer**

This project is based on vite 5.5.5 while 6.0.1 has been released because there is a conflict of version raised by NPM.

## Steps to reproduce

1) Install vite
```
npm create vite@5.5.5 project-name -- --template react
```

2) Install react-router
```
npm i react-router@7.0.1
npm i react-router-dom@7.0.1
npm i @react-router/dev@7.0.1
```

3) Clean up vite

Remove React application files in src folder and index.html. It won't be used (only main.jsx and svgs are kept actually).
```
rm src/App.css
rm src/App.jsx
rm src/index.css
rm index.html
```

4) Setup react-router in vite

Add react-router plugin in vite.config.js
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reactRouter } from "@react-router/dev/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactRouter()],
})
```

Create react-router config file. The keypoint is to disable SSR.
```
export default {
    ssr: false,
    appDirectory: './src',
}
```

Add dumb routing in src/routes.js
```
export default [
    // here we'll define paths, components and layouts
]
```

Wrap default App in src/main.jsx and define index page, error and suspense rendering. The file must be renamed src/root.jsx.
```
import { StrictMode } from "react"
import {
  Outlet,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "react-router"

// this is the default page, equivalent to well known index.html
export const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

// if any error occurs
export const ErrorBoundary = () => {
  return (
    <>
      <h1>Error</h1>
      <p>This is the error page</p>
    </>
  )
}

// display on suspense
export const HydrateFallback = () => {
  return (
    <p>Loading...</p>
  )
}

// the initial app
const App = () => (
  <StrictMode>
    <Outlet />
  </StrictMode>
)

export default App
```

5) Start vite with default pages

Install @react-router/node
```
npm i @react-router/node@7.0.1
```

Then, start vite dev server as usual
```
npm run dev
```

By the end, vite should start, display suspense at root url and error page for any other url.

**Note**: It seems react-router creates some files (types) under .react-router folder and may be excluded in gitignore.
