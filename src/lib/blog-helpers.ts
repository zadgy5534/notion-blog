export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getTagLink = (tag: string) => {
  return `/blog/tag/${encodeURIComponent(tag)}`
}

export const getBeforeLink = (date: string) => {
  return `/blog/before/${date}`
}

export const getDateStr = date => {
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
}

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = slug => {
  if (typeof slug !== 'string') return slug

  const startingSlash = slug.startsWith('/')
  const endingSlash = slug.endsWith('/')

  if (startingSlash) {
    slug = slug.substr(1)
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1)
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug
}

export const isYouTubeURL = (url: URL): boolean => {
  if (['www.youtube.com', 'youtu.be'].includes(url.hostname)) {
    return true
  }
  return false
}

export const parseYouTubeVideoId = (url: URL): string => {
  if (!isYouTubeURL(url)) return ''

  if (url.hostname === 'youtu.be') {
    return url.pathname.split('/')[1]
  } else if (url.pathname === '/watch') {
    return url.searchParams.get('v')
  } else {
    const elements = url.pathname.split('/')

    if (elements.length < 2) return ''

    if (elements[1] === 'v' || elements[1] === 'embed') {
      return elements[2]
    }
  }

  return ''
}
