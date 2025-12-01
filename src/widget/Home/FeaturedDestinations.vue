<script setup>
import { destinations } from '@/assets/data/ShareData';

</script>
<template>
    <section id="destinations" class="py-20 md:py-28">
        <div class="container mx-auto px-4">

            <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                <div>
                    <p class="text-primary font-medium uppercase tracking-wider mb-2">Explore Tunisia</p>
                    <h2 class="font-serif text-3xl md:text-5xl text-foreground text-balance">
                        Featured Destinations
                    </h2>
                </div>
                <RouterLink to="#"
                    class="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
                    View all destinations
                    <ArrowRight class="h-5 w-5" />
                </RouterLink>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <RouterLink v-for="(destination, index) in destinations" :key="destination.name" to="#"
                    :class="['group relative overflow-hidden rounded-2xl', index === 0 ? 'md:col-span-2 md:row-span-2' : '']">
                    <div :class="['relative', index === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-[3/5]']">
                        <img :src="destination.image" :alt="destination.name"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <span
                                class="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-3">
                                {{ destination.tours }} Tours
                            </span>
                            <h3 class="font-serif text-2xl md:text-3xl text-white mb-1">{{ destination.name }}</h3>
                            <p class="text-white/80">{{ destination.description }}</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>