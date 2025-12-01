// src/components/ImageModal.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ImageModal({ photo, onClose }) {
  const backdropRef = useRef(null);
  const dialogRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!photo) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [photo, onClose]);

  useGSAP(
    () => {
      if (!photo) return;

      // Fade in backdrop
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );

      // Scale in dialog
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    },
    { dependencies: [photo] }
  );

  if (!photo) return null;

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/70"
    >
      <div
        ref={dialogRef}
        className="relative max-w-3xl w-[90%] md:w-auto bg-slate-950/95 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/40 text-slate-100 px-2.5 py-1 text-xs uppercase tracking-[0.15em] hover:bg-black/70 transition"
        >
          Close
        </button>

        <div className=" w-full bg-slate-900">
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-medium tracking-tight">
                {photo.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-1">
                {photo.category}
              </p>
            </div>
          </div>
          {photo.alt && (
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {photo.alt}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
