export { onBeforeRoute }

function onBeforeRoute(pageContext) {
    const [lang, ...pathComponents]  = pageContext.urlOriginal.substring(1).split("/");
    const path = pathComponents.join("/");
    const newUrl =  "/" + (path ?? "");
    return {
      pageContext: {
        lang: lang === '' ? 'it' : lang,
        urlOriginal: newUrl
      }
    }
}

function extractLocale(url) {
    // We determine the locale, for example:
    //  extractLocale('/en-US/film/42').locale === 'en-US'
    //  extractLocale('/de-DE/film/42').locale === 'de-DE'
    const [locale, path] = url.substring(1).split("/", 2);
  
    return { locale, urlWithoutLocale: "/" + path }
  }