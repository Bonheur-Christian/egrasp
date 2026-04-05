"use client";

import { useState, useMemo } from "react";
import { Search, Users, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectorFilter from "@/components/custom/portal/SectorFilter";
import { CommunityCard } from "@/components/custom/landingPage/CommunityCard";

const MOCK_COMMUNITIES = [
  {
    id: "1",
    name: "Web Development Masters",
    description:
      "Learn modern web development with React, Next.js, and TypeScript",
    sector: "Technology",
    memberCount: 2840,
    image: "/communities/web-dev.jpg",
    featured: true,
    isJoined: true,
    lastActivity: "2 hours ago",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "2",
    name: "Digital Marketing Collective",
    description:
      "Share strategies, tools, and insights for digital marketing success",
    sector: "Marketing",
    memberCount: 1560,
    image: "/communities/marketing.jpg",
    featured: true,
    isJoined: true,
    lastActivity: "30 minutes ago",
    skills: ["SEO", "Social Media", "Analytics"],
  },
  {
    id: "3",
    name: "AI & Machine Learning Hub",
    description: "Discuss latest developments in AI, ML, and data science",
    sector: "Technology",
    memberCount: 3200,
    image: "/communities/ai-ml.jpg",
    featured: true,
    isJoined: false,
    lastActivity: "1 hour ago",
    skills: ["Python", "ML", "AI"],
  },
  {
    id: "4",
    name: "Product Design Studio",
    description: "Collaborate on UX/UI design principles and best practices",
    sector: "Design",
    memberCount: 980,
    image: "/communities/design.jpg",
    featured: true,
    isJoined: false,
    lastActivity: "3 hours ago",
    skills: ["UI/UX", "Figma", "Design Systems"],
  },
  {
    id: "5",
    name: "Freelance Business Blueprint",
    description: "Tips and tricks for growing your freelance business",
    sector: "Business",
    memberCount: 1200,
    image: "/communities/freelance.jpg",
    featured: false,
    isJoined: false,
    lastActivity: "4 hours ago",
    skills: ["Business", "Freelancing", "Growth"],
  },
  {
    id: "6",
    name: "Cloud Architecture Experts",
    description: "Deep dive into AWS, Google Cloud, and Azure solutions",
    sector: "Technology",
    memberCount: 1650,
    image: "/communities/cloud.jpg",
    featured: false,
    isJoined: false,
    lastActivity: "45 minutes ago",
    skills: ["AWS", "Cloud", "DevOps"],
  },
  {
    id: "7",
    name: "Content Creators Network",
    description: "Build and monetize your content across platforms",
    sector: "Content",
    memberCount: 2100,
    image: "/communities/content.jpg",
    featured: false,
    isJoined: false,
    lastActivity: "1 hour ago",
    skills: ["Content", "Video", "Writing"],
  },
  {
    id: "8",
    name: "Data Analytics Professionals",
    description: "Share insights, tools, and best practices in data analytics",
    sector: "Technology",
    memberCount: 890,
    image: "/communities/analytics.jpg",
    featured: false,
    isJoined: false,
    lastActivity: "2 hours ago",
    skills: ["Analytics", "SQL", "Python"],
  },
  {
    id: "9",
    name: "Mobile App Development",
    description: "Build iOS, Android, and cross-platform mobile applications",
    sector: "Technology",
    memberCount: 1920,
    image: "/communities/mobile.jpg",
    featured: false,
    isJoined: false,
    lastActivity: "1 hour ago",
    skills: ["React Native", "Swift", "Kotlin"],
  },
  {
    id: "10",
    name: "Startup Founders Circle",
    description: "Connect with founders, share experiences, and grow together",
    sector: "Business",
    memberCount: 750,
    image: "/communities/startup.jpg",
    featured: false,
    isJoined: false,
    lastActivity: "30 minutes ago",
    skills: ["Entrepreneurship", "Fundraising", "Strategy"],
  },
];

const SECTORS = [
  "All",
  "Technology",
  "Design",
  "Marketing",
  "Business",
  "Content",
  "Finance",
  "Healthcare",
];
export default function CommunitiesPage() {
  const [selectedSector, setSelectedSector] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [joinedCommunities, setJoinedCommunities] = useState(
    new Set(MOCK_COMMUNITIES.filter((c) => c.isJoined).map((c) => c.id)),
  );

  // Filter communities based on sector and search
  const filteredCommunities = useMemo(() => {
    return MOCK_COMMUNITIES.filter((community) => {
      const matchesSector =
        selectedSector === "All" || community.sector === selectedSector;
      const matchesSearch =
        community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        community.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesSector && matchesSearch;
    });
  }, [selectedSector, searchQuery]);

  // Separate joined and recommended communities
  const joined = filteredCommunities.filter((c) => joinedCommunities.has(c.id));
  const recommended = filteredCommunities.filter(
    (c) => !joinedCommunities.has(c.id),
  );

  const handleJoinCommunity = (communityId: string) => {
    const newJoined = new Set(joinedCommunities);
    newJoined.add(communityId);
    setJoinedCommunities(newJoined);
  };

  const handleLeaveCommunity = (communityId: string) => {
    const newJoined = new Set(joinedCommunities);
    newJoined.delete(communityId);
    setJoinedCommunities(newJoined);
  };

  return (
    <div className=" h-screen m-2 rounded-lg  bg-slate-50">
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

        {/* Sector Filter */}
        <SectorFilter
          sectors={SECTORS}
          selectedSector={selectedSector}
          onSectorChange={setSelectedSector}
        />
      </div>
      <div>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              My Communities
            </h2>
            <Badge variant="secondary">{joined.length}</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {joined.map((community, index) => (
              <CommunityCard
  key={community.id}
  id={community.id}
  name={community.name}
  description={community.description}
  sector={community.sector}           // maps to category
  memberCount={community.memberCount} // maps to members
  type={community.type || "public"}
  isJoined={community.isJoined}
  isMember={community.isJoined}       // or your own logic
  onJoin={onJoin}
  onLeave={onLeave}
/>
            ))}
          </div>{" "}
        </section>
      </div>
    </div>
  );
}
