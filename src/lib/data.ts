export type CompanyType = "product" | "platform" | "partnership" | "leadgen";

export interface Company {
  name: string;
  domain: string;
  description: string;
  type: CompanyType;
  agents: number;
  partner?: string;
  mobileComingSoon?: boolean;
}

export const companies: Company[] = [
  // Products
  {
    name: "DropClose",
    domain: "dropclose.ai",
    description: "AI sales pipeline that sells for you",
    type: "product",
    agents: 8,
  },
  {
    name: "CallTwin",
    domain: "calltwin.ai",
    description: "AI clone of your voice answers every call",
    type: "product",
    agents: 6,
    mobileComingSoon: true,
  },
  {
    name: "BuiltMonthly",
    domain: "builtmonthly.com",
    description: "AI builds your website fresh every month",
    type: "product",
    agents: 4,
  },
  {
    name: "GetPaid.Video",
    domain: "getpaid.video",
    description: "AI monetization tools for YouTube creators",
    type: "product",
    agents: 3,
  },
  {
    name: "AdzForge",
    domain: "adzforge.com",
    description: "AI ad creative pipeline — URL in, ads out",
    type: "product",
    agents: 4,
  },
  {
    name: "BlitzGTM",
    domain: "blitzgtm.com",
    description: "AI go-to-market engine with 39 built-in tools",
    type: "product",
    agents: 8,
  },
  // Partnerships
  {
    name: "CodeItRight",
    domain: "codeitright.ai",
    description: "AI medical coding compliance for therapists",
    type: "partnership",
    agents: 5,
    partner: "Cathy",
  },
  {
    name: "The Performance Edge",
    domain: "coachingedge.vip",
    description: "AI fitness coaching platform",
    type: "partnership",
    agents: 4,
    partner: "Don",
    mobileComingSoon: true,
  },
  {
    name: "PureUSPeptide",
    domain: "pureuspeptide.com",
    description: "Premium research peptides + education",
    type: "partnership",
    agents: 5,
  },
  {
    name: "ThePeptideAI",
    domain: "thepeptideai.com",
    description: "Peptide inventory + AI consultation",
    type: "partnership",
    agents: 4,
  },
  // Lead gen
  {
    name: "Goliath Roofing",
    domain: "goliathroofingofflorida.com",
    description: "South Florida roofing — 1,000+ page SEO powerhouse",
    type: "leadgen",
    agents: 5,
  },
  {
    name: "TurfGrass Solutions",
    domain: "turfgrassartificialsolutions.com",
    description: "Artificial turf installation — South Florida",
    type: "leadgen",
    agents: 3,
  },
  // Platform
  {
    name: "JarvisSDK",
    domain: "jarvissdk.com",
    description: "Agent marketplace — 700+ modules, 328 roles",
    type: "platform",
    agents: 6,
  },
  {
    name: "JarvisBrain",
    domain: "myjarvisbrain.com",
    description: "AI co-CEO operating system + Command Center",
    type: "platform",
    agents: 8,
  },
  {
    name: "JarvisCRM",
    domain: "jarviscrm.ai",
    description: "AI-powered CRM that builds itself",
    type: "platform",
    agents: 5,
  },
  {
    name: "YourFeeds.ai",
    domain: "yourfeeds.ai",
    description: "Intelligence subscriptions for AI agents",
    type: "platform",
    agents: 3,
  },
  {
    name: "AffixedAI",
    domain: "affixed.ai",
    description: "AI consulting — we build systems that run your business",
    type: "product",
    agents: 8,
  },
];

export const typeColors: Record<CompanyType, string> = {
  product: "#6366f1",
  platform: "#06b6d4",
  partnership: "#f59e0b",
  leadgen: "#10b981",
};

export const typeLabels: Record<CompanyType, string> = {
  product: "Product",
  platform: "Platform",
  partnership: "Partnership",
  leadgen: "Lead Gen",
};

export const connections: [string, string][] = [
  ["AffixedAI", "DropClose"],
  ["AffixedAI", "CallTwin"],
  ["AffixedAI", "BuiltMonthly"],
  ["JarvisSDK", "DropClose"],
  ["JarvisSDK", "CallTwin"],
  ["JarvisSDK", "CodeItRight"],
  ["JarvisSDK", "The Performance Edge"],
  ["JarvisSDK", "BlitzGTM"],
  ["JarvisBrain", "JarvisSDK"],
  ["JarvisBrain", "AffixedAI"],
  ["JarvisBrain", "JarvisCRM"],
  ["JarvisBrain", "YourFeeds.ai"],
  ["AdzForge", "DropClose"],
  ["AdzForge", "CallTwin"],
  ["AdzForge", "Goliath Roofing"],
  ["BlitzGTM", "DropClose"],
  ["BlitzGTM", "AffixedAI"],
  ["YourFeeds.ai", "JarvisBrain"],
  ["PureUSPeptide", "ThePeptideAI"],
];

export const stats = [
  { value: "17", label: "Companies Built" },
  { value: "91", label: "AI Agents Running" },
  { value: "$3K", label: "Monthly Infrastructure" },
  { value: "1", label: "Operator" },
];
