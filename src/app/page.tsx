import Hero from '@/components/Hero'
import SectionMid from '@/components/SectionMid'
import React from 'react'
import Products from './products/page'
import Essential from '@/components/Essential'
import Icons from '@/components/Icons'



const page = () => {
  return (
    <div>
    
    <Hero />
    <Products/>
    <SectionMid />
    <Essential/>
     <Icons/>

    </div>
  )
}

export default page
