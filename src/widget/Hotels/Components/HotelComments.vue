<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import {
  Star,
  MessageCircle,
  ThumbsUp,
  Calendar,
  User,
  Send,
  Edit,
} from "lucide-vue-next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const router = useRouter();
const authStore = useAuthStore();

const showAllComments = ref(false);
const replyingTo = ref(null);
const replyText = ref("");
const showReviewForm = ref(false);
const showLoginDialog = ref(false);
const reviewForm = ref({
  rating: 5,
  title: "",
  content: "",
});

const comments = ref([
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    title: "Exceptional stay with outstanding service",
    content:
      "The hotel exceeded all expectations. The staff was incredibly welcoming, the rooms were spotless, and the spa facilities were world-class. The location is perfect for exploring Djerba.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    author: "Michael Chen",
    rating: 4,
    date: "2024-01-10",
    title: "Great value for money",
    content:
      "Beautiful hotel with excellent amenities. The breakfast buffet was impressive and the beach access was convenient. Only minor issue was the WiFi speed in some areas.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    author: "Emma Rodriguez",
    rating: 5,
    date: "2024-01-05",
    title: "Perfect family vacation",
    content:
      "Our family had an amazing time. The kids loved the pool area and the entertainment program. The connecting rooms were perfect for our needs. Highly recommended!",
    helpful: 15,
    verified: true,
  },
]);

const averageRating = computed(() => {
  if (comments.value.length === 0) return 0;
  const sum = comments.value.reduce((acc, comment) => acc + comment.rating, 0);
  return (sum / comments.value.length).toFixed(1);
});

const displayedComments = computed(() => {
  return showAllComments.value ? comments.value : comments.value.slice(0, 2);
});

const ratingDistribution = computed(() => {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  comments.value.forEach((comment) => {
    distribution[comment.rating]++;
  });
  return distribution;
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => i < rating);
};

const startReply = (commentId) => {
  replyingTo.value = commentId;
  replyText.value = "";
};

const cancelReply = () => {
  replyingTo.value = null;
  replyText.value = "";
};

const submitReply = (commentId) => {
  if (replyText.value.trim()) {
    console.log("Reply to comment", commentId, ":", replyText.value);
    cancelReply();
  }
};

const handleWriteReview = () => {
  if (!authStore.isAuthenticated) {
    showLoginDialog.value = true;
    return;
  }
  showReviewForm.value = true;
};

const goToLogin = () => {
  showLoginDialog.value = false;
  router.push("/login");
};

const submitReview = () => {
  if (reviewForm.value.title.trim() && reviewForm.value.content.trim()) {
    // Add review logic here - integrate with your API
    console.log("New review:", reviewForm.value);
    showReviewForm.value = false;
    reviewForm.value = { rating: 5, title: "", content: "" };
  }
};

const cancelReview = () => {
  showReviewForm.value = false;
  reviewForm.value = { rating: 5, title: "", content: "" };
};
</script>

