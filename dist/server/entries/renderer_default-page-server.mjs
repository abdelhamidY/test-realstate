import { a as jsx, P as PageContextProvider, L as LangContextProvider } from "../chunks/chunk-4a3c9d3b.js";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import React from "react";
import "react/jsx-runtime";
function PageLayout({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children }) });
}
const indexJsUrl = "/assets/static/index.bb9d219b.js";
const animeJsUrl = "/assets/static/anime.min.5cbda29e.js";
const threeJsUrl = "/assets/static/three.min.31ceaaef.js";
const panolensJsUrl = "/assets/static/panolens.min.5794cde6.js";
const locales = ["en", "it"];
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
function onBeforePrerender(prerenderContext) {
  const pageContexts = [];
  prerenderContext.pageContexts.forEach((pageContext) => {
    locales.forEach((locale) => {
      const urlOriginal = `/${locale}${pageContext.urlOriginal}`;
      pageContexts.push({
        ...pageContext,
        urlOriginal,
        // Set pageContext.locale
        lang: locale
      });
    });
  });
  const indexCtx = prerenderContext.pageContexts.find((ctx) => ctx.urlOriginal === "/");
  if (indexCtx) {
    pageContexts.push({ ...indexCtx, lang: "it" });
  }
  return {
    prerenderContext: {
      pageContexts
    }
  };
}
function render(pageContext) {
  let pageHtml;
  if (!pageContext.Page) {
    pageHtml = "";
  } else {
    const { Page, pageProps, lang } = pageContext;
    pageHtml = ReactDOMServer.renderToString(
      /* @__PURE__ */ jsx(PageLayout, { pageContext, children: /* @__PURE__ */ jsx(LangContextProvider, { lang, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) }) })
    );
  }
  return escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html style="scroll-behavior: smooth">\n      <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link rel="preconnect" href="https://fonts.googleapis.com">\n        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lato&family=Lora:wght@500&family=Oswald&family=PT+Sans:wght@400;700&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik&family=Secular+One&display=swap" rel="stylesheet">\n        <title>Luca Real Estate</title>\n        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js" defer><\/script>\n        <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">\n        <script src="', '" defer><\/script>\n        <script src="', '" defer><\/script>\n        <script src="', '" defer><\/script>\n        <script src="', '" defer><\/script>\n        \n\n        <meta name="format-detection" content="telephone=no" />\n      </head>\n      <body>\n        ', "\n      </body>\n    </html>"])), animeJsUrl, threeJsUrl, panolensJsUrl, indexJsUrl, dangerouslySkipEscape(pageHtml));
}
export {
  onBeforePrerender,
  render
};
