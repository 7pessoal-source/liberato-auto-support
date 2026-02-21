import { Zap, Clock, UserCheck, MapPin, ShieldCheck, DollarSign } from "lucide-react";

const differentials = [
  { icon: Zap, title: "Atendimento rápido" },
  { icon: Clock, title: "Disponível 24 horas" },
  { icon: UserCheck, title: "Profissional experiente" },
  { icon: MapPin, title: "Ipatinga e região" },
  { icon: ShieldCheck, title: "Segurança no transporte" },
  { icon: DollarSign, title: "Preço justo" },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground uppercase mb-12">
          Por que escolher o <span className="text-primary">Auto Socorro Liberato</span>?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {differentials.map((item) => (
            <div key={item.title} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-body font-semibold text-foreground text-sm md:text-base">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
