import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

export default function Home() {

    const [timer, setTimer] = useState(10); // Initial time in seconds
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);
    const [inputValue, setInputValue] = useState(10); // Input field value

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const startTimer = () => {
        if (inputValue && !isActive) {
            setTimer(parseInt(inputValue, 10)); // Parse and set the timer duration
            setIsActive(true);
        }
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimer(10); 
        setInputValue(10)
    };

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    setIsActive(false);
                    clearInterval(timerRef.current);
                }
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => {
            clearInterval(timerRef.current);
        };
    }, [isActive, timer]);



    return (
        <Card style={{ width: '100%', height: "80vh" }}>
            <Card.Body>
                <Card.Title as={'h1'}>Home Page </Card.Title>
                <Card.Text >
                    A simle Home page to demonstrate <b> useState() ,useEffect(), useRef() </b> hooks.
                </Card.Text>

                <div>
                    <h4>Countdown Timer</h4>
                    <p>Time Remaining: <Badge bg="danger">{timer}</Badge>  seconds</p>




                    <div>
                        <Form.Control
                            className='form-group w-25 d-inline'
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter time in seconds"
                            disabled={isActive}
                        />
                        <button className='btn btn-dark m-2' onClick={startTimer} disabled={isActive}>
                            Start
                        </button>
                        <button className='btn btn-warning m-2' onClick={resetTimer} disabled={!isActive}>
                            Reset
                        </button>
                    </div>
                </div>

            </Card.Body>
        </Card>
    )
}
