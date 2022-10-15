var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/components/ChapterDropdown.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ChapterDropdown() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "absolute z-20 top-10 border divide-y text-white",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/chapters/peabody/",
          className: "",
          children: "The Work of Knowledge"
        }, void 0, !1, {
          fileName: "app/components/ChapterDropdown.tsx",
          lineNumber: 5,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ChapterDropdown.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/chapters/playfair/",
          className: "",
          children: "Visualization as Argument"
        }, void 0, !1, {
          fileName: "app/components/ChapterDropdown.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ChapterDropdown.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/chapters/dubois/",
          className: "",
          children: "Between Data and Truth"
        }, void 0, !1, {
          fileName: "app/components/ChapterDropdown.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ChapterDropdown.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/chapters/brooks/",
          className: "",
          children: "Every Datapoint a Person"
        }, void 0, !1, {
          fileName: "app/components/ChapterDropdown.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ChapterDropdown.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/chapters/willard/",
          className: "",
          children: "Narratives of Possession"
        }, void 0, !1, {
          fileName: "app/components/ChapterDropdown.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ChapterDropdown.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/chapters/labour/",
          className: "",
          children: "Labour"
        }, void 0, !1, {
          fileName: "app/components/ChapterDropdown.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ChapterDropdown.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ChapterDropdown.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/Navbar.tsx
var import_react2 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Navbar() {
  let [isDropdownVisible, setIsDropdownVisible] = (0, import_react2.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full bg-black flex justify-evenly pb-2 pt-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "font-william text-white text-2xl",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/",
          children: "Data by Design"
        }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-around w-3/5 font-sans text-white text-xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            onMouseEnter: () => setIsDropdownVisible(!0),
            onMouseLeave: () => setIsDropdownVisible(!1),
            className: "font-sans text-white text-xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: "Chapters"
              }, void 0, !1, {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 17,
                columnNumber: 11
              }, this),
              isDropdownVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterDropdown, {}, void 0, !1, {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 18,
                columnNumber: 33
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: "/sandbox",
            className: "",
            children: "About"
          }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// styles/app.css
var app_default = "/build/_assets/app-KEGLYWZX.css";

// styles/fonts.css
var fonts_default = "/build/_assets/fonts-DLGZSMTM.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Data By Design",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: fonts_default }
  ];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/playfair.tsx
var playfair_exports = {};
__export(playfair_exports, {
  default: () => PlayfairPage
});

