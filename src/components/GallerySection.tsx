import { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const photos = [
  { src: gallery1, caption: "Reboque de veículo com prancha hidráulica" },
  { src: gallery2, caption: "Transporte de SUV na região de Ipatinga" },
  { src: gallery3, caption: "Guincho de van para transporte seguro" },
  { src: gallery4, caption: "Resgate de motocicleta com prancha" },
  { src: gallery5, caption: "Transporte de viatura da Guarda Civil" },
];

const AnimatedCard = ({ photo, index }: { photo: typeof photos[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-primary-foreground text-sm font-body">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center uppercase mb-4 text-foreground">
          Nossos <span className="text-primary">Trabalhos</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Confira alguns dos nossos atendimentos realizados em Ipatinga e região
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <AnimatedCard key={i} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
