'use client'
import Gruss from '../components/Gruss'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Addiere from '../components/Addiere'
export default function Home() {
  return (
    <div>
      <Navigation/>
      <h1>Meine Seite</h1>
      <Gruss name="Horsti"/>
      <Gruss name="Susi"/>
      <Gruss name="Fred"/>
      <Gruss name="Barabara"/>
      <Gruss name="Fussl"/>
      <Addiere a={2} b={4}/>
    </div>
  );
}
