'use client'
import { Download, Github, GithubIcon, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='min-h-screen w-full bg-black'>
      {/* Navbar  */}
      <div className='fixed w-full z-20 px-4 sm:px-12 py-5'>
        <div className='w-full bg-black px-3 sm:px-5 rounded-lg py-3 flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <Image src='/cursor-icon.png' alt='icon' width={50} height={50} />
            <h1 className='text-xl ml-2 font-semibold'>CRACKED CURSOR</h1>
          </div>

          {/* Mobile menu button */}
          <button 
            className='sm:hidden text-white p-2'
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className='hidden sm:flex gap-2 items-center justify-center flex-wrap'>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='#features'>Features</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='#how-to-use'>How to Use?</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='#about-us'>About Us</Link>
          </div>

          <div className='hidden sm:flex items-center gap-3 justify-between'>
              <Link href='https://github.com/abheeee03/cursor-pro-free' className='px-2 py-2 rounded-sm flex items-center justify-center gap-2 border border-slate-700 text-white'>Star Us <Github size={17}/> </Link>
              <Link href='/download' className='px-2 py-2 rounded-sm bg-white text-black'>Download</Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black z-30 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
        <div className='p-5 flex flex-col h-full'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-xl font-bold'>Menu</h2>
            <button onClick={toggleMenu} className='p-2'>
              <X size={24} />
            </button>
          </div>
          
          <div className='flex flex-col gap-6'>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-2 rounded-sm' href='#features' onClick={toggleMenu}>Features</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-2 rounded-sm' href='#how-to-use' onClick={toggleMenu}>How to Use?</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-2 rounded-sm' href='#about-us' onClick={toggleMenu}>About Us</Link>
          </div>
          
          <div className='mt-auto flex flex-col gap-4 mb-8'>
            <Link href='https://github.com/abheeee03/cursor-pro-free' className='px-2 py-2 rounded-sm flex items-center justify-center gap-2 border border-slate-700 text-white' onClick={toggleMenu}>Star Us <Github size={17}/> </Link>
            <Link href='/download' className='px-2 py-2 rounded-sm bg-white text-black text-center' onClick={toggleMenu}>Download</Link>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
          onClick={toggleMenu}
        />
      )}
      
      {/* Hero Section  */}
      <div className='h-screen py-10 sm:py-30 px-4 sm:px-8'>
        <div className='relative md:mt-0 mt-15 h-[80%]'>
        <Image src='/bg.png' fill alt='bg' className='rounded-lg z-0' style={{ objectFit: 'cover' }} />
        <div className='relative flex flex-col items-center justify-center px-4'>
          <h1 className='bold text-4xl sm:text-6xl md:text-8xl text-center font-bold mt-20'>The Cracked AI Code Editor</h1>
          <p className='mt-6 sm:mt-9 text-semibold text-base sm:text-xl text-center'>Built to make you extraordinarily productive, Cursor Cracked is the best way to code with AI for free.</p>
          <div className='mt-8 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-8'> 
            <Link href={'/download'} className='px-4 py-3 sm:py-5 rounded-lg font-semibold hover:opacity-80 bg-white text-black text-center'>Download for Your OS</Link>
            <Link href={'/all-downloads'} className='px-4 py-3 sm:py-5 rounded-lg font-semibold hover:opacity-80 bg-black text-center'>All Downloads</Link>
          </div>
        </div>
        </div>
      </div>

      {/* Features Section  */}
      <div id='features'>
        <div className='min-h-screen w-full flex flex-col items-center justify-evenly text-center px-4 py-10 sm:py-0'>
          <div className='my-8 sm:my-0'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Tab, tab, tab</h1>
            <p className='text-lg sm:text-xl mt-4'>Unlimited Vibe Code, No Need to Pay for Cursor</p>
          </div>
          <div className='my-8 sm:my-0'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Open Source</h1>
            <p className='text-lg sm:text-xl mt-4'>Contribute, Review, Modify, Improve the Cracked Cursor IDE</p>
          </div>
          <div className='my-8 sm:my-0'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Unlimited Pro Version Until Cursor Knows</h1>
            <p className='text-lg sm:text-xl mt-4'>Pro Version is Unlimited,Until Cursor Notices Us So Please Support Us and Star us on Github</p>
          </div>
        </div>
      </div>

      <div className='min-h-screen w-full flex flex-col items-center px-4 sm:px-30 justify-center py-10 sm:py-0'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-6 sm:gap-0'>
          <div>
            <h1 className='text-3xl sm:text-5xl font-semibold text-center sm:text-left'>How to Install The Crack?</h1>
            <p className='text-lg sm:text-xl mt-2 text-center sm:text-left'>steps to install and use the cracked version of cursor</p>
          </div>
          <button className='flex items-center justify-center gap-2 bg-white text-black px-2 py-2 rounded-lg'>Star Us <GithubIcon/> </button>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-evenly w-full gap-6 sm:gap-0'>
          {
            [
              {
              title: 'Download The Cracked Cursor',
              desc: 'Click on the Download And the Download Will Start wait until the download is complete, HAVE SOME PATIENCE MF!'
            },
            {
              title: 'Install the Cracked Cursor',
              desc: 'Complete the installation process, Select steps accordingly and let the Login Screen Appear'
            },
            {
              title: 'Done!',
              desc: 'Login Will Be Automatically Cancelled and You Will be Redirectedd to the IDE, Check the Settings and BOOM you will see Cursor Pro Activated in your account'
            }
          
          
          ].map((item, idx)=><div className='border mt-10 sm:mt-20 bg-[#0C0C0C] border-slate-700 rounded-lg p-4 h-auto sm:h-90 w-full sm:w-72 flex items-center justify-center flex-col text-center' key={idx}>
            <h1 className='font-semibold text-xl sm:text-2xl'>{item.title}</h1>
            <p className='opacity-80 text-sm mt-5'>{item.desc}</p>
          </div>)
          }
        </div>
      </div>

      <div id='about-us' className='flex flex-col sm:flex-row w-full px-4 sm:px-30 items-center justify-between mb-10 sm:mb-50 gap-8 sm:gap-0'>
        <div className='flex flex-col gap-6 mt-10 text-center sm:text-left'>
          <h1 className='text-4xl sm:text-7xl font-bold'>Try Cracked Cursor Now</h1>
          <Link href='/download' className='px-4 py-3 bg-white flex items-center justify-center w-fit mx-auto sm:mx-0 gap-2 rounded-lg text-black font-semibold'>Download Now <Download/> </Link>
        </div>
        <div className='h-40'>
          <Image 
          className='h-full w-full'
          src='/cursor-icon.png' 
          alt='cursor-pro' 
          width={100} 
          height={100}/>
        </div>
      </div>

    {/* Footer  */}
    <div className='w-full min-h-[40vh] border-t-2 flex flex-col border-white/10 px-4 sm:px-30 py-5'>
          <h1 className='text-2xl font-medium mb-10 text-center sm:text-left'>Cracked Cursor</h1>
          <div className='flex flex-col items-center sm:items-start'>
            <Link href='https://github.com/abheeee03/cursor-pro-free' className='text-sm opacity-80 hover:opacity-100 mb-2'>We Love OS Community</Link>
            <Link href='https://www.cursor.com/' className='text-sm opacity-80 hover:opacity-100 mb-2'>Support Original</Link>
            <Link href='https://www.cursor.com/' className='text-sm opacity-80 hover:opacity-100 mb-2'>Download The Cursor</Link>
            <Link href='https://www.cursor.com/' className='text-sm opacity-80 hover:opacity-100'>Support Creator</Link>
          </div>
    </div>

    <div className='border-t-2 text-center px-4 sm:px-50 py-10 border-white/10 flex items-center justify-center'>
      <p className='text-sm sm:text-base'>NOTE: I do not support or promote software piracy in any form.
This project is intended solely for educational and awareness purposes.
Piracy hurts developers and the tech community always support the original creators by using genuine, licensed software. </p>
    </div>

    </div>
  )
}

export default App