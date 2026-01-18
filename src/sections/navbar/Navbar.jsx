import Logo from "../../assets/SRKlogo.png.avif";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModelContext } from "../../context/model-context";
import "./navbar.css";

const Navbar = () => {
  const { showModelHandler } = useModelContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModelHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
