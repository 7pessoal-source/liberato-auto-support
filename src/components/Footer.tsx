const Footer = () => {
  return (
    <footer className="section-dark border-t border-border/10 py-10">
      <div className="container px-4 text-center space-y-2">
        <p className="font-display text-xl font-bold uppercase">
          Auto Socorro <span className="text-primary">Liberato</span>
        </p>
        <p className="text-muted-foreground text-sm">
          Guincho em Ipatinga MG – Atendimento 24 horas
        </p>
        <p className="text-muted-foreground text-sm">
          WhatsApp: (31) 98724-0709
        </p>
        <p className="text-muted-foreground text-xs mt-4">
          © {new Date().getFullYear()} Auto Socorro Liberato. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
