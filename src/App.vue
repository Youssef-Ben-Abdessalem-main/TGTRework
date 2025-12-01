<script setup>
import { RouterView } from 'vue-router';
import TopHeader from './shared/TopHeader.vue';
import Navbar from './shared/Navbar.vue';
import Footer from './shared/Footer.vue';
import Newsletter from './shared/Newsletter.vue';

</script>

<template>
    <div class="flex flex-col playfair-display">
        <TopHeader />
        <Navbar />
        <div class="min-h-screen">
            <RouterView />
        </div>
        <Newsletter />
        <Footer />
    </div>
</template>

<style scoped></style>
