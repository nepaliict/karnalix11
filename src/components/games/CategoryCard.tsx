import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gamesCount: number;
  gradient: string;
  onClick?: () => void;
}

const CategoryCard = ({
  title,
  description,
  icon: Icon,
  gamesCount,
  gradient,
  onClick,
}: CategoryCardProps) => {
  return (
    <Card
      variant="glassHover"
      className="group cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="p-6 relative">
        {/* Background gradient */}
        <div
          className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${gradient}`}
        />

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>

        {/* Content */}
        <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <span className="text-xs font-medium text-primary">
          {gamesCount}+ Games
        </span>

        {/* Arrow indicator */}
        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
