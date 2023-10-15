export { render }
export { onBeforePrerender }

import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { PageLayout } from './PageLayout'
import indexJsUrl from './components/assets/index.js?url'
import animeJsUrl from './components/assets/anime.min.js?url'
import threeJsUrl from './components/assets/three.min.js?url';
import panolensJsUrl from './components/assets/panolens.min.js?url';
import { locales } from '../locale/locale.types';
import { LangContextProvider } from './useLang'

function onBeforePrerender(prerenderContext) {
  const pageContexts = []
  prerenderContext.pageContexts.forEach((pageContext) => {
    // Duplicate pageContext for each locale
    locales.forEach((locale) => {
      // Localize URL
      const urlOriginal = `/${locale}${pageContext.urlOriginal}`

      pageContexts.push({
        ...pageContext,
        urlOriginal,
        // Set pageContext.locale
        lang: locale
      })
    })
  })

  const indexCtx = prerenderContext.pageContexts.find(ctx => ctx.urlOriginal === '/')
  if (indexCtx) {
    pageContexts.push({ ...indexCtx, lang: 'it' });
  }

  return {
    prerenderContext: {
      pageContexts
    }
  }
}

function render(pageContext) {
  let pageHtml
  if (!pageContext.Page) {
    // SPA
    pageHtml = ''
  } else {
    // SSR / HTML-only
    const { Page, pageProps, lang } = pageContext
    pageHtml = ReactDOMServer.renderToString(
      <PageLayout pageContext={pageContext}>
        <LangContextProvider lang={lang}>
          <Page {...pageProps} />
        </LangContextProvider>
      </PageLayout>
    )
  }


  return escapeInject`<!DOCTYPE html>
    <html style="scroll-behavior: smooth">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lato&family=Lora:wght@500&family=Oswald&family=PT+Sans:wght@400;700&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik&family=Secular+One&display=swap" rel="stylesheet">
        <title>Luca Real Estate</title>
        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js" defer></script>
        <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">
        <script src="${animeJsUrl}" defer></script>
        <script src="${threeJsUrl}" defer></script>
        <script src="${panolensJsUrl}" defer></script>
        <script src="${indexJsUrl}" defer></script>
        

        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`
}
