"use client"
import React, { useEffect, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'

function RICKROLL() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  useEffect(() => {
    const videoElement = document.getElementById('rickroll') as HTMLVideoElement
    
    const updateProgress = () => {
      if (videoElement) {
        const currentProgress = (videoElement.currentTime / videoElement.duration) * 100
        setProgress(currentProgress)
      }
    }
    
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true)
    }
    
    if (videoElement) {
      videoElement.addEventListener('playing', handleVideoLoaded)
    }
    
    const interval = setInterval(updateProgress, 1000)
    
    return () => {
      clearInterval(interval)
      if (videoElement) {
        videoElement.removeEventListener('playing', handleVideoLoaded)
      }
    }
  }, [])
  
  const togglePlay = () => {
    const video = document.getElementById('rickroll') as HTMLVideoElement
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }
  
  const toggleMute = () => {
    const video = document.getElementById('rickroll') as HTMLVideoElement
    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

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