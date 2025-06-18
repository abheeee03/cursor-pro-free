"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function RICKROLL() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  useEffect(() => {
    const videoElement = document.getElementById('rickroll') as HTMLVideoElement
    
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true)
    }
    
    if (videoElement) {
      videoElement.addEventListener('playing', handleVideoLoaded)
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('playing', handleVideoLoaded)
      }
    }
  }, [])

  return (
    <div className='min-h-screen w-full bg-black flex flex-col items-center justify-center'>
      {isVideoLoaded && <h1>GET THE CURSOR PRO SUBSCRIPTION 😂</h1>}
      <div className='relative w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl'>
        <video
          id="rickroll"
          src='/rick.mp4'
          autoPlay
          loop
          className='w-full h-full object-cover'
        />
      </div>
      {isVideoLoaded && <p>lets rickroll more people, reply on this tweet its working !
        
        <Link href={'/'}> Click Here for TWEET</Link>
        
        </p>}
    </div>
  )
}

export default RICKROLL