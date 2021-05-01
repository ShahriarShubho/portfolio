import React from "react";
import { ProgressBar } from "react-bootstrap";

const Skill = () => {
    const skillInfo = [
        { name: "HTML",parentage: 90, color : "primary" },
        { name: "CSS",parentage: 80, color : "success" },
        { name: "JavaScript",parentage: 70, color : "warning" },
        { name: "React",parentage: 75, color : "primary" },
        { name: "NodeJS",parentage: 50, color : "danger" },
        { name: "MongoDB",parentage: 60, color : "success" },
        { name: "Bootstrap",parentage: 80, color : "info" },
        { name: "expressJS",parentage: 65, color : "primary" },
    ]
  return (
    <section className="py-5 container">
      <div className="text-center">
        <h3>I am expert on</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          nihil.
        </p>
      </div>
    <div className="row">
        {skillInfo.map(skill =>(
        <div class="col-md-6">
            <h3 className="mt-3">{skill.name}</h3>
        <ProgressBar variant={`${skill.color}`} now={skill.parentage}  label={`${skill.parentage}%`} />
        </div>))}
      </div>
    </section>
  );
};

export default Skill;
