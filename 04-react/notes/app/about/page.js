'use client'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
export default function about(){
    return(
        <div>
            <Navigation/>
            about
            <Link href="/">zur Startseite</Link>
        </div>
    )
}