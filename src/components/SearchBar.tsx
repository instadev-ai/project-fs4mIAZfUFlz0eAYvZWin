import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative flex w-full max-w-2xl items-center">
      <Input
        type="text"
        placeholder="Search for products..."
        className="pr-10"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-0 hover:bg-transparent"
      >
        <Search className="h-5 w-5 text-gray-500" />
      </Button>
    </div>
  )
}