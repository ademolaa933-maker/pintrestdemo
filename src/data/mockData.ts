export interface BoardIdea {
  id: string;
  title: string;
  category: string;
  categoryBadgeExtra?: string;
  pinsCount: number;
  timeAgo: string;
  mainImage: string;
  thumbImage1: string;
  thumbImage2: string;
  authorAvatar?: string;
}

export interface SkinToneItem {
  id: string;
  hex: string;
  name: string;
  images: {
    title: string;
    shade: string;
    gradient: string;
    svgEmoji?: string;
    tags: string[];
  }[];
}

export interface VisualSearchTag {
  id: string;
  label: string;
  xPercent: number; // position on model image
  yPercent: number;
  results: {
    title: string;
    price: string;
    brand: string;
    color: string;
  }[];
}

export const WINNING_IDEAS: BoardIdea[] = [
  {
    id: "blokette",
    title: "Elevated blokette: stylish at the stadium",
    category: "Fashion",
    categoryBadgeExtra: "+ 1",
    pinsCount: 79,
    timeAgo: "2mo",
    mainImage: "blokette_main",
    thumbImage1: "blokette_t1",
    thumbImage2: "blokette_t2",
  },
  {
    id: "manicures",
    title: "Team spirit manicures",
    category: "Beauty",
    categoryBadgeExtra: "+ 1",
    pinsCount: 59,
    timeAgo: "2mo",
    mainImage: "manicures_main",
    thumbImage1: "manicures_t1",
    thumbImage2: "manicures_t2",
  },
  {
    id: "dips",
    title: "Delicious dips for summer gatherings",
    category: "Food",
    pinsCount: 70,
    timeAgo: "1y",
    mainImage: "dips_main",
    thumbImage1: "dips_t1",
    thumbImage2: "dips_t2",
  },
  {
    id: "jerseys",
    title: "Styling soccer jerseys",
    category: "Pinterest man",
    categoryBadgeExtra: "+ 1",
    pinsCount: 101,
    timeAgo: "2mo",
    mainImage: "jerseys_main",
    thumbImage1: "jerseys_t1",
    thumbImage2: "jerseys_t2",
  },
];

