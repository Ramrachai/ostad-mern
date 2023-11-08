import React from 'react'

const data = [
  "Loop text 1",
  "Loop text 2",
  "Loop text 3",
  "Loop text 4",
  "Loop text 5",
  "Loop text 6",
  "Loop text 7",
  "Loop text 8",
  "Loop text 9",
  "Loop text 10"
];

export default function Hero() {
  return (
    <div>
      <h2>Hero component</h2>
      <p>This is the Hero page.</p>
      <div style={{display:"flex", gap: "5px", flexWrap: "wrap"}}>
        <h4 style={{color:"orange"}}>Applying Loops:</h4>
        {data.map((item, index) => {
          return <p key={index}>{item} , </p>;
        }) }
      </div>
      
    </div>
  )
}
