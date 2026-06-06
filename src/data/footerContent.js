import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Anchor,
  FileText,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Radio,
} from "lucide-react";

export const footerIdentity = {
  name: "Shefat Masum",
  brand: "Shefat OceanOS",
  role: "Full-Stack Software Engineer · Mentor · Team Lead",
  tagline: "Build. Solve. Teach. Dive Deeper.",
  description:
    "A sea-port inspired portfolio experience built around scalable web apps, practical learning, and purposeful digital products.",
  status: "Open for Projects",
  depth: "-3000m · Deep Station Footer",
};

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Stats", href: "/#stats" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/#journey" },
  { label: "Contact", href: "/contact" },
];

export const footerServices = [
  { label: "Web Development", icon: Code2 },
  { label: "UI Engineering", icon: FileText },
  { label: "Training & Mentorship", icon: GraduationCap },
  { label: "Project Planning", icon: BriefcaseBusiness },
];

export const footerContacts = [
  {
    label: "Email",
    value: "hello@shefat.dev",
    href: "mailto:hello@shefat.dev",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+880 1730-XXXXXX",
    href: "https://wa.me/8801730000000",
    icon: Phone,
  },
  {
    label: "Base",
    value: "Bangladesh · GMT+6",
    href: "/contact",
    icon: MapPin,
  },
];

export const footerSocials = [
  { label: "GitHub", href: "https://github.com/", icon: 'GH' },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: 'IN' },
  { label: "YouTube", href: "https://youtube.com/", icon: 'YT' },
  { label: "Email", href: "mailto:hello@shefat.dev", icon: 'Mail' },
];

export const footerStats = [
  { label: "Students", value: "400+" },
  { label: "Projects", value: "80+" },
  { label: "Experience", value: "4+ yrs" },
  { label: "Signal", value: "Online" },
];

export const footerIcons = {
  ArrowUpRight,
  Anchor,
  Radio,
};
