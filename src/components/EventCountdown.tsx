import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface EventCountdownProps {
  /** ISO date YYYY-MM-DD */
  dateISO: string;
  /** Optional location/time string e.g. "Zoom Online Webinar · 8:00 PM" */
  timeHint?: string;
}

/** Parse a time like "8:00 PM" or "9:00 AM" out of a free-text string. Returns [h,m] in 24h, or null. */
const parseTime = (s?: string): [number, number] | null => {
  if (!s) return null;
  const m = s.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const ap = m[3]?.toUpperCase();
  if (ap === "PM" && h < 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return [h, min];
};

const getTarget = (dateISO: string, timeHint?: string): number => {
  const t = parseTime(timeHint) ?? [9, 0];
  const [y, mo, d] = dateISO.split("-").map(Number);
  return new Date(y, (mo ?? 1) - 1, d ?? 1, t[0], t[1], 0, 0).getTime();
};

const EventCountdown = ({ dateISO, timeHint }: EventCountdownProps) => {
  const target = getTarget(dateISO, timeHint);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = target - now;

  if (diff <= 0) {
    return (
      <div className="flex items-center gap-2 text-xs font-body text-accent">
        <Clock className="w-3.5 h-3.5" />
        <span>Webinar in progress / Started</span>
      </div>
    );
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center min-w-[44px] px-2 py-1.5 rounded-md bg-background/70 border border-border">
      <span className="font-heading text-base leading-none text-foreground tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{label}</span>
    </div>
  );

  return (
    <div className="mb-4">
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
        <Clock className="w-3 h-3" />
        <span>距離開講</span>
      </div>
      <div className="flex gap-1.5">
        <Box value={days} label="Days" />
        <Box value={hours} label="Hrs" />
        <Box value={minutes} label="Min" />
        <Box value={seconds} label="Sec" />
      </div>
    </div>
  );
};

export default EventCountdown;
