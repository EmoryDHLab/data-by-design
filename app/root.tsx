import type {
  LinksFunction,
  V2_MetaFunction,
} from "@remix-run/node";

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

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Data By Design" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: fontStyles },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
