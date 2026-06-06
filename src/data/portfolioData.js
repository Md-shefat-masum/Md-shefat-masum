import { Anchor, BriefcaseBusiness, Code2, GraduationCap, ShipWheel, UsersRound } from 'lucide-react'

export const profile = {
  name: 'Shefat Masum',
  domain: 'shefat.dev',
  role: 'Full-Stack Software Engineer',
  tagline: 'Build. Solve. Teach. Dive Deeper.',
  intro: 'I build scalable web applications and digital experiences, turning ideas into impactful solutions.',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  email: 'shefatmasum.dev@gmail.com',
  phone: '+880 17XX XXX XXX',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'Students Mentored', value: '400+', icon: GraduationCap },
  { label: 'Projects Completed', value: '80+', icon: ShipWheel },
  { label: 'Years Experience', value: '4+', icon: Anchor },
  { label: 'Team Lead', value: 'Since 2022', icon: UsersRound },
]

export const techStack = [
  { name: 'React', category: 'Frontend', level: 94 },
  { name: 'Next.js', category: 'Frontend', level: 90 },
  { name: 'TypeScript', category: 'Language', level: 86 },
  { name: 'Node.js', category: 'Backend', level: 88 },
  { name: 'MongoDB', category: 'Database', level: 82 },
  { name: 'Tailwind CSS', category: 'Styling', level: 96 },
  { name: 'Firebase', category: 'Cloud', level: 78 },
  { name: 'Docker', category: 'DevOps', level: 75 },
  { name: 'GitHub', category: 'Tools', level: 92 },
  { name: 'Laravel', category: 'Backend', level: 84 },
]

export const projects = [
  {
    title: 'EduPortal',
    description: 'Learning management platform with interactive tools and analytics.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    image: './projects/eduportal.webp',
  },
  {
    title: 'CryptoTracker',
    description: 'Real-time cryptocurrency tracking and portfolio management.',
    tags: ['React', 'Node.js', 'Chart.js'],
    image: './projects/crypto.webp',
  },
  {
    title: 'ShopSphere',
    description: 'Full-featured e-commerce platform with secure payments.',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe'],
    image: './projects/shop.webp',
  },
]

export const journey = [
  { year: '2019', title: 'Started Coding', text: 'Began my journey into programming.' },
  { year: '2021', title: 'First Freelance', text: 'Started building solutions for clients.' },
  { year: '2022', title: 'Team Lead', text: 'Leading projects and mentoring developers.' },
  { year: '2023', title: 'Mentor & Teacher', text: 'Mentoring students and sharing knowledge.' },
  { year: '2024+', title: 'Creating Impact', text: 'Exploring new technologies and building meaningful products.' },
]

export const socialLinks = [
  { label: 'GitHub', href: '#', icon: Code2 },
  { label: 'LinkedIn', href: '#', icon: BriefcaseBusiness },
  { label: 'Email', href: 'mailto:shefatmasum.dev@gmail.com', icon: Anchor },
]
