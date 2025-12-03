<script setup>
import { ref, computed } from "vue";
import {
  MapPin,
  Users,
  DollarSign,
  Calendar,
  Minus,
  Plus,
  Trash2,
  Check,
  Sparkles,
  Banknote,
} from "lucide-vue-next";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CircuitGenerationDialog from "./CircuitGenerationDialog.vue";
import { toast } from "vue-sonner";

const cities = [
  "Tunis",
  "Sousse",
  "Sfax",
  "Kairouan",
  "Bizerte",
  "Gabès",
  "Ariana",
  "Gafsa",
  "Monastir",
  "Ben Arous",
];

const formData = ref({
  departureCity: "",
  arrivalCity: "",
  budget: "",
  departureDate: "",
  arrivalDate: "",
});

const showRoomSelector = ref(false);
const rooms = ref([{ id: 1, adults: 2, children: 0 }]);
const showDialog = ref(false);

const today = new Date().toISOString().split("T")[0];

const totalOccupancy = computed(() => {
  const totalAdults = rooms.value.reduce((sum, room) => sum + room.adults, 0);
  const totalChildren = rooms.value.reduce((sum, room) => sum + room.children, 0);
  return `${totalAdults} adult(s), ${totalChildren} child(ren), ${rooms.value.length} room(s)`;
});

const updateRoom = (roomId, type, change) => {
  rooms.value = rooms.value.map((room) =>
    room.id === roomId
      ? { ...room, [type]: Math.max(type === "adults" ? 1 : 0, room[type] + change) }
      : room
  );
};

const addRoom = () => {
  const newId = Math.max(...rooms.value.map((r) => r.id)) + 1;
  rooms.value.push({ id: newId, adults: 1, children: 0 });
};

const removeRoom = (roomId) => {
  rooms.value = rooms.value.filter((r) => r.id !== roomId);
};

const validateForm = () => {
  return (
    formData.value.departureCity &&
    formData.value.arrivalCity &&
    formData.value.budget &&
    formData.value.departureDate &&
    formData.value.arrivalDate
  );
};

const handleSubmit = () => {
  if (validateForm()) {
    showDialog.value = true;
  } else {
    toast({
      title: "Validation Error",
      description: "Please fill in all required fields.",
      variant: "destructive",
    });
  }
};

const handleDialogSelect = (option) => {
  toast({
    title: "Tour Created! 🎉",
    description: `Your ${option} tour generation has started.`,
  });
};

const inputClasses =
  "pl-11 h-12 rounded-xl border-2 border-border/50 bg-white/80 backdrop-blur-sm focus:border-ocean-mid focus:ring-2 focus:ring-ocean-light/20 transition-all duration-300";
</script>

