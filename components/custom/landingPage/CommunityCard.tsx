"use client"
import { Users, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Community } from "@/types/community";

function formatCount(n: number) {
  return n >= 1000
    ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`
    : String(n);
}

type CommunityCardProps = {
  community: Community;
};

export function CommunityCard({ community }: CommunityCardProps) {
  const isPrivate = community.type === "private";

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden">
      
      {/* Cover Image */}
      <div className="h-28 overflow-hidden relative">
        <Image
          src={community.coverImage || "/images/community.png"}
          alt={community.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={600}
          height={200}
        />
      </div>

      <div className="p-4 -mt-6 relative">
        
        {/* Avatar */}
        <div className="w-12 h-12 rounded-md overflow-hidden border-2 border-card shadow-md">
          <Image
            src={community.avatar || "/images/community-profile.jpeg"}
            alt={community.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Private icon */}
        <h3 className="font-semibold text-foreground mt-2 text-base leading-tight flex items-center gap-1.5">
          {community.name}
          {isPrivate && (
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {community.description}
        </p>

        {/* Category + Members */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-xs">
              {community.category}
            </Badge>

            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="h-3 w-3" />
              {formatCount(community.membersCount)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}