import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { categories } from "@/lib/products";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  description: SITE.description,
};

const TESTIMONIOS = [
  {
    quote:
      "La atención que recibimos es rápida, el trato súper bueno y siempre dispuestos a ayudar ante cualquier urgencia que se presenta en el día a día.",
    author: "DECORCENTER",
  },
  {
    quote:
      "La atención brindada por la empresa es profesional y se da en un plazo satisfactorio a partir de la solicitud.",
    author: "PROMART",
  },
  {
    quote:
      "El personal tiene buen trato y posee gran variedad de productos.",
    author: "ARENERA JAÉN SAC",
  },
  {
    quote: "El servicio prestado es bueno, cumple con los estándares.",
    author: "INVERSIONES ARAKAKI SAC",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand font-display font-bold uppercase tracking-widest text-sm">
              {SITE.years} años construyendo calidad
            </p>
            <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl leading-[1.08] tracking-tight">
              Soluciones para los acabados de tu construcción
            </h1>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
              Fabricamos productos de PVC e importamos perfiles decorativos en
              aluminio y acero inoxidable. Además, fabricamos e instalamos
              ventanas de PVC de alta prestación.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/productos"
                className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                Ver productos
              </Link>
              <a
                href={waLink("Hola NEFUSAC, quiero una cotización.")}
                target="_blank"
                rel="noopener"
                className="border border-white/30 hover:border-brand hover:text-brand font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                Cotizar por WhatsApp
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md text-center">
              <div>
                <dt className="font-display font-extrabold text-3xl text-brand">
                  {SITE.years}
                </dt>
                <dd className="text-xs text-white/70 mt-1">
                  años de experiencia
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold text-3xl text-brand">
                  24
                </dt>
                <dd className="text-xs text-white/70 mt-1">
                  departamentos del Perú
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold text-3xl text-brand">
                  3
                </dt>
                <dd className="text-xs text-white/70 mt-1">
                  certificaciones ISO
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ia/hero-1-sala-molduras.webp"
              alt="Sala elegante con molduras decorativas en el techo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl text-ink">
              Nuestras categorías de productos
            </h2>
            <p className="mt-2 text-steel">
              Todo lo que tu obra necesita para un acabado profesional.
            </p>
          </div>
          <Link
            href="/productos"
            className="hidden sm:block shrink-0 text-brand-dark font-bold hover:underline"
          >
            Ver todo →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* La forma NEFUSAC */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="font-display font-extrabold text-3xl text-ink text-center">
            Comprar en NEFUSAC es simple
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                title: "Cotiza sin compromiso",
                text: "Escríbenos por WhatsApp o correo con los productos que necesitas y te respondemos con precios y stock.",
              },
              {
                n: "2",
                title: "Asesoría permanente",
                text: "Te acompañamos en la elección e instalación de cada producto, con fichas técnicas y recomendaciones.",
              },
              {
                n: "3",
                title: "Despacho a todo el Perú",
                text: "Nuestros productos llegan a los 24 departamentos del país, directo a tu obra o negocio.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-white rounded-xl p-6 border border-line"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-display font-extrabold text-lg">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display font-bold text-lg text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventanas de PVC */}
      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-last lg:order-first">
          <Image
            src="/images/ventanas-sitio/hero-sala-jardin-2k.webp"
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
            <Link
              href="/ventanas-de-pvc"
              className="inline-block bg-navy hover:bg-navy-soft text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
            >
              Conocer las ventanas →
            </Link>
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

      {/* Certificaciones */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="font-display font-extrabold text-2xl text-center">
            Procesos certificados{" "}
            <span className="text-brand">TRINORMA</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              {
                code: "ISO 9001",
                cert: "SC-CER901829",
                name: "Gestión de calidad",
              },
              {
                code: "ISO 14001",
                cert: "SA-CER901830",
                name: "Gestión ambiental",
              },
              {
                code: "ISO 45001",
                cert: "ST-CER901818",
                name: "Seguridad y salud en el trabajo",
              },
              {
                code: "CO₂",
                cert: "Medición verificada",
                name: "Huella de carbono",
              },
            ].map((c) => (
              <div
                key={c.code}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <p className="font-display font-extrabold text-xl text-brand">
                  {c.code}
                </p>
                <p className="mt-1 text-sm font-semibold">{c.name}</p>
                <p className="mt-1 text-xs text-white/50">{c.cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display font-extrabold text-3xl text-ink text-center">
          Confían en nuestro trabajo
        </h2>
        <p className="mt-2 text-steel text-center">
          Formamos sólidos lazos con nuestros clientes.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIOS.map((t) => (
            <figure
              key={t.author}
              className="bg-mist rounded-xl p-5 flex flex-col justify-between"
            >
              <blockquote className="text-sm text-ink leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 font-display font-bold text-xs uppercase tracking-wider text-brand-dark">
                {t.author}
              </figcaption>
            </figure>
          ))}
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
