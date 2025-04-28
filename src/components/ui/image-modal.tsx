import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full pt-2">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 lg:-top-5 hover:text-white text-gray-300 transition-colors"
          aria-label="Cerrar imagen"
        >
          <X className="size-6.5" />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[90svh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}