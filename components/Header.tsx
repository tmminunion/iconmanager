import Image from 'next/image'
import img from '../public/hero.jpg'
import Link from 'next/link'
import Navbar from './Navbar'
import Explorer from './Explorer'
export default function Header() {
  return (
    <header className='sticky top-0 z-20 bg-white shadow-md'>
      <div className="px-4 text-neutral-500">
        <Navbar />
        <Explorer />
      </div>
    </header>
  )
}
