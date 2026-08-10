import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/products";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/productos/${category.slug}`}
      className="group relative rounded-xl overflow-hidden aspect-[4/3] block"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display font-bold text-white text-lg leading-tight">
          {category.name}
        </h3>
        <p className="text-white/75 text-xs mt-0.5">{category.tagline}</p>
        <span className="mt-2 inline-block text-brand text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Ver productos →
        </span>
      </div>
    </Link>
  );
}
