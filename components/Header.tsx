"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE, waLink } from "@/lib/site";
import { categories } from "@/lib/products";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos", dropdown: true },
  { href: "https://ventanasnefusacpvc.com/", label: "Ventanas de PVC", external: true },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Barra superior */}
      <div className="bg-navy text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <a
              href={`tel:+511${SITE.phoneFixed.replace(/\D/g, "").slice(-7)}`}
              className="hover:text-brand whitespace-nowrap"
            >
              ☎ {SITE.phoneFixed}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener"
              className="hover:text-brand whitespace-nowrap hidden min-[400px]:inline"
            >
              {SITE.phoneMobile}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-brand truncate hidden sm:inline"
            >
              {SITE.email}
            </a>
          </div>
          <p className="hidden lg:block text-white/80">
            {SITE.years} años creando soluciones · Distribución en todo el Perú
          </p>
        </div>
      </div>

      {/* Barra principal */}
      <div className="mx-auto max-w-7xl px-4 h-16 sm:h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/brand/logo-negro.png"
            alt="NEFUSAC"
            width={594}
            height={110}
            className="h-8 sm:h-10 w-auto"
            priority
          />
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) =>
            "dropdown" in item && item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold hover:text-brand-dark ${
                    pathname.startsWith("/productos")
                      ? "text-brand-dark"
                      : "text-ink"
                  }`}
                >
                  {item.label} ▾
                </Link>
                {productsOpen && (
                  <div className="absolute left-0 top-full pt-2 w-[540px]">
                    <div className="bg-white rounded-xl shadow-xl border border-line p-4 grid grid-cols-2 gap-1">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/productos/${c.slug}`}
                          className="px-3 py-2 rounded-lg hover:bg-mist text-sm text-ink"
                          onClick={() => setProductsOpen(false)}
                        >
                          <span className="font-semibold">{c.name}</span>
                          <span className="block text-xs text-steel">
                            {c.tagline}
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/productos"
                        className="col-span-2 mt-1 px-3 py-2 rounded-lg bg-brand-light text-sm font-semibold text-brand-dark hover:bg-brand hover:text-white text-center"
                        onClick={() => setProductsOpen(false)}
                      >
                        Ver todos los productos →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : "external" in item && item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener"
                className="px-3 py-2 rounded-md text-sm font-semibold text-ink hover:text-brand-dark"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-semibold hover:text-brand-dark ${
                  pathname === item.href ? "text-brand-dark" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Hola NEFUSAC, quiero cotizar sus productos.")}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            Cotizar ahora
          </a>
          {/* Botón menú móvil */}
          <button
            type="button"
            aria-label="Abrir menú"
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú de categorías debajo del logo */}
      <nav
        aria-label="Categorías de productos"
        className="hidden sm:block bg-brand"
      >
        <div className="flex items-center overflow-x-auto thin-scroll">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/productos/${c.slug}`}
              className={`flex-1 text-center whitespace-nowrap px-3 py-3 text-[15px] font-bold transition-colors ${
                pathname === `/productos/${c.slug}`
                  ? "bg-brand-dark text-white"
                  : "text-navy hover:bg-brand-dark hover:text-white"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Menú móvil */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-line bg-white px-4 pb-4 max-h-[75vh] overflow-y-auto">
          {NAV.map((item) => (
            <div key={item.href}>
              {"external" in item && item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="block py-3 font-semibold text-ink border-b border-line"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 font-semibold text-ink border-b border-line"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
              {"dropdown" in item && item.dropdown && (
                <div className="pl-4">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/productos/${c.slug}`}
                      className="block py-2 text-sm text-steel"
                      onClick={() => setMobileOpen(false)}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={waLink("Hola NEFUSAC, quiero cotizar sus productos.")}
            target="_blank"
            rel="noopener"
            className="mt-4 block bg-brand text-white text-center font-bold px-4 py-3 rounded-lg"
          >
            Cotizar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
