import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from "./app/routes/Routes.tsx"
import ThemeProvider from './app/providers/ThemeProvider.tsx'

import "./app/layout/styles.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
