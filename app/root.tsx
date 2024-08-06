import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import Navbar from "./components/Navbar.client";
// @ts-ignore
import styles from "./index.css?url";
import ScrollToHashElement from "./components/ScrollToHashElement";
import LinkToMain from "./components/layout/LinkToMain";
import { ClientOnly } from "remix-utils/client-only";
import Banner from "./components/layout/Banner";
import Analytics from "./components/Analytics";
import Loading from "./components/layout/Loading";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Data By Design" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Layout = ({ children }: WrapperProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV == "production") {
      // @ts-ignore
      window.hypothesisConfig = function () {
        return {
          openSidebar: false,
          showHighlights: false,
        };
      };
      const head = document.querySelector("head");
      const script = document.createElement("script");
      script.setAttribute("src", "https://hypothes.is/embed.js");
      script.async = true;
      head?.appendChild(script);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        <ScrollToHashElement />
        <LinkToMain />
        <ClientOnly>{() => <Navbar />}</ClientOnly>
        <Banner>Public Beta</Banner>
        {children}
        <Loading />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return <Outlet />;
};

const ErrorContainer = ({ children }: WrapperProps) => {
  return (
    <div
      className={`fixed flex items-center text-center w-screen h-screen top-0 bg-offwhite`}
    >
      <div className="relative grow text-6xl text-offblack uppercase font-duboisWide tracking-widest">
        {children}
      </div>
    </div>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error("ErrorBoundary ~ error:", error);
  return (
    <ErrorContainer>
      {isRouteErrorResponse(error)
        ? `${error.status} ${error.statusText}`
        : error instanceof Error
        ? error.message
        : "Unknown Error"}
    </ErrorContainer>
  );
};

export default App;
