export function fileToCompressedDataUrl(file, maxWidth = 800, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width)
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(img.width * scale)
        canvas.height = Math.round(img.height * scale)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        let out = canvas.toDataURL(file.type === 'image/png' ? 'image/png' : 'image/jpeg', quality)
        resolve(out)
      }
      img.onerror = () => reject(new Error("Rasmni o'qib bo'lmadi"))
      img.src = e.target.result
    }
    reader.onerror = () => reject(new Error("Faylni o'qib bo'lmadi"))
    reader.readAsDataURL(file)
  })
}

export function getYouTubeVideoId(url) {
  if (!url) return ''
  try {
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0] || ''
    if (url.includes('youtube.com/watch')) {
      return new URLSearchParams(url.split('?')[1]).get('v') || ''
    }
    if (url.includes('youtube.com/embed/')) return url.split('/embed/')[1]?.split('?')[0] || ''
    if (url.includes('/shorts/')) return url.split('/shorts/')[1]?.split('?')[0] || ''
    return ''
  } catch {
    return ''
  }
}

export function getYouTubeThumbnail(url) {
  const id = getYouTubeVideoId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
}

export function getYouTubeEmbed(url) {
  const id = getYouTubeVideoId(url)
  return id ? `https://www.youtube.com/embed/${id}` : ''
}
