"use client";

import { useEffect, useRef } from "react";

const NUM_PETALS = 14;

type Petal = {
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    rotation: number;
    rotationSpeed: number;
    blur: number;
};

const SakuraPetals = () => {
    const startFalling = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const petalsRef = useRef<Petal[]>([]);
    const scrollBoost = useRef(0);
    const isVisible = useRef(true);
    const mousePos = useRef<{ x: number; y: number } | null>(null);

    setTimeout(() => {
        startFalling.current = true;
    }, 2500);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement!;
        const ctx = canvas.getContext("2d")!;
        const dpr = window.devicePixelRatio || 1;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Resize canvas
        const resize = () => {
            const rect = parent.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.resetTransform();
            ctx.scale(dpr, dpr);
        };

        resize();
        window.addEventListener("resize", resize);

        // Generate petals
        petalsRef.current = Array.from({ length: NUM_PETALS }, () => ({
            x: Math.random() * parent.clientWidth,
            y: -Math.random() * parent.clientHeight,
            size: 12 + Math.random() * 14,
            speedY: 0.8 + Math.random() * 0.6,
            speedX: Math.random() * 0.4 - 0.35,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.01 - 0.005,
            blur: Math.random() * 1.2,
        }));

        // Mouse movement → new feature
        const handleMouseMove = (e: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            mousePos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mousePos.current = null;
        };

        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("mouseleave", handleMouseLeave);

        // Scroll boost
        const handleScroll = () => {
            scrollBoost.current = 1.3;
            setTimeout(() => (scrollBoost.current = 0), 300);
        };
        window.addEventListener("scroll", handleScroll);

        // Pause if tab hidden
        let isPausedTab = false;
        document.addEventListener("visibilitychange", () => {
            isPausedTab = document.hidden;
        });

        // Pause when out of viewport
        const observer = new IntersectionObserver(
            (entries) => {
                isVisible.current = entries[0].isIntersecting;
            },
            { threshold: 0.1 }
        );
        observer.observe(parent);

        const animate = () => {
            const shouldAnimate = !isPausedTab && isVisible.current;

            if (shouldAnimate) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                petalsRef.current.forEach((p) => {
                    const boost = scrollBoost.current;

                    // Natural fall + scroll boost
                    p.y += p.speedY + boost;
                    p.x += p.speedX * (1 + boost * 0.5);
                    p.rotation += p.rotationSpeed;

                    // --- NEW: Repulsion from mouse cursor ---
                    if (mousePos.current) {
                        const dx = p.x - mousePos.current.x;
                        const dy = p.y - mousePos.current.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        const influenceRadius = 90; // radius for repulsion

                        if (dist < influenceRadius) {
                            const force = (influenceRadius - dist) / influenceRadius;
                            const repelStrength = 2.2; // "power" of the escape

                            // Apply force
                            p.x += (dx / dist) * force * repelStrength;
                            p.y += (dy / dist) * force * repelStrength;

                            // Extra rotation for realism
                            p.rotation += force * 0.15;
                        }
                    }
                    // ---------------------------------------

                    // Respawn
                    if (p.y > parent.clientHeight + 20) {
                        p.y = -20;
                        p.x = Math.random() * parent.clientWidth;
                    }

                    // Draw petal
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rotation);

                    ctx.filter = `blur(${p.blur}px)`;

                    const w = p.size;
                    const h = p.size * 0.55;

                    const gradient = ctx.createLinearGradient(0, 0, w, h);
                    gradient.addColorStop(0, "rgba(255, 182, 193, 0.9)");
                    gradient.addColorStop(1, "rgba(255, 105, 180, 0.75)");

                    ctx.fillStyle = gradient;

                    ctx.beginPath();
                    ctx.moveTo(0, h / 2);
                    ctx.quadraticCurveTo(w / 2, -h / 2, w, h / 2);
                    ctx.quadraticCurveTo(w / 2, h, 0, h / 2);
                    ctx.fill();

                    ctx.restore();
                });
            }


            requestAnimationFrame(animate);

        };

        animate();

        return () => {
            observer.disconnect();
            parent.removeEventListener("mousemove", handleMouseMove);
            parent.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-20 left-0 pointer-events-none z-10"
        />
    );
};

export default SakuraPetals;
