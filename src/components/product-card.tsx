import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Users, Scale, ThermometerSnowflake, ArrowUpRight } from 'lucide-react';
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
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg hover:border-forest-200 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
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

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-stone-900 group-hover:text-forest-700 transition-colors text-lg">
              {product.name}
            </h3>
            <p className="text-sm text-stone-500 mt-0.5 line-clamp-1">
              {product.tagline}
            </p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-stone-400 group-hover:text-forest-600 transition-colors shrink-0 mt-0.5" />
        </div>

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

        {/* Price */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex items-end justify-between">
          <div>
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
            <p className="text-xs text-stone-500 mt-0.5">Free shipping over $150</p>
          </div>
          <span className="text-xs font-medium text-forest-600 group-hover:text-forest-700">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
