import { Download, Github, GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function App() {
  return (
    <div className='min-h-screen w-full bg-black'>
      {/* Navbar  */}
      <div className='fixed w-full z-20 px-12 py-5'>
        <div className='w-full bg-black px-5 rounded-lg py-3 flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <Image src='/cursor-icon.png' alt='icon' width={50} height={50} />
            <h1 className='text-xl ml-2 font-semibold'>CRACKED CURSOR</h1>
          </div>

          <div className='flex gap-2 items-center justify-center'>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='#features'>Features</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='#how-to-use'>How to Use?</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='#about-us'>About Us</Link>
          </div>


          <div className='flex items-center gap-3 justify-between'>
              <Link href='https://github.com/abheeee03/cursor-pro-free' className='px-2 py-2 rounded-sm flex items-center justify-center gap-2 border border-slate-700 text-white'>Star Us <Github size={17}/> </Link>
              <Link href='/download' className='px-2 py-2 rounded-sm bg-white text-black'>Download</Link>
          </div>

        </div>

      </div>
      
      {/* Hero Section  */}
      <div className='h-screen py-30 px-8'>
        <div className='relative h-[100%]'>
        <Image src='/bg.png' fill alt='bg' className='rounded-lg z-0'/>
        <div className='relative flex flex-col items-center justify-center'>
          <h1 className='bold text-8xl text-center font-bold mt-20'>The Cracked AI Code Editor</h1>
          <p className='mt-9 text-semibold text-xl'>Built to make you extraordinarily productive, Cursor Cracked is the best way to code with AI for free.</p>
          <div className='mt-16 flex gap-8'> 
            <Link href={'/download'} className='px-4 py-5 rounded-lg font-semibold hover:opacity-80 bg-white text-black'>Download for Your OS</Link>
            <Link href={'/all-downloads'} className='px-4 py-5 rounded-lg font-semibold hover:opacity-80 bg-black'>All Downloads</Link>
          </div>
        </div>
        </div>
      </div>


      {/* Features Section  */}
      <div id='features'>
        <div className='h-screen w-full flex flex-col items-center justify-evenly text-center'>
          <div>
        <h1 className='text-5xl font-bold'>Tab, tab, tab</h1>
        <p className='text-xl mt-4'>Unlimited Vibe Code, No Need to Pay for Cursor</p>
          </div>
          <div>

        <h1 className='text-5xl font-bold'>Open Source</h1>
        <p className='text-xl mt-4'>Contribute, Review, Modify, Improve the Cracked Cursor IDE</p>
          </div>
          <div>

        <h1 className='text-5xl font-bold'>Unlimited Pro Version Until Cursor Knows</h1>
        <p className='text-xl mt-4'>Pro Version is Unlimited,Until Cursor Notices Us So Please Support Us and Star us on Github</p>
          </div>
        </div>
      </div>


      <div className='h-screen w-full flex flex-col items-center px-30 justify-center'>
        <div className='flex items-center justify-between w-full'>
          <div>
          <h1 className='text-5xl font-semibold'>How to Install The Crack?</h1>
          <p className='text-xl mt-2'>steps to install and use the cracked version of cursor</p>

          </div>
          <button className='flex items-center justify-center gap-2 bg-white text-black px-2 py-2 rounded-lg'>Star Us <GithubIcon/> </button>
        </div>

        <div className='flex items-center justify-evenly w-full'>
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
          
          
          ].map((item, idx)=><div className='border mt-20 bg-[#0C0C0C] border-slate-700 rounded-lg p-4 h-90 w-72 flex items-center justify-center flex-col text-center' key={idx}>
            <h1 className='font-semibold text-2xl'>{item.title}</h1>
            <p className='opacity-80 text-sm mt-5'>{item.desc}</p>
          </div>)
          }
        </div>

      </div>

      <div id='about-us' className='flex w-full px-30 items-center justify-between mb-50'>
        <div className='flex flex-col gap-6 mt-10'>
          <h1 className='text-7xl font-bold'>Try Cracked Cursor Now</h1>
          <Link href='/download' className='px-4 py-3 bg-white flex items-center justify-center w-fit gap-2 rounded-lg text-black font-semibold'>Download Now <Download/> </Link>
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
    <div className='w-full h-[40vh] border-t-2 flex flex-col border-white/10 px-30 py-5'>
          <h1 className='text-2xl font-medium mb-10'>Cracked Cursor</h1>
          <Link href='https://github.com/abheeee03/cursor-pro-free' className='text-sm opacity-80 hover:opacity-100 mb-2'>We Love OS Community</Link>
          <Link href='https://www.cursor.com/' className='text-sm opacity-80 hover:opacity-100 mb-2'>Support Original</Link>
          <Link href='https://www.cursor.com/' className='text-sm opacity-80 hover:opacity-100 mb-2'>Download The Cursor</Link>
          <Link href='https://www.cursor.com/' className='text-sm opacity-80 hover:opacity-100'>Support Creator</Link>
    </div>

          <div className='border-t-2 text-center px-50 py-10 border-white/10 flex items-center justify-center'>
            <p>NOTE: I do not support or promote software piracy in any form.
This project is intended solely for educational and awareness purposes.
Piracy hurts developers and the tech community always support the original creators by using genuine, licensed software. </p>
          </div>


    </div>
  )
}

export default App