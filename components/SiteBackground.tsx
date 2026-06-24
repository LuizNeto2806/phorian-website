/**
 * Atmospheric background using the PHORIAN palette (#000, #F3E6D4, #6F6F6F).
 * Lighter veil and warmer lift so memory-textures remain visible; movement
 * is slow but clearly perceptible across independent layers.
 */
export function SiteBackground() {
  return (
    <>
      <style>{`
        @keyframes site-drift-1 {
          0%,
          100% {
            transform: scale(2.8) translate3d(0, 0, 0);
          }
          33% {
            transform: scale(3.23) translate3d(8.5%, -6%, 0);
          }
          66% {
            transform: scale(3.06) translate3d(-6.8%, 6.8%, 0);
          }
        }

        @keyframes site-drift-2 {
          0%,
          100% {
            transform: scale(3.1) translate3d(-6.8%, 3.4%, 0);
          }
          40% {
            transform: scale(3.53) translate3d(6%, 8.5%, 0);
          }
          75% {
            transform: scale(3.36) translate3d(10.2%, -4.3%, 0);
          }
        }

        @keyframes site-drift-3 {
          0%,
          100% {
            transform: scale(2.9) translate3d(5.1%, -3.4%, 0);
          }
          35% {
            transform: scale(3.33) translate3d(-9.4%, 5.1%, 0);
          }
          70% {
            transform: scale(3.43) translate3d(-3.4%, -8.5%, 0);
          }
        }

        @keyframes site-drift-4 {
          0%,
          100% {
            transform: scale(3.3) translate3d(-5.1%, -5.1%, 0);
          }
          45% {
            transform: scale(3.73) translate3d(7.7%, 3.4%, 0);
          }
          80% {
            transform: scale(3.56) translate3d(-8.5%, 7.7%, 0);
          }
        }

        @keyframes site-pos-1 {
          0%,
          100% {
            background-position: 42% 72%;
          }
          50% {
            background-position: 52% 62%;
          }
        }

        @keyframes site-pos-2 {
          0%,
          100% {
            background-position: 62% 78%;
          }
          50% {
            background-position: 52% 88%;
          }
        }

        @keyframes site-pos-3 {
          0%,
          100% {
            background-position: 18% 68%;
          }
          50% {
            background-position: 28% 78%;
          }
        }

        @keyframes site-pos-4 {
          0%,
          100% {
            background-position: 50% 58%;
          }
          50% {
            background-position: 40% 68%;
          }
        }

        @keyframes site-breathe-1 {
          0%,
          100% {
            opacity: 0.58;
          }
          50% {
            opacity: 0.68;
          }
        }

        @keyframes site-breathe-2 {
          0%,
          100% {
            opacity: 0.46;
          }
          50% {
            opacity: 0.56;
          }
        }

        @keyframes site-breathe-3 {
          0%,
          100% {
            opacity: 0.42;
          }
          50% {
            opacity: 0.52;
          }
        }

        @keyframes site-breathe-4 {
          0%,
          100% {
            opacity: 0.36;
          }
          50% {
            opacity: 0.46;
          }
        }

        @keyframes site-grain-drift {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          25% {
            transform: translate3d(-2.6%, 1.7%, 0) scale(1.014);
          }
          50% {
            transform: translate3d(2%, -2.6%, 0) scale(1.026);
          }
          75% {
            transform: translate3d(-1.7%, -1.7%, 0) scale(1.014);
          }
        }

        .site-bg {
          position: fixed;
          inset: 0;
          z-index: -10;
          overflow: hidden;
          pointer-events: none;
          background: #000000;
        }

        .site-bg-layer {
          position: absolute;
          inset: -12%;
          background-size: cover;
          background-repeat: no-repeat;
          transform-origin: center;
          will-change: transform, opacity, background-position;
          backface-visibility: hidden;
        }

        .site-bg-layer-1 {
          background-image: url("/images/hero-bg-1.jpg");
          filter: blur(10px) brightness(0.41) saturate(0.55) sepia(0.12)
            contrast(0.96);
          animation:
            site-drift-1 31s ease-in-out infinite,
            site-pos-1 38s ease-in-out infinite,
            site-breathe-1 22s ease-in-out infinite;
        }

        .site-bg-layer-2 {
          background-image: url("/images/hero-bg-2.jpg");
          filter: blur(12px) brightness(0.37) saturate(0.5) sepia(0.16)
            contrast(0.94);
          animation:
            site-drift-2 40s ease-in-out infinite,
            site-pos-2 46s ease-in-out infinite,
            site-breathe-2 26s ease-in-out infinite;
        }

        .site-bg-layer-3 {
          background-image: url("/images/hero-bg-3.jpg");
          filter: blur(11px) brightness(0.39) saturate(0.52) sepia(0.14)
            contrast(0.95);
          animation:
            site-drift-3 34s ease-in-out infinite,
            site-pos-3 42s ease-in-out infinite,
            site-breathe-3 24s ease-in-out infinite;
        }

        .site-bg-layer-4 {
          background-image: url("/images/hero-bg-4.jpg");
          filter: blur(14px) brightness(0.35) saturate(0.45) sepia(0.18)
            contrast(0.92);
          animation:
            site-drift-4 43s ease-in-out infinite,
            site-pos-4 51s ease-in-out infinite,
            site-breathe-4 28s ease-in-out infinite;
        }

        .site-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.28) 0%,
            rgba(0, 0, 0, 0.42) 35%,
            rgba(0, 0, 0, 0.58) 65%,
            rgba(0, 0, 0, 0.72) 100%
          );
        }

        .site-grain {
          position: absolute;
          top: -5%;
          left: -5%;
          width: 110%;
          height: 110%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='siteGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23siteGrain)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          opacity: 0.04;
          mix-blend-mode: screen;
          will-change: transform;
          animation: site-grain-drift 16s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .site-bg-layer,
          .site-grain {
            animation: none;
          }
          .site-bg-layer-1 {
            opacity: 0.7;
          }
        }
      `}</style>

      <div className="site-bg" aria-hidden="true">
        <div className="site-bg-layer site-bg-layer-1" />
        <div className="site-bg-layer site-bg-layer-2" />
        <div className="site-bg-layer site-bg-layer-3" />
        <div className="site-bg-layer site-bg-layer-4" />
        <div className="site-veil" />
        <div className="site-grain" />
      </div>
    </>
  );
}