// app/components/ChapterTitle.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ChapterTitle({ title, subtitle }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "root bg-black md:h-96 flex flex-col justify-center items-center",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "text text-white text-center my-5",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "font-william text-4xl md:text-7xl mb-5 md:mb-10",
          children: title
        }, void 0, !1, {
          fileName: "app/components/ChapterTitle.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "font-william text-2xl md:text-4xl",
          children: subtitle
        }, void 0, !1, {
          fileName: "app/components/ChapterTitle.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/ChapterTitle.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/ChapterTitle.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/playfair.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PlayfairPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterTitle, {
      title: "Visualization as Argument",
      subtitle: "William Playfair\u2019s Time-Series Charts"
    }, void 0, !1, {
      fileName: "app/routes/chapters/playfair.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/chapters/playfair.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/peabody.tsx
var peabody_exports = {};
__export(peabody_exports, {
  default: () => PeabodyPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PeabodyPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterTitle, {
      title: "The Work of Knowledge",
      subtitle: "Elizabeth Palmer Peabody\u2019s Chronological Grids"
    }, void 0, !1, {
      fileName: "app/routes/chapters/peabody.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/chapters/peabody.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/willard.tsx
var willard_exports = {};
__export(willard_exports, {
  default: () => WillardPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function WillardPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterTitle, {
      title: "Narratives of Possession",
      subtitle: "Emma Willard and Shanawdithit\u2019s Narrative Maps"
    }, void 0, !1, {
      fileName: "app/routes/chapters/willard.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/chapters/willard.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/brooks.tsx
var brooks_exports = {};
__export(brooks_exports, {
  default: () => BrooksPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function BrooksPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterTitle, {
      title: "Every Datapoint a Person",
      subtitle: "The Brooks / Diagram of a Slave Ship"
    }, void 0, !1, {
      fileName: "app/routes/chapters/brooks.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/chapters/brooks.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/dubois.tsx
var dubois_exports = {};
__export(dubois_exports, {
  default: () => DuboisChapter
});

// app/components/ChapterSectionTitle.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ChapterSectionTitle({ color, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "chapter-title relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `opacity-50 ${color} w-full h-full absolute`
      }, void 0, !1, {
        fileName: "app/components/ChapterSectionTitle.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-4 relative font-william font-bold text-xl lg:text-4xl flex justify-center items-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children
        }, void 0, !1, {
          fileName: "app/components/ChapterSectionTitle.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ChapterSectionTitle.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ChapterSectionTitle.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/Footnote.tsx
var import_react4 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Footnote({
  backgroundColor,
  textColor,
  number,
  children
}) {
  let [isTextVisible, setIsTextVisible] = (0, import_react4.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: () => setIsTextVisible(!isTextVisible),
        className: `footnote ${backgroundColor} ${textColor}`,
        children: number
      }, void 0, !1, {
        fileName: "app/components/Footnote.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      isTextVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-cyan-500",
        children
      }, void 0, !1, {
        fileName: "app/components/Footnote.tsx",
        lineNumber: 26,
        columnNumber: 25
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Footnote.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/dubois.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function DuboisChapter() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "chapter-root bg-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterTitle, {
          title: "Between Data and Truth",
          subtitle: "W.E.B. Du Bois\u2019s \u201CData Portraits\u201D"
        }, void 0, !1, {
          fileName: "app/routes/chapters/dubois.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "nav-bar transition",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: "breakpoint xl"
          }, void 0, !1, {
            fileName: "app/routes/chapters/dubois.tsx",
            lineNumber: 14,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/chapters/dubois.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid-wrapper bg-offwhite pt-16 text-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterSectionTitle, {
              color: "bg-duboisPrimary",
              children: "Introduction"
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 17,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "pt-16",
              children: [
                "October 4th, 1899, was the first day of the fall term at Atlanta University (now Clark Atlanta University), where W.E.B. Du Bois had been teaching for the past two years--and a long two years they had been.",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footnote, {
                  backgroundColor: "bg-duboisPrimary",
                  textColor: "text-white",
                  number: "1",
                  children: [
                    "As indicated in the",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "italic",
                      children: "Catalogue of the Officers and Students of Atlanta University, 1899-1900"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 31,
                      columnNumber: 15
                    }, this),
                    ", available online at:",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "http://digitalcommons.auctr.edu/aucatalogs/31",
                      children: "http://digitalcommons.auctr.edu/aucatalogs/31"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 36,
                      columnNumber: 15
                    }, this),
                    "."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 25,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "After relocating from Philadelphia to Atlanta in January 1897, Du Bois and his family were first required to contend with the overt racism of their everyday lives in the New South; and then, on May 24th, 1899, the most profound of personal tragedies when the Du Bois\u2019s two-year-old son, Burghardt, died after a brief illness."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 41,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "2"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 50,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "But any small comfort that might have brought about by the start of the school year and the return to a teaching routine would soon evanesce as Du Bois found himself pulled into an unexpected new project, one that had the potential to put his research to date on a major international stage."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 54,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "On that very same day in October, Du Bois\u2019s own college classmate, the lawyer and newspaper editor Thomas J. Calloway began the letter campaign that would result in a commitment from the federal government to fund an \u201CExhibit of American Negroes\u201D at the 1900",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 64,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "Exposition Universelle"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 70,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: " in Paris"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 71,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: ", "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 72,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: 'which was scheduled to open the following spring. With time running short, Calloway turned to Du Bois and one other man, Daniel A.P. Murray, the Assistant Librarian of Congress, to design and curate the show. While Murray tasked himself with assembling a set of books and pamphlets by Black writers to put on display, Du Bois saw his purview in more conceptual terms: to present \u201Cthe history and present condition of a large group of human beings\u201D\u2014namely, the United States\u2019s Black citizens\u2014"in as systematic and compact a form as possible.\u201D'
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 73,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "3"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 85,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 84,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "This \u201Csystematic and compact form\u201D was, of course, data visualization\u2014a technique that he\u2019d studied during his time in Germany, and which he\u2019d perfected in his groundbreaking study,",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 89,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "The Philadelphia Negro"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 95,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: ", published just one year earlier."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 96,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "4"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 100,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 99,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col items-center middle-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: "/_nuxt/img/ch5-01-phila.9af3426.jpg",
                    alt: "",
                    loading: "lazy",
                    width: "100%"
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 107,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 106,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "caption text-center mt-10 w-5/6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-normal",
                        style: { color: "rgb(44, 62, 80)" },
                        children: [
                          "Above: \u201CDistribution of African American inhabitants of the 7th Ward,\u201D the central image of",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "italic font-normal",
                        style: { color: "rgb(44, 62, 80)" },
                        children: "The Philadelphia Negro"
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "italic font-normal",
                        style: { color: "rgb(44, 62, 80)" },
                        children: [
                          ", which was published in 1898. In order to conduct the research for",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "italic font-normal",
                        style: { color: "rgb(44, 62, 80)" },
                        children: "The Philadelpha Negro"
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "italic font-normal",
                        style: { color: "rgb(44, 62, 80)" },
                        children: ", Du Bois (and his wife Nina) moved to the neighborhood, where Du Bois administered social surveys and collected the other data that would culminate in the report. Image courtesy of Wikimedia Commons."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 142,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 115,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 114,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: "For the Paris Exposition, as the event is more commonly known, Du Bois worked with a team of Atlanta University students to create 63 poster-sized statistical charts. Like William Playfair and most visualization practitioners ever since, Du Bois appreciated the ability of the charts to convey trends and patterns \u201Cat a glance.\u201D"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 155,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "5"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 163,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 162,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "In this case, Du Bois sought to highlight the growth and progress of Black Americans in the years since emancipation. But Du Bois understood that data could not convey the full picture of this progress\u2014nor could it convey the full extent of the obstacles that the nation\u2019s Black citizens were required to overcome. Thus he supplemented the charts with over 500 photographs that documented \u201Ctypical\u201D Black Americans at home, at school, and at work; as well as with three large manuscript volumes that compiled the complete Black Codes of Georgia\u2014the legislation that, as Whitney Battle-Baptiste and Britt Rusert explain, \u201Cstretch[ed] from the slave codes of the colonial and antebellum period to the segregationist policies and laws of the present,\u201D and which attempted to control and constrain all aspects of Black life."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 167,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "6"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 184,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 183,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "Conceived at a time when Du Bois found himself increasingly affected, both personally and intellectually, by the racism and violence of white supremacy, the range of materials assembled for the Paris Exposition at once attest to his deep-seated belief in the transformative power of data and, at the same time, his growing awareness of the limits of what data--and, by extension, data visualization--could do."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 188,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 154,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "title-text p-4 relative font-william font-bold text-xl lg:text-4xl flex justify-center items-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Visualization as Evidence, Visualization as Argument"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 200,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: "The 63 charts created for the Paris Exhibition were grouped into two sets."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 203,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "7"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 208,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 207,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: " The first set, "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 212,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "The Georgia Negro: A Sociological Study"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 213,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    ", focused on statistics that had been compiled by Du Bois and his students that related to the Black population of that state. The second set was more national in scope. Entitled",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 216,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "A Series of Statistical Charts Illustrating the Condition of the Descendants of Former Slaves Now in Residence in the United States of America"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 221,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: ", this set drew from several data sources, including the US Census, in order to put the Black population of the United States in national and international perspectives. Throughout both series of charts, Du Bois underscores the vitality of the nation\u2019s Black citizens, as well the educational and economic progress they had made in the decades since Emancipation."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 226,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 202,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col-span-10 2xl:col-span-14 2xl:col-end-13 flex w-full mx-auto bg-black",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "button py-10 px-5 flex flex-col items-center"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 236,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "min-h-screen items-center justify-center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "slides flex flex-nowrap py-5 px-40 content-center relative"
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 238,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 237,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 235,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  style: { color: "rgb(41, 41, 41)" },
                  children: [
                    "The first chart of",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 242,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "italic font-normal",
                  style: { color: "rgb(41, 41, 41)" },
                  children: "The"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 245,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  style: { color: "rgb(41, 41, 41)" },
                  children: " "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 251,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  style: { color: "rgb(41, 41, 41)" },
                  children: [
                    "Georgia Negro",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 254,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  style: { color: "rgb(41, 41, 41)" },
                  children: "series, which functions as its title page, makes clear how Du Bois understood the twofold purpose of the project. Below a pair of Mercator projections, one of Africa and the other of the Americas, which together depict the \u201Croutes of the African slave trade,\u201D are two epigraphs. The first makes the expository aim of the series explicit: \u201Cto illustrate the development of the American Negro in a single typical state of the United States.\u201D The second advances the argument of the series: \u201CThe problem of the 20"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 260,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  style: { color: "rgb(41, 41, 41)" },
                  children: "th"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 270,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  style: { color: "rgb(41, 41, 41)" },
                  children: [
                    " ",
                    "century is the problem of the color line.\u201D"
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 271,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 241,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col items-center middle-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: "/_nuxt/img/ch5-03-georgia.1a93e97.jpg",
                    alt: "",
                    loading: "lazy",
                    width: "100%"
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 278,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 277,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "caption text-center mt-10 w-5/6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "Above: The introductory image of "
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "The Georgia Negro: A Social Study, "
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 288,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: [
                          "the first set of charts included in the Paris Exposition. Image courtesy of the Library of Congress, Prints & Photographs Division,",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 289,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "LC-DIG-ppmsca-33863."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 286,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 285,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 276,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "These words would reappear several years later in "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 299,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "The Souls of Black Folk"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 300,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "(19n03), where they would become \u201Cperhaps Du Bois\u2019s most famous indictment of the centrality of race and racism to modern American sociopolitical life,\u201D as architectural historian Mabel O. Wilson explains."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 301,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "8"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 309,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 308,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: " But Du Bois mounts the same case through his charts. "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 313,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "Both through his choices about what data to visualize, and about how to visualize them, Du Bois advances a clear argument about the nation\u2019s Black citizens: not only about the",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 314,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    "progress that the nation\u2019s Black citizens had made up to that date, but also about the extent of the challenges that remained to be addressed.",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 319,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 298,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "While the first several charts in the series make use of familiar visual forms\u2014maps, bar charts, and line graphs\u2014in order to introduce the exhibition\u2019s international viewership to the state of Georgia and its significance as an object of study, the visual style shifts to altogether new terrain once the focus on Georgia\u2019s Black residents has been established. In his comparative representation of the places where Georgia\u2019s Black citizens reside, for example, Du Bois brings together aspects of the bar chart and the line chart along with a new form of spiral graph in order to give animacy to the presence of Black people in each of type of locale. In a later chart, which documents the decrease in illiteracy rates in the years between 1860 and 1900, Du Bois makes use of what graphic designer Silas Munro describes as a \u201Clattice-like arrangement,\u201D in which an otherwise standard bar is folded at a right angle in order to further accentuate the decreasing rate of illiteracy. Du Bois elaborates upon this technique in a later chart, which compares the numbers of Black property owners, and the value of their properties, in two Georgia cities. Another unique chart in this series, which plots the \u201Cassessed value of household and kitchen furniture\u201D owned by Black Georgians, takes the standard bar chart and bends it into a spiral, concentrating the viewer\u2019s focus on the cumulative value of the population\u2019s material possessions in addition to its growth in time."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 326,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 325,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "middle-full flex flex-col items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "cut-corners p-2 uppercase font-dubois bg-dubois_sec",
                      children: "Chart One"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 355,
                      columnNumber: 15
                    }, this),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "cut-corners p-2 uppercase font-dubois bg-white",
                      children: "Chart Two"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 358,
                      columnNumber: 15
                    }, this),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "cut-corners p-2 uppercase font-dubois bg-white",
                      children: "Chart Three"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 361,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 354,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "w-4/5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-8 2xl:col-span-10 col-start-2 2xl:col-start-3 mt-6 flex flex-col font-duboisWide uppercase",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "font-bold xl:text-2xl 2xl:text-3xl text-xl tracking-wider text-center",
                        children: "A series of statistical charts, illustrating information about the graduates of atlanta university, and other black college graduates in the united states, who contributed data, knowledge, and labor to du bois's research."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 367,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 366,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-between items-center p-10 font-duboisNarrow",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "2xl:text-[18px] text-lg text-center uppercase w-96",
                          children: [
                            "prepared and executed by",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 377,
                              columnNumber: 19
                            }, this),
                            "tanvi sharma, anna mola,",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 379,
                              columnNumber: 19
                            }, this),
                            "nicholas yang, and lauren klein",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 381,
                              columnNumber: 19
                            }, this),
                            "under the auspices of ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 382,
                              columnNumber: 41
                            }, this),
                            "the digital humanities lab ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 383,
                              columnNumber: 46
                            }, this),
                            "emory university, atlanta, ga. ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 384,
                              columnNumber: 50
                            }, this),
                            "united states of america"
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 375,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "w-2/5 flex flex-col items-center",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "flex items-center space-x-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                width: "23",
                                height: "23",
                                viewBox: "0 0 28 28",
                                fill: "none",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z",
                                  fill: "black"
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 390,
                                  columnNumber: 23
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 389,
                                columnNumber: 21
                              }, this),
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "font-dubois uppercase",
                                children: "Atlanta University"
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 395,
                                columnNumber: 21
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 388,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 387,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 374,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-6 flex flex-col font-dubois uppercase text-center space-y-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          children: "The original chart visualized the occupations of the 330 black americans who had graduated from atlanta university as of 1898, including those with college as well as theological and normal school degrees."
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 400,
                          columnNumber: 17
                        }, this),
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          children: "The 1898-1899 catalogue of the officers and students of Atlanta University lists these same graduates by name, along with the type of degree(s) earned, their current occupation, and their place of residence."
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 406,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 399,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-center mt-20 mb-20",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "col-span-3 2xl:col-span-3 col-start-1 col-end-4 2xl:col-start-2 mt-6 flex flex-col justify-center",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "font-duboisNarrow uppercase",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 418,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "Teachers"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 419,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 417,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 422,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "Ministers"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 423,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 421,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 426,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "Government Service"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 427,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 425,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 430,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "Business"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 431,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 429,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 434,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "Other Professions"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 435,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 433,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 438,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "House Wives"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 439,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 437,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 442,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "Dead"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 443,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 441,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex flex-row mb-6 items-center pl-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "mr-2 rounded-2xl h-8 w-8"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 446,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                      children: "Unknown"
                                    }, void 0, !1, {
                                      fileName: "app/routes/chapters/dubois.tsx",
                                      lineNumber: 447,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 445,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 416,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 415,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 414,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          id: "vue-canvas",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", {
                            id: "defaultCanvas0",
                            className: "p5Canvas",
                            width: "1000",
                            height: "1000"
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 453,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 452,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 413,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-6 font-dubois font-bold text-center uppercase",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: "This visualization attempts to honor the graduates of Atlanta University whose lives were behind the data of Du Bois\u2019s original pie chart, as well as the Atlanta University students who themselves helped to create the chart. The original chart depicted the occupations of the 330 graduates of Atlanta University as of 1898 as percentages. Here, each of the 255 graduates with known occupations (as determined by the alumni section of the 1898-1899 Atlanta University catalog) are placed in the appropriate section of the pie chart. Hovering on each dot reveals the graduate\u2019s name, occupation, and place of residence. Additional categories represent the 35 graduates with unknown occupations and the 42 graduates who were recorded in the 1898-1899 catalog as \u201CDeceased.\u201D One additional graduate, William Andrew Rogers of the Class of 1899, the only formally recognized contributor to the original set of charts; and the four students enrolled in Du Bois\u2019s advanced sociology course during the 1899-1900 academic year, Henry Napoleon Lee, Lula Iola Mack, Edward Lee Simon, and William George Westmoreland\u2013the students who most likely collected, analyzed, and visualized the data depicted in the original charts\u2013are positioned outside of the pie, closest to the occupation they would soon take on."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 462,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 461,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 365,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 353,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "As the series unfolds, so too does its argument about the progress of the state\u2019s Black citizens, and it does so in a way in which the data presented is aligned with its method of display. The charts\u2019 custom visual design speaks to an overarching desire, on the part of Du Bois, to attend to the specificity of the data and its significance for his larger goal."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 490,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 489,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "[ ABOVE: SCROLLY TELL PLATE 11, THEN PLATE 14, 23, 25 -- Images ch5-04a-d -- see notes in doc]"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 500,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 499,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col-span-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "bg-theme absolute z-0 left-0 w-screen max-w-full"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 506,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "opacity-0 pointer-events-none absolute left-0 -top-screen w-screen h-screen max-w-full max-h-full"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 508,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "opacity-0 pointer-events-none absolute left-0 w-screen h-screen max-w-full max-h-full"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 509,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 507,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-row mx-3 lg:mx-12",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-1 z-10 relative",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: '[ No text "font-normal'
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 516,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 515,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 514,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 513,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: "The table in the first edition of the "
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 523,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: "Atlas"
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 524,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: [
                                    " ",
                                    "includes data only for the years between 1770 and 1782."
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 525,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 522,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 521,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 520,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: "Playfair nevertheless plotted data lines for the full range of years between 1700 and 1780."
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 535,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 534,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 533,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 532,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: "He shaded the area between the two data lines in order to illustrate the balance of trade between the two nations. Stippled dots indicate periods of time when the amount of imports from North America to England exceeded the amount of exports from England to North America. Diagonal lines indicate the times when exports from England to North America exceed imports."
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 545,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 544,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 543,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 542,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: [
                                    "While Playfair includes both major and minor gridlines along the y-axis of the chart, in the version included in the first edition of the",
                                    " "
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 560,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: "Atlas"
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 565,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: ", Playfair includes minor gridlines along the x-axis only for the twelve years for which he possesses tabular data."
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 566,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 559,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 558,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 557,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: "In the third edition of the "
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 577,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: "Atlas"
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 578,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: ", these minor gridlines disappear--along with the data tables."
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 579,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 576,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 575,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 574,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: "While Playfair extends the endpoint of the x-axis to 1800, what was then the present, the datalines become less precise. As he plots the lines of imports and exports, they become smoother--a reflection either of his improved engraving technique, or of his desire to convey a more general impression of the economic picture, or both."
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 589,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 588,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 587,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 586,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: "In the third edition of the "
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 604,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: "Atlas"
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 605,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  children: ", Playfair also made significant improvements to the charts\u2019 design. He replaced the hachure and stippled dots employed in the second edition to indicate the difference between the periods of trade in favor of and against England with hand-stained color."
                                }, void 0, !1, {
                                  fileName: "app/routes/chapters/dubois.tsx",
                                  lineNumber: 606,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 603,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 602,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 601,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: "this series begins with several charts focused on population, before moving on to explore themes related to employment,"
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 619,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 618,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 617,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 616,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: "education, and economics,"
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 630,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 629,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 628,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 627,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center pr-12 h-screen max-w-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: "as well as social, cultural, and religious life."
                              }, void 0, !1, {
                                fileName: "app/routes/chapters/dubois.tsx",
                                lineNumber: 637,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 636,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/chapters/dubois.tsx",
                            lineNumber: 635,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 634,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "h-1/2"
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 643,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 512,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-1 h-screen max-h-full sticky top-0 z-10"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 645,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 511,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 505,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Du Bois continues this line of argument, and his graphical innovation, in the second series of charts. Focused on the \u201Ccondition of the descendants of former African slaves now resident in the United States of America,\u201D as the introductory chart of this series explains, these charts document the upward progress of Black Americans in a national and international context. They also make use of comparisons to other populations, both within the United States and abroad, in order to challenge racist assumptions about Black Americans\u2019 social, intellectual, and economic lives. As with the first series of charts, this series begins with several charts focused on population, before moving on to explore themes related to employment, education, and economics, as well as social, cultural, and religious life."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 649,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 648,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: [
                  "[ ABOVE: SCROLLY TELL PLATE 41, THEN PLATE 44, 50, 61 -- Images ch5-05a-d]",
                  " "
                ]
              }, void 0, !0, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 666,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 665,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "An unnamed interlocutor in this series is the US Federal Government, which for each of the three previous national censuses, had created a \u201Cstatistical atlas\u201D that visualized the data that had been collected. The most recent atlas, based on the results of the 1890 Census, had been published only two years earlier, in 1898. Most famous today for its visual depiction of the closing of the American frontier, in its own time the atlas was motivated by a more academic goal: \u201Cpopularizing and extending the study of statistics.\u201D"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 672,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "9"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 684,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 683,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 688,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 671,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    "The 409 maps and diagrams began, as Du Bois\u2019s did, by introducing viewers to the population of the United States. Through by-then standard bar charts, pie charts, and line graphs, as well as its own creative use of pattern and visual form, the Atlas included, for example, a prototypal bump chart that ranked each state according to its population; a map that illustrated the spatial distribution of the nation\u2019s male population; and another that illustrated the spatial distribution of the nation\u2019s Black population. (Another chart used area charts in small multiples in order compare certain state\u2019s Black and white populations). And while race was certainly of concern in the census; indeed, race remains one of the lighting rod issues of the census, even today\u2014it was not the",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 691,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Statistical Atlas\u2019s "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 706,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "main concern. Indeed, after a series of charts early in the atlas that visualized the nation\u2019s Black population, the focus of the atlas shifts, turning first to the nation\u2019s immigrant population before expanding outward to consider other features altogether: the population\u2019s age and gender breakdown, its religion, the occupations of its inhabitants, and more."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 707,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 690,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: " [ ABOVE: SCROLLYTELL W/ ABOVE, IMAGES ch5-07a-h ]"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 717,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 716,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Du Bois was clearly influenced by the "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 720,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Atlas"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 721,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    ". Several of the diagrams created for the Paris Exposition precisely mirror the form of those created for the",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 722,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Atlas"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 726,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    ". Du Bois\u2019s graduated area chart of \u201CThe Amalgamation of White and Black elements of the Population in the United States,\u201D for example, takes the same visual form as the chart in the",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 727,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Atlas"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 732,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "depicting \u201CGrowth of the Elements of the Population: 1790-1890.\u201D Similarly, the combined area and bar chart form that Du Bois employs for his chart of \u201CConjugal Condition of American Negroes according to Age Periods\u201D is the very same as the chart in the",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 733,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Atlas"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 740,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "depicting \u201CConjugal Condition of the Population by Age and Sex, in proportion to the total number of each group.\u201D The notable difference within each pair is, of course, Du Bois\u2019s focus on the Black population alone. And for Du Bois, this focus was the point: the nation\u2019s Black population was itself diverse, and it was thriving. By adopting the visual typologies of the",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 741,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Statistical Atlas "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 750,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "in order to make his claims, Du Bois underscores his textual argument about the \u201Csmall nation of people\u201D within the larger United States by creating a national statistical atlas of their own."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 751,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 719,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "Between Chart and Photograph"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 759,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 758,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "Today, Du Bois\u2019s charts are often shared as single images, embedded in a tweet or blog post, or\u2014as in the case of",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 762,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "Du Bois\u2019s Data Portraits"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 766,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: ", the 2018 volume that compiled the charts in print for the first time\u2014bound as a dazzling, full-color book."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 767,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "10"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 772,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 771,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "But in their own time, the charts were intended to be viewed as part of a carefully curated exhibition experience. Visitors entered a small reading room, about 20 feet by 20 feet square, its walls painted and ornamented by decorative crown molding, and lined with artifacts from floor to ceiling. The books assembled by Daniel Murray, of the Library of Congress, filled three shelves of under-counter bookcases. On the counters lay more books and some of the charts, arranged in a stack for easy perusal. A bronze statue of Frederick Douglass was installed on one of the side walls, on a pedestal that could swing out from the wall for a 360\xB0 view. Filling the entire height of the back wall were framed artifacts, arranged in three rows: farming tools and other objects from Black agricultural and industrial schools, installed in swing-out vitrines; the most significant of the charts, installed in ornate wooden frames; and alongside them, photographs: over 500 portraits of the nation\u2019s Black citizens, pictured at school, at home, and at work\u2014in other words, in the activities that defined their everyday lives."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 776,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 761,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col items-center middle-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: "/_nuxt/img/ch5-09-exhibit.3c12edb.png",
                    alt: "",
                    loading: "lazy",
                    width: "100%"
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 800,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 799,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "caption text-center mt-10 w-5/6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: [
                          "Above: A photo of the \u201CExposition des N\xE8gres D'Am\xE9rique\u201D as it was installed at the 1900",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 809,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "Exposition Universelle"
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 813,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: [
                          " ",
                          "in Paris. Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-08994"
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 814,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 819,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 808,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 807,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 798,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "In a reflection on the Paris Exhibition, published several months after its opening, Du Bois explains that he included the photographs to",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 824,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: "challenge \u201Cconventional American ideas,\u201D although he does not specify what particular ideas he intends to challenge."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 829,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "11"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 834,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 833,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "Presumably, these ideas included racist assumptions about what Black citizens looked like, what social and professional roles they occupied, and what they could achieve. In her in-depth analysis of the photographs, art historian Shawn Michelle Smith connects them to Du Bois\u2019s idea of double consciousness, \u201Cthe sense of always looking at one\u2019s self through the eyes of another,\u201D as articulated most famously in",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 838,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "The Souls of Black Folk."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 848,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "12"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 850,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 849,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "With the photos, which not only featured black citizens but were also created by them, Du Bois sought to present to a predominantly white international audience a view of how Black American saw themselves."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 854,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "13"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 862,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 861,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 823,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: "Considered alongside the photographs, it becomes possible to understand the charts as pushing back against this double consciousness through an additional visual form. In their discussion of the charts, Battle-Baptiste and Rusert elaborate this line of thinking, emphasizing how Du Bois understood double consciousness as a \u201Ckind of \u2018second sight\u2019 that might be transformed from a curse into a \u201Cgift\u201D that offered a unique and superior perspective on turn-of-the-century race relations, sociability, and even existence itself.\u201D"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 868,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "14"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 880,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 879,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: " In direct comparison to the "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 884,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "Statistical Atlas"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 885,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: ", the charts certainly express a \u201Csuperior perspective\u201D on the race relations of the time. They also express a more general desire, one shared with the photographs, to put the vitality and talents of Black America on public display."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 886,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 867,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "But Du Bois\u2019s decision to pair the photographs with the charts also points to his awareness of the limits of what each medium could achieve on its own. While the photographs could document the richness of individual lives, they could not picture each one of the nation\u2019s Black citizens. Conversely, while the charts could present powerful evidence of generalized trends, they could not expose the individual people behind the data or the unique stories that accompanied each one of their lives. Considered as a complementary pair, the charts and the photographs recall another visual technology of that era: the stereoscope. The stereoscope was a device designed to resolve left- and right-eye views of the same image into a single view of additional depth. Similarly, Du Bois understood the charts and the photographs as two parts of a larger whole. While each was legible on its own, the best and most complete picture was gained by viewing them together."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 894,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 893,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 913,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 912,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "[ CHART + PHOTOGRAPHS IN IMAGE OF FIRST CHART W/ MERCATOR PROJECTIONS, REPLACE TEXT W/ CAPTION ]"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 916,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 915,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "The idea of the charts and the photographs as stereoscopic pairs is more than a visual gimmick; it serves as an outward reflection of the methodological soul-searching in which Du Bois was, in the months leading up to the Paris Exhibition, deeply engaged. When Du Bois first arrived in Atlanta, he was heavily invested in advancing a quantitative approach to sociological work. As he recalls in his 1940 autobiography,",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 922,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "Dusk of Dawn"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 931,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: ", \u201C"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 932,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "I was going to study the facts, any and all facts, concerning the American Negro and his plight, and by measurement and comparison and research, work up to any valid generalization which I could.\u201D"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 933,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "15"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 939,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 938,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "Here we see the strength of Du Bois\u2019s belief in the power of \u201Cfacts\u201D\u2014the more facts the better\u2014when they could be aggregated and analyzed in the service of generalized claims.",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 943,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 921,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "But after only a year in the Deep South\u2014and just a few months before he began to assemble the materials for Paris Exposition\u2014Du Bois experienced what can only be described as an intellectual epiphany, one brought about not by any new sociological research but instead by his own first-hand evidence of how white supremacy overdetermined any and all of the work he might do.",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 951,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "In "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 959,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Dusk of Dawn"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 960,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: ", Du Bois narrates this transformation in almost metaphysical terms:"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 961,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: " "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 965,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "\u201CAt the very time when my studies were most successful, there cut across this plan which I had as a scientist, a red ray which could not be ignored.\u201D"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 966,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "16"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 972,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 971,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 976,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 950,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    "This \u201Cred ray\u201D was no abstraction. It had a specific and horrific source: the lynching of",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 979,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: "a man named Sam Hose, which had taken place just outside of Atlanta, on April 23, 1899. Du Bois had first intended to approach the incident as he approached any inquiry: through a social-scientific lens. He recalls how drafted a \u201C"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 983,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    "careful and reasoned statement concerning the evident facts\u201D of the case, which he sought to publish in the",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 989,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Atlanta Constitution"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 993,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: ", the leading newspaper of the South."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 994,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: " "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 995,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "17"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 997,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 996,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "But while walking from the Atlanta University campus to the newspaper office\u2014he planned to deliver the statement in person\u2014Du Bois learned of a gruesome new turn of events."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1001,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "18"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1008,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1007,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "He turned around and went home, his statement never to see the light of day."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1012,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 978,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    "While Du Bois\u2019s desire to publish a statement on the \u201Cfacts\u201D of the case was extinguished at that point, he continued to contemplate\u2014deeply\u2014the larger function of his sociological work. As he narrates in",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1019,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Dusk of Dawn:"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1025,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1026,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1018,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "md:my-16 middle-text flex flex-col",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "font-william",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "\u201CTwo considerations thereafter broke in upon my work and eventually disrupted it: first, one could not be a calm, cool, and detached scientist while Negroes were lynched, murdered, and starved; and secondly, there was no such definite demand for scientific work of the sort that I was doing. I regarded it as axiomatic that the world wanted to learn the truth and if the truth was sought with even approximate accuracy and painstaking devotion, the world would gladly support the effort.\u201D"
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 1031,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              role: "button",
                              className: "circle",
                              children: "19"
                            }, void 0, !1, {
                              fileName: "app/routes/chapters/dubois.tsx",
                              lineNumber: 1043,
                              columnNumber: 19
                            }, this),
                            " "
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 1042,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1030,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "font-normal",
                          children: " - W.E.B. Du Bois, "
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 1049,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "font-normal italic",
                          children: "Dusk of Dawn"
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 1050,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "font-normal",
                          children: ", pp. 67-8."
                        }, void 0, !1, {
                          fileName: "app/routes/chapters/dubois.tsx",
                          lineNumber: 1051,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1048,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1029,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "font-sans text-lg text-gray-500",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "font-normal",
                      children: "attr"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1056,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 1055,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1054,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1028,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "From these lines, it becomes clear that Du Bois emerged from the incident with a greater awareness of the limits of his \u201Cscientific,\u201D data-driven approach, as well as of the larger stakes of any future work he might do. The violence brought about by centuries of white supremacy, Du Bois then realized, demanded a different scholarly charge: not an emphasis on any particular methodology, but instead a broader attempt to describe \u201Cthe truth.\u201D Thus when Du Bois turned to the Paris Exhibition in several months\u2019 time, it was this \u201Ctruth\u201D\u2014the experience and effects of living within, and continually resisting, a racist regime\u2014that Du Bois sought, through the charts and"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1061,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: " "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1074,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "the photographs together, to put on public display."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1075,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1060,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col items-center middle-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: "/_nuxt/img/ch5-11-property.9e52db5.jpg",
                    alt: "",
                    loading: "lazy",
                    width: "100%"
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 1079,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1078,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "caption text-center mt-10 w-5/6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: [
                          "Above: Plate 22, \u201CAssessed Valuation of All Taxable Property Owned by Georgia Negroes,\u201D which depicts (among other things) a red ray cutting through the history of Black property ownership. Image courtesy of the Library of Congress, Prints & Photographs Division,",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 1088,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "LC-DIG-ppmsca-33884"
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 1095,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 1096,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 1087,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1086,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1077,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "Education, Collaboration, and Credit"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1101,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1100,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "If one major purpose of the Paris Exposition was to illustrate the accomplishments\u2014and, therefore, the requisite tenacity\u2014of Black Americans as a group, a second equally major purpose was to illustrate the accomplishments of a much smaller group: the students of Atlanta University. These students were pictured in several of photographs included in the exhibition, along with students from other Black universities and industrial schools; but their talents and potential were most visible in the second series of charts, which were credited not to Du Bois but to \u201CNegro students under the direction of Atlanta University.\u201D"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1106,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "Through his explicit acknowledgement of his students\u2019 contributions, as well as the contents of the charts themselves, Du Bois sought to demonstrate the capability of his Atlanta University students. To wit: the introductory chart of the second series, which announces itself as a study of the Black citizens of the United States, is illustrated not by any visualization of the population as a whole, but instead by a pie chart that displays the occupations of the 330 individuals who had graduated from Atlanta University to that date. Additional statistics printed at the bottom of the chart provide additional information about the University, including the number of current faculty members (20) and students (250), as well as buildings on campus (5) and books in the library (11,000). A final number closes the chart: the amount of funding required to seed an endowment for this level of intellectual inquiry ($500,000). In this way, the chart reads as an advertisement for the past successes of the University and a plea for its future support."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1120,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1119,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col items-center middle-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: "/_nuxt/img/ch5-12-series.e0c8408.jpg",
                    alt: "",
                    loading: "lazy",
                    width: "100%"
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 1142,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1141,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "caption text-center mt-10 w-5/6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "Above: The title image of the second set of charts prepared for the Paris Exposition, \u201CA Series of Statistical Charts Illustrating the Condition of the Descendants of Former African Slaves Now Resident in the United States of America.\u201D Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-08994"
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 1151,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 1159,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 1150,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1149,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1140,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "While the subsequent charts in the series deliver on the promise to treat the Black population of the United States as a whole, they continue to underscore the value of Atlanta University, both for its students and for the nation. Unlike the first set of charts, which do not include credit lines except on the introductory image, each chart in this series contains a credit line just below its title: \u201CDone by Atlanta University.\u201D The credit line serves the dual purpose of acknowledging their labor and accentuating their skill."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1164,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1163,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "As to who, more specifically, Du Bois intended to credit, it remains difficult to discern. The",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1177,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "Atlanta University Bulletin"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1181,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "for May 1900, which included an article on the exposition, emphasizes how the work \u201Cwas done entirely by Negroes--Dr. Du Bois and his assistants, most of whom are Atlanta University graduates.\u201D"
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1184,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "20"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1192,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1191,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "Du Bois himself provides only slightly more clarity, recalling in his third and final autobiographical text, written late in life, \u201CI got a couple of my best students and put a series of facts into charts,\u201D resulting in the \u201Cmost interesting set of drawings\u201D that were displayed in Paris."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1196,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "21"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1205,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1204,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "And while Du Bois goes on to describe the contents of the charts as well as how \u201Cthe details of finishing these fifty or more charts, in colors, with accuracy, was terribly difficult with little money, limited time, and not too much encouragement,\u201D he does not name any of the students who might have helped to ease this challenging task."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1209,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1176,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "[ SOMETHING INTERESTING WITH ALL OF THE SINGLE CREDIT LINES? ]"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1220,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1219,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    "Newspaper reportage of the Paris Exposition does name one former student, William Andrew Rogers, as responsible for having \u201Cexecuted\u201D the charts. The 1899-1900 Atlanta University",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1225,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal italic",
                  children: "College Bulletin"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1230,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "confirms this role, listing Rogers\u2019s occupation as \u201CWork on Paris Exhibit.\u201D"
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1231,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "22"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1237,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1236,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "(Rogers had graduated the previous year.) But \u201Cbased on the volume of the designs, each piece\u2019s complexity and detail, and the compressed project timeline,\u201D as graphic designer Silas Munro confirms, \u201Cit seems implausible that Rogers and Du Bois worked alone to complete the project.\u201D"
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1241,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "23"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1250,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1249,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "The fact that the first set of charts are more sophisticated in their visual design, and more professional in their execution, suggests that Rogers and Du Bois might have worked on the first series together, while enlisting additional students in the design and execution of the second set of charts.",
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1254,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1224,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col items-center middle-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: "/_nuxt/img/ch5-14-rogers.4902bc3.jpg",
                    alt: "",
                    loading: "lazy",
                    width: "100%"
                  }, void 0, !1, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 1265,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1264,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "caption text-center mt-10 w-5/6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "Above: The page in the Atlanta University Bulletin that records the current occupations of AU alumni. Also note the number of alumni working as teachers--Rogers\u2019s eventual employ as well. Image courtesy of the Archives Research Center, Digital Commons @ Robert W. Woodruff Library, Atlanta University Center"
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 1274,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "."
                      }, void 0, !1, {
                        fileName: "app/routes/chapters/dubois.tsx",
                        lineNumber: 1282,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/chapters/dubois.tsx",
                    lineNumber: 1273,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1272,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1263,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: "If this were true, it would not have been the first time that Du Bois enlisted his students in a collaborative research project. Among the defining intellectual contributions of the early years of Atlanta University were the Atlanta University Studies, annual data-driven reports on specific areas of Black life that were presented each spring at a large public conference. In fact, Du Bois was recruited to the University in large part to assume direction of the studies, which had begun only two years earlier. To complete this work, Du Bois drew from \u201Ctwo tiers of volunteer researchers,\u201D as sociologist Aldon Morris explains, recent graduates of HBCUs across the nation, and his own graduate and undergraduate students."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1287,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "24"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1302,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1301,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "Their work together became the basis for what Morris names the Du Bois-Atlanta School of Sociology, the first \u201Cscientific, or data-driven, sociology program in the United States."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1306,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1286,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: "Among the innovations of the Du Bois-Atlanta school was its required coursework. Long before any elite university offered training in data collection or analysis methods, Du Bois instructed his students in a full year of such methods, culminating in a term of applied research on \u201Cthe social and economic conditions of the American Negro.\u201D"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1314,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: " "
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1322,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "25"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1324,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1323,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal",
                  children: [
                    " ",
                    "While there is minimal evidence as to the specific research tasks these students performed, it is generally acknowledged that this coursework was the mechanism by which Du Bois prepared his students for the role they would play after graduation, as satellite field sites for the data collection required to produce the annual reports."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1328,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "26"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1338,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1337,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal"
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1342,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1313,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-normal",
                children: "As for the charts created for the Paris Exposition, several of the charts made clear use of data collected for the Atlanta University Studies. The data on Atlanta University graduates that was collected for the 1900 report, for example, is the same that is visualized in the second series\u2019s opening chart. Thus while the specific contributions of individual students remain conscribed to the past, we might take the data they together created as an invitation to visualize the larger network of the Du Bois-Atlanta School of Sociology: the names of Atlanta University students and alumni who contributed, in ways large and small, to the program that enabled the creation of the charts. This visualization, while necessarily imperfect and imprecise, nonetheless helps bear witness to the deep infrastructure and broad scope required to produce the Paris Exposition charts."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1345,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1344,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Visualization as Witness and as Testimony"
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1363,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1362,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "The charts that Du Bois and his students together created for the Paris Exposition demonstrate how data visualization can serve as witness and as testimony: documenting the existing conditions--and even the accomplishments\u2014of a group that would otherwise go overlooked. They also show how visualization can be used to make arguments, either on their own through choices about what data to visualize and how to visualize it; or through comparison to other datasets or to other data visualizations. At the same time, the arguments mounted through visualizations of data cannot stand on their own; they must be accompanied by additional forms of information and methods of presentation, as well as the broader context in which they are intended to intervene. Du Bois understood these things as well, as evidenced through his decision to display the charts alongside the photographs at the Paris Exposition, as well as through his writing throughout his life about the uses and limits of data."
              }, void 0, !1, {
                fileName: "app/routes/chapters/dubois.tsx",
                lineNumber: 1366,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1365,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "Du Bois\u2019s nuanced consideration of both the uses and the limits of data, in the context of his larger goal of bearing witness to \u201Cthe truth,\u201D helps to explain why his charts have become flashpoints in current conversations about data in relation to racial justice. The topics explored through Du Bois\u2019s charts, such as income level and occupational spread, continue to bear witness to the deep roots of racism and oppression, as the data journalist and visualization designer Mona Chalabi discovered when she created Du Bois\u2019s charts with contemporary data."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1386,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "27"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1398,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1397,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "The methods of data collection employed by Du Bois, focused as they were on the data that others did not see as important\u2014or, alternately, intentionally sought to ignore\u2014similarly continue to inspire artists and activists alike to turn their critical eye to the racism that overdetermines which data are collected and which are not, as the artist and educator Mimi Onuoha explores in her multimedia installation, \u201CIn Absentia.\u201D"
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1402,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "28"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1413,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1412,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1417,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1385,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: "As scholars and activists turn, once again, to questions of how data can be enlisted as \u201Cprotest,\u201D \u201Caccountability,\u201D and \u201Ccollective action,\u201D as the group Data for Black Lives aims to do, Du Bois again emerges as a key antecedent\u2014as much for how he understood how data and data visualization is complicit in holding up the structures of white supremacy is it can be used to dismantle them."
                }, void 0, !1, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1420,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "29"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1430,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1429,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    " ",
                    "The challenge as Du Bois understood it, and as these artists, activists, scholars, and organizers, also understand in the present, is how to hold these two competing realities in their hands at the same time: how data has been used as a tool of oppression, and at the same time how it can be wielded back."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1434,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      role: "button",
                      className: "circle",
                      children: "30"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1443,
                      columnNumber: 15
                    }, this),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1442,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1419,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/chapters/dubois.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "root",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "title main-title",
            children: "Keep reading below"
          }, void 0, !1, {
            fileName: "app/routes/chapters/dubois.tsx",
            lineNumber: 1450,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/chapters/dubois.tsx",
          lineNumber: 1449,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "grid grid-cols-12 gap-x-6 p-10 bg-theme text-theme",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-start-3 col-end-6 space-y-20",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "font-william text-3xl",
                      children: "Data By Design"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1455,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "text-base",
                      children: "Designed and developed by the Georgia Tech / Emory Digital Humanities Lab in collaboration with Polymode."
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1456,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1454,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-base col-start-6 col-end-9 space-y-16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: "Data by Design has been generously funded by a 2018-2019 NEH-Mellon Fellowship for Digital Publication."
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1462,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: "Additional research for this project was completed through fellowships from the American Antiquarian Society and the Library Company of Philadelphia."
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1466,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1461,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "font-william text-lg col-start-9 col-end-12",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-2xl",
                      children: "Notebook"
                    }, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1473,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1474,
                      columnNumber: 15
                    }, this),
                    "Email ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1475,
                      columnNumber: 21
                    }, this),
                    "Facebook ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1476,
                      columnNumber: 24
                    }, this),
                    "Contact ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/routes/chapters/dubois.tsx",
                      lineNumber: 1477,
                      columnNumber: 23
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/chapters/dubois.tsx",
                  lineNumber: 1472,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1453,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "bg-black",
              children: "Stanford Footnote Placeholder"
            }, void 0, !1, {
              fileName: "app/routes/chapters/dubois.tsx",
              lineNumber: 1480,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/chapters/dubois.tsx",
          lineNumber: 1452,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/chapters/dubois.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/chapters/dubois.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/chapters/labour.tsx
var labour_exports = {};
__export(labour_exports, {
  default: () => LabourPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function LabourPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterTitle, {
      title: "Building Data By Design",
      subtitle: "The Making And Remaking Of This Site"
    }, void 0, !1, {
      fileName: "app/routes/chapters/labour.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/chapters/labour.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/HomeTitle.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function HomeTitle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid bg-black text-white grid-cols-14 grid-rows-30 font-william",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "col-start-1 col-end-11 grid grid-cols-5 grid-rows-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "font-bold text-frontTitle col-start-1 col-span-4 row-span-3 z-10 leading-veryTight pl-24",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "DATA BY"
              }, void 0, !1, {
                fileName: "app/components/HomeTitle.tsx",
                lineNumber: 6,
                columnNumber: 11
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "ml-32",
                children: "DESIGN"
              }, void 0, !1, {
                fileName: "app/components/HomeTitle.tsx",
                lineNumber: 6,
                columnNumber: 32
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/HomeTitle.tsx",
            lineNumber: 5,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-3xl col-start-4 col-span-2 row-start-4",
            children: [
              "An Interactive History of Data Visualization",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/components/HomeTitle.tsx",
                lineNumber: 10,
                columnNumber: 11
              }, this),
              "1786-1900"
            ]
          }, void 0, !0, {
            fileName: "app/components/HomeTitle.tsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-xl col-start-2 col-span-2 row-start-5",
            children: "What is the story we tell about the emergence of modern data visualization?"
          }, void 0, !1, {
            fileName: "app/components/HomeTitle.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-xl col-start-4 col-span-2 row-start-5",
            children: "How might we tell that story differently?"
          }, void 0, !1, {
            fileName: "app/components/HomeTitle.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/HomeTitle.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col items-center middle-full col-start-11 col-span-4 row-span-8 bg-nightingale_blue p-16",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: "/images/ch5-08b-amalg.jpg",
              className: "max-w-full"
            }, void 0, !1, {
              fileName: "app/components/HomeTitle.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/HomeTitle.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "caption text-center mt-10 w-5/6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "text-offwhite",
              children: "The Amalgamation of White and Black elements of the population in the United States by W.E.B Du Bois. Atlanta University. Library of Congress."
            }, void 0, !1, {
              fileName: "app/components/HomeTitle.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/HomeTitle.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/HomeTitle.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/HomeTitle.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/ChapterCard.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ChapterCard({
  to,
  title,
  subtitle,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
    to,
    className: "text-black font-william " + className,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-3xl mt-16 mb-3 px-28 font-bold",
        children: title
      }, void 0, !1, {
        fileName: "app/components/ChapterCard.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-2xl mb-2 px-28",
        children: subtitle
      }, void 0, !1, {
        fileName: "app/components/ChapterCard.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "px-28 mb-10",
        children
      }, void 0, !1, {
        fileName: "app/components/ChapterCard.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ChapterCard.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/ChapterCardGrid.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ChapterCardGrid() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
        className: "text-white font-william font-bold text-center text-3xl mb-7",
        children: "CHAPTERS"
      }, void 0, !1, {
        fileName: "app/components/ChapterCardGrid.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-2 grid-rows-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterCard, {
            to: "/chapters/brooks",
            className: "cardBrooks bg-brooksSecondary hover:text-white",
            title: "Every Datapoint a Person",
            subtitle: "The Brooks / Diagram of a Slave Ship",
            children: "Before there are data, there are people. People who offer up their lives as data -- or whose lives become data without consent."
          }, void 0, !1, {
            fileName: "app/components/ChapterCardGrid.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterCard, {
            to: "/chapters/playfair",
            className: "cardPlayfair bg-playfairSecondary hover:text-white",
            title: "What Visualization Reveals",
            subtitle: "William Playfair's Time-Series Charts",
            children: "Data visualization has never been neutral or objective. There is a meaning -- and an argument -- conveyed through each design."
          }, void 0, !1, {
            fileName: "app/components/ChapterCardGrid.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterCard, {
            to: "/chapters/willard",
            className: "cardWillard bg-willardSecondary hover:text-white",
            title: "Narratives of Possession",
            subtitle: "Emma Willard and Shanawdithit\u2019s Narrative Maps",
            children: [
              "Maps can create nations and contest them. ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/components/ChapterCardGrid.tsx",
                lineNumber: 34,
                columnNumber: 53
              }, this),
              "How have maps been used to document multiple pasts?"
            ]
          }, void 0, !0, {
            fileName: "app/components/ChapterCardGrid.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterCard, {
            to: "/chapters/peabody",
            className: "cardPeabody bg-peabodySecondary hover:text-white",
            title: "The Work of Knowledge",
            subtitle: "Elizabeth Palmer Peabody\u2019s Chronological Grids as Argument",
            children: "We have come to believe that data visualizations should be clear and efficient. Is there value in designs that make us pause and reflect?"
          }, void 0, !1, {
            fileName: "app/components/ChapterCardGrid.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterCard, {
            to: "/chapters/dubois",
            className: "cardDubois bg-duboisSecondary hover:text-white",
            title: "Between Data and Truth",
            subtitle: "W. E. B. Du Bois\u2019s \u201CData Portraits\u201D",
            children: "How can data visualization bear witness to oppression? How can it hold space for what cannot be conveyed through data alone?"
          }, void 0, !1, {
            fileName: "app/components/ChapterCardGrid.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterCard, {
            to: "/chapters/labour",
            className: "cardLabour bg-labourSecondary hover:text-white",
            title: "Labour",
            subtitle: "How We Built This",
            children: "How can data visualization bear witness to oppression? How can it hold space for what cannot be conveyed through data alone?"
          }, void 0, !1, {
            fileName: "app/components/ChapterCardGrid.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/ChapterCardGrid.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ChapterCardGrid.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/timelineImages.json
var timelineImages_default = [
  {
    CHAPTER: "brooks",
    FILE_NAME: "9-isotype.png",
    TITLE: "Slaventransporten Naar Amerika (Slave Transports to America)",
    ARTIST: "Otto and Marie Neurath",
    CREDIT: "Mundaneum Institute in The Hague, Wereldverkeer, 1935. Otto and Marie Neurath Isotype Collection, University of Reading.",
    DIGITIZED: "Digitized by the Otto and Marie Neurath Isotype Collection, University of Reading.",
    YEAR: "1935",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "fig1-1500s-rect.jpg",
    TITLE: "Untitled, from Chronological History of the United States",
    ARTIST: "Elizabeth Palmer Peabody",
    CREDIT: "Image courtesy of the Internet Archive. ",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1856",
    "ALT-TEXT": `One of the four chronological charts included in Elizabeth Palmer Peabody\u2019s Chronological History of the United States. This chart shows the significant events of the sixteenth century. The chart is a 10 by 10 grid, for a total of 100 squares, each representing one year from of the century. The chart is read from left to right and from top to bottom such that the year 1501 corresponds to the top left square and 1600 corresponds to the bottom right square. Each square is further divided into nine smaller squares, the position of which represents a specific type of event, according to the following key: 
 
Top left: Battles, Sieges, Beginning of War
Top center: Conquests, Annexations, Unions
Top right: Losses and Disasters
Middle left: Falls of States
Middle center: Foundations of States and Revolutions
Middle right: Treaties and Sundries
Bottom left: Births
Bottom center: Deeds
Bottom right: Deaths, of remarkable
individuals
 
An event is indicated by shading the
appropriate sub-square in the appropriate year. The color of the shading
indicates the country that is involved. In the chart of the sixteenth century, the
chart is mostly unshaded, with only one or two events per row (decade). The
most prominent set of events occurs in 1565, in which multiple sub-squares are
shaded. There is no key to the colors included in this image.  
`
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "fig2-1600s-rect.jpg",
    TITLE: "Untitled, from Chronological History of the United States",
    ARTIST: "Elizabeth Palmer Peabody",
    CREDIT: "Image courtesy of the Internet Archive. ",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1856",
    "ALT-TEXT": "The second of four chronological charts included in Elizabeth Palmer Peabody\u2019s Chronological History of the United States. This chart shows the significant events of the seventeenth century. This chart is dominated by large squares of red, which appear once or twice each row (decade). There are also several large teal squares. A scattering of other individual events, in red, teal, orange, and blue, are also visible. There is no key to the colors included in this image"
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "fig3-1700s-rect.jpg",
    TITLE: "Untitled, from Chronological History of the United States",
    ARTIST: "Elizabeth Palmer Peabody",
    CREDIT: "Image courtesy of the Internet Archive. ",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1856",
    "ALT-TEXT": "The third of four chronological charts included in Elizabeth Palmer Peabody\u2019s Chronological History of the United States. This chart shows the significant events of the eighteenth century. This chart is dominated by a string of large orange and red squares towards the bottom of the chart, corresponding to the years 1775 to 1783. A scattering of other individual events, mostly in orange but with some in red and blue, are also visible. There is no key to the colors included in this image."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "fig4-1800s-rect.jpg",
    TITLE: "Untitled, from Chronological History of the United States",
    ARTIST: "Elizabeth Palmer Peabody",
    CREDIT: "Image courtesy of the Internet Archive. ",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1856",
    "ALT-TEXT": "The fourth of four chronological charts included in Elizabeth Palmer Peabody\u2019s Chronological History of the United States. This chart shows the significant events of the nineteenth century. This chart is only half complete, stopping at 1850, with the bottom half of the chart left blank. In the top half of the chart, about one-third of the sub-squares are shaded orange. Several year squares are fully shaded, split between orange and red. There is no key to the colors included in this image."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-5.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The first of eight examples of charts filled in by students, arranged in two rows of four. Purple, blue, and black dominate this image, with the shaded event squares evenly distributed throughout the chart."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-6.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The second of eight examples of student charts. Black, purple, and red dominate this image, with several years completely shaded, concentrated in the latter half of the century. Other single event squares are shaded throughout the chart."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-7.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The third of eight examples of student charts. Red is the primary color in this image. The shaded event squares are concentrated in the first half of the century."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-8.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The fourth of eight examples of student charts. This chart, the student has disregarded the grid lines. Instead, each quadrant is subdivided into two triangles (eight total). Each triangle is shaded a different color, seemingly at random. The overall effect is one of a pinwheel."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-9.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The fifth of eight examples of student charts. The first year square is shaded black. Two other event squares are shaded yellow. The letters \u201CH\u201D \u201CE\u201D and \u201CR\u201D are written across the upper half of the grid in blue. When placed next to the subsequent two charts, it spells: \u201Cheroic age.\u201D"
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-10.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The sixth of eight examples of student charts. Four event squares, distributed across the chart, are shaded yellow. The letters \u201CO\u201D \u201CI\u201D and \u201CC\u201D are written across the upper half of the grid in blue. When placed in between the previous chart and the chart that follows, it spells: \u201Cheroic age.\u201D"
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-11.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The seventh of eight examples of student charts. Eight event squares, distributed across the chart, are shaded yellow. The letters \u201CA\u201D \u201CG\u201D and \u201CE\u201D are written across the upper half of the grid in blue. When placed after the previous two charts, it spells: \u201Cheroic age.\u201D"
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-12.png",
    TITLE: "A student chart from The Polish-American System of Chronology",
    ARTIST: "Anonymous",
    CREDIT: "Courtesy of the American Antiquarian Society. ",
    DIGITIZED: "Photo by the author.",
    YEAR: "1850",
    "ALT-TEXT": "The eighth of eight examples of student charts. Several event squares, distributed across the chart, are shaded in yellow and blue. The student has used the squares to create a blue zig-zagging line across the entirety of the chart."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-13-willard.jpg",
    TITLE: "The Temple of Time",
    ARTIST: "Emma Willard",
    CREDIT: "Image courtesy of the David Rumsey Map Collection, Cartography Associates.",
    DIGITIZED: "Digitized by the David Rumsey Map Collection, Cartography Associates.",
    YEAR: "1846",
    "ALT-TEXT": `A historical chart with the title, \u201CThe Temple of Time.\u201D It depicts a Roman temple in a highly perspectivized, quattrocento style. Each column is labeled with the name of an important ruler. US rulers are in the foreground on the left, and European rulers are in the foreground on the right. Behind those are additional columns with the names of Roman, Greek, and biblical rulers. The columns get smaller as they recede into the back of the chart, indicating that those rulers date earlier in time. At the very back of the temple, written on the wall, are the words \u201CThe Creation.\u201D
 
On the ceiling of the temple are the names of additional sets of historical figures: statesmen, philosophers and discoverers, theologicians, poets and painters, and warriors. They are arranged in keeping with the perspectivized style, such that the more contemporary figures appear larger and towards the front, and more historical figures appear smaller and towards the back. On the floor are channels that correspond to different countries, with relevant events written out. A palette of pastel colors separates each country\u2019s channel from the others. These same colors shade the columns and the ceiling, resulting in an overall impression that is visually and textually dense. At this scale, few individual events can be discerned.  
`
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-19-rachel-carey-george.jpg",
    TITLE: "Housetop \u2014Sixteen-Block \u2018Half-Log Cabin\u2019 Variation Sashed With Feed Sacks",
    ARTIST: "Rachel Carey George",
    CREDIT: "\xA9 2022 Estate of Rachel Carey George / Artists Rights Society (ARS), New York.",
    DIGITIZED: "Photo by Stephen Pitkin/Pitkin Studio courtesy of Souls Grown Deep Foundation.",
    YEAR: "1935",
    "ALT-TEXT": "A photo of a quilt, consisting of 16 squares arranged in a 4x4 grid. Each square consists of strips of red, blue, and grey cloth, quilted into L-shaped patterns, set against an off-white background."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-20-gbq-q030-06.jpg",
    TITLE: "Housetop variation",
    ARTIST: "Mary Lee Bendolph",
    CREDIT: "\xA9 2022 Mary Lee Bendolph / Artists Rights Society (ARS), New York.",
    DIGITIZED: "Photo by Stephen Pitkin/Pitkin Studio courtesy of Souls Grown Deep Foundation.",
    YEAR: "1998",
    "ALT-TEXT": "A photo of a quilt with a geometric pattern. Strips of pink, red, white, black, and brown are arranged either horizontally or vertically, resulting in a grid-like effect."
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-clarke1.jpg",
    TITLE: "Table of the Kings of Israel & Judah, with a comparative view of their origins",
    ARTIST: "Anna Laura Clarke",
    CREDIT: "Image courtesy of Granville Ganter. Permissions pending.",
    DIGITIZED: "",
    YEAR: "1823",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "peabody",
    FILE_NAME: "ch4-clarke2.jpg",
    TITLE: "Theological Chart of Memory",
    ARTIST: "Anna Laura Clarke",
    CREDIT: "Image courtesy of Granville Ganter. Permissions pending.",
    DIGITIZED: "",
    YEAR: "1823",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "2-wheat.jpg",
    TITLE: "Chart Showing at One View the Price of the Quarter of Wheat, & Wages of Labour by the Week, from the Year 1565 to 1821",
    ARTIST: "William Playfair",
    CREDIT: "Images courtesy of Wikimedia Commons.",
    DIGITIZED: "",
    YEAR: "1821",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "3-pie.jpg",
    TITLE: "Chart Representing the Extent, Population & Revenues, of the Principal Nations in Europe, after the Division of Poland & Treaty of Luneville",
    ARTIST: "William Playfair",
    CREDIT: "Images courtesy of Wikimedia Commons.",
    DIGITIZED: "",
    YEAR: "1801",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "1-northamerica.jpg",
    TITLE: "Exports & Imports to and from all North-America",
    ARTIST: "William Playfair",
    CREDIT: "Image courtesy of the Library Company of Philadelphia, www.librarycompany.org.",
    DIGITIZED: "Digitized by the Library Company of Philadelphia. ",
    YEAR: "1801",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "chart-1787.jpg",
    TITLE: "Imports and Exports to and from North America from 1700 to 1786",
    ARTIST: "William Playfair",
    CREDIT: "Image courtesy of the Library Company of Philadelphia, www.librarycompany.org.",
    DIGITIZED: "Digitized by the Library Company of Philadelphia. ",
    YEAR: "1787",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "5-minard.png",
    TITLE: "Carte Figurative des pertes successives en hommes de l'arm\xE9e fran\xE7aise dans la campagne de Russie 1812-1813",
    ARTIST: "Charles Minard",
    CREDIT: "Image courtesy of Wikimedia Commons.",
    DIGITIZED: "",
    YEAR: "1869",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "6-snow.jpg",
    TITLE: 'Untitled, from "Report on the cholera outbreak in the Parish of St. James, Westminster, during the autumn of 1854"',
    ARTIST: "John Snow",
    CREDIT: "Image courtesy of Wikimedia Commons",
    DIGITIZED: "",
    YEAR: "1855",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "7-nightingale.jpg",
    TITLE: "Diagram of the causes of mortality in the army in the East",
    ARTIST: "Florence Nightingale",
    CREDIT: "Image courtesy of Wikimedia Commons",
    DIGITIZED: "",
    YEAR: "1858",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "playfair",
    FILE_NAME: "jevons.png",
    TITLE: "Untitled, from The Principles of Science, Book IV",
    ARTIST: "William Staney Jevons",
    CREDIT: "Image courtesy of Google Books",
    DIGITIZED: "Digitized by Harvard University",
    YEAR: "1874",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-01-phila.jpg",
    TITLE: "Distribution of African American inhabitants of the 7th Ward",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of Wikimedia Commons",
    DIGITIZED: "",
    YEAR: "1899",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-06b-map.jpg",
    TITLE: "Distribution of the population of the United States: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07a-populations.jpg",
    TITLE: "Rank of states and territories in population at each census: 1790 - 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07b-gender.jpg",
    TITLE: "The predominating sex: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07c-race.jpg",
    TITLE: "Proportion of the Colored to the aggregate population: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07d-race-distrib.jpg",
    TITLE: "Distribution of the Colored population of the United States: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07e-foreign.jpg",
    TITLE: "Composition of the foreign-born population: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07f-age-sex.jpg",
    TITLE: "Age and sex, in percentage of each element of the population: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07g-religion.jpg",
    TITLE: "Composition of church membership of the states and territories: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-07h-occupation.jpg",
    TITLE: "Distribution of those engaged in certain selected occupations, by color and nationality: 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-08a-population.jpg",
    TITLE: "Growth of the elements of the population: 1790 to 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "ch5-08c-conjugal.jpg",
    TITLE: "Conjugal condition of the population by sex, general nativity, parental nativity, and color in proportion to the total number of each element, 1890",
    ARTIST: "Henry Gannett",
    CREDIT: "Image courtesy of the Library of Congress, Geography and Map Division.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1898",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "863.jpeg",
    TITLE: "The Georgia Negro: A Social Study",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33863.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "864.jpeg",
    TITLE: "Relative Negro population of the states of the United States.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33864.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "865.jpeg",
    TITLE: "The states of the United States according to their Negro population.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "866.jpeg",
    TITLE: "Negro population of Georgia.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33866.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "867.jpeg",
    TITLE: "Negro population of Georgia by counties. 1890.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33867.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "868.jpeg",
    TITLE: "Negro population of Georgia by counties.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33868.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "869.jpeg",
    TITLE: "Comparative increase of white and colored population of Georgia.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33869.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "870.jpeg",
    TITLE: "Migration of Negroes. 1890.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33870",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "871.jpeg",
    TITLE: "Age distribution of Georgia Negroes compared with France.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33871.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "872.jpeg",
    TITLE: "Conjugal condition.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33872.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "873.jpeg",
    TITLE: "City and Rural Population. 1890.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33873.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "874.jpeg",
    TITLE: "Slaves and free Negroes.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33874.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "875.jpeg",
    TITLE: "Race amalgamation in Georgia based on a study of 40,000 individuals of Negro descent.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33875.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "876.jpeg",
    TITLE: "Illiteracy.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33876.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "877.jpeg",
    TITLE: "Negro children enrolled in the public schools.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33877.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "878.jpeg",
    TITLE: "Negro teachers in Georgia public schools.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33878.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "879.jpeg",
    TITLE: "Number of Negro students taking the various courses of study offered in Georgia schools.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33879.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "880.jpeg",
    TITLE: "Value of land owned by Georgia Negroes.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33880.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "881.jpeg",
    TITLE: "Acres of land owned by Negroes in Georgia.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33881.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "882.jpeg",
    TITLE: "Land owned by Negroes in Georgia, U.S.A. 1870-1900.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33882.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "883.jpeg",
    TITLE: "Valuation of town and city property owned by Georgia Negroes.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33883.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "884.jpeg",
    TITLE: "Assessed Valuation of All Taxable Property Owned by Georgia Negroes.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33884.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "885.jpeg",
    TITLE: "Negro property in two cities of Georgia.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33885.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "886.jpeg",
    TITLE: "Value of farming tools.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33886.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "887.jpeg",
    TITLE: "Assessed Value of Household and Kitchen Furniture Owned by Georgia Negroes.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33887.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "888.jpeg",
    TITLE: "Occupations of Georgia Negroes. Males over 10.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33888.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "889.jpeg",
    TITLE: "Occupations of Negroes and whites in Georgia.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33889.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "890.jpeg",
    TITLE: "Occupations.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33890.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "891.jpeg",
    TITLE: "Occupations and income.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33891.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "892.jpeg",
    TITLE: "Condition of 300 Negro farm tenants after 1 year's toil, 1898.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33892.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "893.jpeg",
    TITLE: "Income and expenditure of 150 Negro families in Atlanta, Ga., U.S.A.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33893.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "894.jpeg",
    TITLE: "Family budgets.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33894.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "895.jpeg",
    TITLE: "Family budgets.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33895.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "896.jpeg",
    TITLE: "Albany, Dougherty County, Ga. Distribution of 2,500 Negro inhabitants.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33896.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "897.jpeg",
    TITLE: "McIntosh County, Georgia.",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33897.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "898.jpeg",
    TITLE: "Darien, McIntosh Co., GA",
    ARTIST: "W.E.B. Du Bois",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33898.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "899.jpeg",
    TITLE: "A series of statistical charts illustrating the condition of the descendants of former African slaves now in residence in the United States of America",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-08994.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "900.jpeg",
    TITLE: "Distribution of Negroes in the United States.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "901.jpeg",
    TITLE: "Increase of the Negro population in the United States of America",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "902.jpeg",
    TITLE: "Comparative rate of increase of the white and Negro elements of the population of the United States",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "903.jpeg",
    TITLE: "Negro Population in the United States Compared with the Total Popuation of Other Countries.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33903.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "904.jpeg",
    TITLE: "Proportion of Negroes in the total population of the United States",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "905.jpeg",
    TITLE: "Occupations in which American Negroes are engaged",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "906.jpeg",
    TITLE: "Proportion of Whites and Negroes in the different classes of occupation in the United States",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33906.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "907.jpeg",
    TITLE: "Occupations in which 10,000 or more American Negroes are engaged",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "908.jpeg",
    TITLE: "Number of Negro teachers in the public schools of the United States",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "909.jpeg",
    TITLE: "Illiteracy of the American Negroes compared with that of other nations.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "910.jpeg",
    TITLE: "Enrollment in the Negro common schools of the former slave states of the United States.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "911.jpeg",
    TITLE: "Proportion of total Negro children of school age who are enrolled in the public schools.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "912.jpeg",
    TITLE: "The Rise of the Negroes from Slavery to Freedom in One Generation",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33912.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "913.jpeg",
    TITLE: "Proportion of freemen and slaves among American Negroes.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "914.jpeg",
    TITLE: "City and rural population among American Negroes in the former slave states.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "915.jpeg",
    TITLE: "Conjugal condition of American Negroes according to age periods.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33915.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "916.jpeg",
    TITLE: "The Amalgamation of the White and Black elements of the population in the United States.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33916.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "917.jpeg",
    TITLE: "Assessed value of property owned by Negroes in three states of the United States.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "918.jpeg",
    TITLE: "Negro landholders in various states of the United States.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "919.jpeg",
    TITLE: "Negro business men in the United States.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "920.jpeg",
    TITLE: "Pauperism among American Negroes.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "921.jpeg",
    TITLE: "Mortality of American Negroes.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "922.jpeg",
    TITLE: "Crime among American Negroes.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "923.jpeg",
    TITLE: "American Negro newspapers and periodicals.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33923.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "924.jpeg",
    TITLE: "Religion of American Negroes.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "dubois",
    FILE_NAME: "925.jpeg",
    TITLE: "Statistics of Negro church organizations.",
    ARTIST: "Atlanta University",
    CREDIT: "Image courtesy of the Library of Congress, Prints & Photographs Division, LC-DIG-ppmsca-33865.",
    DIGITIZED: "Digitized by the Library of Congress.",
    YEAR: "1900",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "brooks",
    FILE_NAME: "1-sof_slaveship.jpg",
    TITLE: "Plan of an African Slave Ship's Lower Deck with Negroes in the Proportion of Only One to a Ton",
    ARTIST: "Plymouth Committee",
    CREDIT: "\xA9 Religious Society of Friends (Quakers) in Britain.",
    DIGITIZED: "Digitized by the Religious Society of Friends (Quakers) in Britain.",
    YEAR: "1788",
    "ALT-TEXT": `An areial view of a ship's hold, filled with four rows of small human figures, packed shoulder to shoulder. There are 297 figures total, divided into four sections. On the far left is an area labeled "girls room," which displays three rows of 10 shorter figures each. To its right is a section labeled "women's room," which displays four rows of 21 figures each. To its right, in the middle of the diagram, is a section labeled "Boys room," which displays 5 rows of 10 shorter figures each, and on the right half of the diagram is a section labeled "Men's room," which contains 4 rows of taller figures, 24 figures in each. 20 additional figures fill the bow of the ship, and four additioanl figures, positioned sideways, fill the remaining space. The title of the image, "Plan of an African Slave Ship's lower deck with Negroes in the Proportion of Only One to a Ton," is printed in cursive above the diagram.`
  },
  {
    CHAPTER: "brooks",
    FILE_NAME: "3-Vue_du_cap.jpeg",
    TITLE: 'Vue de Cap-Fran\xE7ais et du Navire "La Marie-S\xE9raphique" ',
    ARTIST: "Anonymous",
    CREDIT: "Image courtesy of Wikimedia Commons.",
    DIGITIZED: "Digitized by the Mus\xE9e d'Histoire de Nantes.",
    YEAR: "1772-73",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "brooks",
    FILE_NAME: "4-description-1789.jpg",
    TITLE: "Description of a Slave Ship",
    ARTIST: "London Committee",
    CREDIT: "Image courtesy of the Beinecke Rare Book and Manuscript Library, Yale University.",
    DIGITIZED: "Digitized by Beinecke Rare Book and Manuscript Library, Yale University.",
    YEAR: "1789",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "brooks",
    FILE_NAME: "5-The_history_of_the_rise.jpg",
    TITLE: "Unititled, from The History of the Rise, Progress, and Accomplishment of the Abolition of the Slave Trade by the British Parliament",
    ARTIST: "Thomas Clarkson",
    CREDIT: "Image courtesy of Wikimedia Commons.",
    DIGITIZED: "Digitized by Wellsley College / Boston Library Consortium Member Libraries.",
    YEAR: "1808",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "brooks",
    FILE_NAME: "6-stream.png",
    TITLE: "Der Strom der Zeiten",
    ARTIST: "Friedrich Strass",
    CREDIT: "Image courtesy of the David Rumsey Map Collection, Cartography Associates.",
    DIGITIZED: "Digitized by the David Rumsey Map Collection, Cartography Associates.",
    YEAR: "1803",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "brooks",
    FILE_NAME: "7-Bell.jpeg",
    TITLE: "English translation of Freidrich Strass's Strom der Zeiten",
    ARTIST: "William Bell",
    CREDIT: "Image courtesy of Cotsen Children's Collection, Department of Rare Books and Special Collections, Princeton University.",
    DIGITIZED: "Digitized by the Department of Rare Books and Special Collections, Princeton University.",
    YEAR: "1849",
    "ALT-TEXT": ""
  },
  {
    CHAPTER: "brooks",
    FILE_NAME: "ch4-14-priestley-new-chart.jpg",
    TITLE: "A New Chart of History",
    ARTIST: "Joseph Priestley",
    CREDIT: "Image courtesy of the David Rumsey Map Collection, Cartography Associates.",
    DIGITIZED: "Digitized by the David Rumsey Map Collection, Cartography Associates.",
    YEAR: "1769",
    "ALT-TEXT": ""
  }
];

// app/hooks.tsx
var import_react6 = require("react");
function useWindowSize() {
  let [windowSize, setWindowSize] = (0, import_react6.useState)({
    width: void 0,
    height: void 0
  });
  return (0, import_react6.useEffect)(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", handleResize), handleResize(), () => window.removeEventListener("resize", handleResize);
  }, []), windowSize;
}

