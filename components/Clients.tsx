import React from 'react'

import { testimonials } from '@/data'
import { InfiniteMovingCards } from './Ui/InfiniteCards'

const Clients = () => {
  return (
    <section id='testimonials' className='py-20'>
      <h1 className='heading text-white mb-16'>Kinds Words From
        <span className='text-purple'> Satisfied Clients</span>
      </h1>

      <div className='flex flex-col items-center max-lg:mt-19'>
    <div className='h-[50vh] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
      <InfiniteMovingCards 
      items={testimonials}
      direction='left'
      speed='slow'/>
      </div>
      </div>
      </section>

  )
}

export default Clients
