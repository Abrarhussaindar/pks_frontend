import Home from "./pages/home/Home";
// import CategoryPage from "./pages/categoryPage/CategoryPage";
// import ProductPage from "./pages/productPage/ProductPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/category/:name" element={<CategoryPage />} /> */}
          {/* <Route exact path="/category/:name/:productname" element={<ProductPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
