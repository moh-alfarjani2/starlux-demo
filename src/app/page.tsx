import { BaseLayout } from "@/components/layout/base-layout";
import { Hero } from "@/components/sections/hero";
import { FeaturedHotels } from "@/components/sections/featured-hotels";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <BaseLayout transparentNavbar={true}>
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Why Starlux</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-secondary">Premium Experience</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <ShieldCheck className="text-accent" size={40} />,
              title: "Verified Luxury",
              desc: "Every hotel in our collection is hand-picked and audited for superior service and amenities."
            },
            {
              icon: <Globe className="text-accent" size={40} />,
              title: "Global Reach",
              desc: "Access exclusive bookings in over 150 countries with dedicated local support."
            },
            {
              icon: <Zap className="text-accent" size={40} />,
              title: "Instant Confirmation",
              desc: "Real-time availability and immediate digital booking vouchers for your convenience."
            }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-muted rounded-2xl luxury-shadow transition-transform hover:rotate-3">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-secondary">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FeaturedHotels />

      {/* Special Offer CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-secondary p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Summer 2026</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">Get 20% Off Your First Booking</h3>
              <p className="text-white/70 text-lg mb-12">
                Join our premium membership and unlock exclusive rates at the world's finest boutique hotels.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" className="rounded-full px-12">
                  Claim Offer Now
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-12 border-white/20 text-white hover:bg-white/10">
                  View Destinations <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </BaseLayout>
  );
}
