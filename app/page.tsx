import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import CategoryTile, { type TileInfo } from "@/components/CategoryTile";

export const metadata: Metadata = {
  description: SITE.description,
};

/** Frases de beneficio por categoría para las tarjetas de entrada */
const TILES: TileInfo[] = [
  {
    slug: "molduras-decorativas",
    image: "/images/molduras-decorativas-de-poliestireno/fotos/e-05/e-05-2.webp",
    headline: "Techos que enamoran",
    sub: "Molduras de poliestireno listas para pintar, ligeras y fáciles de instalar.",
  },
  {
    slug: "antideslizantes",
    image: "/images/antideslizantes/grupal-antideslizantes.webp",
    headline: "Cada paso, seguro",
    sub: "Escaleras y rampas sin resbalones, en interiores y exteriores.",
  },
  {
    slug: "crucetas-y-niveladores",
    image: "/images/crucetas/crucetas_ceramicos_procelanatos/rodotop-forma-1-grupal-1.webp",
    headline: "Pisos perfectamente nivelados",
    sub: "Porcelanato parejo y alineado, sin ser un experto.",
  },
  {
    slug: "juntas",
    image: "/images/juntas/junta_transicion_p-distinto_nivel/junta-para-pisos-de-distinto-nivel-grupal-2.webp",
    headline: "Adiós a las fisuras",
    sub: "Dilatación y transición para pisos, cerámicas y pavimentos de concreto.",
  },
  {
    slug: "zocalos",
    image: "/images/zocalos/zocalos-grupal.webp",
    headline: "Higiene impecable",
    sub: "Uniones curvas entre piso y pared que no acumulan suciedad.",
  },
  {
    slug: "paneles-de-pvc",
    image: "/images/panel-de-pvc/cielo-raso-y-accesorios-3.webp",
    headline: "Paredes y techos impecables",
    sub: "Revestimiento de instalación rápida y limpieza sin esfuerzo.",
  },
  {
    slug: "perfiles-para-acabados",
    image: "/images/rodoplast/rodoplast/perfil-max-y-plus-foto-grupal-1.webp",
    headline: "Esquinas protegidas y elegantes",
    sub: "Rodoplast en PVC y aluminio para bordes de cerámicos y porcelanatos.",
  },
  {
    slug: "listelos-para-pared",
    image: "/images/listelos/listelo_acero_inoxidable/listelos-grupal.webp",
    headline: "El detalle que resalta",
    sub: "Listelos de acero y aluminio para baños, cocinas y recepciones.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[min(86vh,780px)] overflow-hidden bg-navy text-white flex flex-col justify-center">
        <Image
          src="/images/ia/hero-perfiles-pvc-aluminio.webp"
          alt="Perfiles NEFUSAC de PVC y aluminio: zócalos, juntas, antideslizantes y listelos"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-navy/85 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-40">
          <p className="flex items-center gap-3 text-brand font-display font-bold uppercase tracking-[0.18em] text-sm">
            <span className="inline-block h-0.5 w-9 bg-brand" />
            {SITE.years} años construyendo calidad
          </p>
          <h1 className="mt-4 max-w-3xl font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Soluciones para los acabados de tu construcción
          </h1>
          <p className="mt-6 max-w-xl text-white/85 text-lg leading-relaxed">
            Fabricamos productos de PVC e importamos perfiles decorativos en
            aluminio y acero inoxidable. Además, fabricamos e instalamos
            ventanas de PVC de alta prestación.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              href="/productos"
              className="bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl shadow-[0_8px_24px_rgba(128,188,0,0.35)] transition-colors"
            >
              Ver productos
            </Link>
            <a
              href={waLink("Hola NEFUSAC, quiero una cotización.")}
              target="_blank"
              rel="noopener"
              className="border border-white/35 bg-white/10 backdrop-blur hover:border-brand hover:text-brand text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-navy/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-8 text-white">
            <dl className="flex gap-10 sm:gap-14">
              <div>
                <dt className="font-display font-extrabold text-3xl text-brand">
                  {SITE.years}
                </dt>
                <dd className="text-xs text-white/75 mt-0.5">
                  años de experiencia
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold text-3xl text-brand">
                  24
                </dt>
                <dd className="text-xs text-white/75 mt-0.5">
                  departamentos del Perú
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold text-3xl text-brand">
                  3
                </dt>
                <dd className="text-xs text-white/75 mt-0.5">
                  certificaciones ISO
                </dd>
              </div>
            </dl>
            <p className="hidden lg:flex items-center gap-2.5 text-sm font-semibold text-white/85">
              <span className="h-2 w-2 rounded-full bg-brand inline-block" />
              Procesos certificados TRINORMA · ISO 9001 · 14001 · 45001
            </p>
          </div>
        </div>
      </section>

      {/* Empieza tu proyecto — tarjetas de categoría */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink text-center tracking-tight">
          Empieza tu proyecto
        </h2>
        <p className="mt-3 text-steel text-center text-lg max-w-2xl mx-auto">
          Elige por dónde: cada solución está fabricada para que tu obra
          termine impecable y dure años.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TILES.map((t) => (
            <CategoryTile key={t.slug} tile={t} />
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link
            href="/productos"
            className="inline-block bg-navy hover:bg-navy-soft text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Ver el catálogo completo →
          </Link>
        </p>
      </section>

      {/* Ventanas de PVC */}
      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-last lg:order-first">
          <Image
            src="/images/ventanas-sitio/sala-jardin-sin-texto.webp"
            alt="Ventana corrediza de PVC blanca NEFUSAC en una sala con vista al jardín"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-brand-dark font-display font-bold uppercase tracking-widest text-sm">
            Fabricación e instalación
          </p>
          <h2 className="mt-2 font-display font-extrabold text-3xl text-ink">
            Ventanas de PVC de alta prestación
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            Cierre hermético superior que reduce significativamente el ruido
            exterior. Resistentes a ambientes salinos, rayos UV e intemperie,
            con mínimo mantenimiento. Disponibles en blanco y negro, con
            vidrio laminado de seguridad o templado.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-ink">
            {[
              "Reducción de ruido y cierre hermético",
              "Serie 50NF doble corrediza · Serie 52NF fija + corrediza",
              "No propagador de llama (UNE-EN-12608)",
              "Fabricación a medida e instalación profesional",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-brand font-bold">✓</span> {b}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="https://ventanasnefusacpvc.com/"
              target="_blank"
              rel="noopener"
              className="inline-block bg-navy hover:bg-navy-soft text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
            >
              Conocer las ventanas →
            </a>
            <a
              href="https://ventanasnefusacpvc.com/"
              target="_blank"
              rel="noopener"
              className="font-bold text-brand-dark hover:underline"
            >
              ventanasnefusacpvc.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA catálogo */}
      <section className="mx-auto max-w-7xl px-4 pb-4">
        <div className="bg-brand rounded-2xl px-6 py-10 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Catálogo NEFUSAC 2025
            </h2>
            <p className="mt-1 text-white/90">
              Todos nuestros productos con medidas, colores y presentaciones.
            </p>
          </div>
          <a
            href={SITE.catalogPdf}
            target="_blank"
            rel="noopener"
            className="shrink-0 bg-navy text-white font-bold px-6 py-3.5 rounded-lg hover:bg-navy-soft transition-colors"
          >
            Descargar PDF ↓
          </a>
        </div>
      </section>
    </>
  );
}
