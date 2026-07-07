export interface Sector {
  id: string;
  number: string;
  title: string;
  tags: string[];
  desc: string;
  longDesc: string[];
  image: string;
  image2: string;
}

export const sectors: Sector[] = [
  {
    id: "mining",
    number: "01",
    title: "Natural Resources & Mining",
    tags: ["Mining", "Gemstones", "Commodities"],
    desc: "Responsible exploration, trading, value addition, and export of gemstones, industrial minerals, and strategic commodities through transparent and sustainable resource management.",
    longDesc: [
      "Our natural resources division focuses on responsible mineral exploration, gemstone trading, and value-added processing that keeps more economic benefit within Tanzania and the wider region.",
      "We work with licensed operators and international partners to ensure every transaction meets rigorous compliance, traceability, and environmental standards — turning raw mineral wealth into lasting community and shareholder value.",
    ],
    image: "/images/Mining1.jpeg",
    image2: "/images/Mining2.jpeg",
  },
  {
    id: "logistics",
    number: "02",
    title: "Logistics & Supply Chain",
    tags: ["Freight", "Warehousing", "Trade"],
    desc: "Integrated logistics solutions including freight forwarding, transportation, warehousing, customs support, and end-to-end supply chain management across East and Central Africa.",
    longDesc: [
      "From freight forwarding to bonded warehousing, our logistics network keeps goods moving efficiently between ports, borders, and inland markets across East and Central Africa.",
      "By combining modern fleet management with deep customs expertise, we reduce transit times and costs for the producers, traders, and manufacturers who depend on reliable supply chains.",
    ],
    image: "/images/logistic4.jpeg",
    image2: "/images/logistic5.jpeg",
  },
  {
    id: "real-estate",
    number: "03",
    title: "Real Estate & Property Development",
    tags: ["Residential", "Commercial", "Hospitality"],
    desc: "Modern residential, commercial, hospitality, and mixed-use properties meeting growing demand for quality infrastructure across Tanzania's fastest-growing cities.",
    longDesc: [
      "We develop residential, commercial, and mixed-use properties designed to meet the surging demand for quality space in Tanzania's fastest-growing cities.",
      "Every project is built with a long-term ownership mindset — prioritizing durable construction, sound urban planning, and returns that compound as African cities continue to expand.",
    ],
    image: "/images/Real estate.jpeg",
    image2: "/images/Real estate1.jpeg",
  },
  {
    id: "infrastructure",
    number: "04",
    title: "Infrastructure Development",
    tags: ["Industrial", "Transport", "Utilities"],
    desc: "Industrial parks, commercial facilities, transport infrastructure, and strategic developments that improve regional connectivity and enable commerce across East Africa.",
    longDesc: [
      "Our infrastructure investments target the industrial parks, transport corridors, and utility systems that unlock commerce across East Africa.",
      "By de-risking early-stage infrastructure development, we help open new economic corridors that agriculture, mining, and manufacturing businesses depend on to reach markets.",
    ],
    image: "/images/Mining3.jpeg",
    image2: "/images/Real estate.3.jpeg",
  },
  {
    id: "energy",
    number: "05",
    title: "Energy",
    tags: ["Renewable", "Clean Tech", "Power"],
    desc: "Investments in renewable energy, clean technologies, and energy infrastructure driving industrial and economic development across the continent.",
    longDesc: [
      "We invest in renewable generation, clean technologies, and energy infrastructure that power industrial growth while reducing reliance on costly imported fuel.",
      "Reliable, affordable energy is foundational to every other sector we operate in — from processing agricultural output to running logistics fleets and mineral operations.",
    ],
    image: "/images/Mining4.jpeg",
    image2: "/images/Mining5.jpeg",
  },
  {
    id: "agriculture",
    number: "06",
    title: "Agriculture & Agribusiness",
    tags: ["Farming", "Processing", "Exports"],
    desc: "Investing across the agricultural value chain — modern farming, food processing, storage, distribution, and agricultural exports supporting food security across East Africa.",
    longDesc: [
      "Our agribusiness platform spans modern farming, food processing, storage, and distribution — building resilience into Tanzania's food security while creating export-ready value chains.",
      "We invest in the infrastructure and partnerships that help smallholder and commercial producers alike reach regional and international markets profitably.",
    ],
    image: "/images/Agriculture1.jpeg",
    image2: "/images/Agriculture2.jpeg",
  },
  {
    id: "tourism",
    number: "07",
    title: "Tourism & Hospitality",
    tags: ["Eco-Tourism", "Luxury", "Heritage"],
    desc: "Tourism experiences showcasing Africa's natural beauty, wildlife, cultural heritage, and luxury hospitality while creating employment for local communities.",
    longDesc: [
      "We develop eco-tourism experiences and hospitality properties that showcase Tanzania's landscapes, wildlife, and cultural heritage to a global audience.",
      "Every development is designed to create meaningful local employment and support conservation, ensuring tourism growth benefits the communities that host it.",
    ],
    image: "/images/Real estate.2.jpeg",
    image2: "/images/Real estate.3.jpeg",
  },
  {
    id: "trade",
    number: "08",
    title: "International Trade",
    tags: ["Exports", "Sourcing", "Partnerships"],
    desc: "Connecting African producers with international markets through ethical trade, strategic sourcing, and cross-border commercial partnerships that benefit African businesses globally.",
    longDesc: [
      "Our international trade desk connects African producers with buyers abroad through ethical sourcing, freight coordination, and structured trade finance.",
      "We act as a trusted bridge for exporters who need reliable market access without navigating cross-border logistics and compliance alone.",
    ],
    image: "/images/Agriculture3.jpeg",
    image2: "/images/logistic5.jpeg",
  },
  {
    id: "advisory",
    number: "09",
    title: "Investment & Financial Advisory",
    tags: ["Advisory", "Structuring", "Capital"],
    desc: "Identifying investment opportunities, structuring projects, facilitating partnerships, and supporting capital deployment across Africa's highest-growth markets.",
    longDesc: [
      "Our advisory team structures investments, facilitates partnerships, and supports capital raising for projects across Nexone Group's sectors and beyond.",
      "We bring institutional-grade diligence and deal structuring to opportunities that might otherwise struggle to access the capital they need to scale.",
    ],
    image: "/images/Real estate1.jpeg",
    image2: "/images/investor relations1.jpeg",
  },
  {
    id: "technology",
    number: "10",
    title: "Technology & Innovation",
    tags: ["Digital", "FinTech", "Innovation"],
    desc: "Investing in technologies that improve business efficiency, data-driven decision-making, financial inclusion, and sustainable economic growth across Africa's digital economy.",
    longDesc: [
      "We invest in digital platforms, fintech, and data tools that improve efficiency and financial inclusion across Africa's fast-growing economies.",
      "Technology is a multiplier across our portfolio — helping our agriculture, logistics, and trade businesses operate with greater transparency and speed.",
    ],
    image: "/images/Agriculture4.jpeg",
    image2: "/images/investors relation.jpeg",
  },
  {
    id: "oil-gas",
    number: "11",
    title: "Oil & Gas",
    tags: ["Exploration", "Trading", "Distribution"],
    desc: "Strategic investments in oil and gas exploration support services, trading, storage, transportation, distribution, and energy infrastructure across Africa.",
    longDesc: [
      "We provide strategic support services, trading, and distribution infrastructure across the oil and gas value chain.",
      "As energy demand grows across the region, we focus on the storage, transport, and distribution capacity needed to keep supply reliable and secure.",
    ],
    image: "/images/Mining5.jpeg",
    image2: "/images/Mining1.jpeg",
  },
];

export function getSectorById(id: string): Sector | undefined {
  return sectors.find((s) => s.id === id);
}
