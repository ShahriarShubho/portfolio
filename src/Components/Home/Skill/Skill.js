import React, { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({duration : 2000});
  },[])
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
    <section id="skill" className="">
      <div data-aos="fade-up" className="py-5 container">
      <div className="text-center">
        <h3 className="text-warning">I am expert on</h3>
        <p>
          Basically I'm a MERN(MongoDB, ExpressJs, React, NodeJS) Developer. Because I love Javascript. It taste more well than Biriyani for me.
        </p>
      </div>
    <div className="row">
        {skillInfo.map(skill =>(
        <div class="col-md-6">
            <h3 className="mt-3">{skill.name}</h3>
        <ProgressBar variant={`${skill.color}`} now={skill.parentage}  label={`${skill.parentage}%`} />
        </div>))}
      </div>
      </div>
    </section>
  );
};

export default Skill;
