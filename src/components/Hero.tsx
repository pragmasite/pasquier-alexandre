import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t } = useLanguage();
  const phone = "+41 26 917 87 00";
  const email = "alexandre.pasquier1@gmail.com";

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Overhead crane installation"
          className="h-full w-full object-cover filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm tracking-widest text-white backdrop-blur-sm"
        >
          {t.hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 max-w-4xl font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl leading-tight"
        >
          {t.hero.title1}
          <br />
          <span className="text-accent">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10 max-w-2xl text-lg text-white/80"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={`tel:${phone.replace(/\s+/g, "")}`}>
              <Phone className="mr-2 h-5 w-5" />
              {t.contact.callNow}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            <a href={`mailto:${email}`}>
              <Mail className="mr-2 h-5 w-5" />
              {t.hero.sendEmail}
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex items-center gap-2 text-white/60 text-sm"
        >
          <MapPin className="h-4 w-4" />
          {t.hero.location}
        </motion.div>

        {/* Scroll indicator - CLICKABLE */}
        <motion.a
          href="#a-propos"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 rounded-full border border-white/30 p-3 text-white/60 hover:bg-white/10 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
