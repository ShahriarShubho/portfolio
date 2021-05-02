import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({projects}) => {
    const {title, image, description, technology, liveSite, clint, server} = projects
    console.log(projects)
    return (
        <div className="col-md-6 text-dark mb-5">
            <Card>
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
  </Card>
        </div>
    );
};

export default ProjectCard;