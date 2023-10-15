import React, { useContext } from "react";
import * as jsxRuntime from "react/jsx-runtime";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Context$1 = React.createContext("it");
function LangContextProvider({ lang, children }) {
  return /* @__PURE__ */ jsx(Context$1.Provider, { value: lang, children });
}
function useLang() {
  const pageContext = useContext(Context$1);
  return pageContext;
}
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
export {
  Fragment as F,
  LangContextProvider as L,
  PageContextProvider as P,
  jsx as a,
  usePageContext as b,
  jsxs as j,
  useLang as u
};
