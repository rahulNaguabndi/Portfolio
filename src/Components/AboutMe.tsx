// import aboutmeVector from "../assets/aboutme-vector.svg";
import RahulImage from "../assets/Rahul Image.jpg";
const AboutMe = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "60vw" }}>
        <img className="aboutMeImg" src={RahulImage} alt="my image" />
      </div>
      <div
        style={{
          width: "30vw",
          color: "white",
          marginTop: "10vh",
        }}
      >
        <div style={{ fontSize: "96px" }}>About Me</div>
        <div style={{ fontSize: "18px", marginTop: "30px" }}>
          Hello, I'm Rahul Nagubandi, a Full Stack Developer with over 6 years
          of experience in healthcare and automobile industries.
        </div>
        <div style={{ fontSize: "18px", marginTop: "30px" }}>
          I specialize in React.js, .NET, Node.js, and Python. My user-centric
          approach ensuresimpactful web and SaaS applications.
        </div>
        <div style={{ fontSize: "18px", marginTop: "30px" }}>
          As a lifelong learner, I thrive on solving meaningful problems and
          engage closely with end users to deliver better products.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
