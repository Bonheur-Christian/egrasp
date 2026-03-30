export const COURSE_CATEGORIES = [
  "Technology",
  "Business",
  "Design",
  "Marketing",
  "Development",
  "Data Science",
  "Mobile Dev",
  "Web Dev",
  "AI/ML",
  "Cloud Computing",
] as const;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];

export interface Course {
  id: string;
  name: string;
  description: string;
  avatar: string;
  category: CourseCategory;
  instructor: string;
  students: number;
  price: number; // 0 for free
  type: "free" | "paid";
  trending: boolean;
  createdAt: string;
  rating: number; // 0-5
  duration: string; // e.g., "4 weeks", "12 hours"
}

export const courses: Course[] = [
  {
    id: "1",
    name: "Advanced React Patterns",
    description:
      "Master advanced React concepts including hooks, context, and performance optimization.",
    avatar: "AR",
    category: "Web Dev",
    instructor: "Sarah Chen",
    students: 12400,
    price: 79,
    type: "paid",
    trending: true,
    createdAt: "2024-01-15",
    rating: 4.8,
    duration: "6 weeks",
  },
  {
    id: "2",
    name: "Startup Fundamentals",
    description:
      "Learn the essentials of launching and growing a successful startup from scratch.",
    avatar: "SF",
    category: "Business",
    instructor: "James Wilson",
    students: 8700,
    price: 99,
    type: "paid",
    trending: true,
    createdAt: "2024-03-10",
    rating: 4.7,
    duration: "8 weeks",
  },
  {
    id: "3",
    name: "Python for Data Science",
    description:
      "Complete guide to Python, pandas, numpy, and data visualization libraries.",
    avatar: "PD",
    category: "Data Science",
    instructor: "Dr. Raj Kumar",
    students: 23100,
    price: 89,
    type: "paid",
    trending: true,
    createdAt: "2023-11-01",
    rating: 4.9,
    duration: "10 weeks",
  },
  {
    id: "4",
    name: "UI/UX Design Fundamentals",
    description:
      "Learn design principles, user research, prototyping, and tools like Figma.",
    avatar: "UD",
    category: "Design",
    instructor: "Emma Rodriguez",
    students: 6200,
    price: 0,
    type: "free",
    trending: false,
    createdAt: "2024-06-20",
    rating: 4.6,
    duration: "4 weeks",
  },
  {
    id: "5",
    name: "Digital Marketing Essentials",
    description:
      "SEO, social media, content marketing, and analytics for modern marketers.",
    avatar: "DM",
    category: "Marketing",
    instructor: "Michael Brown",
    students: 15800,
    price: 69,
    type: "paid",
    trending: true,
    createdAt: "2024-02-05",
    rating: 4.7,
    duration: "5 weeks",
  },
  {
    id: "6",
    name: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile apps using React Native and Expo.",
    avatar: "MA",
    category: "Mobile Dev",
    students: 19300,
    price: 99,
    type: "paid",
    trending: true,
    createdAt: "2023-09-12",
    rating: 4.8,
    duration: "8 weeks",
    instructor: "Alex Kim",
  },
  {
    id: "7",
    name: "Cloud Architecture with AWS",
    description:
      "Design scalable cloud solutions using AWS services and best practices.",
    avatar: "CA",
    category: "Cloud Computing",
    students: 9400,
    price: 89,
    type: "paid",
    trending: false,
    createdAt: "2024-04-18",
    rating: 4.6,
    duration: "6 weeks",
    instructor: "David Lee",
  },
  {
    id: "8",
    name: "Machine Learning Basics",
    description:
      "Introduction to ML algorithms, supervised learning, and real-world applications.",
    avatar: "MB",
    category: "AI/ML",
    students: 7100,
    price: 0,
    type: "free",
    trending: false,
    createdAt: "2024-07-02",
    rating: 4.5,
    duration: "5 weeks",
    instructor: "Prof. Lisa Zhang",
  },
  {
    id: "9",
    name: "Web Development Bootcamp",
    description:
      "Full-stack development from HTML/CSS to databases and deployment.",
    avatar: "WB",
    category: "Web Dev",
    students: 11200,
    price: 149,
    type: "paid",
    trending: true,
    createdAt: "2024-01-30",
    rating: 4.9,
    duration: "12 weeks",
    instructor: "Tom Anderson",
  },
  {
    id: "10",
    name: "Content Strategy Mastery",
    description:
      "Create compelling content strategies that drive engagement and conversions.",
    avatar: "CS",
    category: "Marketing",
    students: 14600,
    price: 79,
    type: "paid",
    trending: false,
    createdAt: "2024-05-11",
    rating: 4.5,
    duration: "4 weeks",
    instructor: "Nina Patel",
  },
  {
    id: "11",
    name: "Deep Learning Specialization",
    description:
      "Neural networks, CNNs, RNNs, and advanced deep learning techniques.",
    avatar: "DL",
    category: "AI/ML",
    students: 5300,
    price: 129,
    type: "paid",
    trending: false,
    createdAt: "2025-01-08",
    rating: 4.9,
    duration: "10 weeks",
    instructor: "Dr. Andrew Ng",
  },
  {
    id: "12",
    name: "Growth Hacking for Startups",
    description:
      "Rapid experimentation and data-driven strategies to scale your product.",
    avatar: "GH",
    category: "Business",
    students: 4100,
    price: 79,
    type: "paid",
    trending: false,
    createdAt: "2025-02-14",
    rating: 4.6,
    duration: "6 weeks",
    instructor: "Sophia Martinez",
  },
];
