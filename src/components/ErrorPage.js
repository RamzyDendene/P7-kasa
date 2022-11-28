import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/404.css";

function ErrorPage() {
  return (
    <div>
      <Header />
      <div className="errorPage">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}
export default ErrorPage;