// app/components/Timeline.tsx
var import_react25 = require("react");

// node_modules/react-dnd/dist/core/DndContext.js
var import_react7 = require("react"), DndContext = (0, import_react7.createContext)({
  dragDropManager: void 0
});

// node_modules/react-dnd/dist/core/DndProvider.js
var import_jsx_runtime = require("react/jsx-runtime");

// node_modules/dnd-core/dist/createDragDropManager.js
var import_redux = require("redux");

// node_modules/@react-dnd/invariant/dist/index.js
function invariant(condition, format, ...args) {
  if (isProduction() && format === void 0)
    throw new Error("invariant requires an error message argument");
  if (!condition) {
    let error;
    if (format === void 0)
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      })), error.name = "Invariant Violation";
    }
    throw error.framesToPop = 1, error;
  }
}
function isProduction() {
  return typeof process < "u" && !1;
}

// node_modules/dnd-core/dist/utils/js_utils.js
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject(input) {
  return typeof input == "object";
}
function xor(itemsA, itemsB) {
  let map = /* @__PURE__ */ new Map(), insertItem = (item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return map.forEach((count, key) => {
    count === 1 && result.push(key);
  }), result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}

// node_modules/dnd-core/dist/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS", BEGIN_DRAG = "dnd-core/BEGIN_DRAG", PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE", HOVER = "dnd-core/HOVER", DROP = "dnd-core/DROP", END_DRAG = "dnd-core/END_DRAG";

// node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function(sourceIds = [], options = {
    publishSource: !0
  }) {
    let { publishSource = !0, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options, monitor = manager.getMonitor(), registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset)), verifyInvariants(sourceIds, monitor, registry);
    let sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2)
        throw new Error("getSourceClientOffset must be defined");
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2), sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    let item = registry.getSource(sourceId).beginDrag(monitor, sourceId);
    if (item == null)
      return;
    verifyItemIsObject(item), registry.pinSource(sourceId);
    let itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging."), sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--)
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  return sourceId;
}

