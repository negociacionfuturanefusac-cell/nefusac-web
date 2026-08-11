import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/products";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/productos/${category.slug}`}
      className="group block"
      aria-label={`Ver productos de ${category.name}`}
    >
      <div className="relative pb-10">
        <div className="relative aspect-square overflow-hidden rounded-md bg-[#eceef0]">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute bottom-0 left-3 right-6 flex items-stretch shadow-lg">
          <span className="flex-1 bg-brand group-hover:bg-brand-dark transition-colors text-white px-4 py-3">
            <span className="block font-display font-bold text-sm sm:text-[15px] leading-tight">
              {category.name}
            </span>
            {category.uso && (
              <span className="mt-1 block text-[11.5px] leading-snug text-white/90">
                {category.uso}
              </span>
            )}
          </span>
          <span className="bg-brand group-hover:bg-brand-dark transition-colors flex items-center px-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm border-2 border-white bg-white text-brand-dark font-bold">
              ›
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
