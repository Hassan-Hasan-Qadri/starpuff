const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "21",
    title: "Elf Bar BC5000 Disposable",
    price: 22,
    rating: 5,
    description: "Disposable vape, up to 5000 puffs, mango-peach flavor.",
    mainImage: "product-img/elf_bar_bc5000_mango_peach.webp",
    slug: "elf-bar-bc5000",
    manufacturer: "Elf Bar",
    categoryId: "vape-cat-001",
    inStock: 1,
  },
  {
    id: "22",
    title: "Geek Bar Meloso Max",
    price: 24,
    rating: 4,
    description: "Blueberry ice flavor, sleek and compact disposable.",
    mainImage: "product-img/geek_bar_meloso_max_blueberry_ice.webp",
    slug: "geek-bar-meloso",
    manufacturer: "Geek Bar",
    categoryId: "vape-cat-001",
    inStock: 1,
  },
  {
    id: "23",
    title: "Voopoo Drag 4 Mod",
    price: 89,
    rating: 5,
    description: "High‑power mod with adjustable wattage and durable body.",
    mainImage: "product-img/voopoo_drag_4_matte_black.webp",
    slug: "voopoo-drag-4",
    manufacturer: "Voopoo",
    categoryId: "vape-cat-003",
    inStock: 1,
  },
  {
    id: "24",
    title: "Smok Nord 5 Pod Kit",
    price: 54,
    rating: 4,
    description: "Pod system for both mouth-to-lung & direct-to-lung vaping.",
    mainImage: "product-img/smok_nord_5_carbon_fiber.webp",
    slug: "smok-nord-5",
    manufacturer: "Smok",
    categoryId: "vape-cat-004",
    inStock: 1,
  },
  {
    id: "25",
    title: "Uwell Caliburn A3 Pod",
    price: 39,
    rating: 4,
    description: "Compact pod device, good flavor and no leaks.",
    mainImage: "product-img/uwell_caliburn_a3_space_grey",
    slug: "uwell-caliburn-a3",
    manufacturer: "Uwell",
    categoryId: "vape-cat-004",
    inStock: 1,
  },
  {
    id: "26",
    title: "Juice Head Freeze (Strawberry Kiwi)",
    price: 25,
    rating: 5,
    description: "Menthol chill strawberry-kiwi e-liquid (nic salt).",
    mainImage: "product-img/juice_head_freeze_strawberry_kiwi.webp",
    slug: "juice-head-freeze",
    manufacturer: "Juice Head",
    categoryId: "vape-cat-002",
    inStock: 1,
  },
  {
    id: "27",
    title: "Naked 100 Lava Flow",
    price: 18,
    rating: 4,
    description: "Tropical blend of strawberry, coconut & pineapple.",
    mainImage: "product-img/naked_100_lava_flow_tropical_60ml.webp",
    slug: "naked100-lava-flow",
    manufacturer: "Naked 100",
    categoryId: "vape-cat-002",
    inStock: 1,
  },
  {
    id: "28",
    title: "Freemax Fireluke Mesh Coils",
    price: 16,
    rating: 4,
    description: "Replacement mesh coils for flavor‑intensive vaping.",
    mainImage: "product-img/freemax_fireluke_mesh_coils_5pack.webp",
    slug: "freemax-coils",
    manufacturer: "Freemax",
    categoryId: "vape-cat-005",
    inStock: 1,
  },
  {
    id: "29",
    title: "Suorin Air Pro Pod",
    price: 35,
    rating: 3,
    description: "Slim pod device ideal for nicotine salts.",
    mainImage: "product-img/suorin_air_pro_gunmetal.webp",
    slug: "suorin-air-pro",
    manufacturer: "Suorin",
    categoryId: "vape-cat-004",
    inStock: 1,
  },
  {
    id: "210",
    title: "Zero Nic Gummy Bear",
    price: 20,
    rating: 5,
    description: "Gummy bear flavored e-liquid with 0mg nicotine.",
    mainImage: "product-img/zero_nicotine_gummy_bear_60ml.webp",
    slug: "zero-nic-gummy-bear",
    manufacturer: "Starpuff",
    categoryId: "vape-cat-007",
    inStock: 1,
  },
  {
    id: "211",
    title: "Vape Carry Case",
    price: 12,
    rating: 4,
    description: "Zippered neon carry case for vape gear.",
    mainImage: "product-img/starpuff_vape_carry_case_neon_black.webp",
    slug: "vape-carry-case",
    manufacturer: "Starpuff",
    categoryId: "vape-cat-006",
    inStock: 1,
  },
  {
    id: "212",
    title: "Vape Lanyard Necklace",
    price: 8,
    rating: 3,
    description: "Silicone lanyard to keep your device close.",
    mainImage: "product-img/starpuff_silicone_vape_lanyard_black.webp",
    slug: "vape-lanyard",
    manufacturer: "Starpuff",
    categoryId: "vape-cat-006",
    inStock: 1,
  },
];


const demoCategories = [
  {
    id: "vape-cat-001",
    name: "disposable-vapes",
  },
  {
    id: "vape-cat-002",
    name: "e-liquids",
  },
  {
    id: "vape-cat-003",
    name: "vape-mods",
  },
  {
    id: "vape-cat-004",
    name: "pods",
  },
  {
    id: "vape-cat-005",
    name: "coils",
  },
  {
    id: "vape-cat-006",
    name: "vape-accessories",
  },
  {
    id: "vape-cat-007",
    name: "nicotine-free",
  }
];

async function insertDemoData() {
  
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