// node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function(options = {}) {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyInvariants2(monitor), getDroppableTargets(monitor).forEach((targetId, index) => {
      let dropResult = determineDropResult(targetId, index, registry, monitor), action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging."), invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  let target = registry.getTarget(targetId), dropResult = target ? target.drop(monitor, targetId) : void 0;
  return verifyDropResultType(dropResult), typeof dropResult > "u" && (dropResult = index === 0 ? {} : monitor.getDropResult()), dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult > "u" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  let targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  return targetIds.reverse(), targetIds;
}

// node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function() {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyIsDragging(monitor);
    let sourceId = monitor.getSourceId();
    return sourceId != null && (registry.getSource(sourceId, !0).endDrag(monitor, sourceId), registry.unpinSource()), {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  return draggedItemType === null ? targetType === null : Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}

// node_modules/dnd-core/dist/actions/dragDrop/hover.js
function createHover(manager) {
  return function(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    let targetIds = targetIdsArg.slice(0), monitor = manager.getMonitor(), registry = manager.getRegistry(), draggedItemType = monitor.getItemType();
    return removeNonMatchingTargetIds(targetIds, registry, draggedItemType), checkInvariants(targetIds, monitor, registry), hoverAllTargets(targetIds, monitor, registry), {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging."), invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    let targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    let target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    let targetId = targetIds[i], targetType = registry.getTargetType(targetId);
    matchesType(targetType, draggedItemType) || targetIds.splice(i, 1);
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    registry.getTarget(targetId).hover(monitor, targetId);
  });
}

