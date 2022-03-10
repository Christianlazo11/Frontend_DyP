import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Categories from "./components/categories/Categories";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Categories />
      <About />
      <Footer />
    </div>
  );
}

export default App;
