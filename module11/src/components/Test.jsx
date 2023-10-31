import React from 'react'

// answer1
export default function Person({ name }) {
    return (
        <p>Person name is <span> {name} </span> </p>
    )
}
// answer2: 
export function Greet({ isGreeting }) {
    return (
        <p> This is my greeting: <span>{isGreeting ? "Hello, World!" : "Goodbye"}</span>  </p>
    )
}

// answer3: 
export function Temperature({ temp }) {
    let message;
    if (temp > 30) {
        message = "It's hot!";
    } else if (temp < 20) {
        message = "It's cool";
    } else {
        message = "It's neither hot nor cool.";
    }

    return (
        <p>Weather update: <span>{message}</span>  </p>
    )
}

// answer4: 
export function ShowDay({ dayOfWeek }) {
    let message

    switch (dayOfWeek) {
        case "monday":
            message = "It's Monday!";
            break;
        case "tuesday":
            message = "It's Tuesday!";
            break;
        case "wednesday":
            message = "It's Wednesday!";
            break;

        case "thursday":
            message = "It's Thursday!";
            break;
        case 'friday':
            message = "It's Friday!";
            break;
        default:
            message = "It's a weekday";
            break;
    }

    return (
        <p>Do you know the day? : <span>{message}</span> </p>
    )
}

