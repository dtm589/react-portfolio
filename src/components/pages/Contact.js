import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer';


export default function Contact() {

    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState('false');

    const handleClose = () => setShow(false);

    const handleInputChange = (e) => {
        const { input, value } = e.target;

        return input === 'name' ? setName(value)
            : 'email' ? setEmail(value)
                : setMessage(value);
    };

    const handleShow = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        setShow(true);

        emailjs.sendForm('service_cp5i2pk', 'template_ml8i1ax', form.current, 'U_zC3viltWoEFtq6o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <main>
            <Container>

                <Form ref={form}>
                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control type='text' value={name} name='name' onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='email'>
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type='email' placeholder='email@example.com' value={email} name='email' onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='text'>
                        <Form.Label>Your Message:</Form.Label>
                        <Form.Control as='textarea' rows={5} value={message} name='message' onChange={handleInputChange} />
                    </Form.Group>
                    <Button onSubmit={handleShow} variant='primary' type='submit'>Submit</Button>
                </Form>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Message Recieved</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thanks for sending me a message! I will be sure to get back to you soon.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Container>

            <div>
                <Footer />
            </div>
        </main>
    )
}