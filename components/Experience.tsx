import React from 'react'
import { Button } from './Ui/moving-border'
import { workExperience } from '../data'

const Experience = () => {
  return (
    <section id='experience' className='py-20 w-full'>
        <h1 className='heading text-white'>
            <span className='text-purple'>Experience</span>
        </h1>

       <div className='w-full mt-12 grid lg:grid-cols-6 grid-cols-1 gap-10'>
{
    workExperience.map((card) =>  (
        <Button
        key={card.id}
        >
            <div>
                <img src={card.thumbnail} alt={card.thumbnail} className='w-16 text-center' />
            </div>
            <h1>{card.title}</h1>
            <p>{card.desc}</p>
        </Button>
    ))
}
       </div>

    </section>
  )
}

export default Experience