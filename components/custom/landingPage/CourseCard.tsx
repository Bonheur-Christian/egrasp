import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/constants/courses";
import Image from "next/image";

function formatCount(n: number) {
  return n >= 1000
    ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`
    : String(n);
}

function renderStars(rating: number) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden">
      <div className="h-28 overflow-hidden relative">
        <Image
          src="/images/community-profile.jpeg"
          alt={course.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={600}
          height={200}
        />
      </div>

      <div className="p-4 -mt-6 relative">
        <div className="w-12 h-12 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md border-2 border-card">
          {course.avatar}
        </div>

        <h3 className="font-semibold text-foreground mt-2 text-base leading-tight">
          {course.name}
        </h3>

        <p className="text-muted-foreground text-xs mt-1 line-clamp-1">
          by {course.instructor}
        </p>

        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between mt-3 mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {course.category}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {course.duration}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {renderStars(course.rating)}
            <span className="text-xs font-semibold text-foreground ml-1">
              {course.rating}
            </span>
          </div>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Users className="h-3 w-3" /> {formatCount(course.students)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-primary">
            {course.type === "free" ? "Free" : `$${course.price}`}
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="mt-3 px-12 rounded-md cursor-pointer hover:scale-90 duration-300 transition-all border border-primary"
            size="lg"
            variant="default"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}
