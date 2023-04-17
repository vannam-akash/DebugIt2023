import React from "react";
import myImage from "../assets/bg.jpg";

function Home() {
  return <div className="continer text-center mt-5">
    <h1 className="text-decoration-underline">Lost And Found Management For IIT BHU</h1>
    <div className="mt-5"><img src={myImage} alt="bg" /></div>
  </div>;
}

export default Home;
