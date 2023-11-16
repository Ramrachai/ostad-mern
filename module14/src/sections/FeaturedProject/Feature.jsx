import React from 'react'
import { Icon } from '../../components/Common'


export default function Feature({icon, title, description, link}) {
    return (
        <div>
            <Icon icon={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>Read More</a>
        </div>
    )
}
