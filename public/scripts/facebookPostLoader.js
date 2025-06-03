const eventsAndNewsGrid = document.getElementById("eventsAndNewsGrid");

fetch(
  "https://raw.githubusercontent.com/Aimecuador/AimeFacebookPosts/refs/heads/main/posts.json"
)
  .then((response) => response.json())
  .then((posts) => {
    const lastPost = posts.find((post) => post.full_picture);

    if (lastPost && eventsAndNewsGrid) {
      const postHTML = `
        <article
          class="w-full sm:max-w-[300px] hover:scale-[1.02] transition-transform duration-300"
        >
          <a 
            class="h-[300px] w-[300px] aspect-square"
            href="${lastPost.permalink_url}" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src="${lastPost.full_picture}"
              alt="${lastPost.message || "Última noticia"}"
              class="w-full h-full object-cover rounded-md"
            />
          </a>
          <div class="mt-2">
            <a 
              href="${lastPost.permalink_url}" 
              class="font-bold text-lg line-clamp-4 hover:text-primary hover:underline transition-colors duration-100"
            >
              ${lastPost.message || "Última noticia"}
            </a>
            <p class="text-sm text-muted-foreground mt-1">
              ${new Date(lastPost.created_time).toLocaleDateString("es-EC", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </article>
      `.trim();

      eventsAndNewsGrid.insertAdjacentHTML("beforeend", postHTML);
    }
  });
