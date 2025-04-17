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

/*
export async function fetchPostMedia(postId: string) {
  const url = `https://graph.facebook.com/v22.0/${postId}/attachments?access_token=${ACCESS_TOKEN}`;
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    return data.data[0] 
  } else {
    throw new Error('Error al obtener los medios de la publicación');
  }
}
*/