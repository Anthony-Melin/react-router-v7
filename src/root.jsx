import { StrictMode } from "react"
import {
  Outlet,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  Link,
} from "react-router"
import { HOME, UNKNOWN_PAGE } from "./paths"

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
export const ErrorBoundary = ({ error }) => {
  const location = useLocation()
  return (
    <>
      <h1>Error</h1>
      <p>This is the error page</p>
      <p>Current error status is {error.status}</p>
      {error.status === 404 && location.pathname === UNKNOWN_PAGE && (
        <>
          <h3>It seems you tried the unknown page !</h3>
          <p>Click <Link to={HOME}>here</Link> to go home</p>
        </>
      )}
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
