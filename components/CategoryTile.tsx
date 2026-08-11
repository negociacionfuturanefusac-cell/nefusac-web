import Link from "next/link";
import Image from "next/image";

export type TileInfo = {
  slug: string;
  /** Nombre de la categoría/producto que el cliente puede pedir */
  name: string;
  image: string;
  headline: string;
  sub: string;
};

export default function CategoryTile({ tile }: { tile: TileInfo }) {
  return (
    <Link
      href={`/productos/${tile.slug}`}
      className="group relative block aspect-[16/11] overflow-hidden bg-navy"
    >
      <Image
        src={tile.image}
        alt={`${tile.name}: ${tile.headline}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <span className="self-start bg-brand-dark text-white font-display font-bold uppercase tracking-wide text-[13px] leading-none px-2.5 py-1.5 rounded-sm shadow-md">
          {tile.name}
        </span>
        <h3 className="mt-2.5 font-display font-extrabold text-white text-2xl leading-tight drop-shadow-sm">
          {tile.headline}
        </h3>
        <p className="mt-1.5 text-white/90 text-sm leading-snug max-w-[36ch]">
          {tile.sub}
        </p>
        <span className="mt-3 inline-block text-white font-bold text-sm underline underline-offset-4 decoration-2 group-hover:text-brand transition-colors">
          Ver productos →
        </span>
      </div>
    </Link>
  );
}
