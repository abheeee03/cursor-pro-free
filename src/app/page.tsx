import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function App() {
  return (
    <div className='min-h-screen w-full bg-black'>
      {/* Navbar  */}
      <div className='fixed w-full px-12 py-5'>
        <div className='w-full bg-black px-5 rounded-lg py-3 flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <Image src='/cursor-icon.png' alt='icon' width={50} height={50} />
            <h1 className='text-xl ml-2 font-semibold'>CRACKED CURSOR</h1>
          </div>

          <div className='flex gap-2 items-center justify-center'>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='/'>Pricing</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='/'>Features</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='/'>How to Use?</Link>
            <Link className='opacity-80 hover:opacity-100 hover:bg-gray-900 p-1 rounded-sm' href='/'>About Us</Link>
          </div>


          <div className='flex items-center gap-3 justify-between'>
              <Link href='/' className='px-2 py-2 rounded-sm border border-slate-700 text-white'>Support</Link>
              <Link href='/' className='px-2 py-2 rounded-sm bg-white text-black'>Download</Link>
          </div>

        </div>

      </div>
      
      {/* Hero Section  */}
      <div className='h-screen py-30 px-8'>
        <div className='bg-red-400 hero'>

        </div>
      </div>


    </div>
  )
}

export default App