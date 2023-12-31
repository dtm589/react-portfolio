import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer';
import pic from '../image/derek.jpg'

const styles = {
    headingOne: {
        backgroundColor: '#1695a7',
    },
    headingTwo: {
        borderBottom: '5px solid black',
        color: '#1695a7',
    },
    marginBottom: {
        marginBottom: '7.0rem'
    },
};

export default function AboutMe() {
    return (
        <main>
            <Container fluid>
                <Row>
                    <Col>
                        <Container className='text-center' id="intro" alt="Picture of Derek Marchese">
                            <Image style={{ height: '800px', width: '823px'}} className='image' src={pic} rounded />
                            <div style={{ maxWidth: '100%'}} class="container-head">
                                <h1>Let's <span style={styles.headingOne}>develop content</span><br></br> that <span
                                    style={styles.headingTwo}>makes an impact.</span></h1>
                            </div>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section id="about-me">
                            <h3>ABOUT ME</h3>
                            <div>
                                <blockquote>
                                    <h2>Dedicated, ambitious, problem solver that utilizes critical thinking to create apps and websites
                                        from ideation to deployment.</h2>
                                </blockquote>
                                <p>
                                    I have always had a passion for creating meaningful experiences for people. That is what led me to
                                    become a chef at young age. I have spent the last 12 years working as a chef, and honing my skills
                                    to create unforgettable dining experiences.
                                </p>
                                <p>
                                    However, as much as I enjoyed cooking, I felt a pull towards the world of web development and
                                    software development. I have always been fascinated by technology and the way it can transform our
                                    lives, and I wanted to be a part of that transformation. So, I decided to make a career change and
                                    pursue my passion for web development.
                                </p>
                                <p style={styles.marginBottom}>
                                    As a web Developer, I enjoy using my obsessive attention to details, my passion for making things,
                                    and my goal oriented work ethic to literally impact the world.
                                </p>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
            <div>
                <Footer />
            </div>
        </main>
    )
}