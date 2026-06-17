import { fetchFacebookPosts } from '@/services/facebookPosts'
import { useEffect, useState } from 'react'
import type { FacebookPost } from 'types'

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function FacebookNoticias() {
  const [posts, setPosts] = useState<FacebookPost[]>([])

  useEffect(() => {
    fetchFacebookPosts()
      .then((data) => {
        setPosts(data.filter((post) => post.full_picture).slice(0, 2))
      })
      .catch(() => setPosts([]))
  }, [])

  if (posts.length === 0) return null

  return (
    <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:gap-8">
      {posts.map((post) => (
        <a
          key={post.created_time}
          href={post.permalink_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden shadow-lg transition-shadow hover:shadow-xl lg:h-[400px]"
        >
          <img
            src={post.full_picture}
            alt={post.message || 'Publicación de Facebook'}
            className="aspect-[3/2] h-full w-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {formatDate(post.created_time)}
            </p>
            <h3 className="line-clamp-2 text-lg font-bold leading-tight text-white font-barlow">
              {post.message || 'Publicación de Facebook'}
            </h3>
          </div>
        </a>
      ))}
    </div>
  )
}
