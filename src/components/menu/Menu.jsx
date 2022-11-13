import Links from "../links/Links";
import { linkData } from "../Json/data";
import "./Menu.scss";

const  Menu = ({ menuOpen, setMenuOpen }) => {//// If Menu True Add "active class"

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {linkData.map((input) => (
          <Links key={input.id} {...input} setMenuOpen={setMenuOpen} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
