import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Share2,
  Send,
  MessageCircle,
  Compass,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { contactInfo, socialLinks } from '@/data/products';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description:
    'Have questions about our tents, warranty, or an order? Reach out to the Beaconherm team. We reply to every email within one business day.',
};

export const dynamic = 'force-static';

const socialIconMap: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  pinterest: Share2,
};

const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Most orders ship within 24 business hours from our Boulder, CO warehouse. Standard shipping takes 3–5 business days in the contiguous US. Expedited options are available at checkout.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day trial period. If you don\'t love your tent, return it in new condition for a full refund. We also offer a lifetime warranty against manufacturing defects.',
  },
  {
    q: 'How do I care for my tent?',
    a: 'Always allow your tent to dry completely before storage. Clean with a soft brush and mild soap — never use a washing machine. Store loosely (not in its stuff sack) for long periods.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'We currently ship to the United States and Canada. For international inquiries, please reach out to hello@beaconherm.com and we\'ll help you find a local retailer.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-800 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(116,198,157,0.15),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-10 w-10 text-moss-400 mx-auto" />
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Get in touch.
          </h1>
          <p className="mt-4 text-lg text-stone-300 max-w-2xl mx-auto">
            Questions about a tent? Need help with an order? Want to become a dealer?
            We&apos;re here — and we reply to every message within one business day.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-semibold text-stone-900 hover:text-forest-700 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="font-semibold text-stone-900 hover:text-forest-700 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                      Headquarters
                    </p>
                    <p className="font-semibold text-stone-900 mt-0.5">
                      {contactInfo.address.street}
                    </p>
                    <p className="text-stone-600 text-sm">
                      {contactInfo.address.city}, {contactInfo.address.state}{' '}
                      {contactInfo.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                      Office Hours
                    </p>
                    <p className="font-semibold text-stone-900">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Follow Along
                </p>
                <div className="mt-4 flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIconMap[link.platform];
                    if (!Icon) return null;
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-forest-100 hover:text-forest-700 transition-colors"
                        aria-label={link.platform}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-stone-200 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900">Send us a message</h2>
                <p className="mt-2 text-stone-600">
                  Fill out the form below and we&apos;ll get back to you within one business
                  day.
                </p>

                <form className="mt-8 space-y-6" action="#" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 rounded-md border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Support</option>
                      <option value="warranty">Warranty & Repairs</option>
                      <option value="wholesale">Wholesale / Dealer</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-forest-600 hover:bg-forest-700 text-white h-12 px-8 rounded-lg font-semibold shadow-sm"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold text-stone-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-xl border border-stone-200 p-6"
              >
                <h3 className="font-semibold text-stone-900 text-lg">{faq.q}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-stone-600">
              Still have questions?{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-forest-600 font-semibold hover:text-forest-700 underline underline-offset-2"
              >
                Email us directly
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Map / image strip */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src="/contact/boulder-skyline.jpg"
          alt="Boulder, Colorado flatirons — home of Beaconherm"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <Compass className="h-10 w-10 text-moss-400 mx-auto" />
            <p className="mt-4 text-xl md:text-2xl font-bold">
              Come say hi at our Boulder showroom.
            </p>
            <p className="mt-2 text-stone-300 text-sm">
              1482 Pine Ridge Road, Suite 200, Boulder, CO 80302
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
