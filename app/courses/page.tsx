// "use client";

// import { useState, useMemo } from "react";
// import {
//   Search,
//   Star,
//   Clock,
//   Users,
//   DollarSign,
//   TrendingUp,
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import CourseCard from "@/components/custom/landingPage/CourseCard";
// import { Navbar } from "@/components/custom/common/Navbar";

// const COURSES = [
//   {
//     id: 1,
//     title: "Advanced React Patterns",
//     instructor: "Sarah Chen",
//     category: "Programming",
//     level: "Advanced",
//     rating: 4.9,
//     reviews: 2340,
//     duration: "32 hours",
//     students: 15420,
//     price: 99.99,
//     image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     description: "Master advanced React patterns and become a expert developer",
//     bestseller: true,
//   },
//   {
//     id: 2,
//     title: "Web Design Fundamentals",
//     instructor: "Alex Kumar",
//     category: "Design",
//     level: "Beginner",
//     rating: 4.8,
//     reviews: 1890,
//     duration: "24 hours",
//     students: 28950,
//     price: 49.99,
//     image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     description: "Learn the fundamentals of modern web design",
//     bestseller: false,
//   },
//   {
//     id: 3,
//     title: "Node.js & Express Mastery",
//     instructor: "James Wilson",
//     category: "Programming",
//     level: "Intermediate",
//     rating: 4.7,
//     reviews: 1245,
//     duration: "40 hours",
//     students: 12340,
//     price: 89.99,
//     image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     description: "Build scalable backend applications with Node.js",
//     bestseller: true,
//   },
//   {
//     id: 4,
//     title: "Digital Marketing Essentials",
//     instructor: "Emma Rodriguez",
//     category: "Marketing",
//     level: "Beginner",
//     rating: 4.6,
//     reviews: 987,
//     duration: "20 hours",
//     students: 9870,
//     price: 59.99,
//     image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     description: "Master the fundamentals of digital marketing",
//     bestseller: false,
//   },
//   {
//     id: 5,
//     title: "UI/UX Design Bootcamp",
//     instructor: "Lisa Park",
//     category: "Design",
//     level: "Intermediate",
//     rating: 4.9,
//     reviews: 2100,
//     duration: "48 hours",
//     students: 18750,
//     price: 129.99,
//     image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
//     description: "Complete course on UI/UX design principles and tools",
//     bestseller: true,
//   },
//   {
//     id: 6,
//     title: "Python for Data Science",
//     instructor: "Dr. Michael Zhang",
//     category: "Programming",
//     level: "Intermediate",
//     rating: 4.8,
//     reviews: 3210,
//     duration: "56 hours",
//     students: 34520,
//     price: 79.99,
//     image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
//     description: "Learn Python programming for data analysis and visualization",
//     bestseller: true,
//   },
//   {
//     id: 7,
//     title: "Content Strategy & Creation",
//     instructor: "Rachel Thompson",
//     category: "Marketing",
//     level: "Beginner",
//     rating: 4.5,
//     reviews: 645,
//     duration: "18 hours",
//     students: 5430,
//     price: 44.99,
//     image: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
//     description: "Create compelling content that drives engagement",
//     bestseller: false,
//   },
//   {
//     id: 8,
//     title: "TypeScript Advanced Concepts",
//     instructor: "David Lee",
//     category: "Programming",
//     level: "Advanced",
//     rating: 4.7,
//     reviews: 1567,
//     duration: "36 hours",
//     students: 11200,
//     price: 109.99,
//     image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     description: "Master TypeScript for building scalable applications",
//     bestseller: false,
//   },
// ];

// const CATEGORIES = ["All", "Programming", "Design", "Marketing", "Business"];
// const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
// const SORT_OPTIONS = ["Popular", "Rating", "Newest", "Price: Low to High"];

// export default function CoursesPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedLevel, setSelectedLevel] = useState("All");
//   const [sortBy, setSortBy] = useState("Popular");

//   const filteredCourses = useMemo(() => {
//     const filtered = COURSES.filter((course) => {
//       const matchesSearch =
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

//       const matchesCategory =
//         selectedCategory === "All" || course.category === selectedCategory;
//       const matchesLevel =
//         selectedLevel === "All" || course.level === selectedLevel;

//       return matchesSearch && matchesCategory && matchesLevel;
//     });

//     // Sort
//     if (sortBy === "Rating") {
//       filtered.sort((a, b) => b.rating - a.rating);
//     } else if (sortBy === "Price: Low to High") {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "Newest") {
//       filtered.reverse();
//     }
//     // Popular is default order

//     return filtered;
//   }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
//       <Navbar />
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 md:py-16">
//         <div className="max-w-6xl mx-auto px-4 md:px-6">
//           <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
//             Learn New Skills Today
//           </h1>
//           <p className="text-indigo-100 text-lg mb-8">
//             Choose from thousands of expert-led courses
//           </p>

