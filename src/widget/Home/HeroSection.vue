<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import SidiBouSaid from '@/assets/images/sidi-bou-said-blue-white-village-tunisia-mediterra.jpg'
import SaharaDesert from '@/assets/images/sahara-desert-tunisia-sand-dunes-camel-sunset.jpg'
import Carthage from '@/assets/images/carthage-ancient-ruins-tunisia-mediterranean-sea.jpg'
import TunisiaBeach from '@/assets/images/tunisia-beach-mediterranean-turquoise-water-palm-t.jpg'

const slides = [
    { image: SidiBouSaid, title: 'Discover Sidi Bou Said', subtitle: 'Where blue meets white in perfect harmony' },
    { image: SaharaDesert, title: 'Explore the Sahara', subtitle: 'Endless golden dunes await your adventure' },
    { image: Carthage, title: 'Ancient Carthage', subtitle: 'Walk through 3,000 years of history' },
    { image: TunisiaBeach, title: 'Mediterranean Paradise', subtitle: 'Crystal clear waters and pristine beaches' },
]

const currentSlide = ref(0)

let timer = null

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
}
const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

onMounted(() => {
    timer = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
    clearInterval(timer)
})
</script>

<template>
    <section class="relative min-h-[600px] h-screen">
        <div v-for="(slide, index) in slides" :key="index" class="absolute inset-0 transition-opacity duration-1000"
            :class="{ 'opacity-100': index === currentSlide, 'opacity-0': index !== currentSlide }">
            <div class="absolute inset-0 bg-cover bg-center">
                <img :src="slide.image" class="w-full h-full object-cover" />
            </div>
            <div class="absolute inset-0 bg-black/50"></div>
        </div>

        <div class="relative z-10 h-full flex items-center">
            <div class="px-4">
                <div class="max-w-3xl">
                    <p class="text-white text-sm md:text-base uppercase tracking-widest mb-4">
                        Welcome to Tunisia
                    </p>
                    <h1 class="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight text-balance">
                        {{ slides[currentSlide].title }}
                    </h1>
                    <p class="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
                        {{ slides[currentSlide].subtitle }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" class="bg-secondary hover:bg-primary/90 border-2 border-secondary text-primary-foreground text-lg px-8 py-2 rounded-lg">
                            Explore Tours
                        </Button>
                        <Button size="lg" variant="outline"
                            class="border-white text-white hover:border-secondary hover:border-2 hover:text-foreground text-lg px-8 py-2 rounded-lg bg-transparent">
                            Plan Your Trip
                        </Button>
                    </div>
                </div>
            </div>
        </div>



        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)" :class="[
                'w-3 h-3 rounded-full transition-all',
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            ]" :aria-label="`Go to slide ${index + 1}`"></button>
        </div>
    </section>
</template>