export const SKIN_TONE_DATA: SkinToneItem[] = [
  {
    id: "deep-1",
    hex: "#43281C",
    name: "Deep Espresso",
    images: [
      { title: "Berry Matte Velvet", shade: "Rich Berry", gradient: "from-[#43281C] via-[#632924] to-[#2B1710]", tags: ["Bold Lips", "Matte"] },
      { title: "Cocoa Sheer Gloss", shade: "Warm Cocoa", gradient: "from-[#382216] via-[#5C3A21] to-[#1E110A]", tags: ["High Shine", "Gloss"] },
      { title: "Plum Suede Stain", shade: "Deep Plum", gradient: "from-[#4A1525] via-[#69233B] to-[#250912]", tags: ["Longwear", "Plum"] },
      { title: "Golden Bronze Shimmer", shade: "Bronze", gradient: "from-[#5E381A] via-[#8C5326] to-[#3B210D]", tags: ["Luminous", "Bronze"] },
    ],
  },
  {
    id: "deep-2",
    hex: "#6F452A",
    name: "Rich Mahogany",
    images: [
      { title: "Terracotta Cream", shade: "Spiced Brick", gradient: "from-[#6F452A] via-[#945532] to-[#482916]", tags: ["Velvet", "Warm"] },
      { title: "Black Cherry Tint", shade: "Bordeaux", gradient: "from-[#571B28] via-[#7B293C] to-[#300E15]", tags: ["Night Out", "Gloss"] },
      { title: "Caramel Nude Balm", shade: "Warm Caramel", gradient: "from-[#7D4D2C] via-[#A8683B] to-[#513019]", tags: ["Everyday", "Balm"] },
      { title: "Copper Sunset Lustre", shade: "Copper Rose", gradient: "from-[#7A3E26] via-[#A65738] to-[#4D2314]", tags: ["Sunset", "Metallic"] },
    ],
  },
  {
    id: "medium-deep",
    hex: "#9E6845",
    name: "Warm Chestnut",
    images: [
      { title: "Spiced Cinnamon Lip", shade: "Warm Cinnamon", gradient: "from-[#9E6845] via-[#C08359] to-[#6A4228]", tags: ["Autumn", "Satin"] },
      { title: "Rosewood Neutral", shade: "Soft Rosewood", gradient: "from-[#8E4D55] via-[#B26771] to-[#5E2E34]", tags: ["Minimal", "Matte"] },
      { title: "Honey Glaze Glow", shade: "Golden Honey", gradient: "from-[#9E7345] via-[#C7965E] to-[#694A28]", tags: ["Dewy", "Oil"] },
      { title: "Ruby Wine Stain", shade: "Crimson Wine", gradient: "from-[#7C2234] via-[#A1344A] to-[#4D111E]", tags: ["Classic", "Bold"] },
    ],
  },
  {
    id: "medium",
    hex: "#C48A5E",
    name: "Golden Olive",
    images: [
      { title: "Peachy Nude Gloss", shade: "Peach Bellini", gradient: "from-[#C48A5E] via-[#DEA779] to-[#8C5D3B]", tags: ["Spring", "Juicy"] },
      { title: "Mauve Cashmere", shade: "Dusty Mauve", gradient: "from-[#A46F7A] via-[#C58B97] to-[#70464F]", tags: ["Cool Tone", "Satin"] },
      { title: "Warm Coral Pop", shade: "Sunlit Coral", gradient: "from-[#BA5B48] via-[#DF7762] to-[#80392A]", tags: ["Fresh", "Cream"] },
      { title: "Brown Sugar Stain", shade: "Light Mocha", gradient: "from-[#A87455] via-[#CB9472] to-[#714B33]", tags: ["90s Lip", "Tint"] },
    ],
  },
  {
    id: "medium-light",
    hex: "#DEAB83",
    name: "Warm Honey",
    images: [
      { title: "Ballet Pink Tint", shade: "Petal Pink", gradient: "from-[#DEAB83] via-[#F0C5A3] to-[#A87C58]", tags: ["Clean Girl", "Gloss"] },
      { title: "Apricot Cream Lipstick", shade: "Soft Apricot", gradient: "from-[#D88D6A] via-[#F2AC8B] to-[#995E40]", tags: ["Hydrating", "Warm"] },
      { title: "Vintage Rose Veil", shade: "Antique Rose", gradient: "from-[#BF7782] via-[#DC98A2] to-[#844E57]", tags: ["Romantic", "Matte"] },
      { title: "Champagne Shimmer Oil", shade: "Champagne Glow", gradient: "from-[#DAB18C] via-[#F4CFAD] to-[#A07A57]", tags: ["Glass Skin", "Oil"] },
    ],
  },
  {
    id: "fair",
    hex: "#F5CEB0",
    name: "Porcelain Peach",
    images: [
      { title: "Strawberry Jelly Balm", shade: "Strawberry Glaze", gradient: "from-[#E67E88] via-[#F7A6AE] to-[#B0525C]", tags: ["Korean Style", "Tint"] },
      { title: "Soft Nude Blush", shade: "Alabaster Nude", gradient: "from-[#F5CEB0] via-[#FDE4CF] to-[#BE9B7F]", tags: ["Subtle", "Satin"] },
      { title: "Cherry Glaze Pop", shade: "Vibrant Cherry", gradient: "from-[#C93B4E] via-[#E85B6E] to-[#8A212F]", tags: ["French Chic", "Stain"] },
      { title: "Powder Pink Chiffon", shade: "Baby Pink", gradient: "from-[#E3A3B4] via-[#F8C8D4] to-[#A66F7E]", tags: ["Pastel", "Matte"] },
    ],
  },
];

export const VISUAL_SEARCH_TAGS: VisualSearchTag[] = [
  {
    id: "tag-red",
    label: "Cherry red",
    xPercent: 72,
    yPercent: 28,
    results: [
      { title: "Oversized Cardinal Crewneck", price: "$48.00", brand: "Archive Vintage", color: "Cherry Red" },
      { title: "Cashmere Ribbed Knit", price: "$110.00", brand: "Studio Knit", color: "Ruby Red" },
      { title: "V-Neck Chunky Wool Sweater", price: "$65.00", brand: "Nordic Loom", color: "Burgundy" },
    ],
  },
  {
    id: "tag-knit",
    label: "Knit sweater",
    xPercent: 32,
    yPercent: 44,
    results: [
      { title: "Textured Cable-Knit Pullover", price: "$72.00", brand: "Heritage Wool", color: "Scarlet" },
      { title: "Cotton Blend Boxy Sweater", price: "$39.99", brand: "Everyday Basic", color: "Crimson" },
      { title: "Handmade Mohair Cardigan", price: "$125.00", brand: "Artisan Studio", color: "Deep Coral" },
    ],
  },
  {
    id: "tag-preppy",
    label: "Preppy look",
    xPercent: 64,
    yPercent: 78,
    results: [
      { title: "Pleated Tartan Mini Skirt", price: "$42.00", brand: "Collegiate Co.", color: "Navy / Red" },
      { title: "Leather Penny Loafers", price: "$89.00", brand: "Classic Step", color: "Burgundy" },
      { title: "White Poplin Collared Shirt", price: "$34.00", brand: "Tailored Crisp", color: "White" },
    ],
  },
];

export const SEARCH_SUGGESTIONS = [
  "easy dinners for tonight",
  "soccer jersey outfit aesthetic",
  "elevated blokette style",
  "team spirit manicures nail art",
  "delicious dips for gatherings",
  "earthy modern living room decor",
  "cherry red knitwear styles",
  "summer wedding guest dress",
  "matcha latte recipes",
  "vintage ceramic home aesthetic",
];