//           {/* Search Bar */}
//           <div className="relative max-w-2xl">
//             <Search className="absolute left-4 top-3.5 h-5 w-5 text-indigo-300" />
//             <Input
//               placeholder="Search courses by title, instructor, or skill..."
//               className="pl-12 h-12 bg-white text-slate-900 placeholder-slate-500 border-0"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
//         {/* Filters and Sort */}
//         <div className="space-y-6 mb-8">
//           {/* Categories */}
//           <div>
//             <h3 className="text-sm font-semibold text-slate-900 mb-3">
//               Category
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {CATEGORIES.map((category) => (
//                 <Button
//                   key={category}
//                   variant={
//                     selectedCategory === category ? "default" : "outline"
//                   }
//                   onClick={() => setSelectedCategory(category)}
//                   className={
//                     selectedCategory === category
//                       ? "bg-indigo-600 text-white"
//                       : ""
//                   }
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Level */}
//           <div>
//             <h3 className="text-sm font-semibold text-slate-900 mb-3">Level</h3>
//             <div className="flex flex-wrap gap-2">
//               {LEVELS.map((level) => (
//                 <Button
//                   key={level}
//                   variant={selectedLevel === level ? "default" : "outline"}
//                   onClick={() => setSelectedLevel(level)}
//                   className={
//                     selectedLevel === level ? "bg-indigo-600 text-white" : ""
//                   }
//                 >
//                   {level}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Sort */}
//           <div className="flex items-center gap-2">
//             <span className="text-sm font-semibold text-slate-900">
//               Sort by:
//             </span>
//             <div className="flex flex-wrap gap-2">
//               {SORT_OPTIONS.map((option) => (
//                 <Button
//                   key={option}
//                   variant={sortBy === option ? "default" : "outline"}
//                   onClick={() => setSortBy(option)}
//                   className={
//                     sortBy === option ? "bg-indigo-600 text-white" : ""
//                   }
//                   size="sm"
//                 >
//                   {option}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-sm text-slate-600">
//             Showing {filteredCourses.length} of {COURSES.length} courses
//           </p>
//         </div>

//         {/* Courses Grid */}
//         {filteredCourses.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-slate-600 text-lg mb-2">No courses found</p>
//             <p className="text-slate-500">
//               Try adjusting your search or filters
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useMemo, useRef } from "react";
import {
  Search,
  Star,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Award,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CourseCard from "@/components/custom/landingPage/CourseCard";
import { Navbar } from "@/components/custom/common/Navbar";
import Image from "next/image";

const COURSES = [
  {
    id: 1,
    title: "Advanced React Patterns",
    instructor: "Sarah Chen",
    category: "Programming",
    level: "Advanced",
    rating: 4.9,
    reviews: 2340,
    duration: "32 hours",
    students: 15420,
    price: 99.99,
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Master advanced React patterns and become a expert developer",
    bestseller: true,
  },
  {
    id: 2,
    title: "Web Design Fundamentals",
    instructor: "Alex Kumar",
    category: "Design",
    level: "Beginner",
    rating: 4.8,
    reviews: 1890,
    duration: "24 hours",
    students: 28950,
    price: 49.99,
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Learn the fundamentals of modern web design",
    bestseller: false,
  },
  {
    id: 3,
    title: "Node.js & Express Mastery",
    instructor: "James Wilson",
    category: "Programming",
    level: "Intermediate",
    rating: 4.7,
    reviews: 1245,
    duration: "40 hours",
    students: 12340,
    price: 89.99,
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "Build scalable backend applications with Node.js",
    bestseller: true,
  },
  {
    id: 4,
    title: "Digital Marketing Essentials",
    instructor: "Emma Rodriguez",
    category: "Marketing",
    level: "Beginner",
    rating: 4.6,
    reviews: 987,
    duration: "20 hours",
    students: 9870,
    price: 59.99,
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    description: "Master the fundamentals of digital marketing",
    bestseller: false,
  },
  {
    id: 5,
    title: "UI/UX Design Bootcamp",
    instructor: "Lisa Park",
    category: "Design",
    level: "Intermediate",
    rating: 4.9,
    reviews: 2100,
    duration: "48 hours",
    students: 18750,
    price: 129.99,
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    description: "Complete course on UI/UX design principles and tools",
    bestseller: true,
  },
  {
    id: 6,
    title: "Python for Data Science",
    instructor: "Dr. Michael Zhang",
    category: "Programming",
    level: "Intermediate",
    rating: 4.8,
    reviews: 3210,
    duration: "56 hours",
    students: 34520,
    price: 79.99,
    image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    description: "Learn Python programming for data analysis and visualization",
    bestseller: true,
  },
  {
    id: 7,
    title: "Content Strategy & Creation",
    instructor: "Rachel Thompson",
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    reviews: 645,
    duration: "18 hours",
    students: 5430,
    price: 44.99,
    image: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
    description: "Create compelling content that drives engagement",
    bestseller: false,
  },
  {
    id: 8,
    title: "TypeScript Advanced Concepts",
    instructor: "David Lee",
    category: "Programming",
    level: "Advanced",
    rating: 4.7,
    reviews: 1567,
    duration: "36 hours",
    students: 11200,
    price: 109.99,
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Master TypeScript for building scalable applications",
    bestseller: false,
  },
];

const CATEGORIES = ["Programming", "Design", "Marketing", "Business"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];

type SortKey = "popular" | "rating" | "newest" | "price";

const SORT_OPTIONS: { key: SortKey; label: string; icon: React.ElementType }[] =
  [
    { key: "popular", label: "Popular", icon: TrendingUp },
    { key: "rating", label: "Highest Rated", icon: Star },
    { key: "newest", label: "Newest", icon: Clock },
    { key: "price", label: "Price: Low to High", icon: DollarSign },
  ];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("popular");

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const bestsellers = useMemo(
    () => COURSES.filter((course) => course.bestseller),
    []
  );

  const filtered = useMemo(() => {
    let list = [...COURSES];

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory)
      list = list.filter((c) => c.category === selectedCategory);
    if (selectedLevel) list = list.filter((c) => c.level === selectedLevel);

    switch (sort) {
      case "popular":
        list.sort((a, b) => b.students - a.students);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list.reverse();
        break;
      case "price":
        list.sort((a, b) => a.price - b.price);
        break;
    }

    return list;
  }, [search, selectedCategory, selectedLevel, sort]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <Image
          src="/images/courses.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          width={1920}
          height={600}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Learn New Skills Today
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Choose from thousands of expert-led courses and accelerate your
            career
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search courses by title, instructor, or skill..."
              className="pl-12 h-12 text-base bg-background border-0 shadow-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setSelectedCategory(selectedCategory === cat ? null : cat)
                }
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-background text-foreground shadow"
                    : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-12 py-10">
        {/* Bestsellers Carousel */}
        {!search && !selectedCategory && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" /> Bestseller
                Courses
              </h2>
            </div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {bestsellers.map((course) => (
                  <CarouselItem
                    key={course.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <CourseCard course={course} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </section>
        )}

        {/* Main content + sidebar */}
        <div className="flex gap-8">
          {/* Explore grid */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <h2 className="text-xl font-bold text-foreground">
                Explore All Courses
              </h2>
              <div className="flex flex-wrap gap-2">
                {SORT_OPTIONS.map((opt) => (
                  <Button
                    key={opt.key}
                    variant={sort === opt.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSort(opt.key)}
                    className="gap-1.5"
                  >
                    <opt.icon className="h-3.5 w-3.5" /> {opt.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              {LEVELS.map((level) => (
                <Badge
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() =>
                    setSelectedLevel(selectedLevel === level ? null : level)
                  }
                >
                  {level}
                </Badge>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">No courses found</p>
                <p className="text-sm mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0 space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-3">
                Popular Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <Badge
                    key={cat}
                    variant={
                      selectedCategory === cat ? "default" : "secondary"
                    }
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === cat ? null : cat
                      )
                    }
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-3">
                Top Instructors
              </h3>
              <div className="space-y-3">
                {Array.from(
                  new Set(COURSES.slice(0, 4).map((c) => c.instructor))
                ).map((instructor, idx) => {
                  const course = COURSES.find(
                    (c) => c.instructor === instructor
                  )!;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {instructor.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {instructor}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {course.rating} rating
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-3">
                Course Levels
              </h3>
              <div className="space-y-2">
                {LEVELS.map((level) => {
                  const count = COURSES.filter(
                    (c) => c.level === level
                  ).length;
                  return (
                    <button
                      key={level}
                      onClick={() =>
                        setSelectedLevel(selectedLevel === level ? null : level)
                      }
                      className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                        selectedLevel === level
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <span className="text-sm font-medium">{level}</span>
                      <Badge
                        variant={selectedLevel === level ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {count}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-primary p-5 text-primary-foreground">
              <h3 className="font-semibold mb-2">Become an Instructor</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Share your knowledge and earn by teaching what you love.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full gap-2 rounded-md cursor-pointer hover:scale-90 duration-300 transition-all"
              >
                <Award className="h-4 w-4" /> Start Teaching
              </Button>
            </div>
          </aside>
        </div>

        {/* Mobile CTA */}
        <section className="lg:hidden mt-12 rounded-xl bg-primary p-6 text-primary-foreground text-center">
          <h3 className="font-bold text-lg mb-2">Become an Instructor</h3>
          <p className="text-sm text-primary-foreground/80 mb-4">
            Share your knowledge and earn by teaching what you love.
          </p>
          <Button variant="secondary" className="gap-2">
            <Award className="h-4 w-4" /> Start Teaching
          </Button>
        </section>
      </div>
    </div>
  );
}