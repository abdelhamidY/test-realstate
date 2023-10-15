export { PageLayout }

import React from 'react'
import { PageContextProvider } from './usePageContext'

function PageLayout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  )
}