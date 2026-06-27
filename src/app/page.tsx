import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Leaf,
  Truck,
  Mountain,
  Compass,
  Heart,
  Star,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products, valuePropositions } from '@/data/products';
import type { ValueProposition } from '@/types';

const iconMap: Record<ValueProposition['icon'], typeof Shield> = {
  shield: Shield,
  leaf: Leaf,
  truck: Truck,
  heart: Heart,
  compass: Compass,
  mountain: Mountain,
};

export default function HomePage() {
  const featuredProducts = products
    .filter((p) => p.badges?.includes('Best Seller') || p.badges?.includes('New'))
    .slice(0, 3);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative h-[90vh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-mountain-camp.jpg"
            alt="Beaconherm tent pitched at golden hour in the Rocky Mountains"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            {/* Brand logo */}
            <div className="mb-8">
              <Image
                src="/images/hero_logo.png"
                alt="Beaconherm"
                width={220}
                height={64}
                sizes="(max-width: 768px) 160px, 220px"
                className="h-14 md:h-16 w-auto max-w-xs"
              />
            </div>

            {/* Tagline badge */}
            <div className="mt-6">
              <Image
                src="/images/hero_badge.png"
                alt="Guiding Light & Shelter for Every Outdoor Journey"
                width={400}
                height={80}
                sizes="(max-width: 768px) 280px, 400px"
                className="h-14 md:h-16 w-auto max-w-full"
              />
            </div>

            <p className="mt-6 text-lg md:text-xl text-stone-200 max-w-xl leading-relaxed">
              From thru-hikes on the Appalachian Trail to summer campouts with the family,
              every Beaconherm tent is engineered in the Rockies and backed by our
              Ironclad Lifetime Warranty.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-sunset-500 hover:bg-sunset-600 text-white h-12 px-7 rounded-lg text-base font-semibold shadow-lg shadow-sunset-500/20 transition-all hover:shadow-xl hover:shadow-sunset-500/30"
                >
                  Shop All Tents
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 rounded-lg text-base font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm"
                >
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-moss-400 to-forest-600 border-2 border-forest-900/50"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-sunset-400 text-sunset-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-300 mt-0.5">
                  Trusted by <span className="font-semibold text-white">12,000+</span>{' '}
                  outdoor enthusiasts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronRight className="h-5 w-5 rotate-90" />
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase">
              Featured Collection
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Built to take you further.
            </h2>
            <p className="mt-4 text-stone-600 text-lg">
              Our most-loved tents — field-tested, guide-approved, and ready for your next
              adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 2} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded-lg border-stone-300 text-stone-800 hover:bg-forest-50 hover:border-forest-400 hover:text-forest-700"
              >
                View All Tents
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ VALUE PROPOSITIONS ============ */}
      <section className="py-20 md:py-28 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase">
              Why Beaconherm
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Gear you can trust. For life.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {valuePropositions.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.id}
                  className="group p-6 rounded-xl bg-stone-50 border border-stone-200 hover:border-forest-300 hover:bg-forest-50/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center mb-5 group-hover:bg-forest-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-stone-900 text-lg">{item.title}</h3>
                  <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/cta-forest.jpg"
            alt="Sunlight through pine forest"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-900/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Your next adventure starts here.
          </h2>
          <p className="mt-5 text-lg text-stone-300 max-w-2xl mx-auto">
            Join thousands of hikers, campers, and explorers who trust Beaconherm to keep
            them sheltered. Free shipping on orders over $150.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-sunset-500 hover:bg-sunset-600 text-white h-12 px-8 rounded-lg text-base font-semibold shadow-lg shadow-sunset-500/20"
              >
                Explore Tents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-lg text-base font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm"
              >
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
