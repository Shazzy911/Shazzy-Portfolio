import { Person, Mail } from "@material-ui/icons";
import "./Topbar.scss";
const  Topbar=({menuOpen, setMenuOpen}) => {//// If MenuOpen True Add "active class"
  return (
    <div className={"topbar " + (menuOpen && "active")}> 
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Shazzy.</a>
          <div className="itemcontainer">
            <Person className="icon"/>
            <span>+92 302 8862387</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon"/>
            <span>Shazzy9119@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
