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

import Badge from "@/components/ui/badge/Badge.vue";
import Button from "@/components/ui/button/Button.vue";
import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem.vue";
import DropdownMenuLabel from "@/components/ui/dropdown-menu/DropdownMenuLabel.vue";
import DropdownMenuSeparator from "@/components/ui/dropdown-menu/DropdownMenuSeparator.vue";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger.vue";
import Input from "@/components/ui/input/Input.vue";
import Popover from "@/components/ui/popover/Popover.vue";
import PopoverContent from "@/components/ui/popover/PopoverContent.vue";
import PopoverTrigger from "@/components/ui/popover/PopoverTrigger.vue";
import Separator from "@/components/ui/separator/Separator.vue";
import Sheet from "@/components/ui/sheet/Sheet.vue";
import SheetContent from "@/components/ui/sheet/SheetContent.vue";
import SheetHeader from "@/components/ui/sheet/SheetHeader.vue";
import SheetTitle from "@/components/ui/sheet/SheetTitle.vue";
import SheetTrigger from "@/components/ui/sheet/SheetTrigger.vue";

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
} from "lucide-vue-next";

import { ref } from "vue";

const terms = [
  "5-star Hotels Tunis",
  "Traditional Restaurants",
  "Cheap Flights Tunisia",
  "Cultural Events",
  "Airport Transfer",
];

const searchOpen = ref(false);
const searchQuery = ref("");

const unreadNotifications = ref(0);
const favoritesCount = ref(0);
const cartItemCount = ref(0);
const selectedCurrency = ref({ symbol: "$" });
const cartTotal = ref(420);

const mobileMenuOpen = ref(false);
const setMobileMenuOpen = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const isScrolled = ref(false);

const removeFromCart = (itemId) => {
  console.log("Remove item:", itemId);
};

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
</script>

