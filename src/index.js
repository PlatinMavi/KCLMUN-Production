import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Index from "./pages/index";
import About from "./pages/about";
// YENİ SAYFA EKLİCEKSEN BÖYLE İMPORT EDECEN PAGESİN İÇİNDEKİ JSX DOSYASINI (İÇİNDEKİ FONKSİYON İSMİYLE AYNI OLMASI LAZIM)
import NoPage from "./pages/nopage";
import Conferance from "./pages/conferance";
import Faq from "./pages/faq";
import Committes from "./pages/committes";
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/conferance" element={<Conferance />} />
          <Route path="/committes" element={<Committes />} />
          {/* BAK BÖYLEDE SİTEYE EKLİYON. PATH URLDEKİ UZANTI ELEMENTTE O SAYFA */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
