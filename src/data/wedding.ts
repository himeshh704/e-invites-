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
    fullName: "Lavleen Kaur Ahluwalia",
    firstName: "Lavleen",
    nickname: "Lavleen",
    description: "A gentle soul with a love for classical Gurbani ragas, warm masala chai, and traditional Phulkari embroidery.",
    lehengaColor: "#800E13", // Deep velvet bridal red/maroon
  },
  groom: {
    fullName: "Rajveer Singh Dhillon",
    firstName: "Rajveer",
    nickname: "Raj",
    description: "A warm-hearted royal soul who loves Punjabi folk music, horses, and family traditions.",
    turbanColor: "#5B1424", // Royal maroon turban
  },
  weddingDate: "2026-11-15T09:00:00",
  formattedDate: "Sunday, November 15, 2026",
  city: "Amritsar, Punjab",
  gurdwara: {
    name: "Gurdwara Sri Harmandir Sahib (Golden Temple)",
    address: "Golden Temple Road, Amritsar, Punjab 143006",
    time: "9:00 AM (Kirtan) | 10:30 AM (Anand Karaj)",
    googleMapsUrl: "https://maps.google.com/?q=Sri+Harmandir+Sahib+Amritsar",
  },
  storyScenes: [
    {
      id: "s1",
      number: "01",
      title: "THE DAY THEY MET",
      caption: "A golden afternoon at Sri Harmandir Sahib. A quiet moment of gratitude, two warm cups of chai, and a connection that felt ordained by Waheguru.",
      location: "Amritsar",
      year: "2023",
      bgTone: "#FFF3E4",
    },
    {
      id: "s2",
      number: "02",
      title: "ROKA & FAMILY BLESSINGS",
      caption: "With joyful dholki beats, sweets, and laughter, both families gathered to bless Rajveer & Lavleen's union.",
      location: "Chandigarh",
      year: "2024",
      bgTone: "#FFD6BA",
    },
    {
      id: "s3",
      number: "03",
      title: "SHARED DREAMS",
      caption: "Countless late-night calls, planning their future, and walking hand-in-hand through life's gentle moments.",
      location: "Punjab ✈️ Canada",
      year: "2025",
      bgTone: "#FEF9EB",
    },
    {
      id: "s4",
      number: "04",
      title: "AND NOW... ANAND KARAJ!",
      caption: "With the divine blessings of Sri Guru Granth Sahib Ji and our elders, two souls unite into one in holy matrimony.",
      location: "Amritsar",
      year: "2026",
      bgTone: "#E8F0EC",
    },
  ],
  families: [
    { id: "f1", name: "S. Gurdeep Singh Ahluwalia", relation: "Father of the Bride", side: "bride", clothingColor: "#5B1424" },
    { id: "f2", name: "Smt. Jasbir Kaur Ahluwalia", relation: "Mother of the Bride", side: "bride", clothingColor: "#D5A652" },
    { id: "f3", name: "Simran Kaur Ahluwalia", relation: "Sister of the Bride", side: "bride", clothingColor: "#F4ACB7" },
    { id: "f4", name: "S. Amarjit Singh Dhillon", relation: "Father of the Groom", side: "groom", clothingColor: "#2C5E3B" },
    { id: "f5", name: "Smt. Harpreet Kaur Dhillon", relation: "Mother of the Groom", side: "groom", clothingColor: "#E76F51" },
    { id: "f6", name: "Gurjot Singh Dhillon", relation: "Brother of the Groom", side: "groom", clothingColor: "#800E13" },
  ],
  events: [
    {
      id: "haldi",
      name: "MAIAN & CHOODA CEREMONY",
      tagline: "Turmeric Paste & Red Chooda Blessings",
      date: "Friday, Nov 13, 2026",
      time: "10:00 AM onwards",
      venue: "The Sunshine Courtyard",
      address: "Ranjit Avenue, Amritsar",
      dressCode: "Bright Mustard & Golden Yellow",
      description: "Applying sacred turmeric paste (Vatna) with traditional folk bolis, followed by the emotional Chooda & Kalire ceremony.",
      icon: "✨",
      googleMapsUrl: "https://maps.google.com/?q=Ranjit+Avenue+Amritsar",
    },
    {
      id: "mehendi",
      name: "MEHENDI & JAGGO NIGHT",
      tagline: "Intricate Henna & Glowing Jaggo Lanterns",
      date: "Saturday, Nov 14, 2026",
      time: "4:00 PM onwards",
      venue: "Ahluwalia Estates",
      address: "Mall Road, Amritsar",
      dressCode: "Royal Emerald & Punjabi Traditional",
      description: "Intricate bridal mehendi, piping hot jalebis, brass Jaggo lanterns on heads, and energetic Bhangra beats.",
      icon: "🪘",
      googleMapsUrl: "https://maps.google.com/?q=Mall+Road+Amritsar",
    },
    {
      id: "anand-karaj",
      name: "ANAND KARAJ (THE HOLY LAAVAN)",
      tagline: "The Sacred Nuptial Circumambulations",
      date: "Sunday, Nov 15, 2026",
      time: "9:00 AM (Kirtan) | 10:30 AM (Laavan)",
      venue: "Gurdwara Sri Harmandir Sahib Premises",
      address: "Golden Temple Road, Amritsar",
      dressCode: "Royal Ethnic Attire (Head covering mandatory)",
      description: "Four sacred Laavan circumambulations around Sri Guru Granth Sahib Ji, uniting two souls into one spiritual light.",
      icon: "ੴ",
      googleMapsUrl: "https://maps.google.com/?q=Sri+Harmandir+Sahib+Amritsar",
    },
    {
      id: "langar",
      name: "GURU KA LANGAR",
      tagline: "Sacred Community Feast",
      date: "Sunday, Nov 15, 2026",
      time: "12:30 PM",
      venue: "Guru Ram Das Langar Hall",
      address: "Golden Temple Premises, Amritsar",
      dressCode: "Modest Traditional Attire",
      description: "Sitting together as Sangat on carpeted mats,partaking in hot, fresh vegetarian Langar served with love.",
      icon: "🍲",
      googleMapsUrl: "https://maps.google.com/?q=Guru+Ram+Das+Langar+Hall+Amritsar",
    },
    {
      id: "reception",
      name: "THE GRAND RECEPTION",
      tagline: "Celebration of Eternal Togetherness",
      date: "Monday, Nov 16, 2026",
      time: "7:00 PM onwards",
      venue: "Grand Ballroom, Taj Swarna",
      address: "Outer Ring Road, Amritsar",
      dressCode: "Black Tie & Velvet Royal Couture",
      description: "An evening of champagne toasts, live acoustic violin performance, royal dinner, and dancing.",
      icon: "🥂",
      googleMapsUrl: "https://maps.google.com/?q=Taj+Swarna+Amritsar",
    },
  ],
  scrapbook: [
    {
      id: "m1",
      title: "Anand Karaj Blessings at Palki Sahib",
      date: "November 2026",
      imageUrl: "/images/anand_karaj_palki_couple.png",
      rotation: "-rotate-2",
      tapeColor: "#D5A652",
    },
    {
      id: "m2",
      title: "Sri Harmandir Sahib (Amrit Sarovar)",
      date: "Golden Reflections",
      imageUrl: "/images/golden_temple_amrit_sarovar.png",
      rotation: "rotate-2",
      tapeColor: "#5B1424",
    },
    {
      id: "m3",
      title: "Illustrated Gurdwara Sahib Card",
      date: "Sacred Heritage",
      imageUrl: "/images/golden_temple_vector_card.png",
      rotation: "-rotate-1",
      tapeColor: "#E9B44C",
    },
  ],
  rsvp: {
    whatsappNumber: "919876543210",
    whatsappFormatted: "+91 98765 43210",
    deadline: "November 1, 2026",
  },
  audioTrack: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-meditation-soft-sitar-112398.mp3",
};
