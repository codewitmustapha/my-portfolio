import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = 280;
    const stars = Array.from({ length: STAR_COUNT }, () => {
      const rand = Math.random();
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.05,
        opacity: Math.random() * 0.5 + 0.5, // min 0.5, max 1.0
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        // 25% cyan, 20% blue, 55% white — more colourful mix
        color: rand > 0.75 ? "#00f5ff" : rand > 0.55 ? "#7dd3fc" : "#ffffff",
        // larger stars get extra glow passes
        glowSize: Math.random() * 18 + 8,
      };
    });

    // Shooting stars
    const shootingStars = [];
    const spawnShootingStar = () => {
      if (shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.5),
          length: Math.random() * 120 + 60,
          speed: Math.random() * 8 + 5,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 1,
          trail: [],
        });
      }
    };
    const shootingStarInterval = setInterval(spawnShootingStar, 3500);

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw regular stars
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;
        if (star.y < -5) star.y = canvas.height + 5;
        if (star.x < -5) star.x = canvas.width + 5;
        if (star.x > canvas.width + 5) star.x = -5;

        const twinkle =
          Math.sin(frame * star.twinkleSpeed + star.twinkleOffset) * 0.25 +
          0.75;
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;

        // Outer glow halo
        ctx.shadowBlur = star.glowSize;
        ctx.shadowColor = star.color;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Second pass for extra brightness on larger stars
        if (star.size > 1.4) {
          ctx.shadowBlur = star.glowSize * 1.8;
          ctx.globalAlpha = star.opacity * twinkle * 0.6;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (
          s.opacity <= 0 ||
          s.x > canvas.width + 100 ||
          s.y > canvas.height + 100
        ) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(0,245,255,0)`);
        grad.addColorStop(0.5, `rgba(0,245,255,${s.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#00f5ff";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // bright tip dot
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 25;
        ctx.shadowColor = "#00f5ff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(shootingStarInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}
