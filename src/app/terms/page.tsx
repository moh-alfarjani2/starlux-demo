import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";

export default function TermsPage() {
    return (
        <BaseLayout>
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary mb-6">Terms of Service</h1>
                <p className="text-sm text-muted-foreground mb-12 uppercase tracking-widest font-bold">
                    Last Updated: March 2026
                </p>

                <div className="space-y-8 text-secondary/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-secondary mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Starlux platform, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-secondary mb-4">2. Booking Policies</h2>
                        <p>
                            All reservations made through Starlux are subject to the specific cancellation and modification policies of the respective luxury property. Instant confirmation ensures real-time availability and immediate digital booking vouchers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-secondary mb-4">3. Premium Memberships</h2>
                        <p>
                            Premium membership benefits, including 'Diamond Tier' perks such as VIP airport transfers, are subject to availability and active account status. Members must maintain the required booking threshold to retain their elite tier.
                        </p>
                    </section>
                </div>
            </div>
        </BaseLayout>
    );
}
