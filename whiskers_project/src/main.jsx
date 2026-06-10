import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Contacts from './contacts'

//Data mapping from data.js
import data from "./data.js"

const entryElements = data.map((entry)=>{
  return (
    <Contacts key = {entry.id}
              img = {entry.img}
              name = {entry.name}
              phone = {entry.phone}
              email = {entry.email}
    />
  )
})

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <div className='contacts-container'>
      <Contacts img="./images/whiskerson.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
      />
      <Contacts img="./images/luna-paws.jpg"
                name="Luna Paws"
                phone="(415) 555-8765"
                email="luna.paws@mooncats.meow"
      />
      <Contacts img="./images/sir-pounce.jpg"
                name="Sir Pounce"
                phone="(718) 555-4321"
                email="pounce.alot@zoomies.meow"
      />
      <Contacts img="./images/mittens.jpg"
                name="Mittens McFluff"
                phone="(646) 555-9087"
                email="mittens@fluffmail.meow"
      />
      <Contacts img="./images/captain-tuna.jpg"
                name="Captain Tuna"
                phone="(310) 555-7788"
                email="captain.tuna@seacats.meow"
      />
      <Contacts img="./images/shadow.jpg"
                name="Shadow Beans"
                phone="(503) 555-2468"
                email="shadow.beans@midnight.meow"
      />
      <Contacts img="./images/chonkster.jpg"
                name="Professor Chonk"
                phone="(202) 555-1357"
                email="prof.chonk@catademy.meow"
      />
    </div> */}

    {/* Here I am gonna use a function that uses the data.js to fill all the fields and create as many components as much the data demands. SCALABLE! */}

    <div className='contacts-container'>
      {entryElements}
    </div>
    
    
  </StrictMode>,
)
