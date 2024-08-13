import home from "../assets/homePagesvg.svg";
const HomePage = () => {
  return (
    <div style={{ display: "flex", color: "white", flexDirection: "row" }}>
      <div style={{ width: "50vw", marginTop: "100px", paddingLeft: "8.3vw" }}>
        <div style={{ fontSize: "40px" }}>Hello</div>
        <div style={{ fontSize: "128px" }}>I'm</div>
        <div style={{ fontSize: "128px" }}>Rahul</div>
        <div style={{ fontSize: "128px" }}>Nagubandi</div>
        <div style={{ color: "#10E4EB", fontSize: "32px" }}>
          Software Engineer & Web Developer
        </div>
      </div>
      <div className="homePageImage">
        <img src={home} alt="My Happy SVG" style={{ height: "80vh" }} />
      </div>
    </div>
  );
};

export default HomePage;
