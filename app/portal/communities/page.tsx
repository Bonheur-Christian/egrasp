"use client";

import { useState, useMemo } from "react";
import { CircleFadingPlus, Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CommunityCard } from "@/components/custom/landingPage/CommunityCard";
import { communities } from "@/constants/communities";
import CommunityFilters, {
  Filters,
} from "@/components/custom/portal/CommunityFilters";
import { Button } from "@/components/ui/button";

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
    <div className="mb-12 m-2 rounded-lg bg-slate-50 max-w-[90%] mx-auto">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary pt-6">
              Discover Communities
            </h1>
            <p className="text-md text-muted-foreground">
              Find and join communities that match your interests.
            </p>
          </div>
          <div>
            <Button className="flex items-center gap-2 px-6 py-5 bg-primary text-white hover:bg-primary cursor-pointer hover:scale-90 rounded-lg ">
              {" "}
              <CircleFadingPlus /> Create Community
            </Button>
          </div>
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
        <div className="py-2 flex justify-end">
          <CommunityFilters
            categories={[
              "Technology",
              "Business",
              "Sports",
              "Music",
              "Health",
              "Gaming",
              "Education",
              "Art",
              "Science",
              "Travel",
            ]}
            filters={filters}
            onChange={setFilters}
          />
        </div>
      </div>

      {/* My Communities Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Communities</h2>
          <Badge variant="secondary">{filteredCommunities.length}</Badge>
        </div>

        {filteredCommunities.length === 0 ? (
          <p className="text-muted-foreground flex justify-center min-h-[300px] items-center">
            No communities found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
