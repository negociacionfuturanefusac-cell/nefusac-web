import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="font-display font-extrabold text-7xl text-brand">404</p>
      <h1 className="mt-4 font-display font-extrabold text-3xl text-ink">
        Página no encontrada
      </h1>
      <p className="mt-3 text-steel">
        La página que buscas no existe o fue movida. Quizás encuentres lo que
        necesitas en nuestro catálogo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/productos"
          className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
        >
          Ver productos
        </Link>
        <Link
          href="/"
          className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}
