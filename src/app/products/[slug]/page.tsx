import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Scale,
  ThermometerSnowflake,
  Ruler,
  Mountain,
  ShieldCheck,
  Truck,
  ArrowLeft,
  Check,
  ChevronRight,
} from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { cn } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    openGraph: {
      title: `${product.name} — BeaconHerm`,
      description: product.description,
      images: product.images[0] ? [product.images[0].src] : [],
    },
  };
}

export const dynamic = 'force-static';

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const primaryImage = product.images.find((img) => img.primary) ?? product.images[0];
  const galleryImages = product.images;
  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-1.5 text-sm text-stone-500">
            <Link href="/" className="hover:text-forest-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/products"
              className="hover:text-forest-700 transition-colors"
            >
              All Tents
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-stone-700 font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                <Image
                  src={primaryImage.src}
                  alt={primaryImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {product.badges && product.badges.length > 0 && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className={cn(
                          'text-xs font-semibold uppercase tracking-wide px-3 py-1',
                          badge === 'Sale' &&
                            'bg-sunset-500 text-white hover:bg-sunset-500',
                          badge === 'New' &&
                            'bg-forest-600 text-white hover:bg-forest-600',
                          badge === 'Best Seller' &&
                            'bg-stone-900 text-white hover:bg-stone-900'
                        )}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-3">
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      className={cn(
                        'relative w-20 h-16 rounded-lg overflow-hidden border-2 bg-stone-100 transition-all',
                        i === 0
                          ? 'border-forest-600 ring-2 ring-forest-200'
                          : 'border-stone-200 hover:border-stone-400'
                      )}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div>
              <div>
                <p className="text-sm font-semibold text-forest-600 uppercase tracking-wide">
                  {product.category.replace('-', ' ')}
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                  {product.name}
                </h1>
                <p className="mt-2 text-lg text-stone-600">{product.tagline}</p>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-stone-900">
                  ${product.price}
                </span>
                {isOnSale && (
                  <>
                    <span className="text-xl text-stone-400 line-through">
                      ${product.compareAtPrice}
                    </span>
                    <Badge className="bg-sunset-500 hover:bg-sunset-500 text-white">
                      Save ${product.compareAtPrice! - product.price}
                    </Badge>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key specs */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-stone-50 rounded-xl text-center">
                  <Users className="h-6 w-6 mx-auto text-forest-600" />
                  <p className="mt-2 text-sm font-semibold text-stone-900">
                    {product.capacity} Person
                  </p>
                  <p className="text-xs text-stone-500">Capacity</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl text-center">
                  <Scale className="h-6 w-6 mx-auto text-forest-600" />
                  <p className="mt-2 text-sm font-semibold text-stone-900">
                    {product.weight.split(' / ')[0]}
                  </p>
                  <p className="text-xs text-stone-500">Weight</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl text-center">
                  <ThermometerSnowflake className="h-6 w-6 mx-auto text-forest-600" />
                  <p className="mt-2 text-sm font-semibold text-stone-900 capitalize">
                    {product.seasons}
                  </p>
                  <p className="text-xs text-stone-500">Season Rating</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl text-center">
                  <Mountain className="h-6 w-6 mx-auto text-forest-600" />
                  <p className="mt-2 text-sm font-semibold text-stone-900">
                    {product.specs.find((s) => s.label === 'Peak Height')?.value ?? '—'}
                  </p>
                  <p className="text-xs text-stone-500">Peak Height</p>
                </div>
              </div>

              {/* Buy on Amazon */}
              <div className="mt-8">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center gap-3 w-full bg-[#FF9900] hover:bg-[#e88b00] text-stone-900 h-14 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M.045 18.02c.072-.115.187-.124.347-.025 2.944 1.76 6.147 2.66 9.61 2.66 2.96 0 5.87-.68 8.73-2.04.25-.11.44-.07.56.12.13.19.07.37-.19.54-2.7 1.68-5.77 2.52-9.2 2.52-3.46 0-6.74-.88-9.84-2.64-.14-.08-.2-.16-.17-.24.03-.08.08-.14.16-.2v.3zm11.84-2.8c.14 0 .25.04.33.12.36.44.76.78 1.2 1.02.44.24.96.36 1.56.36.44 0 .84-.08 1.2-.24.36-.16.64-.36.84-.6.2-.24.32-.48.36-.72.04-.24-.04-.44-.24-.6-.2-.16-.56-.32-1.08-.48l-1.44-.44c-.72-.22-1.24-.52-1.56-.9-.32-.38-.44-.84-.36-1.38.08-.54.28-1 .6-1.36.32-.36.72-.64 1.2-.84.48-.2 1-.3 1.56-.3.4 0 .76.04 1.08.12.32.08.6.2.84.36.24.16.44.36.6.6.16.24.24.52.24.84 0 .24-.08.36-.24.36h-1.44c0-.12.04-.24.12-.36.08-.12.08-.24 0-.36-.16-.24-.44-.44-.84-.6-.4-.16-.84-.16-1.32 0-.36.12-.64.32-.84.6-.2.28-.28.6-.24.96.04.28.2.48.48.6.28.12.72.28 1.32.44.72.2 1.28.44 1.68.72.4.28.68.6.84.96.16.36.2.76.12 1.2-.08.44-.28.84-.6 1.2-.32.36-.72.64-1.2.84-.48.2-1.04.3-1.68.3-.6 0-1.12-.08-1.56-.24-.44-.16-.8-.4-1.08-.72-.28-.32-.48-.68-.6-1.08-.12-.4-.12-.8 0-1.2.04-.16.12-.24.24-.24h1.32c.08 0 .12.04.12.12v.12c-.04.24-.04.48 0 .72.04.24.16.44.36.6.2.16.52.24.96.24.4 0 .72-.08.96-.24.24-.16.36-.36.36-.6 0-.2-.08-.36-.24-.48-.16-.12-.48-.24-.96-.36l-1.32-.4c-.72-.22-1.24-.52-1.56-.9-.32-.38-.44-.84-.36-1.38.08-.54.28-1 .6-1.36.32-.36.72-.64 1.2-.84.48-.2 1-.3 1.56-.3.4 0 .76.04 1.08.12.32.08.6.2.84.36.24.16.44.36.6.6.16.24.24.52.24.84 0 .24-.08.36-.24.36h-1.44c0-.12.04-.24.12-.36.08-.12.08-.24 0-.36-.16-.24-.44-.44-.84-.6-.4-.16-.84-.16-1.32 0-.36.12-.64.32-.84.6-.2.28-.28.6-.24.96.04.28.2.48.48.6.28.12.72.28 1.32.44.72.2 1.28.44 1.68.72.4.28.68.6.84.96.16.36.2.76.12 1.2-.08.44-.28.84-.6 1.2-.32.36-.72.64-1.2.84-.48.2-1.04.3-1.68.3-.6 0-1.12-.08-1.56-.24-.44-.16-.8-.4-1.08-.72-.28-.32-.48-.68-.6-1.08-.12-.4-.12-.8 0-1.2.04-.16.12-.24.24-.24h1.32c.08 0 .12.04.12.12v.12c-.04.24-.04.48 0 .72.04.24.16.44.36.6.2.16.52.24.96.24.4 0 .72-.08.96-.24.24-.16.36-.36.36-.6 0-.2-.08-.36-.24-.48-.16-.12-.48-.24-.96-.36l-1.32-.4c-.72-.22-1.24-.52-1.56-.9-.32-.38-.44-.84-.36-1.38.08-.54.28-1 .6-1.36.32-.36.72-.64 1.2-.84.48-.2 1-.3 1.56-.3.4 0 .76.04 1.08.12.32.08.6.2.84.36.24.16.44.36.6.6.16.24.24.52.24.84 0 .24-.08.36-.24.36h-1.44c0-.12.04-.24.12-.36.08-.12.08-.24 0-.36-.16-.24-.44-.44-.84-.6-.4-.16-.84-.16-1.32 0-.36.12-.64.32-.84.6-.2.28-.28.6-.24.96.04.28.2.48.48.6.28.12.72.28 1.32.44.72.2 1.28.44 1.68.72.4.28.68.6.84.96.16.36.2.76.12 1.2-.08.44-.28.84-.6 1.2-.32.36-.72.64-1.2.84-.48.2-1.04.3-1.68.3-.6 0-1.12-.08-1.56-.24-.44-.16-.8-.4-1.08-.72-.28-.32-.48-.68-.6-1.08-.12-.4-.12-.8 0-1.2.04-.16.12-.24.24-.24h1.32c.08 0 .12.04.12.12v.12c-.04.24-.04.48 0 .72.04.24.16.44.36.6.2.16.52.24.96.24.4 0 .72-.08.96-.24.24-.16.36-.36.36-.6 0-.2-.08-.36-.24-.48-.16-.12-.48-.24-.96-.36l-1.32-.4c-.72-.22-1.24-.52-1.56-.9-.32-.38-.44-.84-.36-1.38.08-.54.28-1 .6-1.36.32-.36.72-.64 1.2-.84.48-.2 1-.3 1.56-.3.4 0 .76.04 1.08.12.32.08.6.2.84.36.24.16.44.36.6.6.16.24.24.52.24.84 0 .24-.08.36-.24.36h-1.44c0-.12.04-.24.12-.36.08-.12.08-.24 0-.36-.16-.24-.44-.44-.84-.6-.4-.16-.84-.16-1.32 0-.36.12-.64.32-.84.6-.2.28-.28.6-.24.96.04.28.2.48.48.6.28.12.72.28 1.32.44.72.2 1.28.44 1.68.72.4.28.68.6.84.96.16.36.2.76.12 1.2-.08.44-.28.84-.6 1.2-.32.36-.72.64-1.2.84-.48.2-1.04.3-1.68.3z"/>
                  </svg>
                  Buy on Amazon
                </a>
                <p className="mt-3 text-center text-xs text-stone-500">
                  Ships free with Prime • 30-day returns
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-forest-600" />
                  <span>Lifetime warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-forest-600" />
                  <span>Free shipping over $150</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-forest-600" />
                  <span>30-day returns</span>
                </div>
              </div>

              {/* Setup video */}
              {product.videoUrl && (
                <div className="mt-10 pt-8 border-t border-stone-200">
                  <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-600" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Setup Tutorial
                  </h2>
                  <p className="mt-2 text-sm text-stone-600">
                    Watch how to pitch the {product.name} in minutes.
                  </p>
                  <div className="mt-4 aspect-video rounded-xl overflow-hidden bg-stone-100">
                    <iframe
                      src={product.videoUrl}
                      title={`${product.name} Setup Tutorial`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Full specs + features */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="text-xl font-bold text-stone-900">Specifications</h2>
              <div className="mt-4 rounded-xl border border-stone-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}
                      >
                        <td className="px-4 py-3 font-medium text-stone-600 w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-stone-900 font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 bg-stone-50 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
                  You may also like
                </h2>
                <p className="mt-2 text-stone-600">
                  Explore more tents in this category.
                </p>
              </div>
              <Link
                href="/products"
                className="hidden md:inline-flex items-center text-sm font-semibold text-forest-600 hover:text-forest-700"
              >
                View all <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
