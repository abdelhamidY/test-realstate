import React, { useContext } from 'react'
import { Locale } from '../locale/locale.types'

export { LangContextProvider }
export { useLang }

const Context = React.createContext('it')

function LangContextProvider({ lang, children }: {lang: Locale, children: React.ReactNode}) {
  return <Context.Provider value={lang}>{children}</Context.Provider>
}

function useLang() {
  const pageContext = useContext(Context)
  return pageContext
}