import { Heart, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/constants/blogs";
import Image from "next/image";

function formatCount(n: number) {
  return n >= 1000
    ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`
    : String(n);
}

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-40 overflow-hidden relative bg-gradient-to-br from-slate-200 to-slate-300">
        <Image
          src="/images/community-profile.jpeg"
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={600}
          height={200}
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="secondary" className="text-xs">
            {blog.category}
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1 whitespace-nowrap">
            <Clock className="h-3 w-3" /> {blog.readTime} min
          </span>
        </div>

        <div>
          <h3 className="font-semibold text-foreground text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {blog.excerpt}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-border">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
            {blog.authorAvatar}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-foreground truncate">
              {blog.author}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Heart className="h-3 w-3" /> {formatCount(blog.likes)}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Eye className="h-3 w-3" /> {formatCount(blog.views)}
            </span>
          </div>
        </div>

        <Button
          className="w-full rounded-md cursor-pointer hover:scale-95 duration-300 transition-all"
          variant="default"
          size="sm"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
