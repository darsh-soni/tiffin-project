import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import React from 'react';

function Plan() {
  return (
    <Container>
    <Card>
      <Card.Body>
        <Card.Title>Daily Plan</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis repellendus nostrum! Earum tempora quas sunt saepe quasi ad enim, blanditiis inventore debitis nisi rem cum consectetur assumenda quia. Dolorem.
        </Card.Text>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20dp' }}>
      <Card.Body>
        <Card.Title>Weekly Plan</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quas at, cumque eligendi labore magni maiores nobis debitis doloribus dignissimos adipisci perspiciatis nam dolore nihil. Architecto voluptas itaque est minima?
        </Card.Text>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20dp' }}>
      <Card.Body>
        <Card.Title>Monthly Plan</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam perspiciatis mollitia. Molestiae necessitatibus minima aspernatur, ipsum eum, doloribus commodi deserunt omnis facere accusantium incidunt repellat libero vitae. Asperiores, vero.
        </Card.Text>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default Plan;