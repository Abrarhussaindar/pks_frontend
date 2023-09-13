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
        path: "/products/:category",
        element: <ProductsPage />
      },
      {
        path: "/product/:category/:id",
        element: <ProductPage />
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
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
