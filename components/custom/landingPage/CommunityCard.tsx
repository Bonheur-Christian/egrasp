import { Users, Lock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Community } from "@/constants/communities";
import Image from "next/image";

function formatCount(n: number) {
  return n >= 1000
    ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`
    : String(n);
}

// Updated Props to be more flexible
type CommunityCardProps = {
  community: Community;


};

export function CommunityCard({
  community,
 

 
}: CommunityCardProps) {
  // Use whichever field is available (your data uses memberCount/sector)
  const displayMembers = community.members  ?? 0;
  const displayCategory = community.category  ?? "General";

  

  const isPrivate = community.type === "private";

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden">
      <div className="h-28 overflow-hidden relative">
        <Image
          src={community.image}
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
          {isPrivate && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
        </h3>

        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {community.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-xs">
              {displayCategory}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="h-3 w-3" /> {formatCount(displayMembers)}
            </span>
          </div>
        </div>

        {/* <div className="flex justify-center mt-4">
          {isMember || isJoined ? (
            <Button
              onClick={handleLeave}
              variant="destructive"
              size="lg"
              className="px-10 rounded-md hover:scale-95 transition-all flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Leave
            </Button>
          ) : (
            <Button
              onClick={handleJoin}
              className="px-12 rounded-md cursor-pointer hover:scale-90 duration-300 transition-all border border-primary"
              size="lg"
              variant={isPrivate ? "outline" : "default"}
            >
              {isPrivate ? "Request to Join" : "Join"}
            </Button>
          )}
        </div> */}
      </div>
    </div>
  );
}