<template>
  <div
    class="relative bg-white shadow-card border-t-4 border-b-4 rounded-tl-[3rem] rounded-br-[3rem] border-ocean-mid p-8 opacity-0 animate-scale-in stagger-3"
  >
    <div
      class="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-amber-glow to-amber-light rounded-full opacity-20 blur-2xl"
    />

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-5">
        <div class="space-y-2">
          <label class="block text-sm font-bold text-foreground">
            Departure City <span class="text-red-600">*</span>
          </label>
          <Select v-model="formData.departureCity">
            <SelectTrigger
              class="h-12 rounded-xl border-2 border-border/50 bg-white backdrop-blur-sm hover:border-ocean-mid transition-colors"
            >
              <MapPin class="w-4 h-4 mr-2 text-ocean-mid" />
              <SelectValue class="text-start w-full" placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent class="bg-white border-border shadow-lg rounded-xl z-50">
              <SelectItem
                v-for="city in cities"
                :key="city"
                :value="city"
                class="cursor-pointer hover:bg-muted"
              >
                {{ city }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-bold text-foreground">
            Arrival City <span class="text-red-600">*</span>
          </label>
          <Select v-model="formData.arrivalCity">
            <SelectTrigger
              class="h-12 rounded-xl border-2 border-border/50 bg-white/80 backdrop-blur-sm hover:border-ocean-mid transition-colors"
            >
              <MapPin class="w-4 h-4 mr-2 text-ocean-mid" />
              <SelectValue class="text-start w-full" placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent class="bg-white border-border shadow-lg rounded-xl z-50">
              <SelectItem
                v-for="city in cities"
                :key="city"
                :value="city"
                class="cursor-pointer hover:bg-muted"
              >
                {{ city }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2 relative">
          <label class="block text-sm font-bold text-foreground">
            Number of People <span class="text-red-600">*</span>
          </label>
          <div class="relative">
            <Users
              class="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-mid z-10"
            />
            <Input
              type="text"
              :value="totalOccupancy"
              readonly
              @click="showRoomSelector = !showRoomSelector"
              class="cursor-pointer"
              :class="inputClasses"
            />
          </div>

          <div
            v-if="showRoomSelector"
            class="absolute z-50 mt-2 w-full bg-white border-2 border-border rounded-2xl shadow-lg p-5 animate-scale-in"
          >
            <div class="space-y-4 max-h-80 overflow-y-auto">
              <div
                v-for="(room, index) in rooms"
                :key="room.id"
                class="border-b border-border/50 pb-4 last:border-b-0"
              >
                <h3 class="font-bold text-foreground mb-3">Room {{ index + 1 }}</h3>

                <div class="flex items-center justify-between space-y-3">
                  <span class="text-sm text-muted-foreground">Adults</span>
                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      @click="updateRoom(room.id, 'adults', -1)"
                      :disabled="room.adults <= 1"
                      class="w-9 h-9 rounded-lg bg-gradient-to-r from-amber-500 to-amber-200 text-black disabled:opacity-40 flex items-center justify-center disabled:cursor-not-allowed hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <Minus class="w-4 h-4" />
                    </button>
                    <span class="w-8 text-center font-bold">{{ room.adults }}</span>
                    <button
                      type="button"
                      @click="updateRoom(room.id, 'adults', 1)"
                      class="w-9 h-9 rounded-lg gradient-ocean text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <Plus class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div class="flex items-center justify-between space-y-3">
                  <span class="text-sm text-muted-foreground">Children</span>
                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      @click="updateRoom(room.id, 'children', -1)"
                      :disabled="room.children === 0"
                      class="w-9 h-9 rounded-lg bg-gradient-to-r from-amber-500 to-amber-200 text-black flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <Minus class="w-4 h-4" />
                    </button>
                    <span class="w-8 text-center font-bold">{{ room.children }}</span>
                    <button
                      type="button"
                      @click="updateRoom(room.id, 'children', 1)"
                      class="w-9 h-9 rounded-lg gradient-ocean text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <Plus class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  v-if="rooms.length > 1"
                  type="button"
                  @click="removeRoom(room.id)"
                  class="mt-3 text-red-600 text-sm hover:text-red-600/80 flex items-center gap-1 transition-colors"
                >
                  <Trash2 class="w-4 h-4" />
                  Remove room
                </button>
              </div>
            </div>

            <div class="flex gap-3 mt-4 pt-4 border-t border-border">
              <Button
                type="button"
                @click="addRoom"
                class="flex-1 gradient-ocean text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Plus class="w-4 h-4 mr-2" /> Add Room
              </Button>
              <Button
                type="button"
                @click="showRoomSelector = false"
                class="flex-1 bg-gradient-to-r from-amber-glow to-amber-light text-foreground rounded-xl hover:opacity-90 transition-opacity"
              >
                <Check class="w-4 h-4 mr-2" /> Done
              </Button>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-bold text-foreground">
            Budget <span class="text-red-600">*</span>
          </label>
          <div class="relative">
            <Banknote
              class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ocean-mid w-5 h-5 z-10"
            />
            <Input
              type="number"
              min="1000"
              max="100000"
              v-model="formData.budget"
              placeholder="Minimum 1000 TND"
              :class="inputClasses"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-bold text-foreground">
            Departure Date <span class="text-red-600">*</span>
          </label>
          <div class="relative">
            <Calendar
              class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ocean-mid w-5 h-5 z-10"
            />
            <Input
              type="date"
              :min="today"
              v-model="formData.departureDate"
              :class="inputClasses"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-bold text-foreground">
            Return Date <span class="text-red-600">*</span>
          </label>
          <div class="relative">
            <Calendar
              class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ocean-mid w-5 h-5 z-10"
            />
            <Input
              type="date"
              :min="formData.departureDate || today"
              v-model="formData.arrivalDate"
              :class="inputClasses"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end pt-4">
        <Button
          type="submit"
          class="px-8 py-6 gradient-ocean text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-3 text-lg"
        >
          <Sparkles class="w-5 h-5" />
          Create My Tour
        </Button>
      </div>
    </form>

    <CircuitGenerationDialog v-model:open="showDialog" @select="handleDialogSelect" />
  </div>
</template>
