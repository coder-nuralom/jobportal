import {
  Search,
  FileText,
  MessageSquare,
  Award,
  Users,
  BarChart3,
  Shield,
  Clock,
  LayoutDashboard,
  Plus,
  Briefcase,
  Building2,
  LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface NavigationItem {
  id: string;
  name: string;
  href: string;
  icon: LucideIcon;
}

interface Category {
  value: string;
  label: string;
}

interface JobType {
  value: string;
  label: string;
}

export const jobSeekerFeatures: Feature[] = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description:
      "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create professional resumes with our intuitive builder and templates designed by experts.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "Connect directly with hiring managers and recruiters through our secure messaging platform.",
  },
  {
    icon: Award,
    title: "Skill Assessment",
    description:
      "Showcase your abilities with verified skill tests and earn badges that employers trust.",
  },
];

export const employerFeatures: Feature[] = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description:
      "Access our vast database of pre-screened candidates and find the perfect fit for your team.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your hiring performance with detailed analytics and insights on candidate engagement.",
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description:
      "All candidates undergo background verification to ensure you're hiring trustworthy professionals.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description:
      "Streamlined hiring process reduces time-to-hire by 60% with automated screening tools.",
  },
];

export const NAVIGATION_MENU: NavigationItem[] = [
  { id: "overview", name: "Dashboard", href: "/employer-dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", href: "/employer-dashboard/post-job", icon: Plus },
  {
    id: "manage-jobs",
    name: "Manage Jobs",
    href: "/employer-dashboard/manage-job",
    icon: Briefcase,
  },
  {
    id: "company-profile",
    name: "Company Profile",
    href: "/employer-dashboard/company-profile",
    icon: Building2,
  },
];

export const CATEGORIES: Category[] = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer-service", label: "Customer Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "Human Resources" },
  { value: "Other", label: "Other" },
];

export const JOB_TYPES: JobType[] = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
];
