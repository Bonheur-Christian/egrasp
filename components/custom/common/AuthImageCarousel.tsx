"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface AuthImageCarouselProps {
  slides?: Slide[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const defaultSlides: Slide[] = [
  {
    src: "/images/auth-1.jpg",
    alt: "Students learning together",
    title: "Learn Together, Grow Together",
    description:
      "Join a vibrant community of learners sharing knowledge and skills",
  },
  {
    src: "/images/auth-2.jpg",
    alt: "Skill sharing community",
    title: "Share Your Skills, Inspire Others",
    description:
      "Connect with peers and mentors in a collaborative learning environment",
  },
  {
    src: "/images/auth-3.jpg",
    alt: "Online learning platform",
    title: "Master New Skills at Your Pace",
    description:
      "Access courses, workshops, and resources tailored to your learning journey",
  },
];

export default function AuthImageCarousel({
  slides = defaultSlides,
  autoRotate = true,
  rotateInterval = 4000,
}: AuthImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval, slides.length]);

  return (
    <div className="md:w-1/2 relative min-h-100 md:min-h-screen overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0  bg-primary/70  z-10"></div>

      {/* Image slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Content with smooth transitions */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${
              index === currentImageIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              {slide.title}
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-lg">
              {slide.description}
            </p>
          </div>
        ))}
        {/* Dots indicator */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/40 w-1.5 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
