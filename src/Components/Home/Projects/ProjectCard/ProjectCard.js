import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({projects}) => {
    const {title, image, description, technology} = projects
    console.log(projects)
    return (
        <div className="col-md-6 text-dark mb-5">
            <Card>
    <Card.Img className="img-fluid rounded" variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <strong>{technology}</strong>
    </Card.Body>
    <Card.Footer className="text-center">
    <Card.Link href="#">Live site</Card.Link>
    <Card.Link href="#">GitHub(Clint)</Card.Link>
    <Card.Link href="#">GitHub(Server)</Card.Link>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default ProjectCard;