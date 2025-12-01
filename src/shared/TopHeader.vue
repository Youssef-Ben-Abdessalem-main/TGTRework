<script setup>
import { currencies, languages } from "@/assets/data/ShareData";
import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem.vue";
import DropdownMenuLabel from "@/components/ui/dropdown-menu/DropdownMenuLabel.vue";
import DropdownMenuSeparator from "@/components/ui/dropdown-menu/DropdownMenuSeparator.vue";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger.vue";
import Separator from "@/components/ui/separator/Separator.vue";
import {
  ChevronDown,
  Globe,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-vue-next";
import { ref } from "vue";

const CurrentCurrency = ref(currencies[0]);
const CurrentLanguage = ref(languages[0]);

function selectedCurrency(currency) {
  CurrentCurrency.value = currency;
}

function setSelectedLanguage(lng) {
  CurrentLanguage.value = lng;
}
</script>

<template>
  <div class="bg-primary text-white py-2 px-4 hidden lg:block">
    <div class="flex justify-between items-center text-sm">
      <div class="flex items-center gap-6">
        <a
          href="tel:+21671168600"
          class="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <Phone class="h-3.5 w-3.5" />
          <span>+216 71 168 600</span>
        </a>
        <a
          href="mailto:contact@tunisiagotravel.com"
          class="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <Mail class="h-3.5 w-3.5" />
          <span>contact@tunisiagotravel.com</span>
        </a>
        <div class="flex items-center gap-2 text-background/70">
          <MapPin class="h-3.5 w-3.5" />
          <span>8 Rue Bachaya, El Manar 1, Tunis</span>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 text-secondary">
          <Sparkles class="h-3.5 w-3.5" />
          <span class="font-medium">Winter Sale: Up to 40% off!</span>
        </div>

        <Separator orientation="vertical" class="h-4 bg-white/20" />

        <a
          href="/support"
          class="flex items-center gap-1.5 hover:text-secondary transition-colors cursor-pointer"
        >
          <Headphones class="h-3.5 w-3.5" />
          <span>24/7 Support</span>
        </a>

        <Separator orientation="vertical" class="h-4 bg-background/20" />

        <DropdownMenu>
          <DropdownMenuTrigger
            class="flex items-center gap-1 hover:text-secondary transition-colors"
          >
            <span>{{ CurrentCurrency?.symbol }}</span>
            <span>{{ CurrentCurrency?.code }}</span>
            <ChevronDown class="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Select Currency</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              v-for="currency in currencies"
              :key="currency.code"
              @click="selectedCurrency(currency)"
              class="flex justify-between cursor-pointer"
            >
              <span>{{ currency.name }}</span>
              <span class="text-muted-foreground ml-2">{{ currency.symbol }}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger
            class="flex items-center gap-1 hover:text-secondary transition-colors"
          >
            <CountryFlag :country="CurrentLanguage.code.toLowerCase()" size="small" />
            <span class="text-sm">{{ CurrentLanguage.name }}</span>
            <ChevronDown class="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              v-for="lang in languages"
              :key="lang.code"
              @click="setSelectedLanguage(lang)"
              class="cursor-pointer"
            >
              <CountryFlag :country="lang.code.toLowerCase()" size="small" />
              <span>{{ lang.name }}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</template>
