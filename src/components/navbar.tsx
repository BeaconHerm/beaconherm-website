'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-sm shadow-sm border-b border-stone-200'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <Image
                src="/images/logo.png"
                alt="BeaconHerm logo"
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>
            <span
              className={cn(
                'font-bold text-lg tracking-wide transition-colors hidden sm:inline-block',
                scrolled ? 'text-stone-900' : 'text-white'
              )}
            >
              BeaconHerm
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-2',
                    scrolled
                      ? isActive
                        ? 'text-forest-700'
                        : 'text-stone-700 hover:text-forest-700'
                      : isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 right-0 h-0.5',
                        scrolled ? 'bg-forest-600' : 'bg-sunset-400'
                      )}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all bg-forest-600 text-white hover:bg-forest-700 h-9 px-4 shadow-sm"
            >
              Shop Tents
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={cn('h-6 w-6', scrolled ? 'text-stone-900' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', scrolled ? 'text-stone-900' : 'text-white')} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-stone-200/50 bg-stone-50 -mx-4 px-4">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-forest-50 text-forest-700'
                        : 'text-stone-700 hover:bg-stone-100'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/products"
                className="mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium bg-forest-600 text-white hover:bg-forest-700 h-10 px-4 w-full"
              >
                Shop Tents
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
