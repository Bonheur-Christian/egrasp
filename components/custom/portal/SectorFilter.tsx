"use client";

import { Button } from '@/components/ui/button'

interface SectorFilterProps {
  sectors: string[]
  selectedSector: string
  onSectorChange: (sector: string) => void
}

export default function SectorFilter({
  sectors,
  selectedSector,
  onSectorChange,
}: SectorFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sectors.map(sector => (
        <Button
          key={sector}
          onClick={() => onSectorChange(sector)}
          variant={selectedSector === sector ? 'default' : 'outline'}
          className={`rounded-full ${selectedSector === sector ? 'text-white' : 'text-gray-600'}`}
          size="sm"
        >
          {sector}
        </Button>
      ))}
    </div>
  )
}
