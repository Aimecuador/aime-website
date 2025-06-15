import { getLastPost } from '@/services/facebookPosts'
import { useEffect, useRef, useState } from 'react'
import type { FacebookPost } from 'types'

export function FacebookNew() {
  const [post, setPost] = useState<FacebookPost>()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSquareAspectImage, setIsSquareAspectImage] = useState(true)
  const newImageRef = useRef<HTMLImageElement | null>(null)

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

  useEffect(() => {
    const image = newImageRef.current

    if (!post || !image) return

    if (image.complete) {
      checkImageAspectRatio(image)
    } else {
      image.onload = () => checkImageAspectRatio(image)
    }
  }, [post])

  const checkImageAspectRatio = (image: HTMLImageElement) => {
    const aspectRatio = image.naturalWidth / image.naturalHeight
    setIsSquareAspectImage(aspectRatio >= 0.9 && aspectRatio <= 1.1)
  }

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
        href={post.permalink_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full overflow-hidden rounded-md ${
          isSquareAspectImage ? 'h-full' : 'h-[350px]'
        }`}
      >
        <img
          ref={newImageRef}
          src={post.full_picture}
          alt={post.message || 'Última noticia'}
          className="h-full w-full rounded-md object-cover"
        />
      </a>
      <div className="mt-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={post.permalink_url}
          className={`text-lg font-bold hover:text-blue-500 hover:underline ${
            isSquareAspectImage ? 'line-clamp-4' : 'line-clamp-2'
          }`}
        >
          {post.message ||
            post.attachments?.data[0]?.description ||
            'Última noticia'}
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
