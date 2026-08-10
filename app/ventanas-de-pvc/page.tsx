import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ventanas de PVC",
  description:
    "Fabricación e instalación de ventanas de PVC de alta prestación en Lima y todo el Perú. Serie 50NF doble corrediza y Serie 52NF fija + corrediza. Reducción de ruido y cierre hermético.",
};

const SITIO_VENTANAS = "https://ventanasnefusacpvc.com/";

const GALERIA = [
  {
    src: "/images/ventanas-sitio/ventana-pvc-corrediza-negra-sala.webp",
    alt: "Ventana corrediza de PVC negra en una sala de estar",
  },
  {
    src: "/images/ventanas-sitio/ventana-pvc-corrediza-cocina-encimera.webp",
    alt: "Ventana corrediza de PVC sobre la encimera de una cocina",
  },
  {
    src: "/images/ventanas-sitio/ventana-pvc-led-perimetral-sala.webp",
    alt: "Ventana de PVC con luz LED perimetral encendida en una sala",
  },
  {
    src: "/images/ventanas-sitio/ventana-pvc-home-office-vista-ciudad.webp",
    alt: "Ventana de PVC en un home office con vista a la ciudad",
  },
  {
    src: "/images/ventanas-sitio/ventana-pvc-perfil-negro-dormitorio-mar.webp",
    alt: "Ventana de PVC con perfil negro en un dormitorio con vista al mar",
  },
  {
    src: "/images/ventanas-sitio/ventana-pvc-corrediza-salida-jardin.webp",
    alt: "Ventana corrediza de PVC con salida al jardín",
  },
  {
    src: "/images/ventanas-sitio/ventanas-pvc-edificio-institucional-lima.webp",
    alt: "Fachada de un edificio institucional en Lima con ventanas de PVC NEFUSAC",
  },
  {
    src: "/images/ventanas-sitio/familia-sala-ventana-pvc-nefusac.webp",
    alt: "Familia en su sala disfrutando una ventana de PVC de NEFUSAC",
  },
  {
    src: "/images/ventanas-nefusac/proyecto_ventanas-nefu/ventana_sm-nefu-5.webp",
    alt: "Proyecto de ventanas NEFUSAC",
  },
];

export default function VentanasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Breadcrumbs items={[{ label: "Ventanas de PVC" }]} />
            <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              Ventanas de PVC de alta prestación
            </h1>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Fabricamos e instalamos ventanas con un innovador sistema de
              perfiles de PVC que asegura un cierre hermético superior:
              menos ruido, más confort y mínimo mantenimiento.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink(
                  "Hola NEFUSAC, quiero cotizar ventanas de PVC a medida."
                )}
                target="_blank"
                rel="noopener"
                className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                Cotizar a medida
              </a>
              <a
                href={SITIO_VENTANAS}
                target="_blank"
                rel="noopener"
                className="border border-white/30 hover:border-brand hover:text-brand font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                Visitar ventanasnefusacpvc.com →
              </a>
              <a
                href="/fichas/ft_ventanas_serie_50-52.pdf"
                target="_blank"
                rel="noopener"
                className="border border-white/30 hover:border-brand hover:text-brand font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                Ficha técnica ↓
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ventanas-sitio/hero-dormitorio-mar-2k.webp"
              alt="Ventana de PVC NEFUSAC en un dormitorio frente al mar al atardecer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display font-extrabold text-3xl text-ink text-center">
          ¿Por qué ventanas de PVC?
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              t: "Reducción de ruido",
              d: "El cierre hermético reduce significativamente el ruido exterior para un ambiente tranquilo.",
            },
            {
              t: "Alta resistencia",
              d: "Resistentes a ambientes salinos, rayos UV e intemperie (ensayos UNE-EN-12608 y ASTM).",
            },
            {
              t: "Mínimo mantenimiento",
              d: "Superficie no porosa: se limpia con paño húmedo, sin productos especiales.",
            },
            {
              t: "Autoextinguible",
              d: "Material no propagador de llama para mayor seguridad en tu hogar u oficina.",
            },
          ].map((b) => (
            <div key={b.t} className="bg-mist rounded-xl p-6">
              <h3 className="font-display font-bold text-lg text-ink">
                {b.t}
              </h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Series */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="font-display font-extrabold text-3xl text-ink text-center">
            Nuestras series
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-line">
              <div className="relative aspect-square">
                <Image
                  src="/images/ventanas-nefusac/fotos-ventanas-con-marca-de-agua_dc/ventana-doble-corrediza_serie-50_vd_color-blanco.webp"
                  alt="Ventana doble corrediza serie 50NF blanca"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-extrabold text-2xl text-ink">
                  Serie 50NF
                </h3>
                <p className="text-brand-dark font-bold">
                  Ventana doble corrediza
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-steel">
                  <li>• Dos hojas corredizas para máxima ventilación</li>
                  <li>• Manija automática exclusiva de la serie</li>
                  <li>• Sistema de drenaje incluido</li>
                  <li>• Colores: blanco y negro</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-line">
              <div className="relative aspect-square">
                <Image
                  src="/images/ventanas-nefusac/fotos-ventanas-con-marca-de-agua_dc/ventana-fija-corrediza_serie52-negro_v2.webp"
                  alt="Ventana fija más corrediza serie 52NF negra"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-extrabold text-2xl text-ink">
                  Serie 52NF
                </h3>
                <p className="text-brand-dark font-bold">
                  Ventana fija + corrediza
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-steel">
                  <li>• Hoja fija que maximiza la entrada de luz</li>
                  <li>• Hoja corrediza para ventilación práctica</li>
                  <li>• Marco perimetral y embellecedor opcionales</li>
                  <li>• Colores: blanco y negro</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Especificaciones técnicas */}
          <div className="mt-10 bg-white rounded-2xl border border-line p-6 sm:p-8">
            <h3 className="font-display font-extrabold text-xl text-ink">
              Especificaciones técnicas
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-x-10 gap-y-2 text-sm">
              {[
                ["Vidrio laminado de seguridad", "Incoloro + PVB + incoloro, 6 mm"],
                ["Vidrio monolítico templado", "6 mm, incoloro"],
                ["Resistencia a la llama", "No propagador (UNE-EN-12608)"],
                ["Módulo de elasticidad en flexión", "2000 N/mm² (UNE-EN 513)"],
                ["Temperatura de reblandecimiento", "73 °C (UNE-EN-ISO 306)"],
                ["Resistencia a salinidad", "ASTM B117"],
                ["Resistencia a la intemperie (UV/IR)", "ASTM G 154 · 4000 h"],
                ["Garantía", "1 año"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 border-b border-line py-2"
                >
                  <span className="font-semibold text-ink">{k}</span>
                  <span className="text-steel text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display font-extrabold text-3xl text-ink text-center">
          Instalaciones reales
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALERIA.map((g) => (
            <div
              key={g.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={waLink(
              "Hola NEFUSAC, quiero una cotización de ventanas de PVC. Les paso las medidas:"
            )}
            target="_blank"
            rel="noopener"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Cotiza tu ventana a medida →
          </a>
        </div>
      </section>
    </div>
  );
}
