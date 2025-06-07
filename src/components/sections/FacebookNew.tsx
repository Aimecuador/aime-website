import { getLastPost } from '@/services/facebookPosts'
import { useEffect, useState } from 'react'
import type { FacebookPost } from 'types'

export function FacebookNew() {
  const [post, setPost] = useState<FacebookPost>()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLastPost()
      .then((post) => {
        setPost(post)
      })
      .catch((_) => {
        setError('Error al obtener la noticia')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (loading) {
    return <div className="text-gray-500">Cargando...</div>
  }

  if (!post) {
    return <div className="text-gray-500">No hay noticias disponibles</div>
  }

  return (
    <article className="w-full transition-transform duration-300 hover:scale-[1.02] sm:max-w-[300px]">
      <a
        className="aspect-square h-[300px] w-[300px]"
        href={post.permalink_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={post.full_picture}
          alt={post.message || 'Última noticia'}
          className="h-full w-full rounded-md object-cover"
        />
      </a>
      <div className="mt-2">
        <a
          href={post.permalink_url}
          className="line-clamp-4 text-lg font-bold hover:text-blue-500 hover:underline"
        >
          {post.message || 'Última noticia'}
        </a>
        <p className="mt-1 text-sm text-muted-foreground">
          {new Date(post.created_time).toLocaleDateString('es-EC', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </article>
  )
}
