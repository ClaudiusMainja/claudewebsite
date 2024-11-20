import React, { useState, useEffect, useRef } from 'react';

const ParticleBackground = () => {
  // ... Previous particle logic stays the same ...
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Generate initial particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));
    setParticles(newParticles);
  }, []);

  // Animation loop
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          if (newX < 0 || newX > 100) particle.speedX *= -1;
          if (newY < 0 || newY > 100) particle.speedY *= -1;

          if (isHovering) {
            const dx = mousePosition.x - newX;
            const dy = mousePosition.y - newY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 20) {
              newX -= (dx / distance) * 0.5;
              newY -= (dy / distance) * 0.5;
            }
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering, mousePosition]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="relative min-h-screen">
      {/* Particle Background Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 bg-gray-950 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {particles.map(particle => (
            <circle
              key={particle.id}
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size}
              className={`fill-blue-400/30 transition-opacity duration-300 ${
                isHovering ? 'opacity-75' : 'opacity-40'
              }`}
            />
          ))}
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Your Section Title</h2>
          <p className="text-lg text-gray-300">
            Your content goes here. The particle background will appear behind this text.
          </p>
        </div>
      </div>
    </section>
  );
};

