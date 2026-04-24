"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export interface CarouselProps {
  items: string[];
}

export function CaseStudiesCarousel({ items }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Check if we reached the end (with a small 10px buffer)
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        
        if (isEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex lg:hidden flex-row overflow-x-auto snap-x snap-mandatory gap-20 no-scrollbar"
    >
      {items.map((text, index) => (
        <div
          key={index}
          className="snap-start flex-shrink-0 w-full bg-positivus-dark rounded-positivus p-40 flex flex-col justify-start gap-20"
        >
          <p className="text-p text-positivus-white max-w-286">
            {text}
          </p>
          <Link
            href="/case-studies"
            className="flex items-center gap-15 text-positivus-green hover:opacity-80 transition-opacity w-fit mt-5"
          >
            <span className="text-h4 font-space-grotesk font-normal">Learn more</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16669 15.8333L15.8334 4.16666M15.8334 4.16666V15M15.8334 4.16666H5.00002" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
