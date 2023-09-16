import Navbar from "./components/navbar/Navbar";
import SecondaryNavbar from "./components/secondaryNavbar/SecondaryNavabar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductPage from "./pages/productPage/ProductPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import ReturnRefund from "./pages/returnRefund/ReturnRefund";
import Services from "./pages/services/Services";
import SiteMap from "./pages/siteMap/SiteMap";
import TermsConditions from "./pages/termsConditions/TermsConditions";
import Footer from "./components/footer/Footer";

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import NoPage from "./pages/noPage/NoPage";
import BuyPage from "./pages/buyPage/BuyPage";
import Profile from "./pages/userPage/profile/Profile";
import Login from "./pages/userPage/login/Login";
import Register from "./pages/userPage/register/Register";
import ForGotPassword from "./pages/userPage/forgotPassword/ForGotPassword";
import Orders from "./pages/userPage/orders/Orders";
import WishList from "./pages/userPage/wishlist/WishList";
import Help from "./pages/help/Help";
import CustomerServices from "./pages/customerServices/CustomerServices";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <SecondaryNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "*",
        element: <NoPage />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/buy/:id",
        element: <BuyPage productId />
      },
      {
        path: "/buy/checkout",
        element: <BuyPage cart/>
      },
      {
        path: "/orders/:id",
        element: <Orders/>
      },
      {
        path: "/wishlist/:id",
        element: <WishList/>
      },
      {
        path: "/products/:category",
        element: <ProductsPage />
      },
      {
        path: "/product/:category/:id",
        element: <ProductPage />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/customer-service",
        element: <CustomerServices />
      },

      // footer links
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "/returnrefund",
        element: <ReturnRefund />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/sitemap",
        element: <SiteMap />
      },
      {
        path: "/termsconditions",
        element: <TermsConditions />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgotpassword",
    element: <ForGotPassword />
  },
  {
    path: "/profile/:userId",
    element: <Profile />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
