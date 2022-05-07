import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import ShoppingCar from "./pages/ShoppingCar";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { CartState } from "./context/Context";
import { getDataProducts } from "./services/getProducts";
import { useEffect } from "react";
function App() {
  const { dispatch } = CartState();

  useEffect(() => {
    const getData = async () => {
      let newData = await getDataProducts();
      dispatch({
        type: "SET_DATA",
        payload: newData,
      });
    };
    getData();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping-car" element={<ShoppingCar />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
