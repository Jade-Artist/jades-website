import { useMemo } from 'react'
import './Gallery.css'

/* Eagerly import every image under assets/images/ at build time.
   Vite resolves each match to its hashed URL string. */
const allImages = import.meta.glob(
  '../assets/images/**/*.{png,jpg,jpeg,gif,svg,webp}',
  { eager: true, import: 'default' },
)

const TOPICS = {
  'poster-art': 'Poster Art',
  illustrations: 'Illustrations',
  'comic-art': 'Comic Art',
  'traditional-drawings': 'Traditional Drawings',
}

function Gallery({ topic }) {
  const title = TOPICS[topic] ?? topic

  const images = useMemo(() => {
    const prefix = `../assets/images/${topic}/`
    return Object.entries(allImages)
      .filter(([path]) => path.startsWith(prefix))
      .map(([path, src]) => {
        const name = path.split('/').pop().replace(/\.[^.]+$/, '')
        return { src, name }
      })
  }, [topic])

  return (
    <section className="gallery-page">
      <h1>{title}</h1>

      {images.length === 0 ? (
        <p className="gallery-empty">
          No images yet &mdash; add files to{' '}
          <code>src/assets/images/{topic}/</code> to see them here.
        </p>
      ) : (
        <div className="gallery-grid">
          {images.map(({ src, name }) => (
            <figure key={name} className="gallery-item">
              <img src={src} alt={name} loading="lazy" />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery
