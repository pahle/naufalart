import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/naufalart/" element={<Home />} />
          <Route path="/naufalart/product" element={<Product />} />
        </Routes>  
      </BrowserRouter>          
    </>
  );
};

export default App;
