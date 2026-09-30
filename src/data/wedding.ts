export interface StoryScene {
  id: string;
  number: string;
  title: string;
  caption: string;
  location: string;
  year: string;
  bgTone: string;
}

export interface FamilyMemberConfig {
  id: string;
  name: string;
  relation: string;
  side: 'bride' | 'groom';
  expression?: string;
  clothingColor: string;
}

export interface EventConfig {
  id: string;
  name: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  dressCode: string;
  description: string;
  icon: string;
  googleMapsUrl: string;
}

export interface ScrapbookItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  rotation: string; // e.g. "-rotate-3" or "rotate-2"
  tapeColor: string;
}

export interface WeddingDataConfig {
  bride: {
    fullName: string;
    firstName: string;
    nickname: string;
    description: string;
    lehengaColor: string;
  };
  groom: {
    fullName: string;
    firstName: string;
    nickname: string;
    description: string;
    turbanColor: string;
  };
  weddingDate: string; // ISO format
  formattedDate: string;
  city: string;
  gurdwara: {
    name: string;
    address: string;
    time: string;
    googleMapsUrl: string;
  };
  storyScenes: StoryScene[];
  families: FamilyMemberConfig[];
  events: EventConfig[];
  scrapbook: ScrapbookItem[];
  rsvp: {
    whatsappNumber: string;
    whatsappFormatted: string;
    deadline: string;
  };
  audioTrack: string;
}

