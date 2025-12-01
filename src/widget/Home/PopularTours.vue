<script setup>
import { ref, computed } from "vue";
import { Clock, Users, Star, Heart, ArrowRight } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Badge from "@/components/ui/badge/Badge.vue";
import { tours } from "@/assets/data/ShareData";



const activeCategory = ref("all");
const favorites = ref([]);

const filteredTours = computed(() =>
    activeCategory.value === "all"
        ? tours
        : tours.filter((tour) => tour.category === activeCategory.value)
);

const toggleFavorite = (id) => {
    if (favorites.value.includes(id)) {
        favorites.value = favorites.value.filter((f) => f !== id);
    } else {
        favorites.value.push(id);
    }
};
</script>


<template>
    <section id="tours" class="py-20 md:py-28 bg-half-secondary">
        <div class="container mx-auto px-4">

            <div class="text-center mb-12">
                <p class="text-primary font-medium uppercase tracking-wider mb-2">Unforgettable Experiences</p>
                <h2 class="font-serif text-3xl md:text-5xl text-foreground mb-6 text-balance">Popular Tours</h2>
                <p class="text-muted-foreground max-w-2xl mx-auto">
                    Handpicked tours designed to give you the most authentic and memorable Tunisian experience
                </p>
            </div>

            <div class="flex flex-wrap justify-center gap-3 mb-12">
                <button v-for="category in categories" :key="category.id" @click="activeCategory = category.id" :class="[
                    'px-6 py-3 rounded-full font-medium transition-all',
                    activeCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-foreground hover:bg-primary/10'
                ]">
                    {{ category.label }}
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="tour in filteredTours" :key="tour.id"
                    class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border">

                    <div class="relative aspect-[4/3] overflow-hidden">
                        <img :src="tour.image || '/placeholder.svg'" :alt="tour.name"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <Badge v-if="tour.featured" class="absolute top-4 left-4 bg-secondary text-accent-foreground">
                            Featured
                        </Badge>
                        <button @click="toggleFavorite(tour.id)"
                            class="absolute top-4 right-4 p-2 rounded-full transition-colors" :class="favorites.includes(tour.id)
                                ? 'bg-secondary text-white'
                                : 'bg-white/80 text-foreground hover:bg-white'"
                            :aria-label="favorites.includes(tour.id) ? 'Remove from favorites' : 'Add to favorites'">
                            <Heart class="h-5 w-5" :class="favorites.includes(tour.id) ? 'fill-current' : ''" />
                        </button>
                    </div>


                    <div class="p-6">

                        <div class="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span class="flex items-center gap-1">
                                <Clock class="h-4 w-4" />
                                {{ tour.duration }}
                            </span>
                            <span class="flex items-center gap-1">
                                <Users class="h-4 w-4" />
                                {{ tour.groupSize }}
                            </span>
                        </div>

                        <h3 class="font-serif text-xl text-foreground mb-2">{{ tour.name }}</h3>
                        <p class="text-muted-foreground text-sm mb-4 line-clamp-2">{{ tour.description }}</p>


                        <div class="flex items-center gap-2 mb-4">
                            <div class="flex items-center gap-1">
                                <Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span class="font-medium text-foreground">{{ tour.rating }}</span>
                            </div>
                            <span class="text-muted-foreground text-sm">({{ tour.reviews }} reviews)</span>
                        </div>


                        <div class="flex items-center justify-between pt-4 border-t border-border">
                            <div>
                                <span class="text-sm text-muted-foreground">From</span>
                                <div class="flex items-center gap-2">
                                    <span class="font-serif text-2xl text-foreground">${{ tour.price }}</span>
                                    <span v-if="tour.originalPrice" class="text-sm text-muted-foreground line-through">
                                        ${{ tour.originalPrice }}
                                    </span>
                                </div>
                            </div>
                            <Button class="bg-primary hover:bg-primary/90 text-white">Book Now</Button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="text-center mt-12">
                <Button variant="outline" size="lg" class="gap-2 bg-transparent border border-primary text-primary">
                    View All Tours
                    <ArrowRight class="h-5 w-5" />
                </Button>
            </div>
        </div>
    </section>
</template>