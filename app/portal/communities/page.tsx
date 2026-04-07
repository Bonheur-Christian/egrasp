"use client";

import { useState, useMemo } from "react";
import { Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CommunityCard } from "@/components/custom/landingPage/CommunityCard";
import { communities } from "@/constants/communities";
import CommunityFilters, { Filters } from "@/components/custom/portal/CommunityFilters";

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    category: "All",
    type: "All",
  });

  // Filtered + search
  const filteredCommunities = useMemo(() => {
    return communities.filter((community) => {
      // Category filter
      const matchCategory =
        filters.category === "All" || community.category === filters.category;

      // Type filter
      const matchType =
        filters.type === "All" || community.type === filters.type;

      // Search filter
      const matchSearch =
        community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchType && matchSearch;
    });
  }, [filters, searchQuery]);

  return (
    <div className="h-screen m-2 rounded-lg bg-slate-50 max-w-[90%] mx-auto">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-primary pt-6">
            Discover Communities
          </h1>
          <p className="text-md text-muted-foreground">
            Find and join communities that match your interests.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/2">
          <Search className="absolute left-3 top-2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search communities, skills, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 rounded-full py-4"
          />
        </div>

        {/* Community Filters */}
        {/* Make sure your CommunityFilters component expects filters.type to be CommunityType | "All" */}
        <CommunityFilters
          categories={["All", "Technology", "Business", "Sports", "Music", "Health", "Gaming", "Education", "Art", "Science", "Travel"]}
          filters={filters}
          onChange={setFilters}
        />
      </div>

      {/* My Communities Section */}
      <section className="my-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Communities</h2>
          <Badge variant="secondary">{filteredCommunities.length}</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </section>
    </div>
  );
}