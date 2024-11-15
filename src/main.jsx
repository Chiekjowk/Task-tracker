import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/ErrorPage.jsx'
import Add from './pages/Add/Add.jsx'
import Completed from './pages/Completed/Completed.jsx'
import Favorite from './pages/Favorite/Favorite.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/add',
        element: <Add />,
        errorElement: <ErrorPage />
      },
      {
        path: '/completed',
        element: <Completed />,
        errorElement: <ErrorPage />
      },
      {
        path: '/favorite',
        element: <Favorite />,
        errorElement: <ErrorPage />
      },
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
