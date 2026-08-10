import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo completo NEFUSAC: molduras, antideslizantes, crucetas, juntas, zócalos, paneles de PVC, perfiles, listelos y más. Distribución a todo el Perú.",
};

export default function ProductosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Productos" }]} />
      <h1 className="mt-4 font-display font-extrabold text-4xl text-ink">
        Nuestros productos
      </h1>
      <p className="mt-2 text-steel max-w-2xl">
        Soluciones en PVC, aluminio y acero inoxidable para los acabados de tu
        construcción. Elige una categoría para ver sus productos.
      </p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>

      {categories.map((c) => {
        const prods = getProductsByCategory(c.slug);
        if (prods.length === 0) return null;
        return (
          <section key={c.slug} className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display font-extrabold text-2xl text-ink">
                {c.name}
              </h2>
              <a
                href={`/productos/${c.slug}`}
                className="text-sm font-bold text-brand-dark hover:underline shrink-0"
              >
                Ver categoría →
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {prods.slice(0, 4).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
