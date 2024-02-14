import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Navbar/Nav";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { ToastContainer, toast } from "react-toastify";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Nav />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        position="bottom-right"
        theme="light"
      />
    </>
  );
}

export default App;
