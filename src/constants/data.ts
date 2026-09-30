export const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export const COMPANY_LOGOS = [
  { name: "Vercel", label: "VERCEL" },
  { name: "Supabase", label: "SUPABASE" },
  { name: "Stripe", label: "STRIPE" },
  { name: "GitHub", label: "GITHUB" },
  { name: "Tailwind", label: "TAILWIND" },
  { name: "Docker", label: "DOCKER" },
];

export const STATS = [
  { label: "Uptime SLA Guarantee", value: "99.99%" },
  { label: "Global Latency", value: "< 10ms" },
  { label: "Workspaces Created", value: "500K+" },
  { label: "Active Developers", value: "85,000+" },
];

export const FEATURES = [
  {
    icon: "Zap",
    title: "Instant Environment Spin-up",
    description: "Launch fully configured, isolated development environments in under 3 seconds with zero configuration.",
    badge: "Lightning Fast",
  },
  {
    icon: "Bot",
    title: "AI Pair Programmer",
    description: "Integrated AI copilot that assists with code generation, bug fixing, test writing, and pull request reviews.",
    badge: "AI Powered",
  },
  {
    icon: "Users",
    title: "Real-time Collaboration",
    description: "Work together seamlessly with multi-cursor live editing, shared terminal sessions, and built-in voice channels.",
    badge: "Multiplayer",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise Grade Security",
    description: "SOC2 Type II certified with end-to-end encryption, automated vulnerability scanning, and custom RBAC permissions.",
    badge: "SOC2 Certified",
  },
  {
    icon: "GitBranch",
    title: "Automated CI/CD Integration",
    description: "Connect your GitHub or GitLab repositories for instant preview deployments and automated test pipelines.",
    badge: "DevOps Ready",
  },
  {
    icon: "BarChart3",
    title: "Cost & Resource Analytics",
    description: "Track cloud resource usage, monitor idle environments, and automatically optimize compute spending.",
    badge: "Smart Analytics",
  },
];

export const SOLUTIONS = [
  {
    id: "frontend",
    title: "Frontend Developers",
    heading: "Blazing fast preview environments for React & Next.js",
    description: "Spin up isolated preview links for every pull request with hot-module replacement and instant visual feedback.",
    codeSnippet: `// Next.js App Router Preview Setup
export default function Page() {
  return (
    <ByteSpaceContainer environment="production">
      <LivePreview hmr={true} />
    </ByteSpaceContainer>
  );
}`,
  },
  {
    id: "backend",
    title: "Backend & API Engineers",
    heading: "Pre-configured databases and microservice clusters",
    description: "Launch PostgreSQL, Redis, and API microservices with mock data seed scripts and container orchestration.",
    codeSnippet: `// Docker Compose Stack Configuration
services:
  bytespace-api:
    image: bytespace/backend:latest
    environment:
      - DB_URL=\${DATABASE_URL}
      - REDIS_HOST=cache.bytespace.internal`,
  },
  {
    id: "devops",
    title: "DevOps & SRE Teams",
    heading: "Infrastructure as Code with automated governance",
    description: "Define workspaces via Terraform or YAML. Enforce security policies and compliance audits out-of-the-box.",
    codeSnippet: `resource "bytespace_workspace" "prod_cluster" {
  name        = "production-us-east"
  region      = "us-east-1"
  auto_scale  = true
  max_nodes   = 32
}`,
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Essential tools for individual developers and side projects.",
    monthlyPrice: 0,
    annualPrice: 0,
    popular: false,
    features: [
      "Up to 3 active workspaces",
      "2 vCPU & 4GB RAM per workspace",
      "Community support",
      "Standard cloud storage (10GB)",
      "Public Git repository integrations",
    ],
    ctaText: "Get Started Free",
    ctaHref: "/signup",
  },
  {
    name: "Pro Developer",
    description: "Advanced capabilities for professional developers & fast teams.",
    monthlyPrice: 19,
    annualPrice: 15,
    popular: true,
    features: [
      "Unlimited active workspaces",
      "8 vCPU & 16GB RAM per workspace",
      "Priority 24/7 support",
      "100GB NVMe cloud storage",
      "Private Git repositories & SSO",
      "AI Pair Programmer included",
      "Real-time multiplayer editing",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/signup?plan=pro",
  },
  {
    name: "Enterprise",
    description: "Custom infrastructure, security SLAs, and dedicated account team.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    popular: false,
    features: [
      "Custom compute configuration",
      "Dedicated isolated VPCs",
      "99.99% Uptime SLA with financial backing",
      "Custom SOC2 / HIPAA compliance",
      "Dedicated Account Executive & Engineer",
      "Audit logs & SAML SSO / Okta",
    ],
    ctaText: "Contact Sales",
    ctaHref: "#contact",
  },
];

export const TESTIMONIALS = [
  {
    quote: "ByteSpace has transformed how our engineering team builds software. We reduced environment setup time from hours to 3 seconds.",
    author: "Alex Rivera",
    role: "VP of Engineering",
    company: "TechScale Inc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "The real-time collaboration and AI code generation features saved our remote team over 15 hours every single week.",
    author: "Sarah Chen",
    role: "Lead Frontend Architect",
    company: "CloudFlow",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Deploying preview environments for every PR without touching Docker configs is a developer experience miracle.",
    author: "David Miller",
    role: "Senior DevOps Lead",
    company: "DataSync",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

export const FAQS = [
  {
    question: "What is ByteSpace and how does it work?",
    answer: "ByteSpace is a cloud-based development platform that provisions instant, fully configured virtual development environments in the cloud, allowing developers to code, test, and collaborate from any browser or IDE.",
  },
  {
    question: "Can I connect my existing GitHub / GitLab repositories?",
    answer: "Yes! ByteSpace seamlessly integrates with GitHub, GitLab, and Bitbucket. You can launch a workspace directly from any repository or pull request with a single click.",
  },
  {
    question: "Is there a free tier available?",
    answer: "Absolutely. Our Starter plan is 100% free forever and includes 3 active workspaces with 2 vCPU and 4GB RAM per workspace.",
  },
  {
    question: "How secure is my code on ByteSpace?",
    answer: "Security is our top priority. ByteSpace is SOC2 Type II and ISO 27001 certified. All workspaces run in isolated containers with end-to-end encrypted storage and network isolation.",
  },
  {
    question: "Can I customize the RAM and vCPU specs for my project?",
    answer: "Yes, Pro and Enterprise plans allow you to customize compute specifications up to 64 vCPU and 128GB RAM per workspace for demanding workloads.",
  },
];
