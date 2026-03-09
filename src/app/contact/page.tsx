import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";

export default function ContactPage() {
    return (
        <BaseLayout>
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary mb-6">Contact Us</h1>
                <p className="text-lg text-muted-foreground mb-12">
                    We're here to help you plan your next luxury escape. Connect with our dedicated concierge team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-secondary mb-4">Get in Touch</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><strong>Email:</strong> concierge@starlux.com</li>
                            <li><strong>Phone:</strong> +1 (800) 123-4567</li>
                            <li><strong>Hours:</strong> 24/7 Global Support</li>
                        </ul>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-2">Name</label>
                                <input type="text" className="w-full p-3 rounded-xl border border-muted focus:border-primary outline-none" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-2">Email</label>
                                <input type="email" className="w-full p-3 rounded-xl border border-muted focus:border-primary outline-none" placeholder="Your email address" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-2">Message</label>
                                <textarea className="w-full p-3 rounded-xl border border-muted focus:border-primary outline-none h-32" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}
