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
