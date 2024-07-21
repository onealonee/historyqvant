<template>
  <canvas ref="canvasRef" style="width: 100vw; height: 100vh;"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from 'vue-router';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

// Создаем ссылки
const canvasRef = ref(null);
const route = useRoute();

let scene;
let renderer;
let controls;
let camera;

const resizeCallback = () => {
  if (renderer) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
};

onMounted(() => {
  const modelId = route.params.id;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
  );
  camera.position.set(-0.35376038574295343, 3.7200709885144376, -2.6243715656650144); // Устанавливаем начальную позицию камеры
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  scene.add(camera);

  const ambientLight = new THREE.AmbientLight("#ffffff", 1);
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

  // Загрузка модели и текстуры
  const loader = new FBXLoader();
  const textureLoader = new THREE.TextureLoader();

  const modelPath = `/models/model1/koz.fbx`;
  const texturePath = `/models/model1/kozel.jpg`;

  textureLoader.load(texturePath, (texture) => {
    loader.load(modelPath, (fbx) => {
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material.map = texture;
        }
      });
      fbx.scale.set(0.001, 0.001, 0.001);  // Уменьшаем масштаб модели еще в 10 раз
      fbx.position.set(0, 0, 0); // Убедитесь, что модель находится в центре сцены
      scene.add(fbx);
    });
  });

  // Анимация сцены
  const loop = () => {
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
