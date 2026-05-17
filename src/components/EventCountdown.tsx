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
        <span>講座進行中 / 已開始</span>
      </div>
    );
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center min-w-[52px] px-3 py-2.5 rounded-lg bg-[#0d0d0d]/95 border border-[#c9a84c]/30 shadow-[0_4px_20px_-8px_rgba(201,168,76,0.35)] backdrop-blur-sm">
      <span className="font-heading text-xl leading-none text-[#f0d78c] tabular-nums font-semibold tracking-tight">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[9px] uppercase tracking-[0.18em] text-[#c9a84c]/70 mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#c9a84c] mb-3 font-medium">
        <Clock className="w-3 h-3" />
        <span>距離開講</span>
        <span className="flex-1 h-px bg-gradient-to-r from-[#c9a84c]/40 to-transparent ml-1" />
      </div>
      <div className="flex gap-2">
        <Box value={days} label="Days" />
        <Box value={hours} label="Hrs" />
        <Box value={minutes} label="Min" />
        <Box value={seconds} label="Sec" />
      </div>
    </div>
  );
};

export default EventCountdown;
