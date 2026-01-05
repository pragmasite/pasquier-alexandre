import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const Footer = () => {
  const { t, otherLang, otherLangPath } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#horaires" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">Pasquier</h3>
            <p className="text-gray-400 mb-4">{t.footer.tagline}</p>
            <p className="text-sm text-gray-500">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">
              {t.footer.navigation}
            </h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Language Switcher */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Language</h4>
            <Link
              to={otherLangPath}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Pasquier Alexandre. {t.footer.copyright}</p>
          <p>Ponts Roulants & Maintenance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
