"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type Filters = {
  category: string;
  trending: boolean | null;
  type: string;
};

interface CommunityFiltersProps {
  categories: string[];
  filters: Filters;
  onChange: (filters: Filters) => void;
  className?: string;
  defaultOpen?: boolean;
}

export default function CommunityFilters({
  categories,
  filters,
  onChange,
  className,
  defaultOpen = true,
}: CommunityFiltersProps) {
  return (
    <div
      className={cn(
        "w-full rounded-xl border bg-white p-4 shadow-sm",
        className
      )}
    >
      <Accordion
        type="multiple"
        defaultValue={defaultOpen ? ["category", "trending", "type"] : []}
        className="w-full space-y-3"
      >
        {/* CATEGORY */}
        <AccordionItem value="category">
          <AccordionTrigger className="text-sm font-semibold">
            Category
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {["All", ...categories].map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={filters.category === cat ? "default" : "outline"}
                  onClick={() => onChange({ ...filters, category: cat })}
                  className={cn(
                    "rounded-full px-4 transition",
                    filters.category === cat &&
                      "bg-primary text-white shadow"
                  )}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* TRENDING */}
        <AccordionItem value="trending">
          <AccordionTrigger className="text-sm font-semibold">
            Trending
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: "All", value: null },
                { label: "Trending", value: true },
                { label: "Not Trending", value: false },
              ].map(({ label, value }) => (
                <Button
                  key={label}
                  size="sm"
                  variant={filters.trending === value ? "default" : "outline"}
                  onClick={() => onChange({ ...filters, trending: value })}
                  className={cn(
                    "rounded-full px-4 transition",
                    filters.trending === value &&
                      "bg-primary text-white shadow"
                  )}
                >
                  {label}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* TYPE */}
        <AccordionItem value="type">
          <AccordionTrigger className="text-sm font-semibold">
            Type
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: "All", value: "All" },
                { label: "Public", value: "public" },
                { label: "Private", value: "private" },
              ].map(({ label, value }) => (
                <Button
                  key={value}
                  size="sm"
                  variant={filters.type === value ? "default" : "outline"}
                  onClick={() => onChange({ ...filters, type: value })}
                  className={cn(
                    "rounded-full px-4 capitalize transition",
                    filters.type === value &&
                      "bg-primary text-white shadow"
                  )}
                >
                  {label}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}