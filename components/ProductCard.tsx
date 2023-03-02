import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { faker } from '@faker-js/faker'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div>
    <Link href={`/image/${product.id}`} className="group">
      
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt="product image"
          src={product.filepath}
          fill
          className={cn(
            'object-cover duration-700 ease-in-out group-hover:opacity-75	',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div> 
      </Link>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
         <Link href={`/image/${product.id}`} className="group"><h3>{product.id }</h3></Link>
         <Link href={`/album/${product.albumid}`} className="group"><p>{product.album}</p></Link>
      </div>
   </div>
  )
}
