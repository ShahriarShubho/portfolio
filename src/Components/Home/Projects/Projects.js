import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import CaptureMovements from '../../../images/Capture.PNG'
import HappyElectro from '../../../images/HappyElectro.PNG'
import Riders from '../../../images/safer-stress-rider.PNG'
import Sports from '../../../images/prome-sports.PNG'

const Projects = () => {
    const projectData = [
        {
            title : "Capture Movements",
            description : "It is a photography services website. Users and Admin can sign up and log in to this website using google.Here are different dashboards for User and Admin No one can access some page without log in. Users can place orders, see his order list, and give a review of a service Admin can see all orders of the users. They can add a new service and make a new admin by providing the new admins email.",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap. Font Awesome NodeJS, Express JS, MongoDB",
            image : CaptureMovements,
            liveSite : "https://capture-moments-3a53d.web.app/",
            clint : "https://github.com/ShahriarShubho/capture-movements",
            server : "https://github.com/ShahriarShubho/capture-movements-server"
        },
        {
            title : "HappyElectro",
            description : "It is an electric product selling website. Which serves electric product user can buy product and see only his order. This website some pages are private so for access user and admin sing up with google and log in. Admin see all the order given by user, admin can delete any product and add any product",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap. Bootstrap-Icon, NodeJS, Express JS, MongoDB",
            image : HappyElectro,
            liveSite : "https://happy-electro.web.app/",
            clint : "https://github.com/ShahriarShubho/happy-electro-cline-site-project",
            server : "https://github.com/ShahriarShubho/happy-electro-server"
        },
        {
            title : "Safer Streets Rider",
            description : "It is a ride sharing website where you can search for places to visit and can see the description of the spectacular places. Users can read the description of the places and click Booking to make a booking for that place and fill up a form containing his booking information. After clicking start booking, he/she can see his/her booking along with a google map For confirmation booking user sing up email or google",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap Font Awesome, Firebase",
            image : Riders,
            liveSite : "https://safer-streets-rider.netlify.app/",
            clint: "https://github.com/ShahriarShubho/safer-streets-riders"
        },
        {
            title : "Primer Sports",
            description : "Prime sports team is is team checker website. In this website you can show more team in primer league. and you can show details of this them dynamically. And You can coonnect the the official facebook, tweeter and youtube",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap",
            image : Sports,
            liveSite : "https://premier-sports-team.netlify.app/",
            clint : "https://github.com/ShahriarShubho/primer-sports-team"
        },
        {
            title : "Primer Sports",
            description : "Prime sports team is is team checker website. In this website you can show more team in primer league. and you can show details of this them dynamically. And You can coonnect the the official facebook, tweeter and youtube",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap",
            image : Sports,
            liveSite : "https://premier-sports-team.netlify.app/",
            clint : "https://github.com/ShahriarShubho/primer-sports-team"
        },
        {
            title : "Primer Sports",
            description : "Prime sports team is is team checker website. In this website you can show more team in primer league. and you can show details of this them dynamically. And You can coonnect the the official facebook, tweeter and youtube",
            technology : "HTML5, CSS3, Bootstrap, React, Bootstrap",
            image : Sports,
            liveSite : "https://premier-sports-team.netlify.app/",
            clint : "https://github.com/ShahriarShubho/primer-sports-team"
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