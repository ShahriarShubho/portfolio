import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import CaptureMovements from '../../images/Capture.PNG'
import HappyElectro from '../../images/HappyElectro.PNG'
import Riders from '../../images/safer-stress-rider.PNG'
import Sports from '../../images/prome-sports.PNG'

const Projects = () => {
    const projectData = [
        {
            title : "Capture Movements",
            description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem.",
            image : CaptureMovements
        },
        {
            title : "HappyElectro",
            description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem.",
            image : HappyElectro
        },
        {
            title : "Safer Streets Rider",
            description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem.",
            image : Riders
        },
        {
            title : "Primer Sports",
            description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem.",
            image : Sports
        }
    ];
    return (
        <div className="container-fluid bg-dark">
            <h1 className="text-center my-5">My projects</h1>
            <div className="row">
            {
                projectData.map(project => <ProjectCard projects={project}></ProjectCard>)
            }
            </div>
        </div>
    );
};

export default Projects;