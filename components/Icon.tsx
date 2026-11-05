import {
  Pill,
  Leaf,
  CupSoda,
  RotateCcw,
  Sparkles,
  Baby,
  HeartPulse,
  Droplets,
  Stethoscope,
  Flower2,
  BadgeCheck,
  UserRound,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/** Bản đồ icon dùng cho dữ liệu (danh mục, cam kết). */
const map: Record<string, LucideIcon> = {
  Pill,
  Leaf,
  CupSoda,
  RotateCcw,
  Sparkles,
  Baby,
  HeartPulse,
  Droplets,
  Stethoscope,
  Flower2,
  BadgeCheck,
  UserRound,
  Truck,
  Wallet,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Pill;
  return <Cmp className={className} aria-hidden="true" />;
}
