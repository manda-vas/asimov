import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-100 gap-y-35 px-30 lg:px-100 items-center font-space-grotesk">
      {/* Left Column: Grouped for desktop, interleaved for mobile via contents */}
      <div className="contents lg:flex lg:flex-col lg:gap-35 lg:max-w-531 lg:col-start-1 lg:row-start-1">
        <h1 className="text-h1-mob lg:text-h1 font-medium leading-tight order-1">
          Navigating the digital landscape for success
        </h1>

        <p className="text-h4-mob lg:text-h4 font-normal order-3 max-w-498">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>

        <div className="order-4">
          <Button variant="primary" className="w-full lg:w-auto">
            Book a consultation
          </Button>
        </div>
      </div>

      {/* Right Column: Illustration Image */}
      <div className="order-2 lg:col-start-2 lg:row-start-1 flex justify-center lg:justify-end w-full max-w-600 lg:ml-auto">
        <Image
          src="/images/hero-illustration.svg"
          alt="Illustration showing a team navigating digital marketing landscapes"
          width={600}
          height={515}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};
