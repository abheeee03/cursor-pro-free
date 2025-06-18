"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { useRouter } from 'next/navigation'

function DownloadingPage() {
  const router = useRouter()

  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      router.push('/start-download')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className='min-h-screen w-full bg-black flex flex-col items-center justify-center px-4'>
      {/* Navbar */}
      <div className='fixed top-0 w-full z-20 px-12 py-5'>
        <div className='w-full bg-black px-5 rounded-lg py-3 flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <Image src='/cursor-icon.png' alt='icon' width={50} height={50} />
            <h1 className='text-xl ml-2 font-semibold'>CRACKED CURSOR</h1>
          </div>
          <Link href='/' className='px-2 py-2 rounded-sm bg-white text-black'>Back to Home</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-2xl w-full flex flex-col items-center text-center'>
        <div className='mb-8 animate-bounce'>
          <Download size={64} />
        </div>
        
        <h1 className='text-lg md:text-3xl font-bold mb-4'>Your Download is Starting</h1>
        <p className='text-sm text-gray-400 mb-8'>
          Your download should begin automatically in a few seconds. If not, click the button below.
        </p>
        
       
        
        
        
        <p className='mt-8 text-gray-500 text-sm'>
          By downloading, you agree to our terms and conditions.
        </p>
      </div>
      
      {/* Footer */}
      <div className='fixed bottom-0 w-full border-t border-white/10 px-12 py-4 text-center'>
        <p className='text-gray-400 text-sm'>
          Note: This is for educational purposes only. Always support original software creators.
        </p>
      </div>
    </div>
  )
}

export default DownloadingPage