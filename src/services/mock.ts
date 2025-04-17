const PAGE_ID = '103328941578464';
const ACCESS_TOKEN = 'EAAXTQPFN6pMBOx3iMLIKuZATSkKN7q5ho1jcOPkYJSERYcyEzpB8fgyYZBnSLtNe6w9WBum9S8S7GcPmTZAB4InW5MULZBoXeEmXKG0hNu29I8wU66ej3ZCVpNwcMEZBRBEvgGZAbE1ZAjDMm7lXvFyPtoxJbAj1InHAxgauik7zyLl3WSbz9spbZCIcBQR0ZA1e0ZD';

export async function fetchFacebookPosts() {
  const url = `https://graph.facebook.com/v22.0/${PAGE_ID}/posts?fields=message,created_time,full_picture,permalink_url&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Publicaciones obtenidas:', data);

    if (!response.ok) {
      throw new Error('Error al obtener las publicaciones');
    }

    return data.data;
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

/*

Token de usuario AIME: EACGrSFwWSB0BO5eGenb6NXOTZC15pF3zmOYmRuYLFnYGrhCAxHiIHn1zt4UmCaTlZCUZAWOv4urTMdITRoDMx2UtmRFcwLoZBll7cjeCNZBqF0meXLOBIE2aWqOOVsZCx4poZBsixGGv1glLWroRwDU3cQVhzy2bcivFVXAWQhL2Q6DnRYWTEnytrm1 EXPIRA 26 junio

Token de pagian AIME:
EACGrSFwWSB0BO813vPpUj2A0yPdGZBXYcRZAqqQeojmGR7HzDg79Il4Yagx5dKtcMwIUVBiN477EBS7GkmrdWTl2tYFw5iib1AzxCQT04ZBkOHJT1dkJOpXUTgXvi7w5JZAF4khZB1r6LmMXaOQnkImHXs121PSyO8myZCJhtqCo70uzPbncRUf9uDhth2lQoZD

PAGE_idAime: 145812602695267 



*/