"use client";

export default function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-overlay opacity-20">
      <div
        className="absolute -inset-[100%] w-[300%] h-[300%] animate-grain"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')",
          backgroundSize: "200px 200px",
        }}
      />
      <style jsx>{`
        @keyframes grain {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -10%);
          }
          20% {
            transform: translate(-15%, 5%);
          }
          30% {
            transform: translate(7%, -25%);
          }
          40% {
            transform: translate(-5%, 25%);
          }
          50% {
            transform: translate(-15%, 10%);
          }
          60% {
            transform: translate(15%, 0%);
          }
          70% {
            transform: translate(0%, 15%);
          }
          80% {
            transform: translate(3%, 35%);
          }
          90% {
            transform: translate(-10%, 10%);
          }
        }
        .animate-grain {
          animation: grain 8s steps(10) infinite;
          will-change: transform;
          transform: translateZ(0); /* Force GPU */
        }
      `}</style>
    </div>
  );
}
