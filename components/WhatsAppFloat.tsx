import { WA_DEFAULT } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener"
      aria-label="Chatea con un asesor de ventas por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-wsp text-white rounded-full shadow-lg px-4 py-3 hover:scale-105 transition-transform"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.1 4c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.8 2.1.9 2.6.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L10 8.2c-.2-.4-.4-.4-.6-.4h-.5Z" />
      </svg>
      <span className="hidden sm:block font-bold text-sm">
        ¿Cotizamos?
      </span>
    </a>
  );
}
