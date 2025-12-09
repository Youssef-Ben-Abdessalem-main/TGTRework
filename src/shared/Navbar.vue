<script setup>
import {
  mockCartItems,
  mockNotifications,
  mockFavorites,
  navLinks,
  services,
  coreServices,
  quickLinks,
  recentSearches,
} from "@/assets/data/ShareData";
import placeholder from "@/assets/placeholder.svg";

import Button from "@/components/ui/button/Button.vue";
import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuGroup from "@/components/ui/dropdown-menu/DropdownMenuGroup.vue";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem.vue";
import DropdownMenuLabel from "@/components/ui/dropdown-menu/DropdownMenuLabel.vue";
import DropdownMenuSeparator from "@/components/ui/dropdown-menu/DropdownMenuSeparator.vue";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger.vue";
import Input from "@/components/ui/input/Input.vue";
import Popover from "@/components/ui/popover/Popover.vue";
import PopoverContent from "@/components/ui/popover/PopoverContent.vue";
import PopoverTrigger from "@/components/ui/popover/PopoverTrigger.vue";
import Separator from "@/components/ui/separator/Separator.vue";
import { Award, History, Wallet, Gift, Settings, LogOut } from "lucide-vue-next";

import {
  ChevronDown,
  Search,
  Bell,
  Heart,
  ShoppingCart,
  User,
  Star,
  X,
  Calendar,
  CreditCard,
  Clock,
  Headphones,
  LogIn,
  UserPlus,
  Menu,
  Hotel,
  Plane,
  UtensilsCrossed,
  CalendarDays,
  Car,
  Ticket,
  HelpCircle,
} from "lucide-vue-next";

import { onMounted, ref } from "vue";

const searchOpen = ref(false);
const isLoggedIn = ref(false);
const user = ref(null);
const searchQuery = ref("");

const isScrolled = ref(false);
const selectedCurrency = ref(
  JSON.parse(localStorage.getItem("selectedCurrency")) || null
);

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem("auth_token");
  user.value = JSON.parse(localStorage.getItem("user"));

  window.addEventListener("currencyChanged", (e) => {
    selectedCurrency.value = e.detail;
  });
});

function logout() {
  isLoggedIn.value = false;
  user.value = localStorage.setItem(null);
}

const getServiceIcon = (type) => {
  switch (type) {
    case "hotel":
      return Hotel;
    case "flight":
      return Plane;
    case "restaurant":
      return UtensilsCrossed;
    case "event":
      return CalendarDays;
    case "transport":
      return Car;
    default:
      return Ticket;
  }
};

const getServiceColor = (type) => {
  switch (type) {
    case "hotel":
      return "text-blue-600";
    case "flight":
      return "text-sky-600";
    case "restaurant":
      return "text-orange-600";
    case "event":
      return "text-purple-600";
    case "transport":
      return "text-green-600";
    default:
      return "text-primary";
  }
};

window.addEventListener("currencyChanged", (e) => {
  const newCurrency = e.detail;
  selectedCurrency.value = newCurrency;
});
</script>

