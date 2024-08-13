import homeIcon from "../assets/home-svgrepo-com.svg";
import aboutIcon from "../assets/about-svgrepo-com.svg";
import workIcon from "../assets/work-svgrepo-com.svg";
import contactIcon from "../assets/waving-hand-svgrepo-com.svg";
import gitIcon from "../assets/git-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="header">
      <button
        className="headerIcon"
        onClick={() => {
          console.log("Hello World");
        }}
      >
        <img src={homeIcon} alt="My Happy SVG" />
      </button>
      <button className="headerIcon">
        <img src={aboutIcon} alt="My Happy SVG" />
      </button>
      <button className="headerIcon">
        <img src={workIcon} alt="My Happy SVG" />
      </button>
      <button className="headerIcon">
        <img src={contactIcon} alt="My Happy SVG" />
      </button>
      <button className="headerIcon">
        <img src={gitIcon} alt="My Happy SVG" />
      </button>
    </div>
  );
};

export default Header;