export const WEDDING_DATA: WeddingDataConfig = {
  bride: {
    fullName: "Harleen Kaur Ahluwalia",
    firstName: "Harleen",
    nickname: "Harleen",
    description: "A joyful soul with a penchant for literature, warm masala chai, and traditional Phulkari embroidery.",
    lehengaColor: "#9E2A2B", // Soft muted maroon velvet
  },
  groom: {
    fullName: "Jaspreet Singh Dhillon",
    firstName: "Jaspreet",
    nickname: "Jassi",
    description: "A warm-hearted architect who loves old Punjabi folk music, football, and family get-togethers.",
    turbanColor: "#800E13", // Regal royal turban maroon
  },
  weddingDate: "2026-10-24T09:00:00",
  formattedDate: "Saturday, October 24, 2026",
  city: "Amritsar, Punjab",
  gurdwara: {
    name: "Gurdwara Sri Chheharta Sahib",
    address: "GT Road, Chheharta, Amritsar, Punjab 143105",
    time: "9:00 AM (Kirtan) | 10:30 AM (Anand Karaj)",
    googleMapsUrl: "https://maps.google.com/?q=Gurdwara+Sri+Chheharta+Sahib+Amritsar",
  },
  storyScenes: [
    {
      id: "s1",
      number: "01",
      title: "THE DAY THEY MET",
      caption: "A rainy afternoon in London. A shared umbrella, two hot cups of chai, and a conversation that never seemed to end.",
      location: "London, UK",
      year: "2022",
      bgTone: "#FFF3E4",
    },
    {
      id: "s2",
      number: "02",
      title: "FIRST CHAI & CONVERSATIONS",
      caption: "Discovering how much they had in common—from childhood memories in Punjab to their favorite Rabab melodies.",
      location: "Chandigarh",
      year: "2023",
      bgTone: "#FFD6BA",
    },
    {
      id: "s3",
      number: "03",
      title: "ACROSS CONTINENTS",
      caption: "Time zones could not dim their bond. Countless flight tickets, surprise video calls, and handwritten letters.",
      location: "Vancouver ✈️ Punjab",
      year: "2024",
      bgTone: "#FEF9EB",
    },
    {
      id: "s4",
      number: "04",
      title: "AND NOW... OUR WEDDING!",
      caption: "With the blessings of our elders and the Guru, two paths join together for a lifetime of love and laughter.",
      location: "Amritsar",
      year: "2026",
      bgTone: "#E8F0EC",
    },
  ],
  families: [
    { id: "f1", name: "Gurdev Singh Ahluwalia", relation: "Father of the Bride", side: "bride", clothingColor: "#9E2A2B" },
    { id: "f2", name: "Manjeet Kaur Ahluwalia", relation: "Mother of the Bride", side: "bride", clothingColor: "#E9B44C" },
    { id: "f3", name: "Jasleen Kaur Ahluwalia", relation: "Sister of the Bride", side: "bride", clothingColor: "#F4ACB7" },
    { id: "f4", name: "Balwinder Singh Dhillon", relation: "Father of the Groom", side: "groom", clothingColor: "#2C5E3B" },
    { id: "f5", name: "Harpreet Kaur Dhillon", relation: "Mother of the Groom", side: "groom", clothingColor: "#E76F51" },
    { id: "f6", name: "Gurjot Singh Dhillon", relation: "Brother of the Groom", side: "groom", clothingColor: "#800E13" },
  ],
  events: [
    {
      id: "haldi",
      name: "HALDI & MAIAN",
      tagline: "Turmeric Blessings & Laughter",
      date: "Thursday, Oct 22, 2026",
      time: "10:00 AM onwards",
      venue: "The Sunshine Courtyard",
      address: "Ranjit Avenue, Amritsar",
      dressCode: "Bright Mustard & Ochre",
      description: "Applying fresh turmeric paste, singing traditional vatna bolis, and bathing the bride and groom in love.",
      icon: "✨",
      googleMapsUrl: "https://maps.google.com/?q=Ranjit+Avenue+Amritsar",
    },
    {
      id: "mehendi",
      name: "MEHENDI NIGHT",
      tagline: "Henna Patterns & Folk Beats",
      date: "Thursday, Oct 22, 2026",
      time: "4:00 PM onwards",
      venue: "Ahluwalia Gardens",
      address: "Mall Road, Amritsar",
      dressCode: "Festive Sage & Peach",
      description: "Intricate henna designs, steaming tea, piping hot jalebis, and endless dholki songs.",
      icon: "🌿",
      googleMapsUrl: "https://maps.google.com/?q=Mall+Road+Amritsar",
    },
    {
      id: "sangeet",
      name: "SANGEET & JAGGO",
      tagline: "Songs, Brass Lanterns & Dancing",
      date: "Friday, Oct 23, 2026",
      time: "7:00 PM onwards",
      venue: "The Royal Lawn, Taj Swarna",
      address: "Outer Ring Road, Amritsar",
      dressCode: "Vibrant Punjabi Traditional / Velvet",
      description: "Jaggo lights on head, bhangra beats, family dance performances, and celebration under the stars.",
      icon: "🪘",
      googleMapsUrl: "https://maps.google.com/?q=Taj+Swarna+Amritsar",
    },
    {
      id: "anand-karaj",
      name: "ANAND KARAJ",
      tagline: "The Sacred Solemnization",
      date: "Saturday, Oct 24, 2026",
      time: "9:00 AM onwards",
      venue: "Gurdwara Sri Chheharta Sahib",
      address: "GT Road, Chheharta, Amritsar",
      dressCode: "Royal Ethnic Formal (Head covering mandatory)",
      description: "Four sacred Laavan circumambulations in the presence of Sri Guru Granth Sahib Ji.",
      icon: "ੴ",
      googleMapsUrl: "https://maps.google.com/?q=Gurdwara+Sri+Chheharta+Sahib+Amritsar",
    },
    {
      id: "langar",
      name: "GURU KA LANGAR",
      tagline: "Community Sacred Feast",
      date: "Saturday, Oct 24, 2026",
      time: "12:30 PM",
      venue: "Gurdwara Langar Hall",
      address: "Gurdwara Sri Chheharta Sahib Premises",
      dressCode: "Traditional Modest",
      description: "Sitting together on the carpeted floor as Sangat, sharing hot vegetarian meals served with love.",
      icon: "🍲",
      googleMapsUrl: "https://maps.google.com/?q=Gurdwara+Sri+Chheharta+Sahib+Amritsar",
    },
    {
      id: "reception",
      name: "RECEPTION GALA",
      tagline: "Cheers to New Beginnings",
      date: "Sunday, Oct 25, 2026",
      time: "7:00 PM onwards",
      venue: "Grand Ballroom, Hyatt Regency",
      address: "GT Road, Amritsar",
      dressCode: "Indo-Western Couture / Suits",
      description: "A joyous evening of heartfelt speeches, cake cutting, live band, and dinner.",
      icon: "🥂",
      googleMapsUrl: "https://maps.google.com/?q=Hyatt+Regency+Amritsar",
    },
  ],
  scrapbook: [
    {
      id: "m1",
      title: "First Trip Together — London 2023",
      date: "Autumn 2023",
      imageUrl: "/images/couple_memory.png",
      rotation: "-rotate-2",
      tapeColor: "#FFD6BA",
    },
    {
      id: "m2",
      title: "The Roka Ceremony in Amritsar",
      date: "Spring 2025",
      imageUrl: "/images/phulkari.png",
      rotation: "rotate-3",
      tapeColor: "#F4ACB7",
    },
    {
      id: "m3",
      title: "Gurdwara Visit at Sunset",
      date: "Summer 2025",
      imageUrl: "/images/illustrated_gurdwara.png",
      rotation: "-rotate-1",
      tapeColor: "#E9B44C",
    },
  ],
  rsvp: {
    whatsappNumber: "919876543210",
    whatsappFormatted: "+91 98765 43210",
    deadline: "October 1, 2026",
  },
  audioTrack: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-meditation-soft-sitar-112398.mp3",
};
