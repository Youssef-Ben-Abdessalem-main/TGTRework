<script setup>
import { mockCartItems, mockNotifications, navLinks, services } from "@/assets/data/ShareData"
import Badge from "@/components/ui/badge/Badge.vue"
import Button from "@/components/ui/button/Button.vue"
import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu.vue"
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent.vue"
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem.vue"
import DropdownMenuLabel from "@/components/ui/dropdown-menu/DropdownMenuLabel.vue"
import DropdownMenuSeparator from "@/components/ui/dropdown-menu/DropdownMenuSeparator.vue"
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger.vue"
import Input from "@/components/ui/input/Input.vue"
import Popover from "@/components/ui/popover/Popover.vue"
import PopoverContent from "@/components/ui/popover/PopoverContent.vue"
import PopoverTrigger from "@/components/ui/popover/PopoverTrigger.vue"
import Separator from "@/components/ui/separator/Separator.vue"
import Sheet from "@/components/ui/sheet/Sheet.vue"
import SheetContent from "@/components/ui/sheet/SheetContent.vue"
import SheetHeader from "@/components/ui/sheet/SheetHeader.vue"
import SheetTitle from "@/components/ui/sheet/SheetTitle.vue"
import SheetTrigger from "@/components/ui/sheet/SheetTrigger.vue"
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
    Menu
} from "lucide-vue-next"
import { ref } from "vue"


const terms = ["Sahara Desert", "Djerba", "Carthage", "Sidi Bou Said"]


const searchOpen = ref(false)
const setSearchOpen = (v) => (searchOpen.value = v)


const unreadNotifications = ref(0)

const favoritesCount = ref(0)

const cartItemCount = ref(0)
const selectedCurrency = ref({ symbol: "$" })
const cartTotal = ref(420)


const mobileMenuOpen = ref(false)
const setMobileMenuOpen = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
const isScrolled = ref(false)
</script>

