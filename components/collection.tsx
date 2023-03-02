
import IPost from '../schemas/post'
import Card from './card'

export default function Collection({ data }){
  return (
    <section className="grid items-center">
      <div className="mx-auto sm:columns-2 md:columns-4 max-w-7xl">
        {data && data.map((post: IPost) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}




