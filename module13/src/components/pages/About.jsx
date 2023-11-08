import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea voluptate perspiciatis corrupti dolore quo nulla, optio, nesciunt et cum adipisci tenetur deserunt placeat. Officia, labore veniam esse necessitatibus nesciunt laudantium temporibus accusantium tempora iure vitae et nostrum accusamus? Reprehenderit quis excepturi nostrum est expedita optio atque. Porro, ab quaerat.
                </Card.Text>
                <Button variant='warning'>
                    <Link to={'/'}>Go to Home</Link>
                </Button>
            </Card.Body>
        </Card>
    )
}
