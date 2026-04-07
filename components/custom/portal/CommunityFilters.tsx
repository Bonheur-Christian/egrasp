"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CommunityType } from "@/types/community";
import { FilterIcon } from "lucide-react";
import { useState } from "react";

export type Filters = {
  category: string;
  type: CommunityType | "All";
};

interface CommunityFiltersProps {
  categories: string[];
  filters: Filters;
  onChange: (filters: Filters) => void;
  className?: string;
}

export default function CommunityFilters({
  categories,
  filters,
  onChange,
  className,
}: CommunityFiltersProps) {
  const [open, setOpen] = useState(false);

  const activeFiltersCount = (filters.category !== "All" ? 1 : 0) + (filters.type !== "All" ? 1 : 0);

  const handleCategoryChange = (cat: string) => {
    onChange({ ...filters, category: cat });
  };

  const handleTypeChange = (type: CommunityType | "All") => {
    onChange({ ...filters, type });
  };

  const clearAll = () => {
    onChange({ category: "All", type: "All" });
  };

  return (
    <div className={cn("", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="gap-2 rounded-full border-dashed px-4"
          >
            <FilterIcon className="h-4 w-4" />
            Filter
            {activeFiltersCount > 0 && (
              <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                {activeFiltersCount}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0" align="start">
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">Filter communities</h3>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAll}
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear all
                </Button>
              )}
            </div>
            <Separator className="my-3" />

            {/* Category section */}
            <div className="mb-4">
              <div className="mb-2 text-sm font-medium">Category</div>
              <div className="flex flex-wrap gap-2">
                {["All", ...categories].map((cat) => (
                  <Button
                    key={cat}
                    size="sm"
                    variant={filters.category === cat ? "default" : "outline"}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "h-7 rounded-full px-3 text-xs",
                      filters.category === cat &&
                        "bg-primary text-primary-foreground"
                    )}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="my-3" />

            {/* Type section */}
            <div className="mb-2">
              <div className="mb-2 text-sm font-medium">Type</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "All", value: "All" },
                  { label: "Public", value: CommunityType.PUBLIC },
                  { label: "Private", value: CommunityType.PRIVATE },
                ].map(({ label, value }) => (
                  <Button
                    key={value}
                    size="sm"
                    variant={filters.type === value ? "default" : "outline"}
                    onClick={() => handleTypeChange(value as CommunityType | "All")}
                    className={cn(
                      "h-7 rounded-full px-3 text-xs capitalize",
                      filters.type === value &&
                        "bg-primary text-primary-foreground"
                    )}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}