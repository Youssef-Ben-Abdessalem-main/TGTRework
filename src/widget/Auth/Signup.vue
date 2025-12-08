<script setup>
import { ref } from "vue";
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from "lucide-vue-next";

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  phone: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
});

const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  emit("submit", formData.value);
};
</script>

<template>
  <div class="w-full max-w-xl">
    <div
      class="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold-light/10 to-gold/20 rounded-3xl blur-xl opacity-60"
    />

    <div class="relative glass rounded-3xl p-8 md:p-10 overflow-hidden">
      <div
        class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full"
      />
      <div
        class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold/5 to-transparent rounded-tr-full"
      />

      <div class="text-center mb-8 relative z-10">
        <RouterLink to="/" class="flex justify-center items-center w-full">
          <div class="h-20 w-20 flex items-center justify-center">
            <img
              src="@/assets/images/MiniLogo.png"
              loading="lazy"
              class="object-fill w-full"
            />
          </div>
        </RouterLink>
        <h1 class="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Create Account
        </h1>
        <p class="text-white/60 mt-2 text-sm">Begin your luxury travel experience</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5 relative z-10">
        <div class="grid grid-cols-2 gap-5">
          <div class="relative">
            <User class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
            <input
              v-model="formData.firstName"
              type="text"
              placeholder="Enter Your First Name"
              class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
          </div>

          <div class="relative">
            <User class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
            <input
              v-model="formData.lastName"
              type="text"
              placeholder="Enter Your Name"
              class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div class="relative">
            <Mail class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
            <input
              v-model="formData.email"
              type="email"
              placeholder="Enter Your Email"
              class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
          </div>

          <div class="relative">
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <input
              v-model="formData.city"
              type="text"
              placeholder="Enter Your City"
              class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div class="relative">
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="Enter Your Phone"
              class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
          </div>

          <div class="relative">
            <Lock class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
            <input
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-card-foreground/70 transition-colors"
            >
              <EyeOff v-if="showPassword" class="w-5 h-5" />
              <Eye v-else class="w-5 h-5" />
            </button>
          </div>
        </div>
        <div class="relative">
          <Lock class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
          <input
            v-model="formData.confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="Confirm Your Password"
            class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          />
          <button
            type="button"
            @click="showConfirmPassword = !showConfirmPassword"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-card-foreground/70 transition-colors"
          >
            <EyeOff v-if="showConfirmPassword" class="w-5 h-5" />
            <Eye v-else class="w-5 h-5" />
          </button>
        </div>

        <div class="flex items-start gap-3">
          <input
            v-model="formData.acceptTerms"
            type="checkbox"
            id="terms"
            class="mt-1 w-4 h-4 text-gold bg-cream/20 border-cream-dark/50 rounded focus:ring-gold/50"
          />
          <label for="terms" class="text-sm text-white/70">
            Acceptez les conditions et la politique de confidentialité
          </label>
        </div>

        <button
          type="submit"
          :disabled="!formData.acceptTerms"
          class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold hover:shadow-gold-glow transition-all duration-300 transform hover:scale-[1.02] mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center mt-6 text-white/60 text-sm relative z-10">
        Already have an account?
        <RouterLink
          to="/auth/login"
          class="text-gold hover:text-gold-light font-semibold transition-colors"
        >
          Log In
        </RouterLink>
      </p>
    </div>
  </div>
</template>
