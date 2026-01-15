'use client';

import { useEffect, useRef } from 'react';

export default function NeuralNetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrameId: number;

        // --- Configuration ---
        const config = {
            particleCount: 1200,  // Background dust
            nodeCount: 130,       // Interactive nodes (keep low for performance)
            connectionDist: 100,  // Max distance to draw lines
            sphereRadius: 350,
            perspective: 800,
            rotationSpeed: 0.001,
            particleBaseSize: 0.8,
            nodeBaseSize: 2
        };

        // --- 3D Helper Class ---
        class Point3D {
            x: number;
            y: number;
            z: number;
            sx: number; // Screen X
            sy: number; // Screen Y
            isNode: boolean;

            constructor(radius: number, isNode = false) {
                this.isNode = isNode;
                // Random spherical coordinates
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);

                this.x = radius * Math.sin(phi) * Math.cos(theta);
                this.y = radius * Math.sin(phi) * Math.sin(theta);
                this.z = radius * Math.cos(phi);

                this.sx = 0;
                this.sy = 0;
            }

            update(rotX: number, rotY: number) {
                // Rotation Matrix
                let y1 = this.y * Math.cos(rotX) - this.z * Math.sin(rotX);
                let z1 = this.z * Math.cos(rotX) + this.y * Math.sin(rotX);

                let x1 = this.x * Math.cos(rotY) - z1 * Math.sin(rotY);
                let z2 = z1 * Math.cos(rotY) + this.x * Math.sin(rotY);

                // Perspective Projection
                const scale = config.perspective / (config.perspective + z2);
                this.sx = width / 2 + x1 * scale;
                this.sy = height / 2 + y1 * scale;

                // Draw
                // Don't draw if behind camera (z < -perspective)
                if (z2 > -config.perspective + 50) {
                    const alpha = Math.max(0, (scale - 0.5) * 1.5); // Depth fading

                    ctx!.beginPath();
                    if (this.isNode) {
                        ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                        ctx!.arc(this.sx, this.sy, config.nodeBaseSize * scale, 0, Math.PI * 2);
                    } else {
                        // Dust is smaller and dimmer
                        ctx!.fillStyle = `rgba(150, 150, 150, ${alpha * 0.5})`;
                        ctx!.arc(this.sx, this.sy, config.particleBaseSize * scale, 0, Math.PI * 2);
                    }
                    ctx!.fill();
                }

                return { x: this.sx, y: this.sy, scale: scale, z: z2 };
            }
        }

        let particles: Point3D[] = [];
        let nodes: Point3D[] = [];

        // Mouse State
        // Mouse State
        let mouse = { x: 0, y: 0 };
        let targetRotation = { x: 0, y: 0 };
        let currentRotation = { x: 0, y: 0 };

        // Auto Rotation State
        let autoRotationSpeed = 0.05; // Start fast
        let autoRotationAngleY = 0;   // Accumulator for Y rotation
        const baseSpeed = 0.002;

        const init = () => {
            particles = [];
            nodes = [];

            // Create Dust
            for (let i = 0; i < config.particleCount; i++) {
                particles.push(new Point3D(config.sphereRadius));
            }
            // Create Nodes
            for (let i = 0; i < config.nodeCount; i++) {
                nodes.push(new Point3D(config.sphereRadius, true));
            }
        };

        // --- Animation Loop ---
        const animate = () => {
            // Clear with transparent bg so it overlays nicely (or keep black if intended)
            // Original had: ctx.fillStyle = 'rgba(5, 5, 5, 1)'; 
            // We likely want transparent if it's an overlay, or the theme background if it's the base.
            // Given Hero.tsx has 'bg-black', we can clear to transparent or semi-transparent black.
            ctx.clearRect(0, 0, width, height);

            // Smooth Mouse Ease-in
            targetRotation.x = mouse.y * 0.5; // Mouse Y rotates around X axis
            targetRotation.y = mouse.x * 0.5; // Mouse X rotates around Y axis

            currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
            currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

            // Auto rotation with decay (Fast start -> Slow spin)
            if (autoRotationSpeed > baseSpeed) {
                autoRotationSpeed *= 0.98; // Decay factor
            } else {
                autoRotationSpeed = baseSpeed;
            }
            autoRotationAngleY += autoRotationSpeed;

            // X rotation is mostly mouse-controlled + slight drift
            const finalRotX = currentRotation.x + autoRotationAngleY * 0.2;
            // Y rotation is the main spinning one
            const finalRotY = currentRotation.y + autoRotationAngleY;

            // 1. Draw Background Dust (Simple, no connections)
            particles.forEach(p => p.update(finalRotX, finalRotY));

            // 2. Update Nodes & Store 2D positions
            const projectedNodes: { x: number; y: number; z: number; alpha: number }[] = [];
            nodes.forEach(n => {
                const proj = n.update(finalRotX, finalRotY);
                // Only interact with nodes roughly facing us
                if (proj.z < config.sphereRadius) {
                    projectedNodes.push({ x: proj.x, y: proj.y, z: proj.z, alpha: proj.scale });
                }
            });

            // 3. Draw Connections (The "Neural" part)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < projectedNodes.length; i++) {
                for (let j = i + 1; j < projectedNodes.length; j++) {
                    const a = projectedNodes[i];
                    const b = projectedNodes[j];

                    // Fast distance check (Pythagorean)
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < config.connectionDist) {
                        // Opacity based on distance AND depth
                        const alpha = (1 - dist / config.connectionDist) * Math.min(a.alpha, b.alpha) * 0.6;

                        ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`; // Cyan Tint
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Normalized mouse coordinates (-1 to 1)
            // Careful with center point
            const rect = canvas.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            mouse.x = (e.clientX - rect.left - centerX) / centerX;
            mouse.y = (e.clientY - rect.top - centerY) / centerY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize(); // Set initial size
        init();         // Create particles
        animate();      // Start loop

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
}
