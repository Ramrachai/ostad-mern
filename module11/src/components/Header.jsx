import React from 'react'
import Person, { Greet, ShowDay, Temperature } from './Test'

export default function Header() {
  const date = new Date() 
  const dayOfWeek = date.toLocaleDateString("en-Us", {weekday: "long"}).toLocaleLowerCase()

  return (
    <div>
      <h2>Header component</h2>
      <p>This is the Header page.</p>
      <div className='conditional-components' >
        <p style={{lineHeight:"35px"}}>Following texts are generated using <i style={{ color: "orange" }}>conditional rendering</i> </p>
        <Person name="Mr. Ram" />
        <Greet isGreeting={true} />
        <ShowDay dayOfWeek={dayOfWeek} />
        <Temperature temp={15} />
      </div>


    </div>
  )
}
