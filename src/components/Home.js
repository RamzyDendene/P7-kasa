import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Thumb from "./Thumb";
import Banner from "./Banner";
import { annList } from "../datas/annoncesList";
import HomeBannerImage from "../assets/image_banniere_home.jpg";

function Home() {
  return (
    <div>
      <Header />
      <Banner imgsrc={HomeBannerImage} />
      <div className="thumbs">
        {annList.map(({ id, cover, title }) => (
          <Thumb key={id} id={id} cover={cover} title={title} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Home;
