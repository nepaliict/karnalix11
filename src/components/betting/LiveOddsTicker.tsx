import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface OddsItem {
  id: number;
  match: string;
  team1: string;
  team2: string;
  odds1: number;
  odds2: number;
  isLive: boolean;
  sport: string;
  trend: "up" | "down" | "stable";
}

const mockOdds: OddsItem[] = [
  { id: 1, match: "IND vs AUS", team1: "India", team2: "Australia", odds1: 1.85, odds2: 2.10, isLive: true, sport: "Cricket", trend: "up" },
  { id: 2, match: "MCI vs LIV", team1: "Man City", team2: "Liverpool", odds1: 2.20, odds2: 3.15, isLive: true, sport: "Football", trend: "down" },
  { id: 3, match: "NBA Finals", team1: "Lakers", team2: "Celtics", odds1: 1.95, odds2: 1.95, isLive: false, sport: "Basketball", trend: "stable" },
  { id: 4, match: "Wimbledon SF", team1: "Djokovic", team2: "Alcaraz", odds1: 1.75, odds2: 2.25, isLive: true, sport: "Tennis", trend: "up" },
  { id: 5, match: "IPL Final", team1: "CSK", team2: "MI", odds1: 1.90, odds2: 2.00, isLive: false, sport: "Cricket", trend: "down" },
  { id: 6, match: "UCL Final", team1: "Real Madrid", team2: "Bayern", odds1: 2.40, odds2: 2.60, isLive: true, sport: "Football", trend: "up" },
];

const LiveOddsTicker = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/80 backdrop-blur-lg border-y border-glass-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-12">
          {/* Live indicator */}
          <div className="flex items-center gap-2 pr-4 border-r border-glass-border shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm font-semibold text-accent">LIVE ODDS</span>
          </div>

          {/* Ticker */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-8 animate-ticker"
              style={{ transform: `translateX(${offset % 1000}px)` }}
            >
              {[...mockOdds, ...mockOdds].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 shrink-0"
                >
                  <span className="text-xs text-muted-foreground">{item.sport}</span>
                  <span className="text-sm font-medium">{item.match}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">{item.team1}: {item.odds1.toFixed(2)}</span>
                    {item.trend === "up" && <TrendingUp className="w-3 h-3 text-accent" />}
                    {item.trend === "down" && <TrendingDown className="w-3 h-3 text-destructive" />}
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="font-mono text-sm">{item.team2}: {item.odds2.toFixed(2)}</span>
                  {item.isLive && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-accent/20 text-accent font-medium">
                      LIVE
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOddsTicker;
