import { ShieldCheck, Clock, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase mb-6">
            Sobre a <span className="text-primary">Empresa</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            O Auto Socorro Liberato é especialista em serviços de guincho, reboque e transporte de veículos em Ipatinga e região. Trabalhamos com rapidez, segurança e responsabilidade para garantir o melhor atendimento aos nossos clientes.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Nosso compromisso é oferecer um serviço confiável, com atendimento ágil e suporte sempre que você precisar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Rápido", desc: "Atendimento ágil quando você mais precisa" },
              { icon: ShieldCheck, title: "Seguro", desc: "Transporte seguro do seu veículo" },
              { icon: Award, title: "Profissional", desc: "Equipe experiente e qualificada" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
