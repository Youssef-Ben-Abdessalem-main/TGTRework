import {
  Calendar,
  CalendarDays,
  Car,
  Headphones,
  Hotel,
  Map,
  MapPin,
  MapPinned,
  Percent,
  Plane,
  TrendingUp,
  Users,
  UtensilsCrossed,
} from "lucide-vue-next";

export const services = [
  {
    href: "/hotels",
    label: "Hotels",
    icon: Hotel,
    description: "Luxury hotels & accommodations across Tunisia",
  },
  {
    href: "/restaurants",
    label: "Restaurants",
    icon: UtensilsCrossed,
    description: "Authentic Tunisian cuisine & fine dining",
  },
  {
    href: "/vols",
    label: "Vols",
    icon: Plane,
    description: "Domestic & international flight bookings",
  },
  {
    href: "/evenements",
    label: "Événements",
    icon: Calendar,
    description: "Cultural events & entertainment experiences",
  },
  {
    href: "/transports",
    label: "Transports",
    icon: Car,
    description: "Car rentals & transportation services",
  },
];

export const navLinks = [
  { href: "#destinations", label: "Destinations" },
  { href: "#deals", label: "Deals" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export const currencies = [
  { code: "TND", symbol: "د.ت", name: "Tunisian Dinar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "GBP", symbol: "£", name: "British Pound" },
];

export const languages = [
  { code: "GB", name: "English", flag: "🇬🇧" },
  { code: "FR", name: "Français", flag: "🇫🇷" },
  { code: "TN", name: "العربية", flag: "🇹🇳" },
  { code: "DE", name: "Deutsch", flag: "🇩🇪" },
];

export const mockCartItems = [
  {
    id: 1,
    name: "Sahara Desert Tour",
    price: 299,
    date: "Dec 15, 2025",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d8121a0c6f1f54d44383709/1577778935723-9C37S1RGDE55LOHWKCJ8/PHOTO-2019-10-31-10-50-32.jpg",
  },
  {
    id: 2,
    name: "Sidi Bou Said Day Trip",
    price: 89,
    date: "Dec 18, 2025",
    image: "https://www.revigorate.com/images/Cafe-Delices-Sidi-Bou-Said.jpg",
  },
];

export const mockFavorites = [
  { id: 1, name: "Djerba Beach Resort", type: "Hotel", rating: 4.8 },
  { id: 2, name: "Carthage Historical Tour", type: "Tour", rating: 4.9 },
  { id: 3, name: "Medina of Tunis Walk", type: "Experience", rating: 4.7 },
];

export const mockNotifications = [
  {
    id: 1,
    title: "Price Drop Alert!",
    message: "Sahara tour now 20% off",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    title: "Booking Confirmed",
    message: "Your Djerba trip is confirmed",
    time: "1d ago",
    unread: false,
  },
  {
    id: 3,
    title: "Travel Advisory",
    message: "Check weather for your trip dates",
    time: "2d ago",
    unread: false,
  },
];

export const destinations = [
  {
    name: "Sidi Bou Said",
    description: "Iconic blue & white village",
    image:
      "https://thumbs.dreamstime.com/b/blue-doors-window-white-wall-building-sidi-bou-said-47242711.jpg",
    tours: 12,
  },
  {
    name: "Sahara Desert",
    description: "Golden dunes & starry nights",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHFzi9S2c3-UO7eMWQs_UYYtW-d4IzIj6iA&s",
    tours: 8,
  },
  {
    name: "Carthage",
    description: "Ancient ruins & history",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LTr2kCyASqGE8-Hau6pXpLiNgxi7Q_DcDA&s",
    tours: 15,
  },
  {
    name: "Djerba",
    description: "Island paradise",
    image:
      "https://img.freepik.com/premium-photo/view-mediterranean-coast-with-beach-with-white-sand-green-palm-tree-djerba-island-tunisia_128089-382.jpg",
    tours: 10,
  },
  {
    name: "El Jem",
    description: "Famous Roman amphitheatre",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IXskPLpw76Wgz6HowNejbVmjyaGjsQsbFA&s",
    tours: 6,
  },
];

export const tours = [
  {
    id: 1,
    name: "Sahara Desert Adventure",
    description:
      "3-day camel trek through the golden dunes with overnight camping under the stars",
    image:
      "https://img.freepik.com/premium-photo/view-mediterranean-coast-with-beach-with-white-sand-green-palm-tree-djerba-island-tunisia_128089-382.jpg",
    duration: "3 Days",
    groupSize: "2-8",
    rating: 4.9,
    reviews: 128,
    price: 450,
    originalPrice: 520,
    featured: true,
    category: "adventure",
  },
  {
    id: 2,
    name: "Carthage & Sidi Bou Said",
    description:
      "Full day exploration of ancient ruins and the iconic blue village",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IXskPLpw76Wgz6HowNejbVmjyaGjsQsbFA&s",
    duration: "1 Day",
    groupSize: "2-12",
    rating: 4.8,
    reviews: 256,
    price: 85,
    category: "cultural",
  },
  {
    id: 3,
    name: "Tunisian Culinary Journey",
    description:
      "Cook with local chefs, visit markets, and taste authentic Tunisian cuisine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K7I8Z55znGju0Vu1PGBJFhilCatjBJNIcg&s",
    duration: "6 Hours",
    groupSize: "4-10",
    rating: 4.9,
    reviews: 89,
    price: 120,
    category: "cultural",
  },
  {
    id: 4,
    name: "Mediterranean Beach Escape",
    description:
      "Relax on pristine beaches with water sports and seaside dining",
    image:
      "https://www.discovertunisia.com/uk/sites/default/files/watersports1.jpg",
    duration: "2 Days",
    groupSize: "2-6",
    rating: 4.7,
    reviews: 167,
    price: 280,
    category: "beach",
  },
  {
    id: 5,
    name: "Star Wars Film Locations",
    description: "Visit the iconic filming locations in the Tunisian desert",
    image:
      "https://www.atlasandboots.com/wp-content/uploads/2023/07/Star-Wars-film-locations-tunisia-lead-image.jpg",
    duration: "2 Days",
    groupSize: "4-12",
    rating: 4.8,
    reviews: 203,
    price: 320,
    featured: true,
    category: "adventure",
  },
  {
    id: 6,
    name: "Djerba Island Discovery",
    description:
      "Explore the island's beaches, villages, and traditional crafts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbnO_UQceUIRnZ72pdsRjHLHc1KYPzaLFOA&s",
    duration: "2 Days",
    groupSize: "2-10",
    rating: 4.6,
    reviews: 145,
    price: 240,
    category: "beach",
  },
];

export const categories = [
  { id: "all", label: "All Tours" },
  { id: "adventure", label: "Adventure" },
  { id: "cultural", label: "Cultural" },
  { id: "beach", label: "Beach & Relax" },
];

export const coreServices = [
  {
    href: "/hotels",
    label: "Hotels",
    icon: Hotel,
    description: "Luxury accommodations & resorts",
    color: "bg-blue-500/10 text-blue-600",
    featured: [
      "Djerba Beach Resort",
      "Tunis Grand Hotel",
      "Sahara Luxury Camp",
    ],
  },
  {
    href: "/restaurants",
    label: "Restaurants",
    icon: UtensilsCrossed,
    description: "Authentic Tunisian cuisine & fine dining",
    color: "bg-orange-500/10 text-orange-600",
    featured: ["Dar El Jeld", "Le Baroque", "Sidi Bou Fares"],
  },
  // {
  //   href: "/flights",
  //   label: "Flights",
  //   icon: Plane,
  //   description: "Domestic & international flights",
  //   color: "bg-sky-500/10 text-sky-600",
  //   featured: ["Tunis-Paris", "Djerba-London", "Monastir-Berlin"],
  // },
  {
    href: "/events",
    label: "Events",
    icon: CalendarDays,
    description: "Cultural events & entertainment",
    color: "bg-purple-500/10 text-purple-600",
    featured: ["Carthage Festival", "Sahara Music Fest", "Medina Night Tours"],
  },
  {
    href: "/transport",
    label: "Transport",
    icon: Car,
    description: "Car rentals & transportation services",
    color: "bg-green-500/10 text-green-600",
    featured: ["Airport Transfers", "Private Drivers", "Car Rentals"],
  },
  {
    href: "/destination",
    label: "Destinations",
    icon: MapPin, // Font Awesome icon
    description: "Explore beautiful destinations across Tunisia",
    color: "text-red-600 bg-red-50", // Tunisian flag colors
    featured: ["Djerba", "Carthage", "Sidi Bou Said"], // Popular Tunisian destinations
  },
];
export const quickLinks = [
  { href: "/deals", label: "Deals", icon: Percent },
  { href: "/destinations", label: "Destinations", icon: MapPinned },
];
export const recentSearches = [
  { query: "Hotels in Djerba", type: "hotel" },
  { query: "Flights to Tunis", type: "flight" },
  { query: "Restaurants near Medina", type: "restaurant" },
];

export const tabs = [
  { value: "hotels", label: "Hotels", icon: Hotel },

  { value: "restaurants", label: "Restaurants", icon: UtensilsCrossed },
  { value: "events", label: "Events", icon: CalendarDays },
  { value: "create_tour", label: "Create Your Tour", icon: MapPinned },
];

export const tunisianCities = [
  { value: "tunis", label: "Tunis", airport: "TUN" },
  { value: "djerba", label: "Djerba", airport: "DJE" },
  { value: "monastir", label: "Monastir", airport: "MIR" },
  { value: "sfax", label: "Sfax", airport: "SFA" },
  { value: "tozeur", label: "Tozeur", airport: "TOE" },
  { value: "hammamet", label: "Hammamet" },
  { value: "sousse", label: "Sousse" },
  { value: "sidi-bou-said", label: "Sidi Bou Said" },
  { value: "carthage", label: "Carthage" },
  { value: "kairouan", label: "Kairouan" },
];

export const cuisineTypes = [
  { value: "traditional", label: "Traditional Tunisian" },
  { value: "seafood", label: "Seafood" },
  { value: "fine-dining", label: "Fine Dining" },
  { value: "casual", label: "Casual Dining" },
  { value: "cafe", label: "Cafes & Bakeries" },
  { value: "international", label: "International" },
];

export const eventCategories = [
  { value: "music", label: "Music & Concerts" },
  { value: "cultural", label: "Cultural & Arts" },
  { value: "sports", label: "Sports" },
  { value: "food", label: "Food & Wine" },
  { value: "nightlife", label: "Nightlife" },
  { value: "tours", label: "Guided Tours" },
];

export const vehicleTypes = [
  { value: "economy", label: "Economy Car" },
  { value: "suv", label: "SUV" },
  { value: "luxury", label: "Luxury" },
  { value: "minivan", label: "Minivan" },
  { value: "transfer", label: "Airport Transfer" },
  { value: "driver", label: "Private Driver" },
];
