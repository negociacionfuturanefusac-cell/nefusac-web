import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos e instalaciones NEFUSAC: juntas de dilatación para concreto, ventanas de PVC, molduras decorativas y más soluciones instaladas en obra.",
};

const PROYECTOS = [
  {
    title: "Instalación de junta de dilatación para concreto",
    text: "Suministro e instalación de juntas de PVC para pavimentos de concreto, previniendo fisuras y absorbiendo las dilataciones del hormigón.",
    images: [
      "/images/juntas/junta_dilatacion_concreto/foto-ambientada-en-obra.webp",
      "/images/juntas/junta_dilatacion_concreto/llenado-3.webp",
    ],
  },
  {
    title: "Ventanas de PVC en edificio multifamiliar",
    text: "Fabricación e instalación de ventanas de PVC serie 50NF y 52NF con vidrio de seguridad, mejorando el confort acústico de cada ambiente.",
    images: [
      "/images/ventanas-nefusac/proyecto_ventanas-nefu/ventana_sm-nefu-5.webp",
      "/images/ventanas-nefusac/fotos/edificio.webp",
    ],
  },
  {
    title: "Molduras decorativas en interiores",
    text: "Instalación de molduras de poliestireno para la terminación entre paredes y techos, con acabado personalizado en pintura al agua.",
    images: [
      "/images/molduras-decorativas-de-poliestireno/fotos-ambientadas/unspecified-10.webp",
      "/images/molduras-decorativas-de-poliestireno/fotos-ambientadas/unspecified-11.webp",
    ],
  },
  {
    title: "Zócalos sanitarios en espacios de alta higiene",
    text: "Suministro de zócalos sanitarios y con riel de anclaje para hospitales, restaurantes y centros comerciales.",
    images: [
      "/images/zocalos/ft_zocalo_sanitario_con-riel-de-anclaje_nefusac/foto-ambientada.webp",
      "/images/zocalos/zocalo_sanitario_nefusac/foto-ambientada.webp",
    ],
  },
];

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Proyectos" }]} />
      <h1 className="mt-4 font-display font-extrabold text-4xl text-ink">
        Nuestros proyectos
      </h1>
      <p className="mt-2 text-steel max-w-2xl">
        Transformamos ideas para crear un mundo mejor. Estas son algunas de las
        soluciones que hemos instalado.
      </p>

      <div className="mt-10 space-y-14">
        {PROYECTOS.map((p, i) => (
          <article
            key={p.title}
            className={`grid md:grid-cols-2 gap-6 items-center ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="grid grid-cols-2 gap-3 [direction:ltr]">
              {p.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square rounded-xl overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="[direction:ltr]">
              <h2 className="font-display font-extrabold text-2xl text-ink">
                {p.title}
              </h2>
              <p className="mt-3 text-steel leading-relaxed">{p.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 bg-mist rounded-2xl p-8 text-center">
        <h2 className="font-display font-extrabold text-2xl text-ink">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mt-2 text-steel">
          Cuéntanos qué necesitas y te asesoramos con la mejor solución.
        </p>
        <a
          href={waLink("Hola NEFUSAC, tengo un proyecto y quiero asesoría.")}
          target="_blank"
          rel="noopener"
          className="mt-5 inline-block bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
        >
          Conversemos →
        </a>
      </div>
    </div>
  );
}
