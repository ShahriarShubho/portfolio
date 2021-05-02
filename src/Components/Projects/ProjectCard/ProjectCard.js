import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({projects}) => {
    const {title, image, description} = projects
    console.log(projects)
    return (
        <div className="col-md-4 text-dark mb-5">
            <Card>
    <Card.Img className="img-fluid rounded" variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
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