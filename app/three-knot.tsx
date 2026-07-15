"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeKnot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(0.7, 0.22, 160, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff5448,
      emissive: 0xff5448,
      emissiveIntensity: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });

    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    let mouseX = 0;
    let mouseY = 0;

    function resize() {
      if (!container) return;
      const w = container.clientWidth || 200;
      const h = container.clientHeight || 200;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    function onMouseMove(event: MouseEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    function onMouseLeave() {
      mouseX = 0;
      mouseY = 0;
    }

    resize();
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    let animationId: number;
    let isVisible = true;

    function onVisibilityChange() {
      isVisible = !document.hidden;
    }

    document.addEventListener("visibilitychange", onVisibilityChange);

    function animate() {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;
      knot.rotation.x += 0.01;
      knot.rotation.y += 0.015;
      knot.position.x += (mouseX * 0.5 - knot.position.x) * 0.05;
      knot.position.y += (-mouseY * 0.5 - knot.position.y) * 0.05;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[400px]" />;
}
