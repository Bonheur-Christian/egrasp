'use client';

import { useState } from 'react';
import { Star, Clock, Users, Badge } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    instructor: string;
    category: string;
    level: string;
    rating: number;
    reviews: number;
    duration: string;
    students: number;
    price: number;
    image: string;
    description: string;
    bestseller: boolean;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      {/* Image/Banner */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: course.image }}
        />

        {course.bestseller && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Badge className="h-3 w-3" />
            Bestseller
          </div>
        )}

        <div className="absolute top-3 left-3 bg-slate-800 bg-opacity-70 text-white px-3 py-1 rounded text-xs font-medium">
          {course.level}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        {/* Title and Category */}
        <div className="mb-3">
          <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-1">
            {course.category}
          </p>
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {course.title}
          </h3>
        </div>

        {/* Instructor */}
        <p className="text-sm text-slate-600 mb-4 flex-grow">{course.instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(course.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-900">
            {course.rating}
          </span>
          <span className="text-xs text-slate-500">({course.reviews})</span>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Users className="h-4 w-4" />
            <span>{(course.students / 1000).toFixed(1)}k</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="text-xl font-bold text-slate-900">
            ${course.price}
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Enroll
          </Button>
        </div>
      </div>
    </div>
  );
}
