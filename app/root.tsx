// import { useEffect } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/Navbar.client";
// @ts-ignore
import styles from "./index.css?url";
import ScrollToHashElement from "./components/ScrollToHashElement";
import LinkToMain from "./components/layout/LinkToMain";
import { ClientOnly } from "remix-utils/client-only";
import Banner from "./components/layout/Banner";

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

export default function App() {
  // useEffect(() => {
  //   window.hypothesisConfig = function () {
  //     return {
  //       "openSidebar": false
  //     };
  //   };
  //   const head = document.querySelector('head');
  //   const script = document.createElement('script');
  //   script.setAttribute('src', 'https://hypothes.is/embed.js');
  //   script.async = true;
  //   head?.appendChild(script);
  // }, []);

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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
