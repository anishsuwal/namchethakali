import { useEffect, useRef, useState } from 'react'
import { reelStills, reelVideoSrc, restaurant } from '../data/restaurant'
import './VideoSection.css'

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canPlayVideo, setCanPlayVideo] = useState(Boolean(reelVideoSrc))
  const [activeStill, setActiveStill] = useState(0)

  useEffect(() => {
    if (!reelVideoSrc) return
    const video = videoRef.current
    if (!video) return

    const fail = () => setCanPlayVideo(false)
    video.addEventListener('error', fail)
    return () => video.removeEventListener('error', fail)
  }, [])

  useEffect(() => {
    if (canPlayVideo) return
    const id = window.setInterval(() => {
      setActiveStill((current) => (current + 1) % reelStills.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [canPlayVideo])

  return (
    <section className="section reels" id="reels">
      <div className="container reels-layout">
        <div className="reels-copy">
          <span className="section-label">On Instagram</span>
          <h2 className="section-title">Moments from our reels</h2>
          <p className="section-copy">
            A glimpse of the food, the entrance, and the mood at Namche Thakali — follow us for
            daily specials and behind-the-scenes.
          </p>
          <a
            className="btn btn-dark"
            href={restaurant.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on Instagram
          </a>
          {!reelVideoSrc && (
            <p className="edit-note">
              [EDIT] Add your Reel as public/videos/reel.mp4 and set reelVideoSrc in
              src/data/restaurant.ts
            </p>
          )}
        </div>

        <div className="reels-stage">
          <div className="phone-frame">
            {canPlayVideo && reelVideoSrc ? (
              <video
                ref={videoRef}
                className="reel-media"
                src={reelVideoSrc}
                controls
                playsInline
                preload="metadata"
                poster={reelStills[0].src}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="reel-still-wrap">
                {reelStills.map((still, index) => (
                  <img
                    key={still.src}
                    src={still.src}
                    alt={still.alt}
                    className={`reel-still ${index === activeStill ? 'is-active' : ''}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
                <div className="reel-dots" aria-hidden="true">
                  {reelStills.map((still, index) => (
                    <span
                      key={still.src}
                      className={index === activeStill ? 'is-active' : undefined}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
