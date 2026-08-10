import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { categories, products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/productos",
    "/ventanas-de-pvc",
    "/nosotros",
    "/proyectos",
    "/contacto",
    "/terminos-y-condiciones",
  ].map((p) => ({
    url: `${SITE.url}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const categoryPages = categories.map((c) => ({
    url: `${SITE.url}/productos/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const productPages = products.map((p) => ({
    url: `${SITE.url}/productos/${p.category}/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
