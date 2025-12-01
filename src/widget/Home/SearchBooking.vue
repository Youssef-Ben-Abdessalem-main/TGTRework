<script setup>
import { ref } from "vue";
import { Calendar, MapPin, Users, Search } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";


const destination = ref("");
const date = ref("");
const guests = ref("");

const popularTags = [
    "Sahara Tour",
    "Sidi Bou Said Day Trip",
    "Carthage & Tunis",
    "Beach Resorts",
    "Cultural Tours",
];
</script>

<template>
    <section class="relative z-30 -mt-16 md:-mt-20">
        <div class="container mx-auto px-4">
            <div class="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <MapPin class="h-4 w-4 text-primary" />
                            Destination
                        </label>
                        <Select v-model="destination">
                            <SelectTrigger class="h-12 bg-white border-[1px] border-primary">
                                <SelectValue placeholder="Where to?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sidi-bou-said">Sidi Bou Said</SelectItem>
                                <SelectItem value="sahara">Sahara Desert</SelectItem>
                                <SelectItem value="carthage">Carthage</SelectItem>
                                <SelectItem value="hammamet">Hammamet</SelectItem>
                                <SelectItem value="djerba">Djerba</SelectItem>
                                <SelectItem value="tunis">Tunis</SelectItem>
                                <SelectItem value="sousse">Sousse</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    <div class="space-y-2">
                        <label class="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Calendar class="h-4 w-4 text-primary" />
                            Travel Date
                        </label>
                        <Input type="date" v-model="date" class="h-12 bg-white border-[1px] border-primary" />
                    </div>


                    <div class="space-y-2">
                        <label class="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Users class="h-4 w-4 text-primary" />
                            Guests
                        </label>
                        <Select v-model="guests">
                            <SelectTrigger class="h-12 bg-white border-[1px] border-primary">
                                <SelectValue placeholder="How many?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 Guest</SelectItem>
                                <SelectItem value="2">2 Guests</SelectItem>
                                <SelectItem value="3">3 Guests</SelectItem>
                                <SelectItem value="4">4 Guests</SelectItem>
                                <SelectItem value="5">5+ Guests</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <!-- Search Button -->
                    <div class="flex items-end">
                        <Button
                            class="w-full h-12 bg-secondary hover:bg-primary/90 text-white text-lg gap-2">
                            <Search class="h-5 w-5" />
                            Search
                        </Button>
                    </div>
                </div>

                <!-- Quick links -->
                <div class="mt-6 pt-6 border-t border-border">
                    <p class="text-sm text-muted-foreground mb-3">Popular searches:</p>
                    <div class="flex flex-wrap gap-2">
                        <button v-for="tag in popularTags" :key="tag"
                            class="px-4 py-2 rounded-md bg-half-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
                            {{ tag }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>