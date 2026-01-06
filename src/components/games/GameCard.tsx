import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Play } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  category: string;
  minBet: number;
  maxBet: number;
  activePlayers: number;
  isHot?: boolean;
  isNew?: boolean;
}

const GameCard = ({
  title,
  image,
  category,
  minBet,
  maxBet,
  activePlayers,
  isHot,
  isNew,
}: GameCardProps) => {
  return (
    <Card variant="glassHover" className="group overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="gold" size="lg" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Play className="w-5 h-5 mr-1" />
            Play Now
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isHot && (
            <span className="px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold">
              🔥 HOT
            </span>
          )}
          {isNew && (
            <span className="px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              NEW
            </span>
          )}
        </div>

        {/* Active Players */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
          <Users className="w-3 h-3 text-accent" />
          <span>{activePlayers}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-heading font-semibold text-lg mt-1 mb-2 truncate">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            ₹{minBet} - ₹{maxBet}
          </span>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            Demo
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
