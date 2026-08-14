import homeImg from "@/assets/home.jpg";
import roomImg from "@/assets/room.png";
import foodImg from "@/assets/food.png";
import commonImg from "@/assets/common.png";
import studyImg from "@/assets/study.png";
import bathroomImg from "@/assets/bathroom.png";
import cameraImg from "@/assets/camera.png";

export type GalleryItem = {
  id: string;
  category: string;
  alt: string;
  /** Replace with real hostel photographs when available. */
  src?: string;
};

export const galleryCategories = [
  "Hostel Exterior",
  "Rooms",
  "Dining / Mess",
  "Common Area",
  "Study Area",
  "Bathrooms",
  "Kitchen",
  "Parking",
  "Laundry",
  "CCTV / Security",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "exterior",
    category: "Hostel Exterior",
    alt: "BABA PG & HOSTEL exterior in Jaat Colony, Dankaur",
    src: homeImg,
  },
  {
    id: "room-1",
    category: "Rooms",
    alt: "Double sharing room at BABA PG & HOSTEL Dankaur",
    src: roomImg,
  },
  {
    id: "mess",
    category: "Dining / Mess",
    alt: "Food facility at BABA PG & HOSTEL",
    src: foodImg,
  },
  {
    id: "common",
    category: "Common Area",
    alt: "Common area at boys hostel in Jaat Colony Dankaur",
    src: commonImg,
  },
  {
    id: "study",
    category: "Study Area",
    alt: "Study area at BABA PG & HOSTEL",
    src: studyImg,
  },
  {
    id: "bath",
    category: "Bathrooms",
    alt: "Bathroom at BABA PG & HOSTEL",
    src: bathroomImg,
  },
  {
    id: "cctv",
    category: "CCTV / Security",
    alt: "CCTV security at BABA PG & HOSTEL",
    src: cameraImg,
  },
  { id: "kitchen", category: "Kitchen", alt: "Kitchen photo coming soon" },
  { id: "parking", category: "Parking", alt: "Parking photo coming soon" },
  { id: "laundry", category: "Laundry", alt: "Laundry photo coming soon" },
];
