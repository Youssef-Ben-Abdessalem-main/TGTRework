<script setup>
import { Shield, Clock, Users, Award, Headphones, MapPin } from "lucide-vue-next";

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your payments are protected with industry-leading security",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey",
  },
  {
    icon: Users,
    title: "Local Experts",
    description: "Knowledgeable guides born and raised in Tunisia",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Find a better price? We'll match it instantly",
  },
  {
    icon: Headphones,
    title: "Personalized Service",
    description: "Tailored itineraries to match your preferences",
  },
  {
    icon: MapPin,
    title: "Authentic Experiences",
    description: "Off-the-beaten-path destinations and local insights",
  },
];
</script>

<template>
  <section id="about" class="py-20 md:py-28">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="relative">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="rounded-2xl overflow-hidden">
                <img
                  src="@/assets/images/tunisian-guide-leading-tour-group-smiling.jpg"
                  alt="Local tour guide"
                  class="w-full h-48 object-cover"
                />
              </div>
              <div class="rounded-2xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY59pv56sQtBx6uNX624gsHWXxsPx_1J8aIw&s"
                  alt="Happy tourists"
                  class="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div class="space-y-4 pt-8">
              <div class="rounded-2xl overflow-hidden">
                <img
                  src="https://i0.wp.com/globalgrasshopper.com/wp-content/uploads/2014/02/Sidi-Bou-Said-1.jpg?resize=840%2C464&ssl=1"
                  alt="Traditional market"
                  class="w-full h-64 object-cover"
                />
              </div>
              <div class="rounded-2xl overflow-hidden">
                <img
                  src="https://dynamic-media.tacdn.com/media/photo-o/2f/a2/80/24/caption.jpg?w=2400&h=-1&s=1"
                  alt="Beach sunset"
                  class="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          <div
            class="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 border border-border"
          >
            <div class="flex gap-8">
              <div class="text-center">
                <div class="font-serif text-3xl text-sand-mid">15+</div>
                <div class="text-sm text-gray-700">Years Experience</div>
              </div>
              <div class="text-center border-l border-border pl-8">
                <div class="font-serif text-3xl text-sand-mid">50K+</div>
                <div class="text-sm text-gray-700">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sand-mid font-medium uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 class="font-serif text-3xl md:text-5xl text-foreground mb-6 text-balance">
            Your Trusted Travel Partner in Tunisia
          </h2>
          <p class="text-muted-foreground text-lg mb-8">
            With over 15 years of experience, we've perfected the art of creating
            unforgettable Tunisian adventures. Our team of local experts ensures every
            trip is authentic, safe, and tailored to your dreams.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="feature in features" :key="feature.title" class="flex gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
              >
                <component :is="feature.icon" class="h-6 w-6 text-sand-mid" />
              </div>
              <div>
                <h3 class="font-medium text-sand-mid mb-1">{{ feature.title }}</h3>
                <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
