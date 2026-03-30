"use client";

import { useState, useMemo } from "react";
import {
  Search,
  TrendingUp,
  Eye,
  Clock,
  Heart,
  Plus,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogs, BLOG_CATEGORIES, type Blog } from "@/constants/blogs";
import Image from "next/image";

type SortKey = "trending" | "latest" | "popular" | "mostLiked";
type TimeFilter = "all" | "week" | "month";

const SORT_OPTIONS: { key: SortKey; label: string; icon: React.ElementType }[] =
  [
    { key: "trending", label: "Trending", icon: TrendingUp },
    { key: "latest", label: "Latest", icon: Clock },
    { key: "popular", label: "Most Popular", icon: Eye },
    { key: "mostLiked", label: "Most Liked", icon: Heart },
  ];

interface Author {
  id: string;
  name: string;
  avatar: string;
  articleCount: number;
  followers: number;
}

// Get unique authors - with deterministic follower counts
const getTopAuthors = (): Author[] => {
  const authorMap = new Map<
    string,
    { name: string; avatar: string; count: number }
  >();

  blogs.forEach((blog) => {
    if (authorMap.has(blog.author)) {
      const author = authorMap.get(blog.author)!;
      author.count += 1;
    } else {
      authorMap.set(blog.author, {
        name: blog.author,
        avatar: blog.authorAvatar,
        count: 1,
      });
    }
  });

  return Array.from(authorMap.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map((author, index) => {
      // Generate deterministic follower count based on author name hash
      let hash = 0;
      for (let i = 0; i < author.name.length; i++) {
        hash = (hash << 5) - hash + author.name.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
      }
      const followers = Math.abs(hash % 4500) + 500; // 500-5000

      return {
        id: author.name.toLowerCase().replace(/\s+/g, "-"),
        name: author.name,
        avatar: author.avatar,
        articleCount: author.count,
        followers,
      };
    });
};

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("trending");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");

  const topAuthors = getTopAuthors();

  // Get featured article (top by views)
  const featuredArticle = useMemo(
    () =>
      blogs.reduce((prev, current) =>
        prev.views > current.views ? prev : current,
      ),
    [],
  );

  const filtered = useMemo(() => {
    let list = [...blogs];

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.tags.some((tag) => tag.toLowerCase().includes(q)),
      );
    }

    // Category filter
    if (selectedCategory)
      list = list.filter((b) => b.category === selectedCategory);

    // Time filter
    if (timeFilter !== "all") {
      const now = new Date();
      const publishDate = (b: Blog) => new Date(b.publishedAt);

      if (timeFilter === "week") {
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        list = list.filter((b) => publishDate(b) >= oneWeekAgo);
      } else if (timeFilter === "month") {
        const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        list = list.filter((b) => publishDate(b) >= oneMonthAgo);
      }
    }

    // Sorting
    switch (sort) {
      case "trending":
        list.sort((a, b) => b.views - a.views);
        break;
      case "latest":
        list.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        );
        break;
      case "popular":
        list.sort((a, b) => b.views - a.views);
        break;
      case "mostLiked":
        list.sort((a, b) => b.likes - a.likes);
        break;
    }

    return list;
  }, [search, selectedCategory, sort, timeFilter]);

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-[90%] mx-auto p-12">
        {/* Featured Article Hero */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Featured Article
          </h2>
          <div className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-shadow">
            <div className="h-72 overflow-hidden relative">
              <Image
                src="/images/community-profile.jpeg"
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1200}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-primary-foreground/30">
                  {featuredArticle.category}
                </Badge>
                <span className="text-sm font-medium flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {featuredArticle.readTime} min
                  read
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3 leading-tight max-w-2xl line-clamp-2">
                {featuredArticle.title}
              </h3>
              <p className="text-primary-foreground/90 mb-4 max-w-2xl line-clamp-2">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/30 flex items-center justify-center text-xs font-bold">
                    {featuredArticle.authorAvatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {featuredArticle.author}
                    </p>
                    <p className="text-xs text-primary-foreground/80">
                      {new Date(featuredArticle.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory || search
                    ? "Search Results"
                    : "Latest Articles"}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {filtered.length} article{filtered.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <div className="flex gap-2">
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
              <div className="border-l border-border" />
              <div className="flex gap-2">
                {(["all", "week", "month"] as TimeFilter[]).map((t) => (
                  <Badge
                    key={t}
                    variant={timeFilter === t ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setTimeFilter(t)}
                  >
                    {t === "all"
                      ? "All Time"
                      : "Last " + (t === "week" ? "Week" : "Month")}
                  </Badge>
                ))}
              </div>
            </div>

            {/* All Categories for filtering */}
            {!selectedCategory && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {BLOG_CATEGORIES.map((cat) => (
                    <Badge
                      key={cat}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">No articles found</p>
                <p className="text-sm mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filtered.map((b, index) => (
                  <div
                    key={b.id}
                    className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-0">
                      <div className="sm:col-span-1 h-48 sm:h-auto overflow-hidden relative bg-gradient-to-br from-slate-200 to-slate-300">
                        <Image
                          src="/images/community-profile.jpeg"
                          alt={b.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                          width={300}
                          height={250}
                        />
                      </div>
                      <div className="sm:col-span-3 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {b.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(b.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                },
                              )}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {b.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                            {b.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {b.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                #{tag.toLowerCase()}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                {b.authorAvatar}
                              </div>
                              <div>
                                <p className="text-xs font-medium text-foreground">
                                  {b.author}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {b.readTime} min read
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-xs text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                              <Heart className="h-3 w-3" />{" "}
                              {(b.likes / 1000).toFixed(1)}k
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                              <Eye className="h-3 w-3" />{" "}
                              {(b.views / 1000).toFixed(1)}k
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Top Authors */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-lg text-foreground mb-4">
                Featured Authors
              </h3>
              <div className="space-y-4">
                {topAuthors.map((author) => (
                  <div
                    key={author.id}
                    className="flex items-center gap-3 pb-4 last:pb-0 last:border-b-0 border-b border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {author.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm truncate">
                        {author.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {author.articleCount} articles
                      </p>
                      <p className="text-xs text-primary font-medium mt-1">
                        {(author.followers / 1000).toFixed(1)}k followers
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Authors
              </Button>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5" />
                <h3 className="font-bold text-lg">Stay Updated</h3>
              </div>
              <p className="text-sm text-primary-foreground/90 mb-4">
                Get the best articles delivered to your inbox every week.
              </p>
              <div className="space-y-2 mb-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 text-sm border border-primary-foreground/30 focus:outline-none focus:border-primary-foreground/60 transition-colors"
                />
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="w-full cursor-pointer hover:scale-95 transition-transform"
              >
                Subscribe
              </Button>
            </div>

            {/* Write Article CTA */}
            <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
              <h3 className="font-bold text-foreground mb-2 text-lg">
                Have a Story?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Share your knowledge with thousands of readers in our community.
              </p>
              <Button
                className="w-full gap-2 rounded-lg cursor-pointer hover:scale-95 transition-transform"
                size="sm"
              >
                <Plus className="h-4 w-4" /> Submit Article
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
