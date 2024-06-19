import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SolarSystem = () => {
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    // Create a canvas and get its context
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");

    // Create a gradient
    const gradient = context.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, "purple");
    gradient.addColorStop(1, "orange");

    // Apply the gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);

    // Create a texture from the canvas
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    // Create sun
    const sunGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create planets
    const planets = [];
    const orbitSizes = [3, 5, 7]; // Adjust these values as needed
    orbitSizes.forEach((size, index) => {
      const planetGeometry = new THREE.SphereGeometry(0.4, 32, 32);

      // Create a canvas and get its context
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext("2d");

      // Create a gradient
      const gradient = context.createLinearGradient(0, 0, 0, 256);
      gradient.addColorStop(0, "#ff5c5c");
      gradient.addColorStop(1, "#6633cc");

      // Apply the gradient
      context.fillStyle = gradient;
      context.fillRect(0, 0, 256, 256);

      // Create a texture from the canvas
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;

      const planetMaterial = new THREE.MeshBasicMaterial({ map: texture });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);

      const orbitGeometry = new THREE.RingGeometry(size - 0.1, size + 0.1, 64);
      const orbitMaterial = new THREE.LineBasicMaterial({ color: `#6633cc` });
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial);

      // 계산된 위치에서 우측으로 60도 회전
      const angle = (90 * Math.PI) / 180; // 각도를 라디안으로 변환
      const newX = size * Math.cos(angle);
      const newY = size * Math.sin(angle);

      planet.position.set(newX, newY, 0);

      const planetGroup = new THREE.Group();
      planetGroup.add(orbit);
      planetGroup.add(planet);

      planets.push(planetGroup);
      scene.add(planetGroup);
    });

    // Add stars in the background
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffcc, // 노란색 계열의 흰색
      size: 1.4,
      opacity: 0.8, // 불투명도
      transparent: true,
    });

    const starsVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      const brightness = Math.random(); // 랜덤한 밝기

      starsVertices.push(x, y, z, brightness);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 4)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Set up camera position
    camera.position.z = 20;

    sceneRef.current.appendChild(renderer.domElement);
    cameraRef.current = camera;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      planets.forEach((planet, index) => {
        planet.rotation.y += 0.01 * (index + 1);
      });

      sun.rotation.y += 0.005;

      // 반짝이는 효과
      const starsPosition = starsGeometry.getAttribute("position");
      for (let i = 0; i < starsPosition.count; i++) {
        starsPosition.setX(
          i,
          starsPosition.getX(i) + Math.random() * 0.01 - 0.005
        );
        starsPosition.setY(
          i,
          starsPosition.getY(i) + Math.random() * 0.03 - 0.005
        );
        starsPosition.setZ(
          i,
          starsPosition.getZ(i) + Math.random() * 0.01 - 0.008
        );
      }
      starsPosition.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return <div ref={sceneRef} />;
};

export default SolarSystem;
