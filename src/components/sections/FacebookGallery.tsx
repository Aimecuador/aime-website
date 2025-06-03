import {
  extractGalleryImages,
  fetchFacebookPosts,
} from "@/services/facebookPosts";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageModal } from "../ui/image-modal";
import { Button } from "../ui/button";
import type { FacebookPost } from "types";

interface FacebookGalleryProps {
  limit?: number;
  initialVisibleCount?: number;
}

export function FacebookGallery({
  limit,
  initialVisibleCount = 16,
}: FacebookGalleryProps) {
  const [galleries, setGalleries] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(initialVisibleCount);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const posts = await fetchFacebookPosts();

        const galleryImages = posts
          .map((post: FacebookPost) => extractGalleryImages(post))
          .filter((imgs: string[]) => imgs.length > 0);

        setGalleries(galleryImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Facebook posts:");
        setError(
          "No se pudieron cargar las imágenes. Intente nuevamente más tarde."
        );
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
          {[...Array(initialVisibleCount)].map((_, index) => (
            <Skeleton key={index} className="aspect-square w-full rounded-md" />
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">{error}</div>;
  }

  // Aplanar todas las galerías en un solo array de imágenes
  const allImages = galleries.flat();

  // Limitar las imágenes solo si se proporciona un límite
  const maxImages = limit ? allImages.slice(0, limit) : allImages;

  // Controlar la cantidad de imágenes visibles actualmente
  const imagesToShow = maxImages.slice(0, visibleCount);

  // Determinar si hay más imágenes para mostrar
  const hasMoreImages = visibleCount < maxImages.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, maxImages.length));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
        {imagesToShow.map((src, i) => (
          <article
            key={i}
            role="button"
            aria-label={`Imagen ${i + 1}`}
            tabIndex={0}
            onClick={() => setSelectedImage(src)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImage(src);
              }
            }}
            className="group relative overflow-hidden cursor-pointer aspect-square rounded-md"
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`Imagen ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 rounded-md"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </article>
        ))}
      </div>

      {hasMoreImages && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleShowMore}
            variant="outline"
            className="px-8 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Mostrar más imágenes
          </Button>
        </div>
      )}

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Imagen ampliada"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
