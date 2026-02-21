import { Truck, Car, ArrowRightLeft, Wrench, Siren, TrainFront, AlertTriangle, CarFront } from "lucide-react";

const services = [
  { icon: Truck, title: "Guincho 24 horas" },
  { icon: Car, title: "Reboque de carros" },
  { icon: ArrowRightLeft, title: "Transporte de veículos" },
  { icon: TrainFront, title: "Prancha para veículos" },
  { icon: Wrench, title: "Socorro automotivo" },
  { icon: Siren, title: "Remoção de veículos" },
  { icon: AlertTriangle, title: "Atendimento emergencial" },
  { icon: CarFront, title: "Transporte de carros leves" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 section-dark">
      <div className="container px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center uppercase mb-4">
          Nossos <span className="text-primary">Serviços</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Oferecemos soluções completas em guincho e reboque para Ipatinga e região
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary/60 border border-border/20 rounded-lg p-6 flex flex-col items-center gap-4 text-center hover:border-primary/50 hover:bg-secondary transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm md:text-base font-semibold uppercase tracking-wide">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
