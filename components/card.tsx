
import { useState } from 'react'
import IPost from '../schemas/post'
import Action from './action'
import Profile from './profile'
import Image from 'next/image'
import { faker } from '@faker-js/faker'

interface IProps {
  post: IPost
}
function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Card ({ post }: IProps) {
  const [hovered, setHovered] = useState<boolean>(false)
  const [style, setStyle] = useState<string>('')

  const hoverHandler = (isHovered: boolean) => {
    setHovered(isHovered)
    if (!hovered) {
      setStyle('brightness-50')
    } else {
      setStyle('brightness-100')
    }
  }

  return (
    <div
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      className="relative mb-5 w-screen sm:w-auto -ml-4 sm:ml-0">
      {hovered && (
        <div className="absolute w-full h-full z-10 flex flex-col justify-between p-6">
          <div className="flex justify-end gap-4">
            <Action  />
            <Action  />
          </div>
          <div className="flex justify-between items-center">
            <Profile post={post} />
            <Action  />
          </div>
        </div>
      )}
      <Image className={`w-full ${style}`} src={post.filepath} alt={faker.word.adverb()} width={post.width} height={post.height}  />
    </div>
  )
}


