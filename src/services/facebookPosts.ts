export async function fetchFacebookPosts() {
  const url = 'https://raw.githubusercontent.com/Aimecuador/AimeFacebookPosts/refs/heads/main/posts.json';

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Error al obtener las publicaciones');
    }

    return data;
  } catch (error) {
    throw error; 
  }
}

export type FacebookPost = {
  attachments?: {
    data: {
      type: string;
      media?: {
        image?: {
          src: string;
        };
      };
      subattachments?: {
        data: {
          type: string;
          media?: {
            image?: {
              src: string;
            };
          };
        }[];
      };
    }[];
  };
};


export function extractGalleryImages(post: FacebookPost): string[] {
  const images: string[] = [];

  if (!post.attachments?.data) return images;

  for (const attachment of post.attachments.data) {
    if (attachment.type === 'photo' && attachment.media?.image?.src) {
      images.push(attachment.media.image.src);
    }

    if (attachment.type === 'album' && attachment.subattachments?.data) {
      for (const sub of attachment.subattachments.data) {
        if (sub.type === 'photo' && sub.media?.image?.src) {
          images.push(sub.media.image.src);
        }
      }
    }
  }

  return images;
}