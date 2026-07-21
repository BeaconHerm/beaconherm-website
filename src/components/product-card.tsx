import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Scale, ThermometerSnowflake, ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const seasonLabelMap: Record<Product['seasons'], string> = {
  '2-season': '2 Season',
  '3-season': '3 Season',
  '4-season': '4 Season',
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const primaryImage = product.images.find((img) => img.primary) ?? product.images[0];
  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg hover:border-forest-200 transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {product.badges.map((badge) => (
                <Badge
                  key={badge}
                  className={cn(
                    'text-xs font-semibold uppercase tracking-wide',
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
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/10 transition-colors duration-300" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/products/${product.slug}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-stone-900 group-hover:text-forest-700 transition-colors text-lg">
                {product.name}
              </h3>
              <p className="text-sm text-stone-500 mt-0.5 line-clamp-1">
                {product.tagline}
              </p>
            </div>
          </div>
        </Link>

        {/* Quick specs */}
        <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            <span>{product.capacity}P</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Scale className="h-3.5 w-3.5" />
            <span>{product.weight.split(' / ')[1]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ThermometerSnowflake className="h-3.5 w-3.5" />
            <span>{seasonLabelMap[product.seasons]}</span>
          </div>
        </div>

        {/* Price + Amazon CTA */}
        <div className="mt-5 pt-4 border-t border-stone-100 space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-stone-900">
              ${product.price}
            </span>
            {isOnSale && (
              <span className="text-sm text-stone-400 line-through">
                ${product.compareAtPrice}
              </span>
            )}
          </div>

          {product.amazonUrl ? (
            <Button
              asChild
              size="sm"
              className="w-full bg-[#FF9900] hover:bg-[#e88b00] text-stone-900 font-semibold h-9 rounded-lg transition-colors"
            >
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-4 w-4" />
                Buy on Amazon
              </a>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full h-9 rounded-lg"
            >
              <Link href={`/products/${product.slug}`}>View Details</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
