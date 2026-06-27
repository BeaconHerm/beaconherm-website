import type { Metadata } from 'next';
import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import { Filter, Grid3X3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Tents — Backpacking, Family Camping & Expedition',
  description:
    'Browse the full Beaconherm tent collection. From ultralight backpacking shelters to family cabin tents and 4-season expedition gear. Free shipping over $150.',
};

// SSG: generate static page at build time
export const dynamic = 'force-static';

const categories = [
  { id: 'all', label: 'All Tents', count: products.length },
  {
    id: 'backpacking',
    label: 'Backpacking',
    count: products.filter((p) => p.category === 'backpacking').length,
  },
  {
    id: 'family-camping',
    label: 'Family Camping',
    count: products.filter((p) => p.category === 'family-camping').length,
  },
  {
    id: 'expedition',
    label: 'Expedition',
    count: products.filter((p) => p.category === 'expedition').length,
  },
  {
    id: 'shelter',
    label: 'Shelters & Bivies',
    count: products.filter((p) => p.category === 'shelter').length,
  },
];

const capacities = [
  { label: '1 Person', value: 1 },
  { label: '2 Person', value: 2 },
  { label: '3–4 Person', value: 3 },
  { label: '5+ Person', value: 5 },
];

const seasons = ['3-season', '4-season'];

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-forest-800 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(116,198,157,0.15),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              All Tents
            </h1>
            <p className="mt-4 text-lg text-stone-300 max-w-2xl">
              Every tent we make, in one place. Filter by activity, capacity, or season
              to find your perfect shelter.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar filters */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="sticky top-28 space-y-8">
                {/* Category */}
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Category
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors hover:bg-stone-100 text-stone-700 hover:text-forest-700"
                        >
                          <span>{cat.label}</span>
                          <span className="text-xs text-stone-400">{cat.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-stone-200" />

                {/* Capacity */}
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">
                    Capacity
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {capacities.map((cap) => (
                      <li key={cap.value}>
                        <label className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-stone-100 rounded-md text-sm text-stone-700">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-stone-300 text-forest-600 focus:ring-forest-500"
                          />
                          {cap.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-stone-200" />

                {/* Season */}
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">
                    Season Rating
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {seasons.map((season) => (
                      <li key={season}>
                        <label className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-stone-100 rounded-md text-sm text-stone-700 capitalize">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-stone-300 text-forest-600 focus:ring-forest-500"
                          />
                          {season}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1 min-w-0">
              {/* Sort bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                <p className="text-sm text-stone-600">
                  Showing <span className="font-semibold text-stone-900">{products.length}</span>{' '}
                  products
                </p>
                <div className="flex items-center gap-2">
                  <Grid3X3 className="h-4 w-4 text-stone-400" />
                  <select
                    className="text-sm bg-white border border-stone-200 rounded-md px-3 py-1.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    defaultValue="featured"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low → High</option>
                    <option value="price-high">Price: High → Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {products.map((product, i) => (
                  <ProductCard key={product.id} product={product} priority={i < 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
