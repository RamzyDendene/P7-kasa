import "./App.css";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Apropos from "./components/Apropos";
import PageProduit from "./components/PageProduit";
import ErrorPage from "./components/ErrorPage";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Shrikhand&display=swap');
</style>;
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/:id" element={<PageProduit />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Link to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
