import { ChartIcon, GlobeIcon, LayoutIcon, MegaphoneIcon, PhoneIcon, PinIcon } from "../components/icons";

export type Skill = { name: string; value: number };
export type PortfolioItem = { title: string; category: string; image: string };
export type Service = { title: string; description: string; Icon: typeof LayoutIcon };
export type Stat = { label: string; value: string };
export type Post = {
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
};
export type ContactItem = { title: string; detail: string; Icon: typeof PinIcon };
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "HTML5 & CSS3", value: 96 },
  { name: "Tailwind", value: 90 },
  { name: "React", value: 80 },
  { name: "JavaScript", value: 86 },
];

export const portfolioItems: PortfolioItem[] = [
  { title: "Interface Concept", category: "Web Design", image: "/images/portfolio1.jpg" },
  { title: "Editorial Spread", category: "Development", image: "/images/portfolio2.jpg" },
  { title: "Retail Mockup", category: "Illustration", image: "/images/portfolio3.jpg" },
  { title: "Brand Crest", category: "Branding", image: "/images/portfolio4.jpg" },
  { title: "Guideline Deck", category: "Strategy", image: "/images/portfolio5.jpg" },
  { title: "Notebook Layout", category: "Print", image: "/images/portfolio6.jpg" },
];

export const services: Service[] = [
  {
    title: "UX/UI Design",
    description:
      "Human-centered interfaces with crisp hierarchy, contrast, and motion that feel effortless.",
    Icon: LayoutIcon,
  },
  {
    title: "Marketing",
    description: "Landing pages and funnels designed to convert, measured with clean analytics.",
    Icon: ChartIcon,
  },
  {
    title: "Branding",
    description: "Identity systems, decks, and packaging that keep your story memorable.",
    Icon: MegaphoneIcon,
  },
];

export const stats: Stat[] = [
  { label: "Happy Clients", value: "20+" },
  { label: "Projects Done", value: "38+" },
  { label: "Awards", value: "4" },
  { label: "Cups of Coffee", value: "1200+" },
];

export const posts: Post[] = [
  {
    title: "Designing Your Own Website Using Photoshop",
    date: "October 2, 2020",
    category: "Design",
    author: "Elham",
    image: "/images/blog1.jpg",
  },
  {
    title: "Recommended Design Books for Newbies",
    date: "july 6, 2023",
    category: "Design",
    author: "Elham",
    image: "/images/blog2.jpg",
  },
  {
    title: "Eye-catchy Extensions for Artists",
    date: "October 26, 2024",
    category: "Design",
    author: "Elham",
    image: "/images/blog3.jpg",
  },
];

export const contactItems: ContactItem[] = [
  {
    title: "Address",
    detail: "No. 15/2, valiasr Street, Tabriz, Iran",
    Icon: PinIcon,
  },
  {
    title: "Phone Number",
    detail: "(+98) 914 471 4694",
    Icon: PhoneIcon,
  },
  {
    title: "Website",
    detail:"elhambarzegar.ir",
    Icon: GlobeIcon,
  },
];

export const filters = ["Web Design"];

// ["All", "Development", "Web Design", "Illustration"]
