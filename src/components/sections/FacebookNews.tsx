import React, { useEffect, useState } from "react";
import { fetchFacebookPosts } from "@/services/facebookPosts";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { CardHeader } from "../ui/card";
import { CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Calendar, ChevronRight } from "lucide-react";

type Post = {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
};

export function FacebookNews() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchFacebookPosts();
        // Buscar la última publicación con imagen
        const withImage = data.find((p: Post) => p.full_picture);
        setPost(withImage || data[0] || null);
      } catch (error) {
        setError("Hubo un error al cargar las publicaciones.");
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-5 min justify-center">
        <Card className="overflow-hidden">
          <Skeleton className="h-[320px] w-full" />
          <CardHeader>
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="grid place-items-center py-10">
        <p className="text-red-500 w-fit px-10 py-2 bg-red-100 rounded-lg">
          Hubo un error al cargar las publicaciones.
        </p>
      </div>
    );
  }

  return (
    <a
      href={post.permalink_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      tabIndex={0}
      aria-label={post.message || "Publicación de Facebook"}
    >
      <Card className="overflow-hidden md:flex md:h-[350px] group cursor-pointer md:shadow-md md:hover:shadow-lg transition-shadow">
        <div className="relative overflow-hidden h-[220px] md:h-full md:w-2/5 min-w-[220px]">
          <img
            src={post.full_picture || "/placeholder.svg"}
            alt={post.message || "Publicación de Facebook"}
            className="object-cover size-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none"></div>
        </div>
        <div className="flex flex-col justify-between md:w-3/5 md:p-8">
          <CardHeader>
            <CardDescription className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {" "}
                {new Date(post.created_time).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </CardDescription>
            <CardTitle className="pt-2 md:pt-4 line-clamp-6 text-xl leading-6">
              {post.message || "Publicación de AIME"}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <span className="group/link flex items-center underline text-sm text-blue-600 hover:text-primary">
              Ver en Facebook
              <ChevronRight className="h-4 w-4 m-2 transition-transform duration-300 group-hover/link:translate-x-1" />
            </span>
          </CardFooter>
        </div>
      </Card>
    </a>
  );
}
