import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FullscreenLoader({
  loading,
  color = "#ffffff",
  onDone,
}) {
  const overlayRef = useRef(null);

  useEffect(() => {
    // When loading finishes, fade overlay out (spinner-only)
    if (!loading && overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        pointerEvents: "none",
        onComplete: () => {
          if (onDone) onDone();
        },
      });
    }

    // When loading starts again, show overlay
    if (loading && overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 1, pointerEvents: "auto" });
    }
  }, [loading, onDone]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0f1820",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* spinner while loading */}
      {loading && (
        <div
          aria-label="Loading"
          style={{
            width: "60px",
            height: "60px",
            border: "6px solid rgba(255,255,255,0.2)",
            borderTopColor: color,
            borderRadius: "9999px",
            animation: "spin 1s linear infinite",
          }}
        />
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
