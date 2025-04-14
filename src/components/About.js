import React from "react";
import Links from "./Links";

function About(prop) {
  let bioParagraph;

  if (prop.bio && prop.bio.trim() !== "") {
    bioParagraph = <p>{prop.bio}</p>;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioParagraph}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={prop.github} linkedin={prop.linkedin}/>
    </div>
  );
}


export default About;
