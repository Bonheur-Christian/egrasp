import { Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Community } from "@/constants/communities";
import Image from "next/image";

function formatCount(n: number) {
  return n >= 1000
    ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`
    : String(n);
}

export function CommunityCard({ community }: { community: Community }) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden">
      <div className="h-28 overflow-hidden relative">
        <Image
          src="/images/community-profile.jpeg"
          alt={community.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={600}
          height={200}
        />
      </div>

      <div className="p-4 -mt-6 relative">
        <div className="w-12 h-12 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md border-2 border-card">
          {community.avatar}
        </div>

        <h3 className="font-semibold text-foreground mt-2 text-base leading-tight flex items-center gap-1.5">
          {community.name}
          {community.type === "private" && (
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </h3>

        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {community.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-xs">
              {community.category}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="h-3 w-3" /> {formatCount(community.members)}
            </span>
          </div>
        </div>

        <div className="flex justify-center">
            <Button
              className="mt-3 px-12 rounded-md cursor-pointer hover:scale-90 duration-300 transition-all border border-primary"
              size="lg"
              variant={community.type === "private" ? "outline" : "default"}
            >
              {community.type === "private" ? "Request to Join" : "Join"}
            </Button>
        </div>
      </div>
    </div>
  );
}
