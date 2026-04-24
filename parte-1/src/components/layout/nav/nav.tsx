import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HamburgerMenu } from './hamburger-menu';

export const Nav = () => {
  const links = [
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="w-full relative bg-positivus-white z-50">
      <div className="max-w-1440 mx-auto w-full">
        <nav className="flex items-center justify-between px-30 lg:px-100 pt-30 font-space-grotesk">
          <Link href="/" className="flex-shrink-0">
            <div className="w-full">
              <Image
                src="/images/logos/logo.svg"
                alt="Positivus Logo"
                width={197}
                height={36}
                priority
                style={{ width: 220, height: 'auto' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-40">
            <div className="flex items-center gap-40 text-h4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-positivus-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button variant="outline">
              Request a quote
            </Button>
          </div>

          {/* Mobile Navigation (Client Component) */}
          <HamburgerMenu links={links} />
        </nav>
      </div>
    </header>
  );
};
