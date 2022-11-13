import "./Intro.scss";
import { GitHub, LinkedIn,  Twitter, Email } from "@material-ui/icons";
import {init} from "ityped"
import { useEffect, useRef } from "react";

const  Intro =()=> {

  const textRef = useRef() //work like a Query Selector 
 
  useEffect(()=>{


    console.log("Component is rendering", textRef)
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      
      showCursor: true,
      
      strings: ["React Js", "Node Js", "MongoDB", "TypeScript", "MERN", 'Express Js', "Scss", "Bootstrap"],
    })
  },[])
  return (
    
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/moon.webp" alt="Not found" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shahzaib Saleem</h1>
          <h3>Full Stack Developer <span  ref={textRef}></span></h3>
          <span className="details">
            <a href="https://github.com/Shazzy911"><span><GitHub/></span></a>
            <a href="https://www.linkedin.com/in/shahzaib-saleem-shazzy911/"><span><LinkedIn/></span></a>
            <a href="https://twitter.com/Shazzy9119"><span><Twitter/></span></a>
            <a href="mailto:Shazzy9119@gmail.com"><span><Email/></span></a>

          </span>
        </div>
        <div className="arrowdown">

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
        </div>
      </div>

    </div>
    

  )
}

export default Intro