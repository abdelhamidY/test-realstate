import { j as jsxs, a as jsx } from "../chunks/chunk-4a3c9d3b.js";
import { F as Footer } from "../chunks/chunk-9c56226f.js";
import { H as Header, L as Localized } from "../chunks/chunk-40aa3536.js";
import "react";
import "react/jsx-runtime";
const index = "";
const hero1 = "/assets/static/hero-1.3931cd8f.jpg";
const hero2 = "/assets/static/hero-2.cab62d82.jpg";
const hero3 = "/assets/static/hero-3.ab22a9bf.jpg";
function Page() {
  return /* @__PURE__ */ jsxs("div", { id: "scrollRoot", className: "h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth", children: [
    /* @__PURE__ */ jsx("div", { className: "snap-start", children: /* @__PURE__ */ jsx(Header, { active: "about", type: "black", transparent: false }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-[calc(100vh-6rem)] bg-cover bg-center snap-end", style: { backgroundImage: "url(" + hero1 + ")" }, children: /* @__PURE__ */ jsxs("div", { className: "backdrop-blur backdrop-brightness-50 text-white p-8 flex flex-col", children: [
      /* @__PURE__ */ jsx("h1", { className: "uppercase text-6xl text-white font-bold", children: /* @__PURE__ */ jsx(Localized, { text: "about-us.vision.title" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm flex flex-col gap-2 mt-8 text-primary justify-center h-full", children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Localized, { text: "about-us.vision.first-text" }) }),
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Localized, { text: "about-us.vision.second-text" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-screen bg-cover bg-center snap-start snap-always", style: { backgroundImage: "url(" + hero2 + ")" }, children: /* @__PURE__ */ jsxs("div", { className: "backdrop-blur flex flex-col min-h-screen backdrop-brightness-50 text-white p-8 col-start-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "uppercase text-6xl text-white font-bold", children: /* @__PURE__ */ jsx(Localized, { text: "about-us.mission.title" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-sm flex flex-col justify-center gap-2 text-primary grow p-4", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Localized, { text: "about-us.mission" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-screen bg-cover bg-center snap-start snap-always", style: { backgroundImage: "url(" + hero3 + ")" }, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen backdrop-blur backdrop-brightness-50 text-white p-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "uppercase text-6xl text-white font-bold", children: /* @__PURE__ */ jsx(Localized, { text: "about-us.goal.title" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-sm flex flex-col justify-center gap-2 text-primary grow py-4", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Localized, { text: "about-us.goal" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "snap-start", children: /* @__PURE__ */ jsx(Footer, {}) })
  ] });
}
export {
  Page
};
