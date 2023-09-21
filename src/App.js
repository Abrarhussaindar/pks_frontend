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
  BrowserRouter,
  Route,
  Routes,

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
import Dashboard from "./pages/dashboard/Dashboard";

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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="*" element={<NoPage/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/buy/:id" element={<BuyPage productId/>}/>
            <Route exact path="/buy/checkout" element={<BuyPage cart/>}/>
            <Route exact path="/orders/:id" element={<Orders/>}/>
            <Route exact path="/wishlist/:id" element={<WishList/>}/>
            <Route exact path="/products/:category" element={<ProductsPage/>}/>
            <Route exact path="/product/:category/:id" element={<ProductPage/>}/>
            <Route exact path="/help" element={<Help/>}/>
            <Route exact path="/customer-service" element={<CustomerServices/>}/>

            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="/contactus" element={<ContactUs/>}/>
            <Route exact path="/disclaimer" element={<Disclaimer/>}/>
            <Route exact path="/privacypolicy" element={<PrivacyPolicy/>}/>
            <Route exact path="/returnrefund" element={<ReturnRefund/>}/>
            <Route exact path="/services" element={<Services/>}/>
            <Route exact path="/sitemap" element={<SiteMap/>}/>
            <Route exact path="/termsconditions" element={<TermsConditions/>}/>
          </Route>
          <Route path="/admin" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgotpassword" element={<ForGotPassword/>}/>
          <Route path="/profile/:userId" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
