// import { useEffect } from "react";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/Navbar";
import styles from "~/styles/tailwind.css";
import fontStyles from "../styles/fonts.css";
import ScrollToHashElement from "./components/ScrollToHashElement";
import LinkToMain from "./components/layout/LinkToMain";

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Data By Design" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: fontStyles },
  ];
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
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
