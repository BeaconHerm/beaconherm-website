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
  Minus,
  Plus,
  ShoppingCart,
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
      title: `${product.name} — Beaconherm`,
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

              {/* Add to cart (future e-commerce) */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    className="p-3 text-stone-500 hover:text-stone-700 hover:bg-stone-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 font-semibold text-stone-900">1</span>
                  <button
                    type="button"
                    className="p-3 text-stone-500 hover:text-stone-700 hover:bg-stone-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 bg-forest-600 hover:bg-forest-700 text-white h-12 rounded-lg font-semibold shadow-sm"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
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
