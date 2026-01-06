import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Wallet,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Trophy,
  TrendingUp,
  Clock,
  Bell,
  Settings,
  User,
  Star,
  ChevronRight,
  Gamepad2,
  Crown,
  Target,
  History,
} from "lucide-react";

const recentGames = [
  { name: "Aviator Pro", result: "win", amount: 2500, time: "2 mins ago" },
  { name: "Teen Patti Gold", result: "loss", amount: 500, time: "15 mins ago" },
  { name: "Royal Roulette", result: "win", amount: 1200, time: "1 hour ago" },
  { name: "Blackjack Pro", result: "win", amount: 800, time: "2 hours ago" },
];

const activeBets = [
  { match: "IND vs AUS - T20", bet: "India Win", odds: 1.85, stake: 1000, status: "live" },
  { match: "Man City vs Liverpool", bet: "Over 2.5", odds: 2.10, stake: 500, status: "pending" },
];

const quickActions = [
  { icon: Gamepad2, label: "Play Games", href: "/games", color: "from-blue-500 to-cyan-500" },
  { icon: Trophy, label: "Sports Bet", href: "/sports", color: "from-emerald-500 to-green-500" },
  { icon: Target, label: "Tournaments", href: "/tournaments", color: "from-violet-500 to-purple-500" },
  { icon: History, label: "History", href: "/history", color: "from-orange-500 to-amber-500" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold mb-1">
              Welcome back, <span className="gradient-text-gold">Player</span>!
            </h1>
            <p className="text-muted-foreground">Here's your gaming summary</p>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Wallet Card */}
            <Card variant="neon" className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Total Balance</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-bold">₹12,450</span>
                    <span className="text-accent text-sm font-medium">+₹2,450 today</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="gold">
                    <Plus className="w-4 h-4" />
                    Add Funds
                  </Button>
                  <Button variant="outline">
                    <ArrowUpRight className="w-4 h-4" />
                    Withdraw
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-glass-border">
                <div className="text-center">
                  <p className="text-muted-foreground text-xs mb-1">Total Deposits</p>
                  <p className="font-mono font-semibold">₹50,000</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground text-xs mb-1">Total Winnings</p>
                  <p className="font-mono font-semibold text-accent">₹62,450</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground text-xs mb-1">Bonus Balance</p>
                  <p className="font-mono font-semibold text-primary">₹5,000</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <Link key={action.label} to={action.href}>
                  <Card variant="glassHover" className="p-4 text-center group">
                    <div
                      className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-medium text-sm">{action.label}</p>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Active Bets */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-xl font-semibold">Active Bets</h2>
                <Link to="/bets" className="text-primary text-sm hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {activeBets.length > 0 ? (
                <div className="space-y-4">
                  {activeBets.map((bet, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                    >
                      <div>
                        <p className="font-medium mb-1">{bet.match}</p>
                        <p className="text-sm text-muted-foreground">
                          {bet.bet} @ <span className="text-primary font-mono">{bet.odds}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono font-semibold">₹{bet.stake}</p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            bet.status === "live"
                              ? "bg-accent/20 text-accent"
                              : "bg-primary/20 text-primary"
                          }`}
                        >
                          {bet.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">No active bets</p>
              )}
            </Card>

            {/* Recent Games */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-xl font-semibold">Recent Games</h2>
                <Link to="/history" className="text-primary text-sm hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-3">
                {recentGames.map((game, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          game.result === "win"
                            ? "bg-accent/20 text-accent"
                            : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {game.result === "win" ? (
                          <ArrowDownLeft className="w-5 h-5" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{game.name}</p>
                        <p className="text-xs text-muted-foreground">{game.time}</p>
                      </div>
                    </div>
                    <span
                      className={`font-mono font-semibold ${
                        game.result === "win" ? "text-accent" : "text-destructive"
                      }`}
                    >
                      {game.result === "win" ? "+" : "-"}₹{game.amount}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Player123</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <Crown className="w-4 h-4" />
                    <span className="text-sm font-medium">VIP Bronze</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Profile Completion</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">VIP Progress</span>
                    <span className="font-medium">2,500 / 5,000 XP</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                Complete Profile
              </Button>
            </Card>

            {/* Stats Card */}
            <Card variant="glass" className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">Total Wins</span>
                  </div>
                  <span className="font-mono font-semibold">156</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Win Rate</span>
                  </div>
                  <span className="font-mono font-semibold">68%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-muted-foreground">Games Played</span>
                  </div>
                  <span className="font-mono font-semibold">230</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-violet-400" />
                    </div>
                    <span className="text-muted-foreground">Favorite Game</span>
                  </div>
                  <span className="font-medium text-sm">Aviator Pro</span>
                </div>
              </div>
            </Card>

            {/* Promotions */}
            <Card variant="neon" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold">VIP Bonus</p>
                  <p className="text-sm text-muted-foreground">Claim your weekly reward</p>
                </div>
              </div>
              <Button variant="gold" className="w-full">
                Claim ₹500 Bonus
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
