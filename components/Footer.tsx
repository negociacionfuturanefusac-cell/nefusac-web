import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div>
          <Image
            src="/brand/logo-blanco.png"
            alt="NEFUSAC"
            width={594}
            height={110}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            {SITE.years} años fabricando soluciones en PVC e importando
            perfiles decorativos en aluminio y acero inoxidable. Presentes en
            los 24 departamentos del Perú.
          </p>
          <p className="mt-4 text-xs text-white/50">
            Certificación TRINORMA: ISO 9001 · ISO 14001 · ISO 45001
            <br />
            Medición de Huella de Carbono
          </p>
        </div>

        {/* Productos */}
        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-wider text-brand">
            Productos
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/productos/${c.slug}`} className="hover:text-brand">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-wider text-brand">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/nosotros" className="hover:text-brand">
                Nosotros
              </Link>
            </li>
            <li>
              <a
                href="https://ventanasnefusacpvc.com/"
                target="_blank"
                rel="noopener"
                className="hover:text-brand"
              >
                Ventanas de PVC
              </a>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-brand">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-brand">
                Contacto
              </Link>
            </li>
            <li>
              <a
                href={SITE.catalogPdf}
                target="_blank"
                rel="noopener"
                className="hover:text-brand"
              >
                Catálogo 2025 (PDF)
              </a>
            </li>
            <li>
              <Link
                href="/terminos-y-condiciones"
                className="hover:text-brand"
              >
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-wider text-brand">
            Contáctanos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>{SITE.address}</li>
            <li>
              {SITE.phoneFixed} ·{" "}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="hover:text-brand"
              >
                {SITE.phoneMobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brand">
                {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="p-2 bg-white/10 rounded-lg hover:bg-brand transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.6v3h2.4v7h2.5Z" />
              </svg>
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="p-2 bg-white/10 rounded-lg hover:bg-brand transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="p-2 bg-white/10 rounded-lg hover:bg-brand transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 8.8H3.9V20h2.6V8.8ZM5.2 7.7a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM20.1 13.9c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5 1-2.9 1.6V8.8H10.9V20h2.6v-6c0-1.6.8-2.5 2-2.5s1.9.9 1.9 2.5v6h2.7v-6.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} (NEFUSAC) · RUC{" "}
            {SITE.ruc}
          </p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
