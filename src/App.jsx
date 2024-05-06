import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Navbar/Nav";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import NotFoundPage from "./pages/NotFoundPage";
import Whatsapp from "./components/Whatsapp";

import { Root } from "@radix-ui/react-dialog";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Root defaultOpen={true}>
      <div className="container mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title>DMS Home</title>
          <meta
            name="description"
            content="Boost your real estate business with experienced virtual assistants. Get qualified leads from data lists. Proven model for scaling brokerages. We help real estate investors, realtors, and brokerages close more deals"
          />
          <meta
            name="keywords"
            content="Real estate, Property listings, Homes for sale, Apartments for rent,Real estate agents,Property management,Commercial real estate,Residential properties,Investment properties,Real estate market,Home buying tips,Mortgage rates,Open houses,Rental properties,Real estate investments,Land for sale,Luxury homes,Foreclosure listings,,Real estate news"
          />

          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Nav />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <Whatsapp />
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
    </Root>
  );
}

export default App;
