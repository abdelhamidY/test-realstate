import { j as jsxs, a as jsx, u as useLang } from "../chunks/chunk-4a3c9d3b.js";
import { H as Header, L as Localized } from "../chunks/chunk-40aa3536.js";
import { F as Footer } from "../chunks/chunk-9c56226f.js";
import { readFileSync, readdirSync } from "fs";
import { minimatch } from "minimatch";
import "react";
import "react/jsx-runtime";
const index = "";
function ProjectPreview({ project }) {
  const lang = useLang();
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ jsxs("a", { href: "/" + lang + "/project/" + project.id, className: "grid grid-cols-1 grid-rows-1 mx-auto h-full transition-transform group max-w-xl text-primary rounded-md overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { className: "row-start-1 col-start-1 object-cover w-full h-full group-hover:scale-105 transition-transform", src: project.hero }),
    /* @__PURE__ */ jsx("div", { className: "self-end row-start-1 col-start-1 w-full backdrop-brightness-50 py-4 px-2 font-bold", children: project.title })
  ] }) });
}
function Page(pageProps) {
  const projects = pageProps.projects;
  const middle = projects.length / 2 << 0;
  const toProjectPreview = (project, index2) => /* @__PURE__ */ jsx("div", { "data-slide": index2, style: { scale: index2 === middle ? "1" : ".85" }, className: "h-full", children: /* @__PURE__ */ jsx(ProjectPreview, { project }) });
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-base-white overflow-x-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsx(Header, { active: "projects", type: "black", transparent: false }),
      /* @__PURE__ */ jsxs("main", { className: "flex flex-col  flex-grow", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-2xl uppercase my-4 mx-auto", children: /* @__PURE__ */ jsx(Localized, { text: "projects.our" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 grid-rows-1  my-4 h-full  flex-grow", children: [
          /* @__PURE__ */ jsxs("div", { className: "row-start-1 col-start-1 h-full z-10 flex justify-between items-center mx-4 pointer-events-none my-auto", children: [
            /* @__PURE__ */ jsx("button", { type: "button", id: "prevSlide", className: "rounded-full p-2 bg-white shadow-md hover:scale-105  transition-[transform] pointer-events-auto", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ jsx("polyline", { points: "15 18 9 12 15 6" }) }) }),
            /* @__PURE__ */ jsx("button", { type: "button", id: "nextSlide", className: "rounded-full p-2 bg-white shadow-md hover:scale-105 transition-[transform] pointer-events-auto", children: /* @__PURE__ */ jsx("svg", { className: "rotate-180 w-8", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ jsx("polyline", { points: "15 18 9 12 15 6" }) }) })
          ] }),
          /* @__PURE__ */ jsx("div", { id: "projectSlider", className: "row-start-1 col-start-1 grid grid-cols-[70vw_70vw_70vw_70vw_70vw] -translate-x-[calc(140vw-15vw)] my-auto", children: projects.map(toProjectPreview) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const resourceMap = JSON.parse(readFileSync("url.map.json").toString("utf-8"));
function getResources(filter) {
  return Object.keys(resourceMap).filter((res) => minimatch(res, filter));
}
function getResource(name) {
  if (!(name in resourceMap))
    throw new Error("unknown resource: " + name);
  return name;
}
function getURL(resource) {
  return resourceMap[resource] ?? "invalid-resource";
}
function resolveImages(imageGroups) {
  return imageGroups.map((ig) => {
    const images = getResources(ig.imagesFilter).map(getURL);
    return {
      name: ig.name,
      images
    };
  });
}
async function onBeforeRender() {
  const projectsNames = readdirSync("projects").filter((p) => minimatch(p, "*.json"));
  const projects = projectsNames.map((p) => ({ id: p.substring(0, p.length - ".json".length), ...JSON.parse(readFileSync("projects/" + p).toString("utf-8")) })).map((projectInfo) => ({
    id: projectInfo.id,
    hero: getURL(getResource(projectInfo.hero)),
    title: projectInfo.title,
    location: projectInfo.location,
    invested: projectInfo.invested,
    imageGroups: resolveImages(projectInfo.imageGroups),
    details: projectInfo.details,
    description: projectInfo.description,
    characteristics: projectInfo.characteristics,
    map: projectInfo.map,
    planimetry: getURL(getResource(projectInfo.planimetry)),
    virtualTours: projectInfo.virtualTours
  }));
  return {
    pageContext: {
      pageProps: { projects }
    }
  };
}
export {
  Page,
  onBeforeRender
};
