/**
 * src/lib/routes.ts
 */
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Polars from '../pages/Polars'
import Serde from '../pages/Serde'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/polars',
    element: <Polars />
  },
  {
    path: '/serde',
    element: <Serde />
  }
])
