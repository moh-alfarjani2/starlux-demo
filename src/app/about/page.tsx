import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";

export default function AboutUsPage() {
    return (
        <BaseLayout>
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary mb-6">About Starlux</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Redefining luxury travel. Discover exclusive hotels and unique experiences across the globe.
                </p>
                <div className="space-y-6 text-secondary/80 leading-relaxed">
                    <p>
                        At Starlux, we curate the world's finest boutique hotels and resorts to offer you an
                        unparalleled luxury experience. Every property in our collection is hand-picked and
                        audited for superior service and amenities.
                    </p>
                    <p>
                        Whether you're looking for a secluded beach resort in the Maldives, a historic stay
                        in London, or a palatial escape in Dubai, Starlux connects you to the exclusive
                        side of global travel.
                    </p>
                </div>
            </div>
        </BaseLayout>
    );
}
