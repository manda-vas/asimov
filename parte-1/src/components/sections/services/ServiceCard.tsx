import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  title: string | string[];
  image: string;
  imageAlt: string;
  href: string;
  variant: 'light' | 'accent' | 'dark';
}

const variantStyles = {
  light: {
    card: 'bg-positivus-grey border-positivus-dark',
    badge: 'green' as const,
    ctaIconBg: 'bg-positivus-dark',
    ctaIconFile: '/icons/arrow-green.png',
    ctaText: 'text-positivus-black',
  },
  accent: {
    card: 'bg-positivus-green border-positivus-dark',
    badge: 'white' as const,
    ctaIconBg: 'bg-positivus-dark',
    ctaIconFile: '/icons/arrow-green.png',
    ctaText: 'text-positivus-black',
  },
  dark: {
    card: 'bg-positivus-dark border-positivus-dark',
    badge: 'green' as const,
    ctaIconBg: 'bg-positivus-white',
    ctaIconFile: '/icons/arrow-black.png',
    ctaText: 'text-positivus-white',
  },
};

export const ServiceCard = ({ title, image, imageAlt, href, variant }: ServiceCardProps) => {
  const styles = variantStyles[variant];
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <div className={`flex flex-col lg:flex-row justify-between p-50 rounded-positivus border ${styles.card} shadow-card h-auto lg:h-310 w-full max-w-600 transition-all`}>
      {/* Title + Desktop CTA Container */}
      <div className="flex flex-col justify-between items-start">
        {/* Title Group */}
        <h3 className="text-h3-mob lg:text-h3 flex flex-col items-start">
          {titleLines.map((line, idx) => (
            <Badge key={idx} variant={styles.badge}>
              {line}
            </Badge>
          ))}
        </h3>

        {/* Desktop CTA (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <Link
            href={href}
            className="flex items-center gap-15 group outline-none focus-visible:ring-2 focus-visible:ring-positivus-green rounded-lg"
          >
            <div className={`w-41 h-41 rounded-full flex items-center justify-center flex-shrink-0 ${styles.ctaIconBg}`}>
              <img
                src={styles.ctaIconFile}
                alt="Arrow icon"
                width={21}
                height={21}
                style={{ width: 'auto', height: 'auto' }}
                className="w-auto h-auto object-contain"
              />
            </div>
            <span className={`text-p font-normal whitespace-nowrap ${styles.ctaText} group-hover:underline`}>
              Learn more
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile CTA + Image Container */}
      <div className="flex flex-row lg:flex-col items-end lg:items-end justify-between lg:justify-center mt-35 lg:mt-0 w-full lg:w-auto">
        {/* Mobile CTA (Hidden on Desktop) */}
        <div className="lg:hidden">
          <Link
            href={href}
            className="flex items-center gap-15 group outline-none"
          >
            <div className={`w-41 h-41 rounded-full flex items-center justify-center flex-shrink-0 ${styles.ctaIconBg}`}>
              <img
                src={styles.ctaIconFile}
                alt="Arrow icon"
                width={21}
                height={21}
                style={{ width: 'auto', height: 'auto' }}
                className="w-auto h-auto object-contain"
              />
            </div>
            <span className={`hidden sm:inline text-p font-normal ${styles.ctaText}`}>
              Learn more
            </span>
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-165 lg:w-210 aspect-square">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
