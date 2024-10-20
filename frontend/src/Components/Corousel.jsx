import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const images = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1728051557401_gauravguptalivetalkatorastadiumshowwebshowcase1240x300.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1728390794440_bandlanddesktop.jpg",
    "https://i0.wp.com/assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-anubhav-singh-bassi-live-new-show-hyd-0-2023-8-8-t-11-42-34.jpg?fit=770%2C385&ssl=1",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1729061343554_parmishvermawebshowcase1240x300.jpg",
]

export default function InfiniteAutoscrollCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [isPaused, setIsPaused] = React.useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = setInterval(() => {
      if (!isPaused) {
        emblaApi.scrollNext()
      }
    }, 3000) // Scroll every 3 seconds

    return () => clearInterval(autoScroll)
  }, [emblaApi, isPaused])

  return (
    <div className="relative mt-5 w-11/12 mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 bg-whitish rounded-full transform -translate-y-1/2 bg-white/80"
        onClick={scrollPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 bg-whitish rounded-full transform -translate-y-1/2 bg-white/80"
        onClick={scrollNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <button
        variant="outline"
        size="icon"
        className="absolute left-4 text-whitish bottom-4 bg-white/80"
        onClick={togglePause}
        aria-label={isPaused ? "Resume autoscroll" : "Pause autoscroll"}
      >
        {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
      </button>
    </div>
  )
}