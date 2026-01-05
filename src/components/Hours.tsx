import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Monday-Friday: 07:30-12:00, 13:30-17:30
  // Saturday: 08:00-12:00 (assumed)
  // Sunday: Closed
  const schedule = [
    { hours: "07:30 - 12:00, 13:30 - 17:30" },
    { hours: "07:30 - 12:00, 13:30 - 17:30" },
    { hours: "07:30 - 12:00, 13:30 - 17:30" },
    { hours: "07:30 - 12:00, 13:30 - 17:30" },
    { hours: "07:30 - 12:00, 13:30 - 17:30" },
    { hours: "08:00 - 12:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour * 60 + minute;

  // Check if currently open
  const isCurrentlyOpen = (() => {
    if (todayIndex === 6) return false; // Sunday
    if (todayIndex === 5) {
      // Saturday: 08:00-12:00
      return currentTime >= 480 && currentTime < 720;
    }
    // Mon-Fri: 07:30-12:00 (450-720) or 13:30-17:30 (810-1050)
    return (currentTime >= 450 && currentTime < 720) || (currentTime >= 810 && currentTime < 1050);
  })();

  return (
    <section id="horaires" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold">{t.hours.header}</span>
              {isCurrentlyOpen && (
                <span className="ml-auto text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                  {t.hours.today}
                </span>
              )}
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && isCurrentlyOpen && (
                        <CheckCircle className="h-4 w-4 text-accent" />
                      )}
                      {isToday && !isCurrentlyOpen && (
                        <div className="h-4 w-4" />
                      )}
                      <span className={isToday ? "font-semibold text-primary" : "font-medium"}>
                        {t.hours.days[i]}
                      </span>
                    </div>
                    <span className={isClosed ? "text-muted-foreground" : ""}>
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
