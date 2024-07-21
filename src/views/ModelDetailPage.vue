<template>
  <canvas ref="canvasRef" style="width: 100vw; height: 100vh;"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

// Создаем ссылки
const canvasRef = ref(null);

let scene;
let renderer;
let controls;
let camera;
let box;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "mediumpurple" });
box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0, 0, -2);

const ambientLight = new THREE.AmbientLight("#ffffff", 1);

const resizeCallback = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

onMounted(() => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
  );
  camera.position.y = 1;
  camera.position.z = 2;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  scene.add(camera);
  scene.add(box);
  scene.add(ambientLight);

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value, // Убедитесь, что canvasRef.value - это элемент <canvas>
    antialias: true,
    alpha: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Инициализация OrbitControls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Включает плавное обновление
  controls.dampingFactor = 0.25; // Устанавливает коэффициент затухания
  controls.enableZoom = true; // Включает масштабирование
  controls.enablePan = true; // Включает панорамирование

  // Анимация сцены
  const loop = () => {
    box.rotation.y += 0.02;
    controls.update(); // Обновляем OrbitControls
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  };

  loop();
  window.addEventListener("resize", resizeCallback);
});

onUnmounted(() => {
  renderer.dispose();
  window.removeEventListener("resize", resizeCallback);
});
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
}
</style>
