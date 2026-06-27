import type { Metadata } from 'next';
import Image from 'next/image';
import { Mountain, Target, Heart, Shield, Award, Users, Compass } from 'lucide-react';
import { teamMembers } from '@/data/products';

export const metadata: Metadata = {
  title: 'About Us — Our Story, Mission & Team',
  description:
    'Meet Beaconherm Limited — founded in Boulder, Colorado by lifelong outdoors people. Learn about our mission, values, and the team behind every tent we build.',
};

export const dynamic = 'force-static';

const values = [
  {
    icon: Target,
    title: 'Uncompromising Quality',
    description:
      'We use only the best materials — DAC poles, ripstop silnylon, YKK zippers — and test every design through 10,000+ simulated storm cycles.',
  },
  {
    icon: Heart,
    title: 'Built for Real People',
    description:
      'Our tents are designed by people who actually use them — thru-hikers, guides, rangers, and parents. No marketing fluff, just honest gear.',
  },
  {
    icon: Shield,
    title: 'Lifetime Commitment',
    description:
      'Our Ironclad Lifetime Warranty covers defects for life. And if you tear it on a bush? We fix it for a fair price — forever.',
  },
  {
    icon: Award,
    title: 'Responsibly Made',
    description:
      'bluesign®-approved fabrics, recycled materials where possible, and a gear take-back program. We build tents to last — because throwaway gear belongs in the last century.',
  },
];

const milestones = [
  { year: '2012', label: 'Founded in a Boulder garage', desc: 'Marcus Hale builds the first ten Summit Pro tents by hand.' },
  { year: '2015', label: 'First retail partnership', desc: 'Beaconherm launches in 20 outdoor shops across Colorado and Utah.' },
  { year: '2018', label: 'Expedition line launches', desc: 'The Northridge series becomes the tent of choice for alpine guides.' },
  { year: '2021', label: 'bluesign® certified supply chain', desc: 'Every fabric mill and factory in our supply chain earns bluesign® approval.' },
  { year: '2024', label: 'Gear Take-Back Program', desc: 'We launch a repair-and-recycle program to keep tents out of landfills.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about/about-hero.jpg"
            alt="Beaconherm team setting up tents at a mountain basecamp"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/60 to-forest-900/80" />
        </div>
        <div className="relative z-10 h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-center">
          <span className="text-sm font-semibold text-moss-400 tracking-wide uppercase">
            About Beaconherm
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Gear built by people{' '}
            <span className="text-moss-400">who sleep outside.</span>
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl mx-auto">
            We started in a Boulder garage in 2012 with one belief: outdoor gear should be
            built to last, priced fairly, and backed by people who actually use it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about/founder-story.jpg"
                  alt="Marcus Hale, Beaconherm founder, on a mountain ridge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-sunset-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">12+</p>
                <p className="text-sm font-medium">Years building tents</p>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                Born in the Wind Rivers.
              </h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Beaconherm started with a winter traverse of Wyoming&apos;s Wind River
                  Range. Our founder, Marcus Hale — a former park ranger and lifelong
                  mountaineer — grew frustrated with the options on the market: cheap
                  tents that failed in storms, and premium ones that cost a month&apos;s rent.
                </p>
                <p>
                  He came home, bought a sewing machine, and started building tents in his
                  garage. The first ten Summit Pro 2P tents sold out in a week. Word
                  spread, and a year later we outgrew the garage.
                </p>
                <p>
                  Today, Beaconherm is still headquartered in Boulder, Colorado. We&apos;re a
                  small team of climbers, hikers, rangers, and parents — and every tent we
                  ship is one we&apos;d take on our own trips.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-3xl font-bold text-forest-700">12,000+</p>
                  <p className="text-sm text-stone-500 mt-1">Happy customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-forest-700">40+</p>
                  <p className="text-sm text-stone-500 mt-1">Retail partners</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-forest-700">6</p>
                  <p className="text-sm text-stone-500 mt-1">Tent models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase">
              Our Mission
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Build gear that lasts. Inspire people to go outside.
            </h2>
            <p className="mt-4 text-stone-600">
              We&apos;re not the biggest tent company. We&apos;re the one that cares the most —
              about our gear, our customers, and the places we all love to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-7 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center mb-5">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-stone-900 text-xl">{value.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase">
              Milestones
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              A decade of better tents.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2" />
            <div className="space-y-10">
              {milestones.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-forest-600 ring-4 ring-stone-50 mt-1.5" />
                  <div className="md:w-1/2 pl-10 md:pl-0 md:px-8">
                    <p className="text-sm font-bold text-sunset-500">{item.year}</p>
                    <h3 className="mt-1 font-semibold text-stone-900 text-lg">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-stone-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase">
              Meet the Team
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              The people behind every tent.
            </h2>
            <p className="mt-4 text-stone-600">
              A small crew of climbers, hikers, scientists, and designers — united by a
              love of the outdoors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative aspect-square bg-stone-200 overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-stone-900 text-lg">{member.name}</h3>
                  <p className="text-sm font-medium text-forest-600 mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-10 w-10 text-moss-400 mx-auto" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Join the Beaconherm community.
          </h2>
          <p className="mt-4 text-stone-300 max-w-xl mx-auto">
            Sign up for trail reports, new gear drops, and stories from the field. No
            spam, just good stuff.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-sunset-500 text-white font-semibold hover:bg-sunset-600 transition-colors shadow-lg shadow-sunset-500/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
