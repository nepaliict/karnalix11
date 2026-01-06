import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import GameCard from "@/components/games/GameCard";
import CategoryCard from "@/components/games/CategoryCard";
import LiveOddsTicker from "@/components/betting/LiveOddsTicker";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Spade,
  Dices,
  Trophy,
  Video,
  Gamepad2,
  TrendingUp,
  Gift,
  Crown,
  Star,
  ArrowRight,
  Users,
  Shield,
  Zap,
} from "lucide-react";

const categories = [
  {
    title: "Card Games",
    description: "Poker, Teen Patti, Rummy, Blackjack and more classic card games",
    icon: Spade,
    gamesCount: 45,
    gradient: "bg-gradient-to-br from-red-500 to-rose-600",
  },
  {
    title: "Casino Games",
    description: "Slots, Roulette, Baccarat and exciting casino experiences",
    icon: Dices,
    gamesCount: 120,
    gradient: "bg-gradient-to-br from-gold to-gold-dark",
  },
  {
    title: "Sports Betting",
    description: "Cricket, Football, Basketball, Tennis with live odds",
    icon: Trophy,
    gamesCount: 50,
    gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
  {
    title: "Live Casino",
    description: "Real dealers, real action with immersive live gaming",
    icon: Video,
    gamesCount: 35,
    gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    title: "Casual Games",
    description: "Ludo, Carrom, 8-Ball Pool and fun casual gaming",
    icon: Gamepad2,
    gamesCount: 25,
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    title: "Crash Games",
    description: "Aviator-style games with multiplying wins",
    icon: TrendingUp,
    gamesCount: 15,
    gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
];

const featuredGames = [
  { title: "Teen Patti Gold", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&h=300&fit=crop", category: "Card Games", minBet: 10, maxBet: 10000, activePlayers: 2456, isHot: true },
  { title: "Royal Roulette", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop", category: "Casino", minBet: 50, maxBet: 50000, activePlayers: 1823, isNew: true },
  { title: "Aviator Pro", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop", category: "Crash Games", minBet: 10, maxBet: 100000, activePlayers: 5621, isHot: true },
  { title: "Poker Championship", image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop", category: "Card Games", minBet: 100, maxBet: 100000, activePlayers: 987 },
  { title: "Lucky Slots", image: "https://images.unsplash.com/photo-1596731498067-a0b63ccf6ac0?w=400&h=300&fit=crop", category: "Slots", minBet: 5, maxBet: 5000, activePlayers: 3421, isNew: true },
  { title: "Dragon Tiger", image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=400&h=300&fit=crop", category: "Live Casino", minBet: 20, maxBet: 25000, activePlayers: 1567 },
];

const stats = [
  { label: "Active Players", value: "50K+", icon: Users },
  { label: "Games Available", value: "300+", icon: Gamepad2 },
  { label: "Daily Winners", value: "10K+", icon: Trophy },
  { label: "Secure Transactions", value: "100%", icon: Shield },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Casino Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Welcome Bonus up to ₹50,000</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Experience the Thrill of{" "}
              <span className="gradient-text-gold">Winning Big</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Join India's most trusted gaming platform with 300+ games, live casino, sports betting, and instant payouts.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/auth?mode=signup">
                <Button variant="gold" size="xl">
                  Start Playing Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/games">
                <Button variant="glass" size="xl">
                  Explore Games
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-primary" />
                    <span className="font-heading font-bold text-2xl">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Odds Ticker */}
      <LiveOddsTicker />

      {/* Game Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Choose Your Game
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From classic card games to thrilling crash games, explore our wide range of gaming categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link to="/games" key={category.title}>
                <CategoryCard {...category} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                Featured Games
              </h2>
              <p className="text-muted-foreground">
                Popular games loved by our players
              </p>
            </div>
            <Link to="/games">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Banner */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card variant="neon" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shrink-0">
                  <Gift className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                    Welcome Bonus: 200% Match
                  </h3>
                  <p className="text-muted-foreground">
                    Get up to ₹50,000 on your first deposit + 100 free spins!
                  </p>
                </div>
              </div>
              <Link to="/auth?mode=signup">
                <Button variant="gold" size="lg">
                  Claim Now
                  <Zap className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What Our Players Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied players who trust KarnaliX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul S.", location: "Mumbai", text: "Won ₹2.5 lakhs on Aviator! The fastest payouts I've ever seen.", rating: 5 },
              { name: "Priya K.", location: "Bangalore", text: "Amazing live casino experience. The dealers are professional and friendly.", rating: 5 },
              { name: "Amit P.", location: "Delhi", text: "Best sports betting platform. Great odds and easy to use interface.", rating: 5 },
            ].map((testimonial, index) => (
              <Card key={index} variant="glass" className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Winning?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join KarnaliX today and get your welcome bonus. Play responsibly and enjoy the thrill!
          </p>
          <Link to="/auth?mode=signup">
            <Button variant="gold" size="xl">
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
