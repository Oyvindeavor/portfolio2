'use client'

import { useState } from 'react'
import { Carousel } from '../ui/carousel'
import type { Images as ProjectImage } from '@/types/project'
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { AspectRatio } from '../ui/aspect-ratio'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProjectCarousel({ images }: { images: ProjectImage[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null || !images || images.length === 0) return

    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)
    } else {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  const selectedImage = selectedImageIndex !== null ? images?.[selectedImageIndex] : null

  return (
    <>
      {/* Carousel for project images */}
      {images && images.length > 0 && (
        <Carousel
          className="mb-6 w-full rounded-xl"
          opts={{
            loop: images.length > 1
          }}
        >
          <CarouselContent>
            {images.map((image, index: number) => (
              <CarouselItem key={index} className="flex flex-col">
                <div
                  className="w-full cursor-pointer overflow-hidden border transition-transform hover:scale-[1.01]"
                  onClick={() => openModal(index)}
                >
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt || image.caption || `Project image ${index + 1}`}
                      className="object-cover"
                      fill
                      priority={index === 0}
                    />
                  </AspectRatio>
                </div>
                {image.caption && (
                  <p className="text-muted-foreground mt-2 px-1 text-center text-sm">
                    {image.caption}
                  </p>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="ml-12 max-sm:ml-4" />
              <CarouselNext className="mr-12 max-sm:mr-4" />
            </>
          )}
        </Carousel>
      )}

      {/* Fallback if no images */}
      {(!images || images.length === 0) && (
        <div
          className="cursor-pointer transition-transform hover:scale-[1.02]"
          onClick={() => openModal(0)}
        >
          <AspectRatio ratio={16 / 9} className="bg-muted mb-6 rounded-xl">
            <Image
              src={'/placeholder.svg'}
              alt={'Placeholder image'}
              className="rounded-md object-cover"
              fill
            />
          </AspectRatio>
        </div>
      )}

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="shadow-primary/100 cursor-pointer overflow-hidden border p-0 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl md:min-h-[90vh] md:min-w-[90vw] lg:min-h-[70vh] lg:min-w-[70vw]">
          <DialogTitle className="sr-only">
            {selectedImage?.caption ||
              selectedImage?.alt ||
              `Project image ${(selectedImageIndex || 0) + 1}`}
          </DialogTitle>
          <div className="relative flex h-full items-center justify-center">
            {/* Close button */}

            {/* Navigation buttons */}
            {images && images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-4 z-50 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-4 z-50 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Main image */}
            {selectedImage && (
              <div className="relative flex w-full flex-col items-center justify-center p-8">
                <div className="">
                  <Image
                    src={selectedImage.src || '/placeholder.svg'}
                    alt={selectedImage.alt || selectedImage.caption || 'Project image'}
                    className="object-contain"
                    width={1200}
                    height={600}
                    priority
                  />
                </div>

                {/* Caption */}
                {selectedImage.caption && (
                  <p className="bg-muted mt-4 max-w-2xl rounded-lg p-4 text-center text-sm text-white shadow-lg">
                    {selectedImage.caption}
                  </p>
                )}

                {/* Image counter */}
                {images && images.length > 1 && (
                  <p className="mt-2 text-xs text-white/70">
                    {(selectedImageIndex || 0) + 1} of {images.length}
                  </p>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
