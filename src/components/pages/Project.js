import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../Footer';

const styles = {
    marginBottom: {
        marginBottom: '7.0rem',
    },
    marginTop: {
        marginTop: '4.0rem',
    },
};

export default function Project(props) {
    const { projects } = props;

    return (
        <main>
            <Container style={styles.marginTop}>
                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                    {projects.map(item => (
                        <Col style={styles.marginBottom}>
                            <Card className='h-100' border='info' key={item.id} style={{ width: '25rem' }} >
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link target='_blank' href={item.github}>GitHub</Card.Link>
                                    {item.hasDeploy ? (
                                        <Card.Link target='_blank' href={item.deployed}>Deployed</Card.Link>
                                    ) : ('')}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div>
                <Footer />
            </div>
        </main>
    )
}