import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data/products';
import {
  Instagram,
  Facebook,
  Youtube,
  Share2,
} from 'lucide-react';

const socialIconMap: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  pinterest: Share2,
};

const footerLinks = {
  Shop: [
    { label: 'All Tents', href: '/products' },
    { label: 'Backpacking', href: '/products?category=backpacking' },
    { label: 'Family Camping', href: '/products?category=family-camping' },
    { label: 'Expedition', href: '/products?category=expedition' },
    { label: 'Shelters & Bivies', href: '/products?category=shelter' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Team', href: '/about#team' },
    { label: 'Contact', href: '/contact' },
  ],
  Support: [
    { label: 'Warranty', href: '/about#warranty' },
    { label: 'Shipping & Returns', href: '/contact' },
    { label: 'FAQ', href: '/contact' },
    { label: 'Care Instructions', href: '/about' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-forest-900 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo.png"
                  alt="BeaconHerm logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-white tracking-wide">
                BeaconHerm
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-sm">
              Premium outdoor tents designed in Boulder, Colorado. Built for thru-hikers,
              families, and alpinists who demand gear that lasts a lifetime.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.platform];
                if (!Icon) return null;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-700 transition-colors"
                    aria-label={link.platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-semibold text-white text-sm tracking-wide uppercase">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-moss-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-forest-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-moss-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-white">Email</div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-stone-400 hover:text-moss-400 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-moss-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-white">Phone</div>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-stone-400 hover:text-moss-400 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-moss-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-medium text-white">Headquarters</div>
              <p className="text-stone-400">
                {contactInfo.address.street}
                <br />
                {contactInfo.address.city}, {contactInfo.address.state}{' '}
                {contactInfo.address.zip}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-forest-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} BeaconHerm Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