<template>
    <nav :class="[
        'bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-300',
        isScrolled ? 'shadow-md' : ''
    ]">
        <div class=" mx-auto px-4">
            <div class="flex items-center justify-between h-16 lg:h-20">


                <RouterLink to="/">
                    <div class="h-36 w-36 flex items-center justify-center">
                        <img src="https://tunisiagotravel.com/images/logo.png" loading="lazy"
                            class="object-fill w-full" />
                    </div>
                </RouterLink>

                <div class="hidden lg:flex items-center gap-1">


                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost"
                                class="flex items-end gap-1 text-foreground/80 hover:text-primary hover:bg-transparent">
                                Services
                                <ChevronDown class="h-2 w-2" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent class="w-80 p-2">
                            <DropdownMenuLabel class="text-primary">Our Services</DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem v-for="service in services" :key="service.href" asChild>
                                <RouterLink :to="service.href" class="flex items-start gap-3 p-2 cursor-pointer">
                                    <div class="p-2 rounded-lg bg-primary/10 text-primary">
                                        <component :is="service.icon" class="h-5 w-5" />
                                    </div>

                                    <div class="flex flex-col">
                                        <span class="font-medium">{{ service.label }}</span>
                                        <span class="text-xs text-muted-foreground">{{ service.description }}</span>
                                    </div>
                                </RouterLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                    <a v-for="link in navLinks" :key="link.href" :href="link.href"
                        class="px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                        {{ link.label }}
                    </a>
                </div>


                <div class="flex items-center gap-1">


                    <Popover :open="searchOpen" :onOpenChange="setSearchOpen">
                        <PopoverTrigger asChild>
                            <Button variant="ghost" size="icon" class="text-foreground/70 hover:text-primary">
                                <Search class="h-5 w-5" />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent class="w-80 p-3" align="end">
                            <div class="flex flex-col gap-3">
                                <div class="flex items-center gap-2">
                                    <Search class="h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search destinations, tours..."
                                        class="border-0 focus-visible:ring-0 p-0 h-auto" />
                                </div>
                                <Separator />
                                <div class="text-xs text-muted-foreground">Popular searches:</div>
                                <div class="flex flex-wrap gap-2">
                                    <Badge v-for="term in terms" :key="term" variant="secondary"
                                        class="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                                        {{ term }}
                                    </Badge>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>


                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" class="relative text-foreground/70 hover:text-primary">
                                <Bell class="h-5 w-5" />
                                <span v-if="unreadNotifications > 0"
                                    class="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
                                    {{ unreadNotifications }}
                                </span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" class="w-80">
                            <DropdownMenuLabel class="flex items-center justify-between">
                                <span>Notifications</span>
                                <Button variant="ghost" size="sm" class="text-xs h-auto p-1">
                                    Mark all read
                                </Button>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem v-for="n in mockNotifications" :key="n.id"
                                class="flex flex-col items-start gap-1 p-3">
                                <div class="flex items-center gap-2 w-full">
                                    <div v-if="n.unread" class="h-2 w-2 rounded-full bg-primary"></div>
                                    <span class="font-medium text-sm">{{ n.title }}</span>
                                </div>
                                <span class="text-xs text-muted-foreground">{{ n.message }}</span>
                                <span class="text-xs text-muted-foreground flex items-center gap-1">
                                    <Clock class="h-3 w-3" /> {{ n.time }}
                                </span>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem class="justify-center text-primary">
                                View all notifications
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                    <Sheet>
                        <SheetTrigger as-child>
                            <Button variant="ghost" size="icon" class="relative text-foreground/70 hover:text-primary">
                                <Heart class="h-5 w-5" />
                                <span v-if="favoritesCount > 0"
                                    class="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                                    {{ favoritesCount }}
                                </span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle class="flex items-center gap-2">
                                    <Heart class="h-5 w-5 text-primary" />
                                    My Wishlist ({{ favoritesCount }})
                                </SheetTitle>
                            </SheetHeader>

                            <div class="mt-6 flex flex-col gap-4">
                                <div v-for="item in mockFavorites" :key="item.id"
                                    class="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div class="flex flex-col">
                                        <span class="font-medium">{{ item.name }}</span>
                                        <div class="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span>{{ item.type }}</span>
                                            <span class="flex items-center gap-1">
                                                <Star class="h-3 w-3 fill-primary text-primary" />
                                                {{ item.rating }}
                                            </span>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" class="text-destructive hover:text-destructive">
                                        <X class="h-4 w-4" />
                                    </Button>
                                </div>

                                <Separator />
                                <Button class="w-full">View All Favorites</Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger as-child>
                            <Button variant="ghost" size="icon" class="relative text-foreground/70 hover:text-primary">
                                <ShoppingCart class="h-5 w-5" />
                                <span v-if="cartItemCount > 0"
                                    class="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                                    {{ cartItemCount }}
                                </span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle class="flex items-center gap-2">
                                    <ShoppingCart class="h-5 w-5 text-primary" />
                                    My Bookings ({{ cartItemCount }})
                                </SheetTitle>
                            </SheetHeader>

                            <div class="mt-6 flex flex-col gap-4">
                                <div v-for="item in mockCartItems" :key="item.id"
                                    class="flex gap-3 p-3 rounded-lg bg-muted/50">
                                    <img :src="item.image" loading="lazy" :alt="item.name"
                                        class="w-16 h-16 rounded-lg object-cover" />
                                    <div class="flex-1 flex flex-col">
                                        <span class="font-medium">{{ item.name }}</span>
                                        <span class="text-sm text-muted-foreground flex items-center gap-1">
                                            <Calendar class="h-3 w-3" />
                                            {{ item.date }}
                                        </span>
                                        <span class="text-primary font-semibold mt-1">
                                            {{ selectedCurrency.symbol }}{{ item.price }}
                                        </span>
                                    </div>
                                    <Button variant="ghost" size="icon"
                                        class="text-destructive hover:text-destructive h-8 w-8"
                                        @click="removeFromCart(item.id)">
                                        <X class="h-4 w-4" />
                                    </Button>
                                </div>

                                <Separator />

                                <div class="flex items-center justify-between text-lg font-semibold">
                                    <span>Total</span>
                                    <span class="text-primary">{{ selectedCurrency.symbol }}{{ cartTotal }}</span>
                                </div>

                                <Button class="w-full" size="lg">
                                    <CreditCard class="h-4 w-4 mr-2" />
                                    Proceed to Payment
                                </Button>

                                <Button variant="outline" class="w-full bg-transparent">
                                    Continue Browsing
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" class="text-foreground/70 hover:text-primary">
                                <User class="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" class="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <LogIn class="h-4 w-4 mr-2" /> Sign In
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <UserPlus class="h-4 w-4 mr-2" /> Create Account
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <Calendar class="h-4 w-4 mr-2" /> My Bookings
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Heart class="h-4 w-4 mr-2" /> Saved Trips
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <CreditCard class="h-4 w-4 mr-2" /> Payment Methods
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Bell class="h-4 w-4 mr-2" /> Notifications Settings
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <Headphones class="h-4 w-4 mr-2" /> Help & Support
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="ghost" size="icon" class="lg:hidden" @click="setMobileMenuOpen">
                        <X v-if="mobileMenuOpen" class="h-6 w-6" />
                        <Menu v-else class="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
    </nav>
</template>
