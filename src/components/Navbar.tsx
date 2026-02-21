import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#area", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL = "https://wa.me/5531987240709?text=Olá! Preciso de um guincho.";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-secondary/95 backdrop-blur-md border-b border-border/10">
      <div className="container px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg font-bold text-primary-foreground uppercase tracking-wide">
          Auto Socorro <span className="text-primary">Liberato</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-2 rounded-md text-sm transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary/98 border-t border-border/10 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-secondary-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-2.5 rounded-md text-sm transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
