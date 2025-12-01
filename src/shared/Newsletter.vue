    <script setup>
    import { ref } from "vue"
    import { Send, CheckCircle } from "lucide-vue-next"
import Button from "@/components/ui/button/Button.vue"
import Input from "@/components/ui/input/Input.vue"


    const email = ref("")
    const isSubmitted = ref(false)

    const handleSubmit = () => {
        if (email.value) {
            isSubmitted.value = true
            setTimeout(() => {
                isSubmitted.value = false
                email.value = ""
            }, 3000)
        }
    }
</script>
    <template>
        <section class="py-20 md:py-28 relative overflow-hidden">

            <div class="absolute inset-0 bg-third bg-center" :style="{
                backgroundImage: `url(/placeholder.svg?height=600&width=1600&query=Tunisia panorama Mediterranean aerial view beautiful)`
            }" />
            <div class="absolute inset-0 bg-primary/90"></div>

            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="font-serif text-3xl md:text-5xl text-white mb-4 text-balance">
                        Get Exclusive Travel Deals
                    </h2>
                    <p class="text-white/80 text-lg mb-8">
                        Subscribe to our newsletter and receive special offers, travel tips, and inspiring destination
                        guides
                        delivered to your inbox.
                    </p>

                    <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <Input type="email" placeholder="Enter your email" v-model="email"
                            class="h-14 bg-white/10 border-white/20 text-white placeholder:text-white flex-1"
                            required />
                        <Button type="submit" size="lg" class="h-14 bg-white text-third hover:bg-white/90 px-8 gap-2"
                            :disabled="isSubmitted">
                            <template v-if="isSubmitted">
                                <CheckCircle class="h-5 w-5" />
                                Subscribed!
                            </template>
                            <template v-else>
                                <Send class="h-5 w-5" />
                                Subscribe
                            </template>
                        </Button>
                    </form>

                    <p class="text-white/80 text-sm mt-4">
                        By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    </template>