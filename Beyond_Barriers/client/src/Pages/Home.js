import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
import Services from "../Components/Home/Services";
import Masthead from "../Components/Home/Masthead";
import CardSection from "../Components/Home/CardSection.js"

function Home() {
  return (
    <div>

      <Masthead />
      
      <Services />

      <CardSection />
      
    </div>
  );
}

export default Home;
