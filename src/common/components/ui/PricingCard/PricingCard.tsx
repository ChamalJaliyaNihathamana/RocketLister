import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

interface PricingCardProps {
  data: {
    heading: string;
    subheading: string;
    price: number;
    saving: number;
    features: string[];
    button: any;
  }[];
}

const PricingCard: React.FunctionComponent<PricingCardProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Col key={index}>
            <Card className="text-center">
              <Card.Header>{item.heading}</Card.Header>
              <Card.Body>
                <Card.Title>{item.subheading}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Card.Text>save ${item.saving}</Card.Text>
              </Card.Body>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  {item.features.map((feature, index) => {
                    return <ListGroupItem key={index}>{feature}</ListGroupItem>;
                  })}
                </ListGroup>
              </Card.Body>
              <Card.Body>{item.button}</Card.Body>
              {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default PricingCard;
