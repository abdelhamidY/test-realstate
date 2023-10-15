const exportNames$5 = ["Page"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$5
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$4 = ["Page"];
const __vite_glob_3_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$3 = ["ProjectInfo", "ProjectDetails", "MobileProjectDetails", "MobileVersion", "Page", "onBeforeRender", "prerender"];
const __vite_glob_3_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$2 = ["Page", "onBeforeRender"];
const __vite_glob_3_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$1 = ["render", "onBeforePrerender"];
const __vite_glob_3_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
function onBeforeRoute(pageContext) {
  const [lang, ...pathComponents] = pageContext.urlOriginal.substring(1).split("/");
  const path = pathComponents.join("/");
  const newUrl = "/" + (path ?? "");
  return {
    pageContext: {
      lang: lang === "" ? "it" : lang,
      urlOriginal: newUrl
    }
  };
}
const __vite_glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onBeforeRoute
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["render", "clientRouting", "hydrationCanBeAborted"];
const __vite_glob_5_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const invalidator = null;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/pages/about/index.page.server.tsx": () => import("./entries/pages_about_index-page-server.mjs"), "/pages/index.page.server.tsx": () => import("./entries/pages_index-page-server.mjs"), "/pages/project/@id/index.page.server.tsx": () => import("./entries/pages_project_@id_index-page-server.mjs"), "/pages/projects/index.page.server.tsx": () => import("./entries/pages_projects_index-page-server.mjs"), "/renderer/_default.page.server.jsx": () => import("./entries/renderer_default-page-server.mjs") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/pages/about/index.page.server.tsx": __vite_glob_3_0, "/pages/index.page.server.tsx": __vite_glob_3_1, "/pages/project/@id/index.page.server.tsx": __vite_glob_3_2, "/pages/projects/index.page.server.tsx": __vite_glob_3_3, "/renderer/_default.page.server.jsx": __vite_glob_3_4 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.route.js": __vite_glob_4_0 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.jsx": __vite_glob_5_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  invalidator,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
