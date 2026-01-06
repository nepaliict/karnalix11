import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Lock,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-glass-border mt-auto">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">G</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Golden<span className="text-primary">Bet</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your premium destination for online gaming and betting. Experience the thrill of winning with our secure and fair gaming platform.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Games", "Sports Betting", "Live Casino", "Promotions", "VIP Program", "Affiliates"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {["Help Center", "FAQ", "Responsible Gaming", "Terms & Conditions", "Privacy Policy", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                support@goldenbet.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +91 80008 25980
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                24/7 Support Available
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Registered in Curaçao
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-glass-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            Licensed & Regulated
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-5 h-5 text-primary" />
            SSL Encrypted
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-5 h-5 text-primary" />
            Instant Payouts
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background/50 py-4 border-t border-glass-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 GoldenBet. All rights reserved. Play responsibly. 18+</p>
            <p className="text-xs">
              Gambling can be addictive. Please play responsibly. If you need help, visit{" "}
              <a href="#" className="text-primary hover:underline">BeGambleAware.org</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