// node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function() {
    if (manager.getMonitor().isDragging())
      return {
        type: PUBLISH_DRAG_SOURCE
      };
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/index.js
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

// node_modules/dnd-core/dist/classes/DragDropManagerImpl.js
var DragDropManagerImpl = class {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    let manager = this, { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        let action = actionCreator.apply(manager, args);
        typeof action < "u" && dispatch(action);
      };
    }
    let actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      let action = actions[key];
      return boundActions[key] = bindActionCreator(action), boundActions;
    }, {});
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  constructor(store, monitor) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      let shouldSetUp = this.store.getState().refCount > 0;
      this.backend && (shouldSetUp && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !shouldSetUp && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = store, this.monitor = monitor, store.subscribe(this.handleRefCountChange);
  }
};

// node_modules/dnd-core/dist/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  let { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  return !clientOffset || !initialClientOffset || !initialSourceClientOffset ? null : subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  let { clientOffset, initialClientOffset } = state;
  return !clientOffset || !initialClientOffset ? null : subtract(clientOffset, initialClientOffset);
}

// node_modules/dnd-core/dist/utils/dirtiness.js
var NONE = [], ALL = [];
NONE.__IS_NONE__ = !0;
ALL.__IS_ALL__ = !0;
function areDirty(dirtyIds, handlerIds) {
  return dirtyIds === NONE ? !1 : dirtyIds === ALL || typeof handlerIds > "u" ? !0 : intersection(handlerIds, dirtyIds).length > 0;
}

