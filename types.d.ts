export type FacebookPost = {
  message?: string
  full_picture?: string
  created_time: string
  permalink_url: string
  attachments?: {
    data: {
      type: string
      media?: {
        image?: {
          src: string
        }
      }
      subattachments?: {
        data: {
          type: string
          media?: {
            image?: {
              src: string
            }
          }
        }[]
      }
    }[]
  }
}
