import React from 'react'
import Link from 'next/link'
import { Download, Chrome } from 'lucide-react'
import Image from 'next/image'
import { FaWindows, FaLinux, FaApple  } from "react-icons/fa";
function AllDownloadsPage() {
  const operatingSystems = [
    {
      name: 'macOS',
      description: 'For Apple Silicon & Intel Macs',
      icon: <FaApple size={40} />,
      version: 'v1.0.0',
    },
    {
      name: 'Windows',
      description: 'For Windows 10 & 11',
      icon: <FaWindows  size={40} />,
      version: 'v1.0.0',
    },
    {
      name: 'Linux',
      description: 'For Ubuntu, Debian & more',
      icon: <FaLinux size={40} />,
      version: 'v1.0.0',
    },
    {
      name: 'Chrome OS',
      description: 'For Chromebooks & Chrome OS devices',
      icon: <Chrome size={40} />,
      version: 'v1.0.0',
    }
  ]

  return (
    <div className='min-h-screen w-full bg-black'>
      {/* Navbar */}
      <div className='fixed w-full z-20 px-12 py-5'>
        <div className='w-full bg-black px-5 rounded-lg py-3 flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <Image src='/cursor-icon.png' alt='icon' width={50} height={50} />
            <h1 className='text-xl ml-2 font-semibold'>CRACKED CURSOR</h1>
          </div>
          <Link href='/' className='px-2 py-2 rounded-sm bg-white text-black'>Back to Home</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='pt-32 px-12 pb-20'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-4'>Download Cracked Cursor</h1>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Choose your operating system below to get started with the unlimited pro version of Cursor.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {operatingSystems.map((os, index) => (
            <Link 
              href='/download' 
              key={index}
              className='border border-gray-800 bg-[#0C0C0C] hover:bg-[#151515] transition-all rounded-xl p-8 flex flex-col items-center text-center group'
            >
              <div className='mb-4 text-gray-300 group-hover:text-white'>
                {os.icon}
              </div>
              <h2 className='text-2xl font-bold mb-2'>{os.name}</h2>
              <p className='text-gray-400 mb-4'>{os.description}</p>
              <span className='text-sm text-gray-500 mb-6'>{os.version}</span>
              <button className='flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-pointer'>
                Download <Download size={18} />
              </button>
            </Link>
          ))}
        </div>

        <div className='mt-20 text-center'>
          <h3 className='text-2xl font-semibold mb-4'>System Requirements</h3>
          <div className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-[#0C0C0C] border border-gray-800 rounded-lg p-6'>
              <h4 className='font-bold mb-2'>Windows</h4>
              <ul className='text-gray-400 text-sm'>
                <li>Windows 10 or later</li>
                <li>4GB RAM minimum</li>
                <li>1GB free disk space</li>
              </ul>
            </div>
            <div className='bg-[#0C0C0C] border border-gray-800 rounded-lg p-6'>
              <h4 className='font-bold mb-2'>macOS</h4>
              <ul className='text-gray-400 text-sm'>
                <li>macOS 10.15 or later</li>
                <li>4GB RAM minimum</li>
                <li>1GB free disk space</li>
              </ul>
            </div>
            <div className='bg-[#0C0C0C] border border-gray-800 rounded-lg p-6'>
              <h4 className='font-bold mb-2'>Linux</h4>
              <ul className='text-gray-400 text-sm'>
                <li>Ubuntu 18.04 or later</li>
                <li>4GB RAM minimum</li>
                <li>1GB free disk space</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='w-full border-t border-white/10 px-12 py-8 text-center'>
        <p className='text-gray-400 text-sm'>
          Note: This is for educational purposes only. Always support original software creators.
        </p>
      </div>
    </div>
  )
}

export default AllDownloadsPage
