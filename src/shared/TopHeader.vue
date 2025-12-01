<script setup>
import { currencies, languages } from '@/assets/data/ShareData';
import DropdownMenu from '@/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue';
import DropdownMenuLabel from '@/components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuSeparator from '@/components/ui/dropdown-menu/DropdownMenuSeparator.vue';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import Separator from '@/components/ui/separator/Separator.vue';
import { ChevronDown, CreditCard, Facebook, Globe, Headphones, Instagram, Mail, MapPin, Phone } from 'lucide-vue-next';
import { ref } from 'vue';

const CurrentCurrency = ref(currencies[0])
const CurrentLanguage = ref(languages[0])

function selectedCurrency(currency) {
    CurrentCurrency.value = currency
}

function setSelectedLanguage(lng) {
    CurrentLanguage.value = lng
}

</script>

<template>
    <div class="bg-primary text-white py-2 px-4 hidden lg:block">
        <div class="mx-auto flex justify-between items-center text-sm">
            <div class="flex items-center gap-6">
                <a href="tel:+21671168600" class="flex items-center gap-2  transition-colors">
                    <Phone class="h-3.5 w-3.5" />
                    <span>+216 71 168 600</span>
                </a>
                <a href="mailto:contact@tunisiagotravel.com" class="flex items-center gap-2  transition-colors">
                    <Mail class="h-3.5 w-3.5" />
                    <span>contact@tunisiagotravel.com</span>
                </a>
                <div class="flex items-center gap-2 text-gray-400">
                    <MapPin class="h-3.5 w-3.5" />
                    <span>8 Rue Bachaya Bent Maaouia, El Manar 1, Tunis</span>
                </div>
            </div>

            <div class="flex items-center gap-4">

                <a href="#support" class="flex items-center gap-1.5  transition-colors">
                    <Headphones class="h-3.5 w-3.5" />
                    <span>24/7 Support</span>
                </a>

                <Separator orientation="vertical" class="h-4 bg-background/20" />


                <DropdownMenu>
                    <DropdownMenuTrigger class="flex items-center gap-1  transition-colors">
                        <CreditCard class="h-3.5 w-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Select Currency</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem v-for="currency in currencies" :key="currency.code"
                        @click="selectedCurrency(currency)" class="flex justify-between">
                            <span>{{ currency.name }}</span>
                            <span class="text-muted-foreground">{{ currency.symbol }}</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                <DropdownMenu>
                    <DropdownMenuTrigger class="flex items-center gap-1  transition-colors">
                        <Globe class="h-3.5 w-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem v-for="lang in languages" :key=lang.code  @Click="setSelectedLanguage(lang)">
                            <!-- <span class="mr-2">{{ lang.flag }}</span> -->
                            <span>{{ lang.name }}</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Separator orientation="vertical" class="h-4 bg-background/20" />


                <div class="flex items-center gap-3">
                    <a href="#" class=" transition-colors" aria-label="Facebook">
                        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a href="#" class=" transition-colors" aria-label="Instagram">
                        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="#" class=" transition-colors" aria-label="Twitter">
                        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>