import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'

const ProjectCard = ({projects}) => {
    const {title, image, description, technology, liveSite, clint, server} = projects
    console.log(projects)
    return (
        <div className="col-md-4 text-dark mb-5">
          <h3 className="text-center text-white">{title}</h3>  
          <div className="boxes">
          <img className="img-fluid h-100" src={image} alt={title}/>
          <div className="project-container">
            <h5 className="text-center">{title}</h5>
            <p>{description}</p>
            <strong>Technology : {technology}</strong>
              <div className="d-flex justify-content-around">
              <a href={liveSite} target="_blank">Live Site</a>
              <a href={clint} target="_blank">Github</a>
              </div>
          </div>
          </div>  
        </div>
    );
};

export default ProjectCard;



/* <Card>
<Card.Img className="img-fluid rounded" variant="top" src={image} alt={`${title}`}/>
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>{description}</Card.Text>
  <strong>{technology}</strong>
</Card.Body>
<Card.Footer className="text-center">
<Card.Link target="_blank" href={liveSite}>Live site</Card.Link>
<Card.Link target="_blank" href={clint}>GitHub(Clint)</Card.Link>
<Card.Link target="_blank" href={server}>GitHub(Server)</Card.Link>
</Card.Footer>
</Card> */