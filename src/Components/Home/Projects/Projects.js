import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import CaptureMovements from '../../../images/Capture.PNG'
import HappyElectro from '../../../images/HappyElectro.PNG'
import DentistCare from '../../../images/dentist.PNG'
import Riders from '../../../images/safer-stress-rider.PNG'
import Sports from '../../../images/prome-sports.PNG'
import LegendTeam from '../../../images/leagent-team.PNG'
import covid from '../../../images/covid.PNG'
import tech from '../../../images/tech.PNG'
import blog from '../../../images/blog.PNG'

const Projects = () => {
    const projectData = [
        {
            title : "Capture Movements",
            description : "It is a photography services website. Users and Admin can log in to this website using google.Here are different dashboards for User and Admin. Users can place orders, see his order, give a review of a service. Admin can see all orders of the users. They can add a new service and make a new admin by providing the new admins email.",
            technology : "React, React-Router, HTML5, CSS3, Bootstrap, Font Awesome NodeJS, Express JS, MongoDB",
            image : CaptureMovements,
            liveSite : "https://capture-moments-3a53d.web.app/",
            clint : "https://github.com/ShahriarShubho/capture-movements",
            server : "https://github.com/ShahriarShubho/capture-movements-server"
        },
        {
            title : "Dentist Care",
            description : "It is a doctors chamber website. Patients get appointments by the date. Patient show all the service and booking a appointment. Patients and doctor can log in to this website using google or email password.Here are different dashboards for patient and doctor. doctor can see all appointments of the date booked by patient. he/she can show all patient and add a doctor.",
            technology : "React, React-Router, HTML5, CSS3, Bootstrap, Font Awesome NodeJS, ExpressJS, MongoDB",
            image : DentistCare,
            liveSite : "https://dentist-care.netlify.app/",
            clint : "https://github.com/ShahriarShubho/dentist-care-client",
            server : "https://github.com/ShahriarShubho/dentist-care-client-server"
        },
        {
            title : "HappyElectro",
            description : "It is an electric product selling website. Which serves electric product user can buy product and see only his order. This website some pages are private so for access user and admin sing up with google and log in. Admin see all the order given by user, admin can delete any product and add any product",
            technology : "React, React-Router, React-Hooks, HTML5, CSS3, Bootstrap, Bootstrap-Icon, NodeJS, Express JS, MongoDB",
            image : HappyElectro,
            liveSite : "https://happy-electro.web.app/",
            clint : "https://github.com/ShahriarShubho/happy-electro-cline-site-project",
            server : "https://github.com/ShahriarShubho/happy-electro-server"
        },
        {
            title : "Rectro Blog",
            description : "It is a Blog site the more informantion given belowe. User Can show all the blog in home page. They can read the blog by click read more button. Admin can add new blog and also delete the blog. Admin is private route which is athuntication by firebase.",
            technology : "React, React-Router, CSS3, Bootstrap, Firebase, Imgbb, NodeJS, Express JS, MongoDB",
            image : blog,
            liveSite : "https://rectro-blog.netlify.app/",
            clint: "https://github.com/ShahriarShubho/blog-projects",
            server: 'https://github.com/ShahriarShubho/blog-project-server'
        },
        {
            title : "Safer Streets Rider",
            description : "It is a ride sharing website where you can search for places to visit and can see the description of the spectacular places. Users can booking the place and fill up a form containing his booking information. After clicking start booking, he/she can see his/her booking along with a google map For confirmation booking user sing up email or google",
            technology : "React, React-Hooks, HTML5, CSS3, Bootstrap, Font Awesome, Firebase",
            image : Riders,
            liveSite : "https://safer-streets-rider.netlify.app/",
            clint: "https://github.com/ShahriarShubho/safer-streets-riders"
        },
        {
            title : "Covid-19 Checker",
            description : "It is a covid19-checker website. which is check the covid 19 status update dynamically. First update the global status with a chart. Than user Can search and show the specific country update of covid-19 status specific country has the new chart which is update dynamically",
            technology : "HTML5, CSS-Module, React, React-Chart, Metrical-UI, Axios",
            image : covid,
            liveSite : "https://covid19-checker.netlify.app/",
            clint : "https://github.com/ShahriarShubho/covid19-checker"
        },
        {
            title : "Redux Tech Store",
            description : "Tech Store BD is a E-commerce website that state maintaining by Redux and React. In this project User Show All product in home page. they can see a specific product Details and price. they can order it. Users can select the item and it saved on cart. they also remove the product from cart",
            technology : "HTML5, CSS Module, Bootstrap, ReactJs, React-Router, Redux",
            image : tech,
            liveSite : "https://wizardly-darwin-af6349.netlify.app/",
            clint : "https://github.com/ShahriarShubho/tech-store-project-with-redux"
        },
        {
            title : "Primer Sports",
            description : "Prime sports team is team checker website. In this website you can show more team in primer league. and you can show details of this them dynamically. And You can connect the the official facebook, tweeter and youtube",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap",
            image : Sports,
            liveSite : "https://premier-sports-team.netlify.app/",
            clint : "https://github.com/ShahriarShubho/primer-sports-team"
        },
        {
            title : "Legend Team selection",
            description : "Legend team selection is team selection website. In this website first show player list and their name, budget and district. user can show details of this them dynamically. user can add a player of team show player budget and finally after selection user can show all the budget of a this team",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap",
            image : LegendTeam,
            liveSite : "https://legend-team-selection.netlify.app/",
            clint : "https://github.com/ShahriarShubho/legend-team-selection"
        },
    ];
    return (
        <section id="projects" className="pt-5">
        <div className="container-fluid">
            <h1 className="text-center mb-5">My projects</h1>
            <div className="row">
            {
                projectData.map(project => <ProjectCard projects={project}></ProjectCard>)
            }
            </div>
        </div>
        </section>
    );
};

export default Projects;