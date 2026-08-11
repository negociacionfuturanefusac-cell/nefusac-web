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
      className="group relative block aspect-[4/3] overflow-hidden bg-navy"
    >
      <Image
        src={tile.image}
        alt={`${tile.name}: ${tile.headline}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <span className="self-start bg-brand-dark text-white font-display font-bold uppercase tracking-wide text-[10.5px] leading-none px-2 py-1 rounded-sm">
          {tile.name}
        </span>
        <h3 className="mt-1.5 font-display font-extrabold text-white text-[17px] leading-tight drop-shadow-sm">
          {tile.headline}
        </h3>
        <p className="mt-1 text-white/85 text-xs leading-snug max-w-[38ch]">
          {tile.sub}
        </p>
        <span className="mt-1.5 inline-block text-white/95 font-bold text-xs underline underline-offset-4 group-hover:text-brand transition-colors">
          Explora →
        </span>
      </div>
    </Link>
  );
}
