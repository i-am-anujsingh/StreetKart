import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import AuthLayout from "./components/AuthLayout.jsx";

//PAGES
import BuyMaterials from './pages/BuyMaterials.jsx'
import ResaleMarketplace from './pages/ResaleMarketPlace.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import VendorDashboard from './pages/VendorDashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element:(
            <AuthLayout authentication={true}>
              <Login />
            </AuthLayout>
              ),
        },
        {
            path: "/signup",
            element:(
            <AuthLayout authentication={true}>
              <Signup />
            </AuthLayout>),
        },
        {
            path: "/buy-items",
            element:(
            <AuthLayout authentication={true}>
              <BuyMaterials />
            </AuthLayout>),
        },
        {
            path: "/sell-items",
            element:(
            <AuthLayout authentication={true}>
              <ResaleMarketplace />
            </AuthLayout>),
        },
        {
            path: "/profile",
            element:(
            <AuthLayout authentication={true}>
              <VendorDashboard />
            </AuthLayout>),
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
