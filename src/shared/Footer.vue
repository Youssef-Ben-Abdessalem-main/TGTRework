<script setup>
import { ref } from "vue"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-vue-next"

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
]

const destinations = [
    { label: "Tunis", href: "/destinations/tunis" },
    { label: "Sousse", href: "/destinations/sousse" },
    { label: "Djerba", href: "/destinations/djerba" },
]

const support = [
    { label: "Help Center", href: "/support/help-center" },
    { label: "Terms of Service", href: "/support/terms" },
    { label: "Privacy Policy", href: "/support/privacy" },
]
</script>

<template>
    <footer id="contact" class="bg-primary text-white">
        <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                <div class="lg:col-span-2">
                    <RouterLink to="/" class="flex items-center gap-2 mb-6">

                        <img src="https://tunisiagotravel.com/images/logo.png" loading="lazy"
                            class="object-fill w-52 grayscale" />

                    </RouterLink>
                    <p class="text-white/70 mb-6 max-w-sm">
                        Your trusted partner for authentic Tunisian travel experiences. Discover the beauty, history,
                        and culture
                        of Tunisia with our expert local guides.
                    </p>

                    <div class="space-y-3">
                        <div class="flex items-center gap-3 text-white/80">
                            <MapPin class="h-5 w-5 text-white flex-shrink-0" />
                            <span>8 Rue Bachaya Bent Maaouia, El Manar 1, Tunis</span>
                        </div>
                        <a href="tel:+21671168600"
                            class="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                            <Phone class="h-5 w-5 text-white flex-shrink-0" />
                            <span>+216 71 168 600</span>
                        </a>
                        <a href="mailto:contact@tunisiagotravel.com"
                            class="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                            <Mail class="h-5 w-5 text-white flex-shrink-0" />
                            <span>contact@tunisiagotravel.com</span>
                        </a>
                        <div class="flex items-center gap-3 text-white/80">
                            <Clock class="h-5 w-5 text-white flex-shrink-0" />
                            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="font-serif text-lg text-white mb-4">Quick Links</h3>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.label">
                            <a :href="link.href" class="text-white/70 hover:text-white transition-colors">{{
                                link.label }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-serif text-lg text-white mb-4">Destinations</h3>
                    <ul class="space-y-3">
                        <li v-for="link in destinations" :key="link.label">
                            <a :href="link.href" class="text-white/70 hover:text-white transition-colors">{{
                                link.label }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-serif text-lg text-white mb-4">Support</h3>
                    <ul class="space-y-3">
                        <li v-for="link in support" :key="link.label">
                            <a :href="link.href" class="text-white/70 hover:text-white transition-colors">{{
                                link.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="border-t border-white/10">
            <div class="container mx-auto px-4 py-6">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-white/60 text-sm">
                        © {{ new Date().getFullYear() }} Tunisia Go Travel. All rights reserved.
                    </p>

                    <div class="flex items-center gap-4">
                        <a href="#"
                            class="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white-foreground transition-colors"
                            aria-label="Facebook">
                            <Facebook class="h-5 w-5" />
                        </a>
                        <a href="#"
                            class="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white-foreground transition-colors"
                            aria-label="Instagram">
                            <Instagram class="h-5 w-5" />
                        </a>
                        <a href="#"
                            class="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white-foreground transition-colors"
                            aria-label="Twitter">
                            <Twitter class="h-5 w-5" />
                        </a>
                        <a href="#"
                            class="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white-foreground transition-colors"
                            aria-label="Youtube">
                            <Youtube class="h-5 w-5" />
                        </a>
                    </div>

                    <div class="flex items-center gap-2 text-white/60 text-sm">
                        <span>Secure payments accepted</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
