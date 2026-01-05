import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!sessionStorage.getItem("disclaimer-dismissed")) {
      setIsOpen(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("disclaimer-dismissed", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md rounded-2xl bg-background p-8 shadow-medium"
          >
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <AlertTriangle className="h-7 w-7 text-accent" />
              </div>
            </div>
            <h2 className="mb-4 text-center font-serif text-2xl font-bold">
              {t.disclaimer.title}
            </h2>
            <div className="mb-6 space-y-2 text-center text-muted-foreground">
              {t.disclaimer.items.map((item, i) => (
                <p key={i} className="text-sm">
                  {item}
                </p>
              ))}
            </div>
            <Button
              onClick={dismiss}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              {t.disclaimer.button}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
