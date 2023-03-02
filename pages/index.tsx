import { useRef } from 'react'
import Collection from '../components/collection'
import Header from '../components/Header'
import Hero from '../components/hero'
import Main from '../components/main'
import Modal from '../components/modol'

import getProducts from '../sfcc.js'

export default function Gallery({ data }) {
  let coffeeRef = useRef<HTMLParagraphElement>()

  const scrollHandler = (e) => {
    e.preventDefault()
    // @ts-ignore
    coffeeRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Collection data={data} />
      </Main>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <Modal />
        
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const searchResults = await getProducts()

  return {
    props: {
      data: searchResults,
    },
  }
}
