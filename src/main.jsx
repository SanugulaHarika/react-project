import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Firstcomp from './Firstcomp.jsx';
import Secondcomp from './Secondcomp.jsx';
import Update from './Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Firstcomp/>,
  },
  {
    path:"adding",
    element:<Secondcomp/>
  },
  {
    path:"update/:mid",
    element:<Update/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