// node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var DragDropMonitorImpl = class {
  subscribeToStateChange(listener, options = {}) {
    let { handlerIds } = options;
    invariant(typeof listener == "function", "listener must be a function."), invariant(typeof handlerIds > "u" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId, handleChange = () => {
      let state = this.store.getState(), currentStateId = state.stateId;
      try {
        currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds) || listener();
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener == "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset, handleChange = () => {
      let nextState = this.store.getState().dragOffset;
      nextState !== previousState && (previousState = nextState, listener());
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId);
    return invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), this.isDragging() ? !1 : source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId)
      return !1;
    let target = this.registry.getTarget(targetId);
    if (invariant(target, `Expected to find a valid target. targetId=${targetId}`), !this.isDragging() || this.didDrop())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId, !0);
    if (invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    let sourceType = this.registry.getSourceType(sourceId), draggedItemType = this.getItemType();
    return sourceType !== draggedItemType ? !1 : source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: !1
  }) {
    if (!targetId)
      return !1;
    let { shallow } = options;
    if (!this.isDragging())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType))
      return !1;
    let targetIds = this.getTargetIds();
    if (!targetIds.length)
      return !1;
    let index = targetIds.indexOf(targetId);
    return shallow ? index === targetIds.length - 1 : index > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store, this.registry = registry;
  }
};

// node_modules/@react-dnd/asap/dist/makeRequestCall.js
var scope = typeof global < "u" ? global : self, BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function() {
    let timeoutHandle = setTimeout(handleTimer, 0), intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle), clearInterval(intervalHandle), callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1, observer = new BrowserMutationObserver(callback), node = document.createTextNode("");
  return observer.observe(node, {
    characterData: !0
  }), function() {
    toggle = -toggle, node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver == "function" ? makeRequestCallFromMutationObserver : makeRequestCallFromTimer;

// node_modules/@react-dnd/asap/dist/AsapQueue.js
var AsapQueue = class {
  enqueueTask(task) {
    let { queue: q, requestFlush } = this;
    q.length || (requestFlush(), this.flushing = !0), q[q.length] = task;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      let { queue: q } = this;
      for (; this.index < q.length; ) {
        let currentIndex = this.index;
        if (this.index++, q[currentIndex].call(), this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++)
            q[scan] = q[scan + this.index];
          q.length -= this.index, this.index = 0;
        }
      }
      q.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (err) => {
      this.pendingErrors.push(err), this.requestErrorThrow();
    }, this.requestFlush = makeRequestCall(this.flush), this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
};

// node_modules/@react-dnd/asap/dist/RawTask.js
var RawTask = class {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError, this.release = release, this.task = null;
  }
};

// node_modules/@react-dnd/asap/dist/TaskFactory.js
var TaskFactory = class {
  create(task) {
    let tasks = this.freeTasks, t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    return t1.task = task, t1;
  }
  constructor(onError) {
    this.onError = onError, this.freeTasks = [];
  }
};

// node_modules/@react-dnd/asap/dist/asap.js
var asapQueue = new AsapQueue(), taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// node_modules/dnd-core/dist/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE", ADD_TARGET = "dnd-core/ADD_TARGET", REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE", REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

// node_modules/dnd-core/dist/contracts.js
function validateSourceContract(source) {
  invariant(typeof source.canDrag == "function", "Expected canDrag to be a function."), invariant(typeof source.beginDrag == "function", "Expected beginDrag to be a function."), invariant(typeof source.endDrag == "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop == "function", "Expected canDrop to be a function."), invariant(typeof target.hover == "function", "Expected hover to be a function."), invariant(typeof target.drop == "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, !1)
    );
    return;
  }
  invariant(typeof type == "string" || typeof type == "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2.SOURCE = "SOURCE", HandlerRole2.TARGET = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// node_modules/dnd-core/dist/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function getNextHandlerId(role) {
  let id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map, searchValue) {
  let entries = map.entries(), isDone = !1;
  do {
    let { done, value: [, value] } = entries.next();
    if (value === searchValue)
      return !0;
    isDone = !!done;
  } while (!isDone);
  return !1;
}
var HandlerRegistryImpl = class {
  addSource(type, source) {
    validateType(type), validateSourceContract(source);
    let sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    return this.store.dispatch(addSource(sourceId)), sourceId;
  }
  addTarget(type, target) {
    validateType(type, !0), validateTargetContract(target);
    let targetId = this.addHandler(HandlerRole.TARGET, type, target);
    return this.store.dispatch(addTarget(targetId)), targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = !1) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), includePinned && sourceId === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(sourceId);
  }
  getTarget(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), this.types.get(sourceId);
  }
  getTargetType(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.types.get(targetId);
  }
  isSourceId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source."), this.store.dispatch(removeSource(sourceId)), asap(() => {
      this.dragSources.delete(sourceId), this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target."), this.store.dispatch(removeTarget(targetId)), this.dropTargets.delete(targetId), this.types.delete(targetId);
  }
  pinSource(sourceId) {
    let source = this.getSource(sourceId);
    invariant(source, "Expected an existing source."), this.pinnedSourceId = sourceId, this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    let id = getNextHandlerId(role);
    return this.types.set(id, type), role === HandlerRole.SOURCE ? this.dragSources.set(id, handler) : role === HandlerRole.TARGET && this.dropTargets.set(id, handler), id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = store;
  }
};

// node_modules/dnd-core/dist/utils/equality.js
var strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  return !offsetA && !offsetB ? !0 : !offsetA || !offsetB ? !1 : offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length)
    return !1;
  for (let i = 0; i < a.length; ++i)
    if (!isEqual(a[i], b[i]))
      return !1;
  return !0;
}

// node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function reduce(_state = NONE, action) {
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  let { targetIds = [], prevTargetIds = [] } = action.payload, result = xor(targetIds, prevTargetIds);
  if (!(result.length > 0 || !areArraysEqual(targetIds, prevTargetIds)))
    return NONE;
  let prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1], innermostTargetId = targetIds[targetIds.length - 1];
  return prevInnermostTargetId !== innermostTargetId && (prevInnermostTargetId && result.push(prevInnermostTargetId), innermostTargetId && result.push(innermostTargetId)), result;
}

