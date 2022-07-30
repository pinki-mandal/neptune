import './App.css';
import './style/general.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigation, Footer } from './components/index.js';
import { Home, AllProducts, Login, Logout, Signup, MyCart, ErrorPage, WishList, Checkout, OrderSummary } from "./pages/index.js";
import { RequireAuth } from './RequireAuth';
import { Address } from './components/Address/Address';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
      />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all-products" element={<AllProducts />}></Route>
        <Route path="add" element={<Address />}></Route>

        <Route element={< RequireAuth />}>
          <Route path="/mycart" element={<MyCart />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/ordersummary" element={<OrderSummary />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
