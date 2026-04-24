import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <section className="px-20 lg:px-100">
      <div className="bg-positivus-grey rounded-positivus p-50 lg:p-60 flex flex-col lg:flex-row items-center justify-between relative overflow-visible max-w-1240 mx-auto w-full lg:h-347">
        <div className="flex flex-col items-start text-left lg:w-500 z-10 gap-20">
          <h3 className="text-h3-mob lg:text-h3 font-medium text-positivus-black">
            Let&apos;s make things happen
          </h3>
          <p className="text-p-mob lg:text-p font-normal text-positivus-black max-w-500">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <Button variant="primary">
            Get your free proposal
          </Button>
        </div>

        {/* Image Group - Hidden on mobile, overflowing vertically on desktop */}
        <div className="hidden lg:block absolute right-60 top-1/2 -translate-y-1/2 w-494 h-394 pointer-events-none">
          <Image
            src="/images/things-happen.svg"
            alt="Um personagem de desenho animado preto e circular com olhos ovais brancos, cercado por anéis planetários pretos finos. Acima, há uma grande estrela de pontas pretas finas; abaixo, uma forma de estrela de quatro pontas verde-limão sólida; e à direita, uma forma de estrela cinza-clara de pontas grossas e sólidas."
            width={494}
            height={394}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};
