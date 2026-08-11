import Link from "next/link";
import Image from "next/image";

export type TileInfo = {
  slug: string;
  image: string;
  headline: string;
  sub: string;
};

export default function CategoryTile({ tile }: { tile: TileInfo }) {
  return (
    <Link
      href={`/productos/${tile.slug}`}
      className="group relative block aspect-[16/10] overflow-hidden bg-navy"
    >
      <Image
        src={tile.image}
        alt={tile.headline}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-display font-extrabold text-white text-xl lg:text-[1.35rem] leading-tight">
          {tile.headline}
        </h3>
        <p className="mt-1.5 text-white/85 text-[13px] leading-snug max-w-[34ch]">
          {tile.sub}
        </p>
        <span className="mt-3 inline-block text-white font-bold text-sm underline underline-offset-4 decoration-2 group-hover:text-brand transition-colors">
          Ver productos →
        </span>
      </div>
    </Link>
  );
}
