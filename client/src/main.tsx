import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from "./app/routes/Routes.tsx"
import ThemeProvider from './store/providers/ThemeProvider.tsx'
import BasketProvider from './store/providers/BasketProvider.tsx'
import "./app/layout/styles.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BasketProvider>
        <RouterProvider router={router} />
      </BasketProvider>
    </ThemeProvider>
  </StrictMode>,
)