<template>
  <div class="py-6 space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold text-gray-900 flex items-center">
        <MessageCircle class="mr-3 text-ocean-deep" :size="28" />
        Guest Reviews
      </h2>
      <div class="text-sm text-gray-500">
        {{ comments.length }} {{ comments.length === 1 ? "review" : "reviews" }}
      </div>
    </div>

    <div
      class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start mb-2">
            <span class="text-4xl font-bold text-ocean-deep mr-2">{{
              averageRating
            }}</span>
            <div class="flex items-center">
              <Star
                v-for="(filled, index) in renderStars(Math.round(averageRating))"
                :key="index"
                :class="filled ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                :size="20"
              />
            </div>
          </div>
          <p class="text-gray-600">Based on {{ comments.length }} verified reviews</p>
        </div>

        <div class="space-y-2">
          <div
            v-for="(count, rating) in ratingDistribution"
            :key="rating"
            class="flex items-center text-sm"
          >
            <span class="w-8 text-gray-600">{{ rating }}★</span>
            <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
              <div
                class="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                :style="{
                  width:
                    comments.length > 0 ? (count / comments.length) * 100 + '%' : '0%',
                }"
              ></div>
            </div>
            <span class="w-8 text-gray-500">{{ count }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <div
        v-for="comment in displayedComments"
        :key="comment.id"
        class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
      >
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <User class="text-white" :size="20" />
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <h4 class="font-semibold text-gray-900">{{ comment.author }}</h4>
                <span
                  v-if="comment.verified"
                  class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  <i class="fas fa-check-circle mr-1"></i>
                  Verified
                </span>
              </div>
              <div class="flex items-center space-x-2 mt-1">
                <div class="flex items-center">
                  <Star
                    v-for="(filled, index) in renderStars(comment.rating)"
                    :key="index"
                    :class="filled ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                    :size="16"
                  />
                </div>
                <span class="text-sm text-gray-500 flex items-center">
                  <Calendar :size="14" class="mr-1" />
                  {{ formatDate(comment.date) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <h5 class="font-medium text-gray-900 mb-2">{{ comment.title }}</h5>
          <p class="text-gray-700 leading-relaxed">{{ comment.content }}</p>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            class="flex items-center space-x-2 text-sm text-gray-500 hover:text-ocean-deep transition-colors"
          >
            <ThumbsUp :size="16" />
            <span>Helpful ({{ comment.helpful }})</span>
          </button>
          <button
            @click="startReply(comment.id)"
            class="text-sm text-ocean-deep hover:text-blue-800 transition-colors"
          >
            Reply
          </button>
        </div>

        <div
          v-if="replyingTo === comment.id"
          class="mt-4 p-4 bg-gray-50 rounded-lg border"
        >
          <textarea
            v-model="replyText"
            placeholder="Write your reply..."
            class="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
          ></textarea>
          <div class="flex justify-end space-x-2 mt-3">
            <button
              @click="cancelReply"
              class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              @click="submitReply(comment.id)"
              :disabled="!replyText.trim()"
              class="flex items-center px-4 py-2 bg-ocean-deep text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send :size="16" class="mr-2" />
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="comments.length > 2" class="text-center">
      <button
        @click="showAllComments = !showAllComments"
        class="inline-flex items-center px-6 py-3 border border-ocean-deep text-ocean-deep rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
      >
        {{ showAllComments ? "Show Less" : `View All ${comments.length} Reviews` }}
        <i
          :class="showAllComments ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"
          class="ml-2"
        ></i>
      </button>
    </div>

    <div
      v-if="!showReviewForm"
      class="bg-gray-50 rounded-lg p-6 text-center border border-gray-200"
    >
      <h3 class="text-lg font-semibold text-gray-900 mb-2">Share Your Experience</h3>
      <p class="text-gray-600 mb-4">
        Help other travelers by sharing your review of this hotel
      </p>
      <button
        @click="handleWriteReview"
        class="inline-flex items-center px-6 py-3 bg-ocean-deep text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        <Edit :size="20" class="mr-2" />
        Write a Review
      </button>
    </div>

    <div v-if="showReviewForm" class="bg-white rounded-lg border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Edit :size="20" class="mr-2" />
        Write Your Review
      </h3>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <div class="flex items-center space-x-1">
            <Star
              v-for="n in 5"
              :key="n"
              @click="reviewForm.rating = n"
              :class="
                n <= reviewForm.rating
                  ? 'text-yellow-400 fill-current cursor-pointer'
                  : 'text-gray-300 cursor-pointer'
              "
              :size="24"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Review Title</label>
          <input
            v-model="reviewForm.title"
            type="text"
            placeholder="Summarize your experience"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
          <textarea
            v-model="reviewForm.content"
            placeholder="Share your detailed experience with this hotel..."
            rows="4"
            class="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        <div class="flex justify-end space-x-3">
          <button
            @click="cancelReview"
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="submitReview"
            :disabled="!reviewForm.title.trim() || !reviewForm.content.trim()"
            class="flex items-center px-6 py-2 bg-ocean-deep text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send :size="16" class="mr-2" />
            Submit Review
          </button>
        </div>
      </div>
    </div>

    <Dialog v-model:open="showLoginDialog">
      <DialogContent class="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle class="flex items-center">
            <MessageCircle class="mr-2 text-ocean-deep" :size="20" />
            Login Required
          </DialogTitle>
          <DialogDescription>
            You need to be logged in to write a review. Join our community to share your
            experiences and help other travelers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter class="flex-col sm:flex-row gap-2">
          <Button variant="outline" @click="showLoginDialog = false"> Cancel </Button>
          <Button @click="goToLogin" class="bg-ocean-deep hover:bg-blue-700">
            Go to Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
