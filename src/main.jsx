import React from 'react'
import ReactDOM from 'react-dom/client'
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
 <QueryClientProvider client={queryClient}>
   <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>,
 </QueryClientProvider>
)
