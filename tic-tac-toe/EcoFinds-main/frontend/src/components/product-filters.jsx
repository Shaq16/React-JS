"use client";

import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';



export default function ProductFilters({
  categories,
  onSearchChange,
  onCategoryChange,
  onPriceChange,
  priceRange,
}) {
  return (
    <div className="mb-8 p-6 bg-card rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md-cols-3 gap-6 items-center">
        <div className="md-span-1">
          <Input
            placeholder="Search for items..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="text-base"
          />
        </div>
        <div className="md-span-1">
          <Select onValueChange={onCategoryChange} defaultValue="all">
            <SelectTrigger className="w-full text-base">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md-span-1 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
                Price Range</span>
                ${priceRange[0]} - ${priceRange[1]}</span>
            </div>
            <Slider
                defaultValue={[0, 1000]}
                min={0}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={(value) => onPriceChange(value as [number, number])}
            />
        </div>
      </div>
    </div>
  );
}
