import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/games/GameCard";
import CategoryCard from "@/components/games/CategoryCard";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Spade,
  Dices,
  Trophy,
  Video,
  Gamepad2,
  TrendingUp,
  Grid3X3,
  LayoutList,
  ChevronDown,
} from "lucide-react";

const categories = [
  { id: "all", name: "All Games", icon: Grid3X3, count: 300 },
  { id: "cards", name: "Card Games", icon: Spade, count: 45 },
  { id: "casino", name: "Casino", icon: Dices, count: 120 },
  { id: "sports", name: "Sports", icon: Trophy, count: 50 },
  { id: "live", name: "Live Casino", icon: Video, count: 35 },
  { id: "casual", name: "Casual", icon: Gamepad2, count: 25 },
  { id: "crash", name: "Crash", icon: TrendingUp, count: 15 },
];

const sortOptions = ["Popular", "New", "A-Z", "Bet Amount"];

const allGames = [
  { title: "Teen Patti Gold", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&h=300&fit=crop", category: "Card Games", minBet: 10, maxBet: 10000, activePlayers: 2456, isHot: true },
  { title: "Royal Roulette", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop", category: "Casino", minBet: 50, maxBet: 50000, activePlayers: 1823, isNew: true },
  { title: "Aviator Pro", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop", category: "Crash Games", minBet: 10, maxBet: 100000, activePlayers: 5621, isHot: true },
  { title: "Poker Championship", image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop", category: "Card Games", minBet: 100, maxBet: 100000, activePlayers: 987 },
  { title: "Lucky Slots", image: "https://images.unsplash.com/photo-1596731498067-a0b63ccf6ac0?w=400&h=300&fit=crop", category: "Slots", minBet: 5, maxBet: 5000, activePlayers: 3421, isNew: true },
  { title: "Dragon Tiger", image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=400&h=300&fit=crop", category: "Live Casino", minBet: 20, maxBet: 25000, activePlayers: 1567 },
  { title: "Blackjack Pro", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop", category: "Card Games", minBet: 50, maxBet: 25000, activePlayers: 892 },
  { title: "Lightning Roulette", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=400&h=300&fit=crop", category: "Live Casino", minBet: 100, maxBet: 50000, activePlayers: 2134, isHot: true },
  { title: "Mega Jackpot", image: "https://images.unsplash.com/photo-1518893883800-45cd0954574b?w=400&h=300&fit=crop", category: "Slots", minBet: 10, maxBet: 1000, activePlayers: 4521, isNew: true },
  { title: "Rummy Master", image: "https://images.unsplash.com/photo-1561603219-38f2dbd86c91?w=400&h=300&fit=crop", category: "Card Games", minBet: 25, maxBet: 10000, activePlayers: 1876 },
  { title: "Andar Bahar", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=300&fit=crop", category: "Live Casino", minBet: 10, maxBet: 25000, activePlayers: 3245 },
  { title: "Crash X", image: "https://images.unsplash.com/photo-1517976384346-3136801d605d?w=400&h=300&fit=crop", category: "Crash Games", minBet: 5, maxBet: 50000, activePlayers: 6789, isHot: true },
];

const GamesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredGames = allGames.filter(
    (game) =>
      (selectedCategory === "all" || game.category.toLowerCase().includes(selectedCategory)) &&
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Explore Our <span className="gradient-text-gold">Games</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose from 300+ games across card games, casino, sports betting, and more
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search games..."
              className="pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sort */}
          <div className="flex gap-3">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-12 px-4 pr-10 rounded-lg bg-secondary border border-glass-border text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="flex rounded-lg border border-glass-border overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 transition-colors ${
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
              <span className="text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filteredGames.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No games found matching your criteria</p>
            <Button variant="outline" onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredGames.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Games
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GamesPage;
