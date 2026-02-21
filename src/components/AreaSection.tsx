import { MapPin } from "lucide-react";

const areas = [
  "Bairro Panorama",
  "Centro",
  "Coronel Fabriciano",
  "Timóteo",
  "Santana do Paraíso",
  "E toda a região",
];

const AreaSection = () => {
  return (
    <section id="area" className="py-20 section-dark">
      <div className="container px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">
          Área de <span className="text-primary">Atendimento</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Atendemos toda a cidade de Ipatinga MG e região, incluindo:
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {areas.map((area) => (
            <div
              key={area}
              className="inline-flex items-center gap-2 bg-secondary/60 border border-border/20 px-5 py-3 rounded-full"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body font-medium text-sm">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaSection;
