import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogsCard = ({ blog }) => {
  const { title, description, img, link} = blog;
  useEffect(() => {
    AOS.init({duration : 2000});
  },[])
  
  return (
    <div className="col-md-6 col-lg-4 text-dark" data-aos="flip-left">
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
