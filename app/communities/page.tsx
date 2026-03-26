"use client"

import { useState, useMemo, useRef, useEffect } from "react";
import {
  Search,
  TrendingUp,
  Users,
  Clock,
  Activity,
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
import { CommunityCard } from "@/components/custom/landingPage/CommunityCard";
import { communities, CATEGORIES } from "@/constants/communities";
import Image from "next/image";
import { Navbar } from "@/components/custom/common/Navbar";

type SortKey = "trending" | "members" | "newest" | "active";
type TypeFilter = "all" | "public" | "private";

const SORT_OPTIONS: { key: SortKey; label: string; icon: React.ElementType }[] =
  [
    { key: "trending", label: "Trending", icon: TrendingUp },
    { key: "members", label: "Most Members", icon: Users },
    { key: "newest", label: "Newest", icon: Clock },
    { key: "active", label: "Most Active", icon: Activity },
  ];

export default function Communities() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("trending");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const trending = useMemo(() => communities.filter((c) => c.trending), []);

  const filtered = useMemo(() => {
    let list = [...communities];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q),
      );
    }
    if (selectedCategory)
      list = list.filter((c) => c.category === selectedCategory);
    if (typeFilter !== "all") list = list.filter((c) => c.type === typeFilter);

    switch (sort) {
      case "trending":
        list.sort((a, b) => b.activity - a.activity);
        break;
      case "members":
        list.sort((a, b) => b.members - a.members);
        break;
      case "newest":
        list.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case "active":
        list.sort((a, b) => b.activity - a.activity);
        break;
    }
    return list;
  }, [search, selectedCategory, sort, typeFilter]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar/>
      <section className="relative overflow-hidden bg-primary">
        <Image
          src="/images/community.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          width={1920}
          height={600}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Discover Communities
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Find your people. Join communities that match your interests and
            passions.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search communities by name, topic, or keyword..."
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
        {/* Trending Carousel */}
        {!search && !selectedCategory && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" /> Trending
                Communities
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
                {trending.map((c) => (
                  <CarouselItem key={c.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <CommunityCard community={c} />
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
                Explore All Communities
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
              {(["all", "public", "private"] as TypeFilter[]).map((t) => (
                <Badge
                  key={t}
                  variant={typeFilter === t ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => setTypeFilter(t)}
                >
                  {t}
                </Badge>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">No communities found</p>
                <p className="text-sm mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((c) => (
                  <CommunityCard key={c.id} community={c} />
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
                    variant={selectedCategory === cat ? "default" : "secondary"}
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedCategory(selectedCategory === cat ? null : cat)
                    }
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-3">
                Recommended
              </h3>
              <div className="space-y-3">
                {communities.slice(0, 4).map((c) => (
                  <div key={c.id} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {c.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {c.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(c.members / 1000).toFixed(1)}k members
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-primary p-5 text-primary-foreground">
              <h3 className="font-semibold mb-2">Start Your Own Community</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Build a space for people who share your passion.
              </p>
              <Button variant="secondary" size="lg" className="w-full gap-2 rounded-md cursor-pointer hover:scale-90 duration-300 transition-all py-4">
                <Plus className="h-4 w-4" /> Create a New Community
              </Button>
            </div>
          </aside>
        </div>

        {/* Mobile CTA */}
        <section className="lg:hidden mt-12 rounded-xl bg-primary p-6 text-primary-foreground text-center">
          <h3 className="font-bold text-lg mb-2">Start Your Own Community</h3>
          <p className="text-sm text-primary-foreground/80 mb-4">
            Build a space for people who share your passion.
          </p>
          <Button variant="secondary" className="gap-2">
            <Plus className="h-4 w-4" /> Create a New Community
          </Button>
        </section>
      </div>
    </div>
  );
}