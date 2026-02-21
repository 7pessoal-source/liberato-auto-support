import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-tow-truck.jpg";

const WHATSAPP_URL = "https://wa.me/5531987240709?text=Olá! Preciso de um guincho.";
const PHONE_URL = "tel:+5531987240709";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(0,0%,0%,0.78), hsla(0,80%,20%,0.55))" }} />

      <div className="relative z-10 container text-center px-4 py-20">
        <div className="inline-block bg-primary/90 px-4 py-1.5 rounded-sm mb-6">
          <span className="text-primary-foreground font-display text-sm tracking-widest uppercase">
            Guincho 24 horas • Ipatinga MG
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 uppercase tracking-tight">
          Auto Socorro <br />
          <span className="text-gradient-primary bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(0,80%,55%), hsl(0,80%,70%))" }}>
            Liberato
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/85 font-body">
          Atendimento rápido, seguro e profissional. Guincho e reboque 24 horas em Ipatinga e região.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chamar no WhatsApp
          </a>

          <a
            href={PHONE_URL}
            className="inline-flex items-center gap-3 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold px-8 py-4 rounded-lg text-lg transition-all"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
