import React from "react";
import { Card } from "react-bootstrap";

const BlogsCard = ({ blog }) => {
  const { title, description, img, link} = blog;
  
  return (
    <div className="col-md-6 col-lg-4 text-dark">
    <a href={link} className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer">
      <Card className="mb-4">
        <Card.Img style={{ height: "280px"}}className="img-fluid" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      </a>
    </div>
  );
};

export default BlogsCard;
