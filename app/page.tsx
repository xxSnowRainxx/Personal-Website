import React from 'react'
import Link from "next/link"
const Home = () => {
  return (
    <>
      <div className='bg-gray-900 flex flex-col items-center justify-center gap-30 fixed inset-0'>
        <section className='text-6xl'>SnowRain Personal Website</section>
        <section className='flex justify-between items-center p-8 gap-15 bg-gray-800 text-3xl rounded-2xl shadow-xl'>
          <Link href="/thoughts" className='hover:text-sky-500'>Thoughts</Link>
          <Link href="/memo" className='hover:text-sky-500'>Memo</Link>
        </section>
      </div>
    </>
  )
}

export default Home