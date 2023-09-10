import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer';
import PorfolioContainer from '../PorfolioContainer';

export default function Project(props) {
    const { projects } = props;

    return (
        <main>
            <Container>
                {projects.map(item => (
                    <Card key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Link href={item.github}>GitHub</Card.Link>
                            <Card.Link href={item.deployed}>Deployed</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
            <div>
                <Footer />
            </div>
        </main>
    )
}