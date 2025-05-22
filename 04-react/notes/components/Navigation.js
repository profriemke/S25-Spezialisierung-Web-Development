'use client'
import Link from 'next/link'
export default function Navigation(){
    return(
        <div className='bg-sky-500  h-16 text-white text-lg  flex gap-6'>
            <Link className='h-full p-4 block  hover:bg-sky-300' href="/">Home</Link>
            <Link className='h-full p-4 block  hover:bg-sky-300' href="/about">About</Link>
        </div>
    )
}