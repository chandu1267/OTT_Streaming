import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import herobanner from "../../assets/hero_banner.jpg";
import herotitle from "../../assets/hero_title.png";
import play_btn from "../../assets/play_icon.png"
import info_btn from "../../assets/info_icon.png"
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={herobanner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={herotitle} alt="" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro quis obcaecati incidunt enim mollitia expedita odit, accusantium consequatur.
          </p>
          <div className="hero-btns">
            <a href="https://www.youtube.com/watch?v=80dqOwAOhbo" className="btn"><img src={play_btn} alt="" />Play</a>
            <button className='btn dark-btn'><img src={info_btn} alt="" />More info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"BlockBuster Movies"} category={"top_rated"}/>
      <Titlecards title={"Only on Netflixe"} category={"popular"}/>
      <Titlecards title={"Top Pick for You"} category={"upcoming"}/>
      <Titlecards title={"Upcoming"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
