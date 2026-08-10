import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio web de NEFUSAC y de la información de productos publicada.",
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Términos y condiciones" }]} />
      <h1 className="mt-4 font-display font-extrabold text-4xl text-ink">
        Términos y condiciones
      </h1>
      <div className="mt-6 space-y-6 text-steel leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-xl text-ink">
            1. Información general
          </h2>
          <p className="mt-2">
            Este sitio web es operado por {SITE.legalName} (NEFUSAC), RUC{" "}
            {SITE.ruc}, con domicilio en {SITE.address}. Al navegar en este
            sitio aceptas los presentes términos y condiciones.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink">
            2. Información de productos
          </h2>
          <p className="mt-2">
            Las imágenes, medidas, colores y presentaciones publicadas son
            referenciales y pueden variar sin previo aviso según disponibilidad
            de stock y procesos de fabricación. Las cotizaciones formales se
            emiten por nuestros canales de venta y tienen la vigencia indicada
            en cada una.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink">
            3. Precios y cotizaciones
          </h2>
          <p className="mt-2">
            Este sitio no constituye una oferta de venta en línea. Los precios
            se confirman únicamente mediante cotización emitida por nuestro
            equipo comercial a través de WhatsApp, teléfono o correo
            electrónico.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink">
            4. Propiedad intelectual
          </h2>
          <p className="mt-2">
            Las marcas, logotipos, fotografías y contenidos de este sitio son
            propiedad de {SITE.legalName} o cuentan con autorización de uso.
            Queda prohibida su reproducción sin consentimiento escrito.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink">
            5. Protección de datos
          </h2>
          <p className="mt-2">
            Los datos de contacto que nos proporciones se utilizan únicamente
            para atender tus consultas y cotizaciones, conforme a la Ley N.º
            29733, Ley de Protección de Datos Personales del Perú.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink">
            6. Contacto
          </h2>
          <p className="mt-2">
            Para cualquier consulta sobre estos términos, escríbenos a{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-brand-dark font-semibold hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