// node_modules/dnd-core/dist/reducers/dragOffset.js
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce2(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      return areCoordsEqual(state.clientOffset, payload.clientOffset) ? state : _objectSpread2({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/dragOperation.js
function _defineProperty3(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
var initialState2 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function reduce3(state = initialState2, action) {
  let { payload } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread3({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread3({}, state, {
        isSourcePublic: !0
      });
    case HOVER:
      return _objectSpread3({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      return state.targetIds.indexOf(payload.targetId) === -1 ? state : _objectSpread3({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread3({}, state, {
        dropResult: payload.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread3({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/refCount.js
function reduce4(state = 0, action) {
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/stateId.js
function reduce5(state = 0) {
  return state + 1;
}

// node_modules/dnd-core/dist/reducers/index.js
function _defineProperty4(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
function reduce6(state = {}, action) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread4({}, action.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce2(state.dragOffset, action),
    refCount: reduce4(state.refCount, action),
    dragOperation: reduce3(state.dragOperation, action),
    stateId: reduce5(state.stateId)
  };
}

// node_modules/dnd-core/dist/createDragDropManager.js
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = !1) {
  let store = makeStoreInstance(debugMode), monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store)), manager = new DragDropManagerImpl(store, monitor), backend = backendFactory(manager, globalContext, backendOptions);
  return manager.receiveBackend(backend), manager;
}
function makeStoreInstance(debugMode) {
  let reduxDevTools = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0, import_redux.createStore)(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// node_modules/react-dnd/dist/core/DndProvider.js
var import_react8 = require("react");
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded), key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++)
      key = sourceSymbolKeys[i], !(excluded.indexOf(key) >= 0) && (!Object.prototype.propertyIsEnumerable.call(source, key) || (target[key] = source[key]));
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var refCount = 0, INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), DndProvider = /* @__PURE__ */ (0, import_react8.memo)(function(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  let [manager, isGlobalInstance] = getDndContextValue(props);
  return (0, import_react8.useEffect)(() => {
    if (isGlobalInstance) {
      let context = getGlobalContext();
      return ++refCount, () => {
        --refCount === 0 && (context[INSTANCE_SYM] = null);
      };
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props)
    return [
      {
        dragDropManager: props.manager
      },
      !1
    ];
  let manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode), isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  let ctx = context;
  return ctx[INSTANCE_SYM] || (ctx[INSTANCE_SYM] = {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  }), ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global < "u" ? global : window;
}

// node_modules/react-dnd/dist/core/DragPreviewImage.js
var import_react9 = require("react"), DragPreviewImage = (0, import_react9.memo)(function({ connect, src }) {
  return (0, import_react9.useEffect)(() => {
    if (typeof Image > "u")
      return;
    let connected = !1, img = new Image();
    return img.src = src, img.onload = () => {
      connect(img), connected = !0;
    }, () => {
      connected && connect(null);
    };
  }), null;
});

// node_modules/react-dnd/dist/hooks/useCollector.js
var import_fast_deep_equal = __toESM(require("fast-deep-equal"), 1), import_react11 = require("react");

// node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var import_react10 = require("react"), useIsomorphicLayoutEffect = typeof window < "u" ? import_react10.useLayoutEffect : import_react10.useEffect;

// node_modules/react-dnd/dist/hooks/useCollector.js
function useCollector(monitor, collect, onUpdate) {
  let [collected, setCollected] = (0, import_react11.useState)(
    () => collect(monitor)
  ), updateCollected = (0, import_react11.useCallback)(() => {
    let nextValue = collect(monitor);
    (0, import_fast_deep_equal.default)(collected, nextValue) || (setCollected(nextValue), onUpdate && onUpdate());
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  return useIsomorphicLayoutEffect(updateCollected), [
    collected,
    updateCollected
  ];
}

// node_modules/react-dnd/dist/hooks/useMonitorOutput.js
function useMonitorOutput(monitor, collect, onCollect) {
  let [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  return useIsomorphicLayoutEffect(function() {
    let handlerId = monitor.getHandlerId();
    if (handlerId != null)
      return monitor.subscribeToStateChange(updateCollected, {
        handlerIds: [
          handlerId
        ]
      });
  }, [
    monitor,
    updateCollected
  ]), collected;
}

// node_modules/react-dnd/dist/hooks/useCollectedProps.js
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}

// node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var import_react12 = require("react");
function useOptionalFactory(arg, deps) {
  let memoDeps = [
    ...deps || []
  ];
  return deps == null && typeof arg != "function" && memoDeps.push(arg), (0, import_react12.useMemo)(() => typeof arg == "function" ? arg() : arg, memoDeps);
}

// node_modules/react-dnd/dist/hooks/useDrag/connectors.js
var import_react13 = require("react");
function useConnectDragSource(connector) {
  return (0, import_react13.useMemo)(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return (0, import_react13.useMemo)(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
var import_react16 = require("react");

// node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js
var isCallingCanDrag = !1, isCallingIsDragging = !1, DragSourceMonitorImpl = class {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingCanDrag = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingIsDragging = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = !1;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null, this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js
var isCallingCanDrop = !1, DropTargetMonitorImpl = class {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return isCallingCanDrop = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = !1;
    }
  }
  isOver(options) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, options) : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null, this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/registration.js
function registerTarget(type, target, manager) {
  let registry = manager.getRegistry(), targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  let registry = manager.getRegistry(), sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}

// node_modules/@react-dnd/shallowequal/dist/index.js
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0)
    return !!compareResult;
  if (objA === objB)
    return !0;
  if (typeof objA != "object" || !objA || typeof objB != "object" || !objB)
    return !1;
  let keysA = Object.keys(objA), keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return !1;
  let bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    let key = keysA[idx];
    if (!bHasOwnProperty(key))
      return !1;
    let valueA = objA[key], valueB = objB[key];
    if (compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0, compareResult === !1 || compareResult === void 0 && valueA !== valueB)
      return !1;
  }
  return !0;
}

// node_modules/react-dnd/dist/internals/isRef.js
function isRef(obj) {
  return obj !== null && typeof obj == "object" && Object.prototype.hasOwnProperty.call(obj, "current");
}

// node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var import_react14 = require("react");
function throwIfCompositeComponentElement(element) {
  if (typeof element.type == "string")
    return;
  let displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!(0, import_react14.isValidElement)(elementOrNode)) {
      let node = elementOrNode;
      return hook(node, options), node;
    }
    let element = elementOrNode;
    return throwIfCompositeComponentElement(element), cloneWithRef(element, options ? (node) => hook(node, options) : hook);
  };
}
function wrapConnectorHooks(hooks) {
  let wrappedHooks = {};
  return Object.keys(hooks).forEach((key) => {
    let hook = hooks[key];
    if (key.endsWith("Ref"))
      wrappedHooks[key] = hooks[key];
    else {
      let wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  }), wrappedHooks;
}
function setRef(ref, node) {
  typeof ref == "function" ? ref(node) : ref.current = node;
}
function cloneWithRef(element, newRef) {
  let previousRef = element.ref;
  return invariant(typeof previousRef != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), previousRef ? (0, import_react14.cloneElement)(element, {
    ref: (node) => {
      setRef(previousRef, node), setRef(newRef, node);
    }
  }) : (0, import_react14.cloneElement)(element, {
    ref: newRef
  });
}

// node_modules/react-dnd/dist/internals/SourceConnector.js
var SourceConnector = class {
  receiveHandlerId(newHandlerId) {
    this.handlerId !== newHandlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    let didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    let dragSource = this.dragSource, didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return didChange && this.disconnectDragSource(), this.handlerId ? dragSource ? (didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = dragSource, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions)), didChange) : (this.lastConnectedDragSource = dragSource, didChange) : didChange;
  }
  reconnectDragPreview(forceDidChange = !1) {
    let dragPreview = this.dragPreview, didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange && this.disconnectDragPreview(), !!this.handlerId) {
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = dragPreview, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource(), this.dragSourceOptions = options || null, isRef(node) ? this.dragSourceRef = node : this.dragSourceNode = node, this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview(), this.dragPreviewOptions = options || null, isRef(node) ? this.dragPreviewRef = node : this.dragPreviewNode = node, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = backend;
  }
};

// node_modules/react-dnd/dist/internals/TargetConnector.js
var TargetConnector = class {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    let didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    didChange && this.disconnectDropTarget();
    let dropTarget = this.dropTarget;
    if (!!this.handlerId) {
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = dropTarget, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions));
    }
  }
  receiveHandlerId(newHandlerId) {
    newHandlerId !== this.handlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget(), this.dropTargetOptions = options, isRef(node) ? this.dropTargetRef = node : this.dropTargetNode = node, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = backend;
  }
};

// node_modules/react-dnd/dist/hooks/useDragDropManager.js
var import_react15 = require("react");
function useDragDropManager() {
  let { dragDropManager } = (0, import_react15.useContext)(DndContext);
  return invariant(dragDropManager != null, "Expected drag drop context"), dragDropManager;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  let manager = useDragDropManager(), connector = (0, import_react16.useMemo)(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dragSourceOptions = dragSourceOptions || null, connector.reconnect(), () => connector.disconnectDragSource()), [
    connector,
    dragSourceOptions
  ]), useIsomorphicLayoutEffect(() => (connector.dragPreviewOptions = dragPreviewOptions || null, connector.reconnect(), () => connector.disconnectDragPreview()), [
    connector,
    dragPreviewOptions
  ]), connector;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js
var import_react17 = require("react");
function useDragSourceMonitor() {
  let manager = useDragDropManager();
  return (0, import_react17.useMemo)(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
var import_react18 = require("react");

// node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
var DragSourceImpl = class {
  beginDrag() {
    let spec = this.spec, monitor = this.monitor, result = null;
    return typeof spec.item == "object" ? result = spec.item : typeof spec.item == "function" ? result = spec.item(monitor) : result = {}, result ?? null;
  }
  canDrag() {
    let spec = this.spec, monitor = this.monitor;
    return typeof spec.canDrag == "boolean" ? spec.canDrag : typeof spec.canDrag == "function" ? spec.canDrag(monitor) : !0;
  }
  isDragging(globalMonitor, target) {
    let spec = this.spec, monitor = this.monitor, { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    let spec = this.spec, monitor = this.monitor, connector = this.connector, { end } = spec;
    end && end(monitor.getItem(), monitor), connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec, this.monitor = monitor, this.connector = connector;
  }
};

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
function useDragSource(spec, monitor, connector) {
  let handler = (0, import_react18.useMemo)(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  return (0, import_react18.useEffect)(() => {
    handler.spec = spec;
  }, [
    spec
  ]), handler;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragType.js
var import_react19 = require("react");
function useDragType(spec) {
  return (0, import_react19.useMemo)(() => {
    let result = spec.type;
    return invariant(result != null, "spec.type must be defined"), result;
  }, [
    spec
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js
function useRegisteredDragSource(spec, monitor, connector) {
  let manager = useDragDropManager(), handler = useDragSource(spec, monitor, connector), itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function() {
    if (itemType != null) {
      let [handlerId, unregister] = registerSource(itemType, handler, manager);
      return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
    }
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
function useDrag(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  let monitor = useDragSourceMonitor(), connector = useDragSourceConnector(spec.options, spec.previewOptions);
  return useRegisteredDragSource(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}

// node_modules/react-dnd/dist/hooks/useDrop/connectors.js
var import_react20 = require("react");
function useConnectDropTarget(connector) {
  return (0, import_react20.useMemo)(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js
var import_react21 = require("react");
function useDropTargetConnector(options) {
  let manager = useDragDropManager(), connector = (0, import_react21.useMemo)(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dropTargetOptions = options || null, connector.reconnect(), () => connector.disconnectDropTarget()), [
    options
  ]), connector;
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js
var import_react22 = require("react");
function useDropTargetMonitor() {
  let manager = useDragDropManager();
  return (0, import_react22.useMemo)(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useAccept.js
var import_react23 = require("react");
function useAccept(spec) {
  let { accept } = spec;
  return (0, import_react23.useMemo)(() => (invariant(spec.accept != null, "accept must be defined"), Array.isArray(accept) ? accept : [
    accept
  ]), [
    accept
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
var import_react24 = require("react");

// node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
var DropTargetImpl = class {
  canDrop() {
    let spec = this.spec, monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : !0;
  }
  hover() {
    let spec = this.spec, monitor = this.monitor;
    spec.hover && spec.hover(monitor.getItem(), monitor);
  }
  drop() {
    let spec = this.spec, monitor = this.monitor;
    if (spec.drop)
      return spec.drop(monitor.getItem(), monitor);
  }
  constructor(spec, monitor) {
    this.spec = spec, this.monitor = monitor;
  }
};

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
function useDropTarget(spec, monitor) {
  let dropTarget = (0, import_react24.useMemo)(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  return (0, import_react24.useEffect)(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]), dropTarget;
}

// node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js
function useRegisteredDropTarget(spec, monitor, connector) {
  let manager = useDragDropManager(), dropTarget = useDropTarget(spec, monitor), accept = useAccept(spec);
  useIsomorphicLayoutEffect(function() {
    let [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDrop.js
function useDrop(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps), monitor = useDropTargetMonitor(), connector = useDropTargetConnector(spec.options);
  return useRegisteredDropTarget(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}

// node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  return () => (result == null && (result = fn()), result);
}
function without2(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  let set = /* @__PURE__ */ new Set(), insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return set.forEach(
    (key) => result.push(key)
  ), result;
}

// node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var EnterLeaveCounter = class {
  enter(enteringNode) {
    let previousLength = this.entered.length, isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    return this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]), previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    let previousLength = this.entered.length;
    return this.entered = without2(this.entered.filter(this.isNodeInDocument), leavingNode), previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [], this.isNodeInDocument = isNodeInDocument;
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
var NativeDragSource = class {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${property}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      let newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        let propertyFn = this.config.exposeProperties[property];
        propertyFn != null && (newProperties[property] = {
          value: propertyFn(dataTransfer, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config, this.item = {}, this.initializeExposedProperties();
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL
});
var FILE = "__NATIVE_FILE__", URL = "__NATIVE_URL__", TEXT = "__NATIVE_TEXT__", HTML = "__NATIVE_HTML__";

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  let result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result ?? defaultValue;
}

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js
var nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split(`
`),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js
function createNativeDragSource(type, dataTransfer) {
  let config = nativeTypesConfig[type];
  if (!config)
    throw new Error(`native type ${type} has no configuration`);
  let result = new NativeDragSource(config);
  return result.loadDataTransfer(dataTransfer), result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer)
    return null;
  let dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    let typeConfig = nativeTypesConfig[nativeItemType];
    return typeConfig != null && typeConfig.matchesTypes ? typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    ) : !1;
  })[0] || null;
}

// node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
), isSafari = memoize(
  () => Boolean(window.safari)
);

// node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
var MonotonicInterpolant = class {
  interpolate(x) {
    let { xs, ys, c1s, c2s, c3s } = this, i = xs.length - 1;
    if (x === xs[i])
      return ys[i];
    let low = 0, high = c3s.length - 1, mid;
    for (; low <= high; ) {
      mid = Math.floor(0.5 * (low + high));
      let xHere = xs[mid];
      if (xHere < x)
        low = mid + 1;
      else if (xHere > x)
        high = mid - 1;
      else
        return ys[mid];
    }
    i = Math.max(0, high);
    let diff = x - xs[i], diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    let { length } = xs, indexes = [];
    for (let i = 0; i < length; i++)
      indexes.push(i);
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    let dys = [], dxs = [], ms = [], dx, dy;
    for (let i1 = 0; i1 < length - 1; i1++)
      dx = xs[i1 + 1] - xs[i1], dy = ys[i1 + 1] - ys[i1], dxs.push(dx), dys.push(dy), ms.push(dy / dx);
    let c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      let m2 = ms[i2], mNext = ms[i2 + 1];
      if (m2 * mNext <= 0)
        c1s.push(0);
      else {
        dx = dxs[i2];
        let dxNext = dxs[i2 + 1], common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    let c2s = [], c3s = [], m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      let c1 = c1s[i3], invDx = 1 / dxs[i3], common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx), c3s.push(common * invDx * invDx);
    }
    this.xs = xs, this.ys = ys, this.c1s = c1s, this.c2s = c2s, this.c3s = c3s;
  }
};

// node_modules/react-dnd-html5-backend/dist/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  let el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el)
    return null;
  let { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !(!((ref = document.documentElement) === null || ref === void 0) && ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth, dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  return isSafari() && isImage && (dragPreviewHeight /= window.devicePixelRatio, dragPreviewWidth /= window.devicePixelRatio), {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  let isImage = isImageNode(dragPreview), dragPreviewNodeOffsetFromClient = getNodeClientOffset(isImage ? sourceNode : dragPreview), offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  }, { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode, { anchorX, anchorY } = anchorPoint, { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), calculateYOffset = () => {
    let y = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      offsetFromDragPreview.y,
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]).interpolate(anchorY);
    return isSafari() && isImage && (y += (window.devicePixelRatio - 1) * dragPreviewHeight), y;
  }, calculateXOffset = () => new MonotonicInterpolant([
    0,
    0.5,
    1
  ], [
    offsetFromDragPreview.x,
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
  ]).interpolate(anchorX), { offsetX, offsetY } = offsetPoint, isManualOffsetX = offsetX === 0 || offsetX, isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var OptionsReader = class {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var ref;
    return !((ref = this.globalContext) === null || ref === void 0) && ref.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null, this.globalContext = globalContext, this.optionsArgs = options;
  }
};

// node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty5(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    });
  }
  return target;
}
var HTML5BackendImpl = class {
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    let root = this.rootElement;
    if (root !== void 0) {
      if (root.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      root.__isReactDndBackendSetUp = !0, this.addEventListeners(root);
    }
  }
  teardown() {
    let root = this.rootElement;
    if (root !== void 0 && (root.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var ref;
      (ref = this.window) === null || ref === void 0 || ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    return this.sourcePreviewNodeOptions.set(sourceId, options), this.sourcePreviewNodes.set(sourceId, node), () => {
      this.sourcePreviewNodes.delete(sourceId), this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node), this.sourceNodeOptions.set(sourceId, options);
    let handleDragStart = (e) => this.handleDragStart(e, sourceId), handleSelectStart = (e) => this.handleSelectStart(e);
    return node.setAttribute("draggable", "true"), node.addEventListener("dragstart", handleDragStart), node.addEventListener("selectstart", handleSelectStart), () => {
      this.sourceNodes.delete(sourceId), this.sourceNodeOptions.delete(sourceId), node.removeEventListener("dragstart", handleDragStart), node.removeEventListener("selectstart", handleSelectStart), node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    let handleDragEnter = (e) => this.handleDragEnter(e, targetId), handleDragOver = (e) => this.handleDragOver(e, targetId), handleDrop = (e) => this.handleDrop(e, targetId);
    return node.addEventListener("dragenter", handleDragEnter), node.addEventListener("dragover", handleDragOver), node.addEventListener("drop", handleDrop), () => {
      node.removeEventListener("dragenter", handleDragEnter), node.removeEventListener("dragover", handleDragOver), node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    !target.addEventListener || (target.addEventListener("dragstart", this.handleTopDragStart), target.addEventListener("dragstart", this.handleTopDragStartCapture, !0), target.addEventListener("dragend", this.handleTopDragEndCapture, !0), target.addEventListener("dragenter", this.handleTopDragEnter), target.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.addEventListener("dragover", this.handleTopDragOver), target.addEventListener("dragover", this.handleTopDragOverCapture, !0), target.addEventListener("drop", this.handleTopDrop), target.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(target) {
    !target.removeEventListener || (target.removeEventListener("dragstart", this.handleTopDragStart), target.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), target.removeEventListener("dragend", this.handleTopDragEndCapture, !0), target.removeEventListener("dragenter", this.handleTopDragEnter), target.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.removeEventListener("dragover", this.handleTopDragOver), target.removeEventListener("dragover", this.handleTopDragOverCapture, !0), target.removeEventListener("drop", this.handleTopDrop), target.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread5({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread5({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    let itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_exports).some(
      (key) => NativeTypes_exports[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = createNativeDragSource(type, dataTransfer), this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = node;
    let MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 || ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, sourceId) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(sourceId));
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (sourceId) => {
      let source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    }, this.endDragNativeItem = () => {
      !this.isDraggingNativeItem() || (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (node) => Boolean(node && this.document && this.document.body && this.document.body.contains(node)), this.endDragIfSourceWasRemovedFromDOM = () => {
      let node = this.currentDragSourceNode;
      node == null || this.isNodeInDocument(node) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (dragOverTargetIds) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(dragOverTargetIds || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (e) => {
      if (e.defaultPrevented)
        return;
      let { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      let clientOffset = getEventClientOffset(e);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage == "function") {
          let sourceId = this.monitor.getSourceId(), sourceNode = this.sourceNodes.get(sourceId), dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            let { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions(), dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, {
              anchorX,
              anchorY
            }, {
              offsetX,
              offsetY
            });
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer == null || dataTransfer.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(e.target);
        let { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        captureDraggingState ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (nativeType)
        this.beginDragNativeItem(nativeType);
      else {
        if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable")))
          return;
        e.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (e) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(e.target) || this.monitor.isDragging())
        return;
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      nativeType && this.beginDragNativeItem(nativeType, dataTransfer);
    }, this.handleTopDragEnter = (e) => {
      let { dragEnterTargetIds } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = e.altKey, dragEnterTargetIds.length > 0 && this.actions.hover(dragEnterTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (e) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
    }, this.handleTopDragOver = (e) => {
      let { dragOverTargetIds } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = e.altKey, this.lastClientOffset = getEventClientOffset(e), this.scheduleHover(dragOverTargetIds), (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (e) => {
      this.isDraggingNativeItem() && e.preventDefault(), this.enterLeaveCounter.leave(e.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (e) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault(), (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      } else
        matchNativeItemType(e.dataTransfer) && e.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (e) => {
      let { dropTargetIds } = this;
      this.dropTargetIds = [], this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (e) => {
      let target = e.target;
      typeof target.dragDrop == "function" && (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable || (e.preventDefault(), target.dragDrop()));
    }, this.options = new OptionsReader(globalContext, options), this.actions = manager.getActions(), this.monitor = manager.getMonitor(), this.registry = manager.getRegistry(), this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
};

// node_modules/react-dnd-html5-backend/dist/index.js
var HTML5Backend = function(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// app/components/TimelineImage.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TimelineImage({
  index,
  image,
  left,
  top,
  transform
}) {
  let [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "IMAGE",
      item: { index, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [index, left, top]
  );
  return isDragging ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        ref: drag
      }, void 0, !1, {
        fileName: "app/components/TimelineImage.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragPreviewImage, {
        connect: preview,
        src: `/images/${image.CHAPTER}/${image.FILE_NAME}`
      }, void 0, !1, {
        fileName: "app/components/TimelineImage.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/TimelineImage.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        ref: drag,
        className: "absolute w-[150px] cursor-pointer",
        style: { left, top, transform },
        src: `/images/${image.CHAPTER}/${image.FILE_NAME}`
      }, void 0, !1, {
        fileName: "app/components/TimelineImage.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragPreviewImage, {
        connect: preview,
        style: { position: "absolute", width: "150px" },
        src: `/images/${image.CHAPTER}/${image.FILE_NAME}`
      }, void 0, !1, {
        fileName: "app/components/TimelineImage.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/TimelineImage.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/components/Timeline.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), IMAGE_COUNT = 2;
function createInitialImageState(windowWidth) {
  let images = {};
  for (let i = 0; i < IMAGE_COUNT; i++)
    for (; ; ) {
      let randomIndex = Math.floor(Math.random() * timelineImages_default.length);
      if (!(randomIndex in images)) {
        let left = Math.floor(Math.random() * windowWidth), top = Math.floor(Math.random() * 250), transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        images[randomIndex] = {
          left,
          top,
          transform,
          index: randomIndex,
          image: timelineImages_default[randomIndex]
        };
        break;
      }
    }
  return images;
}
function TimelineWrapper() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DndProvider, {
    backend: HTML5Backend,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, {}, void 0, !1, {
      fileName: "app/components/Timeline.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function Timeline() {
  let windowSize = useWindowSize(), [images, setImages] = (0, import_react25.useState)(
    () => createInitialImageState(windowSize.width || 500)
  ), moveImage = (0, import_react25.useCallback)(
    (index, left, top) => {
      let newImages = { ...images };
      newImages[index] = { ...newImages[index], left, top }, setImages(newImages);
    },
    [images, setImages]
  ), [, drop] = useDrop(
    () => ({
      accept: "IMAGE",
      drop(item, monitor) {
        let delta = monitor.getDifferenceFromInitialOffset(), left = Math.round(item.left + delta.x), top = Math.round(item.top + delta.y);
        moveImage(item.index, left, top);
      }
    }),
    [moveImage]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    ref: drop,
    className: "w-full relative h-[500px]",
    children: Object.values(images).map(({ index, left, top, transform }) => {
      let image = timelineImages_default[index];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimelineImage, {
        index,
        left,
        top,
        transform,
        image
      }, index, !1, {
        fileName: "app/components/Timeline.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this);
    })
  }, void 0, !1, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-black",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomeTitle, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-dubois_sec flex",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-2/5",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              className: "p-20 w-full",
              src: "/images/ch4-5.webp"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 11,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "p-20 font-william w-3/5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-4xl p-5",
                children: "Some Words From Lauren"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 15,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-lg p-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    style: { whitespace: "pre" },
                    children: "Some more text "
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 17,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    style: { whitespace: "pre" },
                    children: "Additional research for this project was completed through fellowships from the American Antiquarian Society and the Library Company of Philadelphia."
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 16,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-lg p-5",
                children: "Read More ->"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 24,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimelineWrapper, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChapterCardGrid, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f013dce8", entry: { module: "/build/entry.client-V37LOCJJ.js", imports: ["/build/_shared/chunk-6CJZ7QXO.js", "/build/_shared/chunk-BVBGPKVE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2HR4PVTH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapters/brooks": { id: "routes/chapters/brooks", parentId: "root", path: "chapters/brooks", index: void 0, caseSensitive: void 0, module: "/build/routes/chapters/brooks-KM6U33LG.js", imports: ["/build/_shared/chunk-XM6TVPQ5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapters/dubois": { id: "routes/chapters/dubois", parentId: "root", path: "chapters/dubois", index: void 0, caseSensitive: void 0, module: "/build/routes/chapters/dubois-42L5AMQ3.js", imports: ["/build/_shared/chunk-XM6TVPQ5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapters/labour": { id: "routes/chapters/labour", parentId: "root", path: "chapters/labour", index: void 0, caseSensitive: void 0, module: "/build/routes/chapters/labour-4WAHYL4P.js", imports: ["/build/_shared/chunk-XM6TVPQ5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapters/peabody": { id: "routes/chapters/peabody", parentId: "root", path: "chapters/peabody", index: void 0, caseSensitive: void 0, module: "/build/routes/chapters/peabody-YTIUSF6Z.js", imports: ["/build/_shared/chunk-XM6TVPQ5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapters/playfair": { id: "routes/chapters/playfair", parentId: "root", path: "chapters/playfair", index: void 0, caseSensitive: void 0, module: "/build/routes/chapters/playfair-4LMAMFRF.js", imports: ["/build/_shared/chunk-XM6TVPQ5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapters/willard": { id: "routes/chapters/willard", parentId: "root", path: "chapters/willard", index: void 0, caseSensitive: void 0, module: "/build/routes/chapters/willard-PYY5H6YF.js", imports: ["/build/_shared/chunk-XM6TVPQ5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ESJFVKNF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F013DCE8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/chapters/playfair": {
    id: "routes/chapters/playfair",
    parentId: "root",
    path: "chapters/playfair",
    index: void 0,
    caseSensitive: void 0,
    module: playfair_exports
  },
  "routes/chapters/peabody": {
    id: "routes/chapters/peabody",
    parentId: "root",
    path: "chapters/peabody",
    index: void 0,
    caseSensitive: void 0,
    module: peabody_exports
  },
  "routes/chapters/willard": {
    id: "routes/chapters/willard",
    parentId: "root",
    path: "chapters/willard",
    index: void 0,
    caseSensitive: void 0,
    module: willard_exports
  },
  "routes/chapters/brooks": {
    id: "routes/chapters/brooks",
    parentId: "root",
    path: "chapters/brooks",
    index: void 0,
    caseSensitive: void 0,
    module: brooks_exports
  },
  "routes/chapters/dubois": {
    id: "routes/chapters/dubois",
    parentId: "root",
    path: "chapters/dubois",
    index: void 0,
    caseSensitive: void 0,
    module: dubois_exports
  },
  "routes/chapters/labour": {
    id: "routes/chapters/labour",
    parentId: "root",
    path: "chapters/labour",
    index: void 0,
    caseSensitive: void 0,
    module: labour_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
