import DashboardLayout from "../Layout/DashboardLayout";
import Blog from "../Pages/Blog/Blog";
import AddAProduct from "../Pages/DashBoard/AddAProduct/AddAProduct";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/DashBoard/AllSellers/AllSellers";

import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import MyOrders from "../Pages/DashBoard/MyOrder/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../Pages/DashBoard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
// import AdminRoute from "../Pages/Route/AdminRoute/AdminRoute";
import PrivateRoute from "../Pages/Route/PrivateRoute/PrivateRoute";
// import SellerRoute from "../Pages/Route/SellerRoute/SellerRoute";

import SignUp from "../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }, {
                path: '/categories/:id',
                loader: ({ params }) => fetch(`https://assignment-12-laptop-resale-server.vercel.app/categories/${params.id}`),
                element: <PrivateRoute> <Products></Products></PrivateRoute>

            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/myproducts/:email',
                loader: ({ params }) => fetch(`https://assignment-12-laptop-resale-server.vercel.app/addedproducts/${params.email}`),
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://assignment-12-laptop-resale-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default router;