"use client"
const testimonials = [
  {
    "id": 0,
    "name": "Mitesh Kaphle",
    "position": "CEO",
    "company": "FinProve",
    "photo": "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712712786/sudippau/mitesh.png",
    "testimonial": "Sudip Paudel played a crucial role in the successful development of our website at FinProve. His attention to detail, commitment to excellence, and proficiency in both front-end and back-end development were evident throughout the project. Sudip's dedication to delivering high-quality work made him a valuable asset to our team."
  },
  {
    "id": 1,
    "name": "Binay",
    "position": "Co-Founder",
    "company": "Red Lentils",
    "photo": "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712712786/sudippau/binay.png",
    "testimonial": "Sudip Paudel made significant contributions to our projects at RedLentils. His dedication to excellence, problem-solving skills, and ability to collaborate effectively with the team were instrumental in achieving our objectives. Sudip's commitment to delivering exceptional results reflects his professionalism and passion for his work."
  }
]

import React, { forwardRef, useEffect, useState } from 'react'
import Section from './Section';

  const Testimonials = () => {
  const [active, setActive] = useState(0);
  const {name, position, photo, company, testimonial} = testimonials[active];
  useEffect(()=>{
    const timeoutId = setInterval(()=>{
      setActive(p => {
        if (p==testimonials.length-1) return 0;
        else return p+1;
      })
    }, 10000)
    return ()=> clearTimeout(timeoutId)
  }, [])
  return (
    <Section id="testimonials">
      <div className="text-center py-10 md:py-20 bg-blue-50 leading-relaxed">
        <p className="font-bold md:text-xl mb-8">People I&lsquo;ve worked with have said some nice things about me</p>
        <div style={{backgroundImage: `url(${photo})`}} className='h-20 w-20 m-auto rounded-full bg-center bg-cover'></div>
        <p className='md:w-3/4 lg:w-2/3 mx-auto my-6 font-light md:text-xl tracking-wide leading-relaxed'>&#34;{testimonial}&#34;</p>
        <p className="md:text-2xl">{name}</p>
        <p>{position} , {company}</p>
        <div className="w-max mx-auto my-3 flex gap-2">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} style={{backgroundColor: testimonial.id == active? 'rgb(59 130 246)': 'white'}} className="h-3 w-3 rounded-full border border-solid border-gray-300" onClick={()=> setActive(testimonial.id)}>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
};

export default Testimonials;