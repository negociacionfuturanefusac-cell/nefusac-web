import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const card = product.cardImage ?? product.images[0]?.src;
  const hover = product.hoverImage;

  return (
    <Link
      href={`/productos/${product.category}/${product.slug}`}
      className="group bg-white rounded-xl border border-line overflow-hidden hover:shadow-lg hover:border-brand transition-all"
    >
      <div className="relative aspect-square bg-mist overflow-hidden">
        {card ? (
          <>
            <Image
              src={card}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`object-cover transition-all duration-300 ${
                hover
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-105"
              }`}
            />
            {hover && (
              <Image
                src={hover}
                alt={`${product.name} instalado`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-steel text-sm">
            Sin imagen
          </div>
        )}
        {product.aPedido && (
          <span className="absolute top-2 left-2 z-10 bg-navy text-white text-[0.65rem] font-bold uppercase tracking-wide px-2 py-1 rounded">
            A pedido
          </span>
        )}
        {hover && (
          <span className="absolute bottom-2 right-2 z-10 bg-white/85 backdrop-blur text-ink text-[0.65rem] font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Así se ve instalado
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-ink leading-snug group-hover:text-brand-dark">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-steel line-clamp-2">
          {product.shortDescription}
        </p>
        {product.colors && product.colors.length > 0 && (
          <p className="mt-2 text-xs text-steel">
            {product.colors.length}{" "}
            {product.colors.length === 1 ? "color" : "colores"}
          </p>
        )}
      </div>
    </Link>
  );
}
