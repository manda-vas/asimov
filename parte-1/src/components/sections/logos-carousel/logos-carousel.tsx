import React from 'react';
import Image from 'next/image';

const logos = [
  { name: 'Amazon', src: '/images/logos/amazon.svg', width: 124, height: 48 },
  { name: 'Dribbble', src: '/images/logos/dribbble.svg', width: 124, height: 48 },
  { name: 'Hubspot', src: '/images/logos/hubspot.svg', width: 124, height: 48 },
  { name: 'Netflix', src: '/images/logos/netflix.svg', width: 124, height: 48 },
  { name: 'Notion', src: '/images/logos/notion.svg', width: 124, height: 48 },
  { name: 'Zoom', src: '/images/logos/zoom.svg', width: 124, height: 48 },
];

export const LogosCarousel = () => {
  const row1Logos = logos.slice(0, 3);
  const row2Logos = logos.slice(3);

  // Desktop all logos
  const desktopLogos = [...logos, ...logos, ...logos];

  // Mobile rows
  const mobileRow1 = [...row1Logos, ...row1Logos, ...row1Logos];
  const mobileRow2 = [...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section className="w-full overflow-hidden px-30 lg:px-100">
      <div
        className="w-full relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        {/* Mobile Layout: Two Rows */}
        <div className="flex flex-col gap-20 lg:hidden">
          {/* Row 1: Left to Right */}
          <div className="flex items-center gap-40 animate-scroll w-max">
            {mobileRow1.map((logo, index) => (
              <div key={`mob-r1-${logo.name}-${index}`} className="flex-shrink-0 grayscale w-[100px]">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={124}
                  height={48}
                  style={{ width: '100%', height: 'auto' }}

                />
              </div>
            ))}
          </div>
          {/* Row 2: Right to Left */}
          <div className="flex items-center gap-40 animate-scroll-reverse w-max">
            {mobileRow2.map((logo, index) => (
              <div key={`mob-r2-${logo.name}-${index}`} className="flex-shrink-0 grayscale w-[100px]">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={124}
                  height={48}
                  style={{ width: '100%', height: 'auto' }}

                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout: Single Row (Left to Right) */}
        <div className="hidden lg:flex items-center gap-100 animate-scroll w-max pr-100">
          {desktopLogos.map((logo, index) => (
            <div key={`desktop-${logo.name}-${index}`} className="flex-shrink-0 grayscale">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                style={{ width: '100%', height: 'auto' }}

              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
