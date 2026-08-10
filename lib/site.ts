export const SITE = {
  name: "NEFUSAC",
  legalName: "NEGOCIACIÓN FUTURA S.A.C.",
  ruc: "20100876788",
  tagline: "Soluciones para la construcción",
  description:
    "38 años fabricando soluciones para los acabados de construcción: productos de PVC, perfiles decorativos en aluminio y acero inoxidable, y ventanas de PVC de alta prestación. Distribución en los 24 departamentos del Perú.",
  url: "https://nefusac.com",
  address: "Jr. Mariscal Agustín Gamarra 132, Urb. El Pino, San Luis, Lima",
  phoneFixed: "(01) 326 4240",
  phoneMobile: "981 124 794",
  whatsapp: "51981124794",
  email: "cotiza@nefusac.com.pe",
  facebook: "https://www.facebook.com/Nefusacperu",
  instagram: "https://www.instagram.com/nefusacperu",
  linkedin: "https://www.linkedin.com/company/nefusac",
  years: 38,
  catalogPdf: "/fichas/catalogo-nefusac.pdf",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Hola NEFUSAC, quiero información sobre sus productos."
);
