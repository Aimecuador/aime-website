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

interface FacebookNewsProps {
  limit?: number;
}

export function FacebookNews({ limit }: FacebookNewsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchFacebookPosts();
        setPosts(limit ? data.slice(0, limit) : data);
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
      <div className="grid gap-5 min justify-center sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(limit || 6)].map((item) => (
          <Card key={item} className="overflow-hidden">
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
        ))}
      </div>
    );
  }

  if (error || !Array.isArray(posts)) {
    return (
      <div className="grid place-items-center py-10">
        <p className="text-red-500 w-fit px-10 py-2 bg-red-100 rounded-lg">
          Hubo un error al cargar las publicaciones.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-2 justify-center sm:grid-cols-2 sm:gap-x-5 sm:gap-y-9 lg:grid-cols-3 lg:gap-x-10">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="flex flex-col overflow-hidden group"
        >
          <div className="relative overflow-hidden h-[350px] w-full">
            <img
              src={post.full_picture || "/placeholder.svg"}
              alt={post.message || "Publicación de Facebook"}
              className="object-cover size-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none"></div>
          </div>
          <CardHeader>
            <CardDescription className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span> {new Date(post.created_time).toLocaleDateString()}</span>
            </CardDescription>
            <CardTitle className="pt-1 line-clamp-3 text-xl leading-6">
              {post.message || "Publicación de AIME"}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <a
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center hover:underline text-sm text-blue-600 hover:text-primary"
            >
              Ver más
              <ChevronRight className="h-4 w-4 m-2 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
