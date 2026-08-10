import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `${SITE.years} años creando soluciones duraderas para los acabados de construcción. Fabricación de PVC, importación de perfiles y certificación TRINORMA.`,
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Nosotros" }]} />

      <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-brand-dark font-display font-bold uppercase tracking-widest text-sm">
            Somos NEFUSAC
          </p>
          <h1 className="mt-2 font-display font-extrabold text-4xl text-ink leading-tight">
            {SITE.years} años creando soluciones duraderas para los acabados de
            construcción
          </h1>
          <div className="mt-5 space-y-4 text-steel leading-relaxed">
            <p>
              Somos una empresa peruana que brinda soluciones destinadas a
              facilitar las tareas relacionadas con los acabados de
              construcción, a través de la fabricación y comercialización de
              productos de PVC e importación de perfiles decorativos en
              aluminio y acero inoxidable.
            </p>
            <p>
              Además, brindamos servicios de fabricación e instalación de
              ventanas y puertas de alta prestación de PVC.
            </p>
            <p>
              Nuestros productos están presentes en los 24 departamentos del
              Perú, respaldados por procesos certificados que aseguran su
              calidad.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/images/juntas/junta_dilatacion_concreto/foto-ambientada-en-obra.webp"
            alt="Producto NEFUSAC instalado en obra"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Beneficios */}
      <section className="mt-16">
        <h2 className="font-display font-extrabold text-3xl text-ink text-center">
          ¿Por qué elegirnos?
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              t: "Mayor durabilidad",
              d: "Productos fabricados con materia prima de calidad.",
            },
            {
              t: "Fácil instalación",
              d: "Asesoría permanente en la instalación de nuestros productos.",
            },
            {
              t: "Distribución nacional",
              d: "Presentes en los 24 departamentos del Perú.",
            },
            {
              t: "Procesos certificados",
              d: "Certificación TRINORMA que asegura la calidad de los productos.",
            },
          ].map((b) => (
            <div key={b.t} className="bg-mist rounded-xl p-6">
              <h3 className="font-display font-bold text-lg text-ink">{b.t}</h3>
              <p className="mt-2 text-sm text-steel">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificaciones */}
      <section className="mt-16 bg-navy text-white rounded-2xl p-8 sm:p-12">
        <h2 className="font-display font-extrabold text-3xl">
          Nuestras certificaciones
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {
              code: "ISO 9001 — SC-CER901829",
              name: "Sistema de gestión de calidad",
              d: "Nos permite aumentar la satisfacción del cliente con la mejora continua de los procesos, garantizando productos y servicios de calidad.",
            },
            {
              code: "ISO 14001 — SA-CER901830",
              name: "Sistema de gestión ambiental",
              d: "Identificamos los aspectos ambientales significativos y aplicamos medidas de control para contribuir a la protección del medio ambiente.",
            },
            {
              code: "ISO 45001 — ST-CER901818",
              name: "Sistema de gestión de seguridad",
              d: "Prevenimos los riesgos laborales y aplicamos medidas de control para proteger a trabajadores y visitantes.",
            },
            {
              code: "Huella de Carbono",
              name: "Compromiso climático",
              d: "Cuantificamos y hacemos seguimiento del impacto de la organización sobre el medio ambiente y su contribución al cambio climático.",
            },
          ].map((c) => (
            <div
              key={c.code}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <p className="text-brand font-display font-bold">{c.code}</p>
              <h3 className="mt-1 font-display font-bold text-lg">{c.name}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <h2 className="font-display font-extrabold text-3xl text-ink">
          Trabajemos juntos
        </h2>
        <p className="mt-2 text-steel">
          Cotiza nuestros productos o consulta por proyectos e instalaciones.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={waLink("Hola NEFUSAC, quiero información sobre sus productos.")}
            target="_blank"
            rel="noopener"
            className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
          <Link
            href="/productos"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Ver productos
          </Link>
        </div>
      </section>
    </div>
  );
}
