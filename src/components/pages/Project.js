import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer';

const projects = [
    {
        id: 1,
        title: 'ClikdOn',
        github: 'https://github.com/dtm589/professional-social-media',
        deployed: '',
        image: 'https://github.com/dtm589/professional-social-media/blob/main/assets/Greenshot%202023-08-03%2019.24.06.png?raw=true',
        description: 'A locational based professional social media site. Group project that I focused on the database with MySQL and Sequelize. Also worked on the API with express.',
    },
    {
        id: 2,
        title: 'My Blog Site',
        github: 'https://github.com/dtm589/blog-site/tree/main',
        deployed: '',
        image: 'https://github.com/dtm589/blog-site/blob/main/assets/screenshot.png?raw=true',
        description: 'A blog site where you can post and comment. Follows MVC and uses technology such as handlebars, node, MySQL, and Sequelize.',
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        github: 'https://github.com/dtm589/weather-dashboard',
        deployed: 'https://dtm589.github.io/weather-dashboard/',
        image: 'https://github.com/dtm589/weather-dashboard/raw/main/assets/images/Capture.PNG',
        description: 'Search weather by city using HTML, CSS, JavaScript, jQuery, and local memeory.',
    },
    {
        id: 4,
        title: 'Daily Planner',
        github: 'https://github.com/dtm589/daily-planner',
        deployed: 'https://dtm589.github.io/daily-planner/',
        image: 'https://github.com/dtm589/daily-planner/raw/main/assets/images/dailyplanner.PNG',
        description: 'A work day planner that utilizes Day.js and jQuery.',
    },
    {
        id: 5,
        title: 'Social Netwerk API',
        github: 'https://github.com/dtm589/social-network-api',
        deployed: '',
        image: 'https://github.com/dtm589/social-network-api/raw/main/assets/Capture.jpg',
        description: 'The back end of a social network that implements CRUD using Node, Express, MongoDB, and Mongoose.',
    },
    {
        id: 6,
        title: 'Employee Database',
        github: 'https://github.com/dtm589/Employee-Tracker',
        deployed: '',
        image: 'https://github.com/dtm589/Employee-Tracker/raw/main/assets/Capture.PNG',
        description: 'Creating the CRUD operations on a MySQL database using Express and Inquierer.',
    },
];

export default function Project(props) {
    return (
        <main>
            <Container>
                {props.projects.map(item => (
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