import React from "react";
import "./skills.css";
import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState({ "html": "4.0", "Css": 4.5,"JavaScript":3.5, "React": 3 });

  return (
    <div>
      <h2>My Skills</h2>
      <div className="skills">
  

      {Object.entries(skills).map(([key, value]) => {
            // {value = isNum(value)}
        return (
          <div>
            <h5>{key.toUpperCase()}</h5>
            <meter min={0} max={5} value={value}></meter><span>{" "+(value*20) + "%"}</span>

          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Skills;
