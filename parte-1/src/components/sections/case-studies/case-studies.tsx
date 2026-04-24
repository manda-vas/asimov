import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { CaseStudiesCarousel } from './case-studies-carousel';

const caseStudies = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
];

export const CaseStudies = () => {
  return (
    <section className="px-30 lg:px-100 pt-70 flex flex-col gap-40 lg:gap-80">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-center gap-40 text-center lg:text-left">
        <h2 className="flex-shrink-0 text-h2-mob lg:text-h2 flex flex-col items-center lg:items-start">
          <Badge>Case Studies</Badge>
        </h2>
        <p className="max-w-580 text-p-mob lg:text-p font-normal">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <CaseStudiesCarousel items={caseStudies} />

      <div className="hidden lg:flex flex-row bg-positivus-dark rounded-positivus divide-x divide-positivus-white px-60 py-70 max-h-326">
        {caseStudies.map((text, index) => (
          <div
            key={index}
            className="flex-1 px-60 first:pl-0 last:pr-0 flex flex-col justify-start gap-20"
          >
            <p className="text-p text-positivus-white max-w-286">
              {text}
            </p>
            <Link
              href="/case-studies"
              className="flex items-center gap-15 text-positivus-green hover:opacity-80 transition-opacity w-fit"
            >
              <span className="text-h4 font-space-grotesk font-normal">Learn more</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16669 15.8333L15.8334 4.16666M15.8334 4.16666V15M15.8334 4.16666H5.00002" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