<template>
  <nav
    :class="[
      'bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-300',
      isScrolled ? 'shadow-md' : '',
    ]"
  >
    <div class="mx-auto px-4">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <RouterLink to="/">
          <div class="h-36 w-36 flex items-center justify-center">
            <img
              src="https://tunisiagotravel.com/images/logo.png"
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
                class="flex items-center gap-2 text-foreground/80 hover:text-primary hover:bg-primary/5 px-3"
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
                <Link
                  :href="service.href + '/' + item.toLowerCase().replace(/ /g, '-')"
                  class="cursor-pointer"
                >
                  {{ item }}
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  :href="service.href"
                  class="cursor-pointer font-normal text-secondary"
                >
                  View All {{ service.label }} →
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Separator
            orientation="vertical"
            class="h-6 mx-2 border-[0.5px] border-gray-300"
          />
          <span v-for="link in quickLinks" :key="link">
            <RouterLink
              class="px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              {{ link.label }}
            </RouterLink>
          </span>
        </div>

        <div class="flex items-center gap-0.5 lg:gap-1">
          <Popover v-model:open="searchOpen">
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" class="icon-btn">
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
                  <Link
                    v-for="service in coreServices"
                    :key="service.href"
                    :href="service.href"
                    class="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                  >
                    <div :class="[`rounded-lg ${service.color}`]">
                      <component :is="service.icon" class="h-4 w-4" />
                    </div>
                    <span class="text-[10px] text-muted-foreground">{{
                      service.label
                    }}</span>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                class="relative text-foreground/70 hover:text-primary hover:bg-primary/5"
              >
                <Bell class="h-5 w-5" />

                <span
                  v-if="unreadNotifications > 0"
                  class="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center"
                >
                  {{ unreadNotifications }}
                </span>

                <span class="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-80 p-0">
              <div class="p-4 border-b flex items-center justify-between">
                <span class="font-semibold">Notifications</span>
                <Button variant="ghost" size="sm" class="text-xs h-auto p-1 text-primary">
                  Mark all read
                </Button>
              </div>
              <ScrollArea class="h-80">
                <div
                  v-for="notification in mockNotifications"
                  :key="notification.id"
                  :class="[
                    `p-4 border-b hover:bg-muted/50 cursor-pointer transition-colors ${
                      notification.unread ? 'bg-half-secondary' : ''
                    }`,
                  ]"
                >
                  <div class="flex items-start gap-3">
                    <div
                      v-if="notification.unread"
                      class="h-2 w-2 rounded-full bg-secondary mt-1.5 flex-shrink-0"
                    />

                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-sm">{{ notification.title }}</p>
                      <p class="text-xs text-muted-foreground mt-0.5 truncate">
                        {{ notification.message }}
                      </p>
                      <p
                        class="text-[10px] text-muted-foreground mt-1 flex items-center gap-1"
                      >
                        <Clock class="h-3 w-3" />
                        {{ notification.time }}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <div class="p-2 border-t">
                <Button variant="ghost" class="w-full text-primary text-sm">
                  View All Notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                class="relative text-foreground/70 hover:text-primary hover:bg-primary/5"
              >
                <Heart class="h-5 w-5" />

                <span
                  v-if="favoritesCount"
                  class="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-pink-500 text-white text-[10px] font-bold flex items-center justify-center"
                >
                  {{ favoritesCount }}
                </span>

                <span class="sr-only">Favorites</span>
              </Button>
            </SheetTrigger>
            <SheetContent class="w-full sm:max-w-md p-0">
              <SheetHeader class="p-6 border-b">
                <SheetTitle class="flex items-center gap-2">
                  <Heart class="h-5 w-5 text-pink-500" />
                  Saved Places ({{ favoritesCount }})
                </SheetTitle>
              </SheetHeader>
              <ScrollArea class="h-[calc(100vh-180px)]">
                <div class="p-4 flex flex-col gap-3">
                  <div
                    v-for="item in mockFavorites"
                    :key="item.id"
                    class="flex gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <img
                      :src="item.image || '/placeholder.svg'"
                      :alt="item.name"
                      class="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />

                    <div class="flex-1 min-w-0">
                      <p class="font-medium truncate">{{ item.name }}</p>

                      <div class="flex items-center gap-2 mt-1">
                        <Badge
                          variant="secondary"
                          class="text-[10px] h-5 gap-1 flex items-center"
                        >
                          <component
                            :is="getServiceIcon(item.type.toLowerCase())"
                            class="h-3 w-3"
                          />
                          {{ item.type }}
                        </Badge>

                        <span
                          class="flex items-center gap-1 text-xs text-muted-foreground"
                        >
                          <Star class="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {{ item.rating }}
                        </span>
                      </div>

                      <Button
                        variant="link"
                        size="sm"
                        class="p-0 h-auto mt-2 text-primary text-xs"
                      >
                        View Details →
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      class="text-muted-foreground hover:text-destructive h-8 w-8 flex-shrink-0"
                      @click="removeFavorite(item.id)"
                    >
                      <X class="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollArea>
              <SheetFooter class="p-4 border-t">
                <Button class="w-full">View All Saved Places</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <!-- <div class="hidden lg:flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                class="flex items-end gap-1 text-foreground/80 hover:text-primary hover:bg-transparent"
              >
                Services
                <ChevronDown class="h-2 w-2" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent class="w-80 p-2">
              <DropdownMenuLabel class="text-primary">Our Services</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem v-for="service in services" :key="service.href" asChild>
                <RouterLink
                  :to="service.href"
                  class="flex items-start gap-3 p-2 cursor-pointer"
                >
                  <div class="p-2 rounded-lg bg-primary/10 text-primary">
                    <component :is="service.icon" class="h-5 w-5" />
                  </div>

                  <div class="flex flex-col">
                    <span class="font-medium">{{ service.label }}</span>
                    <span class="text-xs text-muted-foreground">{{
                      service.description
                    }}</span>
                  </div>
                </RouterLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <RouterLink to="/deals">Deals</RouterLink>
          <RouterLink to="/about">About Us</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div> -->

        <!-- <div class="flex items-center gap-3">
          <Popover :open="searchOpen" :onOpenChange="setSearchOpen">
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" class="icon-btn">
                <Search class="h-5 w-5" />
              </Button>
            </PopoverTrigger>

            <PopoverContent class="w-80 p-3" align="end">
              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <Search class="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search hotels, restaurants..." />
                </div>

                <Separator />

                <div class="text-xs text-muted-foreground">Popular searches:</div>

                <div class="flex flex-wrap gap-2">
                  <Badge
                    v-for="term in terms"
                    :key="term"
                    variant="secondary"
                    class="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {{ term }}
                  </Badge>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Sheet>
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" class="icon-btn">
                <Heart class="h-5 w-5" />
                <span
                  v-if="favoritesCount > 0"
                  class="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center"
                >
                  {{ favoritesCount }}
                </span>
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle class="flex items-center gap-2">
                  <Heart class="h-5 w-5 text-primary" /> Saved Places
                </SheetTitle>
              </SheetHeader>

              <div class="mt-6 flex flex-col gap-4">
                <div
                  v-for="item in mockFavorites"
                  :key="item.id"
                  class="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div>
                    <span class="font-medium">{{ item.name }}</span>
                    <div class="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{{ item.type }}</span>
                      <span class="flex items-center gap-1">
                        <Star class="h-3 w-3 fill-primary text-primary" />
                        {{ item.rating }}
                      </span>
                    </div>
                  </div>

                  <Button variant="ghost" size="icon" class="text-destructive">
                    <X class="h-4 w-4" />
                  </Button>
                </div>

                <Separator />

                <Button class="w-full">View All Saved Places</Button>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" class="icon-btn">
                <ShoppingCart class="h-5 w-5" />
                <span
                  v-if="cartItemCount > 0"
                  class="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center"
                >
                  {{ cartItemCount }}
                </span>
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle class="flex items-center gap-2">
                  <ShoppingCart class="h-5 w-5 text-primary" />
                  My Cart ({{ cartItemCount }})
                </SheetTitle>
              </SheetHeader>

              <div class="mt-6 flex flex-col gap-4">
                <div
                  v-for="item in mockCartItems"
                  :key="item.id"
                  class="flex gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <img :src="item.image" class="w-16 h-16 rounded-lg" />

                  <div class="flex-1">
                    <span class="font-medium">{{ item.name }}</span>

                    <span class="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar class="h-3 w-3" />
                      {{ item.date }}
                    </span>

                    <span class="text-primary font-semibold mt-1 block">
                      {{ selectedCurrency.symbol }}{{ item.price }}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    class="text-destructive"
                    @click="removeFromCart(item.id)"
                  >
                    <X class="h-4 w-4" />
                  </Button>
                </div>

                <Separator />

                <div class="flex items-center justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span class="text-primary"
                    >{{ selectedCurrency.symbol }}{{ cartTotal }}</span
                  >
                </div>

                <Button class="w-full" size="lg">
                  <CreditCard class="h-4 w-4 mr-2" /> Complete Booking
                </Button>

                <Button variant="outline" class="w-full">Continue Browsing</Button>
              </div>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" class="icon-btn">
                <User class="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" class="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem><LogIn class="icon" /> Sign In</DropdownMenuItem>
              <DropdownMenuItem
                ><UserPlus class="icon" /> Create Account</DropdownMenuItem
              >

              <DropdownMenuSeparator />

              <DropdownMenuItem
                ><Calendar class="icon" /> My Reservations</DropdownMenuItem
              >
              <DropdownMenuItem><Heart class="icon" /> Saved Places</DropdownMenuItem>
              <DropdownMenuItem
                ><CreditCard class="icon" /> Payment Methods</DropdownMenuItem
              >
              <DropdownMenuItem><Bell class="icon" /> Booking Alerts</DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                ><Headphones class="icon" /> Help & Support</DropdownMenuItem
              >
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            class="lg:hidden"
            @click="setMobileMenuOpen"
          >
            <X v-if="mobileMenuOpen" class="h-6 w-6" />
            <Menu v-else class="h-6 w-6" />
          </Button>
        </div> -->
      </div>
    </div>
  </nav>
</template>
