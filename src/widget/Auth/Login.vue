<script setup>
import { ref } from "vue";
import { Eye, EyeOff, Mail, Lock } from "lucide-vue-next";
import { authservice } from "@/services/auth.js";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";

const router = useRouter();
const Loading = ref(false);

const setCookie = (name, value, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};
const showPassword = ref(false);
const formData = ref({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  const { email, password } = formData.value;
  if (!email || !password) {
    toast.error("Please fill in all required fields.");
    return;
  }

  try {
    Loading.value = true;
    const data = {
      email,
      password,
    };
    const response = await authservice.Login(data);
    Loading.value = false;
    setCookie("auth_token", response.token, 7);
    setCookie("user", JSON.stringify(response.user), 7);
    router.push("/");
  } catch (error) {
    Loading.value = false;
    toast.error("Login failed. Please check your credentials.");
  }
};
</script>

<template>
  <div class="w-full max-w-md">
    <div
      class="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold-light/10 to-gold/20 rounded-3xl blur-xl opacity-60"
    />

    <div class="relative glass rounded-3xl p-8 md:p-8 overflow-hidden">
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
          Welcome Back
        </h1>
        <p class="text-white/60 mt-2 text-sm">Sign in to continue your journey</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5 relative z-10">
        <div class="relative">
          <Mail
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 z-50"
          />
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email Address"
            class="w-full pl-12 pr-4 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          />
        </div>

        <div class="relative">
          <Lock
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 z-50"
          />
          <input
            v-model="formData.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="w-full pl-12 pr-12 py-3 rounded-xl border border-cream-dark/50 bg-white/20 backdrop-blur-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-card-foreground/70 transition-colors"
          >
            <EyeOff v-if="showPassword" class="w-5 h-5 text-white" />
            <Eye v-else class="w-5 h-5 text-white" />
          </button>
        </div>

        <div class="flex justify-end">
          <button
            type="button"
            class="text-sm text-gold hover:text-gold-light transition-colors font-medium"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold hover:shadow-gold-glow transition-all duration-300 transform hover:scale-[1.02]"
        >
          <span v-if="!Loading">Sign In</span>
          <svg
            v-if="Loading"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 150"
            class="w-full h-10"
          >
            <path
              fill="none"
              stroke="#000000"
              stroke-width="15"
              stroke-linecap="round"
              stroke-dasharray="300 385"
              stroke-dashoffset="0"
              d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
            >
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animate>
            </path>
          </svg>
        </button>
      </form>

      <p class="text-center mt-6 text-white/60 text-sm relative z-10">
        Don't have an account?
        <RouterLink
          to="/auth/signup"
          class="text-gold hover:text-gold-light font-semibold transition-colors"
        >
          Sign Up
        </RouterLink>
      </p>
    </div>
  </div>
</template>
