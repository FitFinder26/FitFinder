import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function MagicButton({ processImage, isDisabled, name, ariaLabelKey }) {
  const { t } = useTranslation();
  const label = ariaLabelKey ? t(ariaLabelKey) : t(name);

  const starPositions = [
    "group-hover:-top-16 group-hover:-left-8 w-6 top-1/4 left-1/4",
    "group-hover:-top-4 group-hover:left-4 w-4 top-1/2 left-1/2",
    "group-hover:top-12 group-hover:left-8 w-2 top-1/2 left-1/3",
    "group-hover:top-6 group-hover:left-[110%] w-4 top-1/3 left-1/2",
    "group-hover:top-[-20%] group-hover:left-[80%] w-3 top-1/4 left-1/3",
    "group-hover:-top-2 group-hover:left-1/2 w-2 top-0 left-1/2",
  ];

  const Star = ({ className }) => (
    <div className={cn("absolute opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-20 fill-[#fffdef] drop-shadow-[0_0_10px_#fffdef]", className)}>
      <svg viewBox="0 0 784 816" className="w-full h-full">
        <path d="M392 0c-21 210-184 378-392 408 208 29 371 198 392 408 21-210 184-378 392-408-208-29-371-198-392-408z" />
      </svg>
    </div>
  );

  return (
    <button
        onClick={isDisabled ? undefined : processImage}
        className={cn(
            "group relative px-10 h-16 bg-white dark:bg-zinc-950 text-black dark:text-white border-4 border-black dark:border-white rounded-2xl font-black uppercase tracking-widest text-lg transition-all duration-300",
            isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:translate-y-0"
        )}
        aria-label={label}
        type="button"
    >
        <span className="relative z-10 flex items-center gap-3">
            <Sparkles className={cn("transition-transform duration-500", !isDisabled && "group-hover:rotate-12 group-hover:scale-125")} size={24} />
            {t(name)}
        </span>

        {/* Dynamic Stars */}
        {!isDisabled && starPositions.map((pos, i) => (
            <Star key={i} className={pos} />
        ))}

        {/* Extra Glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
    </button>
  );
}
