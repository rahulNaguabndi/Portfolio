import { useState } from "react";

const ExperienceTimeline = [
  {
    id: 1,
    from: "Nov 2023",
    to: "Present",
    company: "Keyloop",
    role: "Senior Software Engineer",
    description: [
      "Designed Customer facing applications using react and .NET (Full stack)",
      "Responsible for enhancing code templates",
      "Lead and created Training to onboard new joiners to applications and technologies",
      "Developed visibility Tracker tools for tracking engagements across verticals",
    ],
  },
  {
    id: 2,
    from: "Mar 2021",
    to: "Nov 2023",
    company: "Providence Global Center",
    role: "Senior Software Engineer",
    description: [
      "Designed Customer facing applications using react and .NET (Full stack)",
      "Responsible for enhancing code templates",
      "Lead and created Training to onboard new joiners to applications and technologies",
      "Developed visibility Tracker tools for tracking engagements across verticals",
    ],
  },
  {
    id: 3,
    from: "Jan 2019",
    to: "Mar 2021",
    company: "Keyloop",
    role: "Senior Software Engineer",
    description: [
      "Designed Customer facing applications using react and .NET (Full stack)",
      "Responsible for enhancing code templates",
      "Lead and created Training to onboard new joiners to applications and technologies",
      "Developed visibility Tracker tools for tracking engagements across verticals",
    ],
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(1);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "50vw" }}>
        <div
          style={{
            color: "white",
            fontSize: "96px",
            textAlign: "center",
            marginTop: "30vh",
          }}
        >
          Experience
        </div>
      </div>
      <div style={{ width: "50vw", color: "white", marginTop: "20vh" }}>
        <div style={{ width: "80%" }}>
          {ExperienceTimeline.map((experience) => {
            return (
              <div
                key={experience.id}
                onClick={() => {
                  setSelectedExperience(experience.id);
                }}
              >
                <div>
                  <div>
                    {experience.from} - {experience.to}
                  </div>
                  <div
                    style={{
                      borderLeft: "1px solid white",
                      marginLeft: "60px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ paddingLeft: "20px" }}>
                      {experience.role} @ {experience.company}
                    </div>
                    {selectedExperience === experience.id ? (
                      <div>
                        <ul>
                          {experience.description.map((desc, index) => {
                            return <li key={index}>{desc}</li>;
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
