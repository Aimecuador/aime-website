"use client";

import {
  extractGalleryImages,
  fetchFacebookPosts,
  type FacebookPost,
} from "@/services/facebookPosts";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface FacebookGalleryProps {
  limit?: number;
}

export default function FacebookGallery({ limit }: FacebookGalleryProps) {
  const [galleries, setGalleries] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        {[...Array(limit || 15)].map((_, index) => (
          <Skeleton key={index} className="aspect-square w-full" />
        ))}
      </>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">{error}</div>;
  }

  // Aplanar todas las galerías en un solo array de imágenes
  const allImages = galleries.flat();

  // Limitar las imágenes solo si se proporciona un límite
  const imagesToShow = limit ? allImages.slice(0, limit) : allImages;

  return (
    <>
      {imagesToShow.map((src, i) => (
        <div
          key={i}
          className="group relative overflow-hidden aspect-square"
        >
          <img
            src={src || "/placeholder.svg"}
            alt={`Imagen ${i + 1}`}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="text-white p-4 font-medium text-sm md:text-base">
              Foto AIME
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
