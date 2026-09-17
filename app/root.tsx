import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "react-router";
import styles from "./index.css?url";
import ScrollToHashElement from "./components/ScrollToHashElement";
import LinkToMain from "./components/layout/LinkToMain";
import Banner from "./components/layout/Banner";
import Analytics from "./components/Analytics";
import Loading from "./components/layout/Loading";
import SiteNav from "./components/layout/SiteNav";
import type { LinksFunction, MetaFunction } from "react-router";
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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W0CLLLE69K"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W0CLLLE69K');`,
          }}
        />
      </head>
      <body className="overflow-x-hidden w-screen">
        <ScrollToHashElement />
        <LinkToMain />
        {/* <ClientOnly>
          <Navbar />
        </ClientOnly> */}
        <SiteNav />
        {/* <Banner>Dev Build</Banner> */}
        {children}
        <Loading />
        <Analytics />
        {/* <ScrollRestoration /> */}
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return <Outlet />;
}

const ErrorContainer = ({ children }: WrapperProps) => {
  return (
    <div
      className={`fixed flex items-center text-center w-screen h-screen top-0 bg-offwhite`}
    >
      <div className="relative grow text-6xl text-offblack uppercase font-powerWide tracking-widest">
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