<template>
  <nav :class="['absolute z-50 w-full', isScrolled ? '' : '']">
    <div class="mx-auto px-4">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <RouterLink to="/">
          <div class="h-20 w-20 flex items-center justify-center">
            <img
              src="@/assets/images/MiniLogo.png"
              loading="lazy"
              class="object-fill w-full"
            />
          </div>
        </RouterLink>

        <div class="hidden lg:flex items-center gap-1">
          <DropdownMenu v-for="service in coreServices" :key="service.href">
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                class="flex items-center gap-2 text-white hover:bg-secondary/5 px-3"
              >
                <component :is="service.icon" class="h-4 w-4" />
                {{ service.label }}
                <ChevronDown class="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-64 p-2">
              <div :class="[`p-3 rounded-lg mb-2 ${service.color}`]">
                <div class="flex items-center gap-2 mb-1">
                  <component :is="service.icon" class="h-5 w-5" />
                  <span class="font-semibold">{{ service.label }}</span>
                </div>
                <p class="text-xs opacity-80">{{ service.description }}</p>
              </div>
              <DropdownMenuLabel class="text-xs text-muted-foreground"
                >Popular</DropdownMenuLabel
              >

              <DropdownMenuItem v-for="item in service.featured" :key="item" asChild>
                <RouterLink
                  :to="service.href + '/' + item.toLowerCase().replace(/ /g, '-')"
                  class="cursor-pointer"
                >
                  {{ item }}
                </RouterLink>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <RouterLink
                  :to="service.href"
                  class="cursor-pointer font-normal text-secondary"
                >
                  View All {{ service.label }} →
                </RouterLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div class="flex items-center gap-0.5 lg:gap-1">
          <Popover v-model:open="searchOpen">
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" class="text-white">
                <Search class="h-5 w-5" />
              </Button>
            </PopoverTrigger>

            <PopoverContent class="w-80 p-3" align="end">
              <div class="border-b py-2">
                <div class="flex items-center gap-3 bg-muted rounded-md px-3">
                  <Search class="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search hotels, flights, restaurants..."
                    class="border-0 bg-transparent focus-visible:ring-0 p-0 h-10"
                    v-model="searchQuery"
                    @onChange="setSearchQuery(e.target.value)"
                    autoFocus
                  />
                </div>
              </div>

              <div class="py-4">
                <p class="text-xs font-medium text-muted-foreground mb-3">
                  RECENT SEARCHES
                </p>
                <div class="flex flex-col gap-2">
                  <button
                    v-for="(search, idx) in recentSearches"
                    :key="idx"
                    class="flex items-center gap-3 p-2 rounded-lg hover:bg-muted text-left transition-colors"
                  >
                    <div
                      :class="`p-1.5 rounded-md bg-muted ${getServiceColor(search.type)}`"
                    >
                      <component :is="getServiceIcon(search.type)" class="h-4 w-4" />
                    </div>
                    <span class="text-sm">{{ search.query }}</span>
                  </button>
                </div>
                <Separator class="my-4" />
                <p class="text-xs font-medium text-muted-foreground mb-3">QUICK ACCESS</p>
                <div class="grid grid-cols-3 gap-2">
                  <RouterLink
                    v-for="service in coreServices"
                    :key="service.href"
                    :to="service.href"
                    class="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                  >
                    <div :class="[`rounded-lg ${service.color}`]">
                      <component :is="service.icon" class="h-4 w-4" />
                    </div>
                    <span class="text-[10px] text-muted-foreground">{{
                      service.label
                    }}</span>
                  </RouterLink>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" class="text-white">
                <User class="h-5 w-5" />
                <span class="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-64 p-0">
              <template v-if="isLoggedIn">
                <div class="p-4 border-b bg-muted/30">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <User class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p class="font-medium">{{ user.name }}</p>
                      <p class="text-xs text-muted-foreground">{{ user.email }}</p>
                    </div>
                  </div>
                  <!-- <div class="flex items-center gap-2 mt-3 p-2 rounded-lg bg-primary/10">
                    <Award class="h-4 w-4 text-primary" />
                    <span class="text-xs text-primary font-medium"
                      >2,450 Points Available</span
                    >
                  </div> -->
                </div>
                <div class="p-2">
                  <DropdownMenuGroup>
                    <DropdownMenuItem class="hover:bg-secondary rounded-md">
                      <Ticket class="h-4 w-4 mr-2" />
                      My Bookings
                    </DropdownMenuItem>
                    <DropdownMenuItem class="hover:bg-secondary rounded-md">
                      <Heart class="h-4 w-4 mr-2" />
                      Saved Places
                    </DropdownMenuItem>
                    <DropdownMenuItem class="hover:bg-secondary rounded-md">
                      <History class="h-4 w-4 mr-2" />
                      Booking History
                    </DropdownMenuItem>
                    <DropdownMenuItem class="hover:bg-secondary rounded-md">
                      <Wallet class="h-4 w-4 mr-2" />
                      Payment Methods
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem class="hover:bg-secondary rounded-md">
                      <Gift class="h-4 w-4 mr-2" />
                      Rewards & Points
                    </DropdownMenuItem>
                    <DropdownMenuItem class="hover:bg-secondary rounded-md">
                      <Settings class="h-4 w-4 mr-2" />
                      Account Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem class="hover:bg-secondary rounded-md">
                      <HelpCircle class="h-4 w-4 mr-2" />
                      Help & Support
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    class="hover:bg-red-500 hover:text-white rounded-md"
                    @click="logout()"
                  >
                    <LogOut class="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </div>
              </template>
              <template v-else>
                <div class="p-4 border-b">
                  <p class="font-medium">Welcome to Tunisia Go</p>
                  <p class="text-xs text-muted-foreground mt-1">
                    Sign in to access your bookings & rewards
                  </p>
                </div>
                <div class="p-2">
                  <DropdownMenuItem class="p-0">
                    <RouterLink to="/auth/login" class="w-full">
                      <Button
                        class="w-full justify-start gap-2 hover:bg-secondary !px-1"
                        variant="ghost"
                      >
                        <LogIn class="h-4 w-4" />
                        Sign In
                      </Button>
                    </RouterLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem class="p-0">
                    <RouterLink to="/auth/signup" class="w-full">
                      <Button
                        class="w-full justify-start gap-2 hover:bg-secondary !px-1"
                        variant="ghost"
                      >
                        <UserPlus class="h-4 w-4" />
                        Create Account
                      </Button>
                    </RouterLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem class="!px-1">
                    <Ticket class="h-4 w-4 mr-2" />
                    Track Booking
                  </DropdownMenuItem>
                  <DropdownMenuItem class="!px-1">
                    <HelpCircle class="h-4 w-4 mr-2" />
                    Help & Support
                  </DropdownMenuItem>
                </div>
              </template>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </nav>
</template>
