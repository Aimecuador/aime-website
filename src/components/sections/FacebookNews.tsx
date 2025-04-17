import React, { useEffect, useState } from "react";
import { fetchFacebookPosts } from "@/services/facebookPosts";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { CardHeader } from "../ui/card";
import { CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleteon";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

type Post = {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
};

export function FacebookNews() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchFacebookPosts();
        setPosts(data);
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
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="overflow-hidden max-w-[400px]">
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
    <article className="grid gap-5 justify-center sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-3">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="shadow-md hover:shadow-xl transition-shadow border flex flex-col max-w-[400px] overflow-hidden group"
        >
          <img
            src={post.full_picture || "/placeholder.svg"}
            alt={post.message || "Publicación de Facebook"}
            className="object-fit h-[330px] w-full group-hover:scale-105 transition-transform duration-300"
          />
          <CardHeader className="px-6">
            <CardTitle className="line-clamp-3 text-xl">
              {post.message || "Publicación de AIME"}
            </CardTitle>
            <CardDescription className="flex flex-col">
              <a
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-words break-all text-sm text-blue-600 hover:underline"
              >
                {post.permalink_url}
              </a>
              <div className="flex items-center gap-1 mt-1.5">
                <Calendar className="h-4 w-4" />
                <span> {new Date(post.created_time).toLocaleDateString()}</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className="px-6">
            <Button className="w-full" asChild>
              <a
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Ver en Facebook
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </article>
  );
}
