'use client';

export const GradientOrb: React.FC<{ 
  className?: string;
  delay?: number;
}> = ({ className = '', delay = 0 }) => {
  return (
    <div
      className={`blur-glow w-96 h-96 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0.15,
      }}
    />
  );
};

export const FloatingParticles: React.FC<{ count?: number }> = ({ count = 20 }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-sky-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-slow ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}
    </div>
  );
};

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <GradientOrb className="top-0 left-0" delay={0} />
      <GradientOrb className="top-32 right-0 bg-gradient-to-r from-purple-600 to-pink-500" delay={1} />
      <GradientOrb className="bottom-0 left-1/3 bg-gradient-to-r from-pink-500 to-sky-500" delay={2} />
      <FloatingParticles count={30} />
    </div>
  );
};
