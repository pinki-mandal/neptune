import './App.css';
import './style/general.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigation, Footer } from './components/index.js';
import { Home, AllProducts, Login, Signup, MyCart, ErrorPage, WishList } from "./pages/index.js";
import { RequireAuth } from './RequireAuth';

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mycart" element={
          <RequireAuth>
            <MyCart />
          </RequireAuth>
        }></Route>
        <Route path="/wishlist" element={
          <RequireAuth>
            <WishList />
          </RequireAuth>
        }></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
