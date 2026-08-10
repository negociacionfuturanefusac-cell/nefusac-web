import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contáctanos: ${SITE.address}. Teléfonos ${SITE.phoneFixed} y ${SITE.phoneMobile}. Correo ${SITE.email}.`,
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Contacto" }]} />
      <h1 className="mt-4 font-display font-extrabold text-4xl text-ink">
        Contáctanos
      </h1>
      <p className="mt-2 text-steel max-w-2xl">
        Cotiza sin compromiso: respondemos por WhatsApp, teléfono o correo.
      </p>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            {
              label: "WhatsApp / Móvil",
              value: SITE.phoneMobile,
              href: waLink("Hola NEFUSAC, quiero una cotización."),
              action: "Escribir ahora →",
            },
            {
              label: "Teléfono fijo",
              value: SITE.phoneFixed,
              href: "tel:+5113264240",
              action: "Llamar →",
            },
            {
              label: "Correo de ventas",
              value: SITE.email,
              href: `mailto:${SITE.email}`,
              action: "Enviar correo →",
            },
            {
              label: "Dirección",
              value: SITE.address,
              href: "https://maps.google.com/?q=Jr.+Mariscal+Agustin+Gamarra+132+El+Pino+San+Luis+Lima",
              action: "Ver en Google Maps →",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="block bg-white border border-line rounded-xl p-5 hover:border-brand hover:shadow-md transition-all"
            >
              <p className="text-xs uppercase tracking-wider font-bold text-steel">
                {c.label}
              </p>
              <p className="mt-1 font-display font-bold text-lg text-ink">
                {c.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-dark">
                {c.action}
              </p>
            </a>
          ))}

          <div className="bg-mist rounded-xl p-5 text-sm text-steel">
            <p className="font-bold text-ink">Horario de atención</p>
            <p className="mt-1">Lunes a viernes: 8:00 a. m. – 5:30 p. m.</p>
            <p>Sábados: 8:00 a. m. – 1:00 p. m.</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-line min-h-[420px]">
          <iframe
            title="Ubicación de NEFUSAC en Google Maps"
            src="https://www.google.com/maps?q=Jr.+Mariscal+Agustin+Gamarra+132,+El+Pino,+San+Luis,+Lima&output=embed"
            className="w-full h-full min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
