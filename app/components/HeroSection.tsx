import React from 'react'
import Navbar from './Navbar'
import { Button } from '@/components/ui/button'

function HeroSection() {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center bg-no-repeat p-4">
        <Navbar />
        <div className="flex flex-col justify-start bg-[url('/nft_icon.png')] bg-center bg-no-repeat h-[35vh]">
            <h1 className='text-5xl font-bold mt-24 ml-40'>
                Launchpad for your <br/> tokens.
            </h1>
            <Button variant="outline" className='w-fit ml-40 mt-4'>Create now</Button>
        </div>
    </div>
  )
}

export default HeroSection