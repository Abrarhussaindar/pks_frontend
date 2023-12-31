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

import DashboardNavbar from "./components/dashboardComponents/dashboardNavbar/DashboardNavbar";
import DashboardLeftSideBar from "./components/dashboardComponents/dashboardLeftSideBar/DashboardLeftSideBar";

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

import CFOrders from "./pages/clientFacing/orders/CFOrders";
import CFProducts from "./pages/clientFacing/products/CFProducts";
import Customers from "./pages/clientFacing/customers/Customers";
import Transactions from "./pages/clientFacing/transactions/Transactions";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Overview from "./pages/sales/overview/Overview";
import Daily from "./pages/sales/daily/Daily";
import Monthly from "./pages/sales/monthly/Monthly";
import Breakdown from "./pages/sales/breakdown/Breakdown";

import Admin from "./pages/manager/admin/Admin";
import Performance from "./pages/manager/performance/Performance";
import Geography from "./pages/clientFacing/geography/Geography";

const MainLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <SecondaryNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <div className="leftContainer">
        <DashboardLeftSideBar />

      </div>
      <div className="rightContainer">
        <DashboardNavbar />
        <hr />
        <Outlet />
      </div>
    </div>
  );
}

  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANX301oVZFiBgJpNnuHzRcQPeXiiAOGno",
    authDomain: "pkstore-e13f1.firebaseapp.com",
    projectId: "pkstore-e13f1",
    storageBucket: "pkstore-e13f1.appspot.com",
    messagingSenderId: "162272021422",
    appId: "1:162272021422:web:24aec4ed493f24edc6963f",
    measurementId: "G-RKTSJHBY0K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route exact path="/admin" element={<Dashboard />} />
            
            <Route exact path="/dashboard" element={<Dashboard />} />
            
            <Route exact path="/cforders" element={<CFOrders />} />
            <Route exact path="/cfproducts" element={<CFProducts />} />
            <Route exact path="/customers" element={<Customers />} />
            <Route exact path="/transactions" element={<Transactions />} />
            <Route exact path="/geography" element={<Geography />} />

            <Route exact path="/sales-overview" element={<Overview />} />
            <Route exact path="/daily-sales" element={<Daily />} />
            <Route exact path="/monthly-sales" element={<Monthly />} />
            <Route exact path="/sales-breakdown" element={<Breakdown />} />

            <Route exact path="/admin-page" element={<Admin />} />
            <Route exact path="/performance" element={<Performance />} />

          </Route>
          <Route element={<MainLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<NoPage />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/buy/:id" element={<BuyPage />} />
            <Route exact path="/buy/checkout" element={<BuyPage cart />} />
            <Route exact path="/orders/:id" element={<Orders />} />
            <Route exact path="/wishlist/:id" element={<WishList />} />
            <Route exact path="/products/:category" element={<ProductsPage />} />
            <Route exact path="/products/:category/:subcategory/:id" element={<ProductPage />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/customer-service" element={<CustomerServices />} />

            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/disclaimer" element={<Disclaimer />} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route exact path="/returnrefund" element={<ReturnRefund />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/sitemap" element={<SiteMap />} />
            <Route exact path="/termsconditions" element={<TermsConditions />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForGotPassword />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
