import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Home Page </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant='warning'>
                    <Link to={'/contact'}>Contact me </Link>
                </Button>
            </Card.Body>
        </Card>
    )
}
