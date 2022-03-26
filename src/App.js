import './App.css';
import { Routes, Route } from "react-router-dom";

import { Navigation, Footer } from './components/index.js';
import { Home, AllProducts, Login, Signup, MyCart, SingleProduct, WishList } from "./pages/index.js";

function App() {
  console.log("bb")
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AllProducts" element={<AllProducts />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/MyCart" element={<MyCart />}></Route>
        <Route path="/SingleProduct" element={<SingleProduct />}></Route>
        <Route path="/WishList" element={<WishList />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
