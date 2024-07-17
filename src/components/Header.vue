<template>
  <header class="header">
    <div class="container">
      <nav class="left-buttons">
        <button @click="navigateTo('video')">Видеоматериалы</button>
        <button @click="navigateTo('reconstruction')">Реконструкция</button>
        <button @click="navigateTo('methodical')">Методические материалы</button>
      </nav>
      <nav class="right-buttons">
        <button @click="navigateTo('local_history')">Краеведение</button>
        <button @click="navigateTo('biographies')">Биографии</button>
        <button @click="navigateTo('intellectual_games')">Интеллектуальные игры</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateTo(section) {
      this.$router.push({ name: section });
    }
  }
}
</script>

<style scoped>
.header {
  background-color: rgba(173, 216, 230, 0.8); /* Голубой полупрозрачный фон */
  color: #fff;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

nav {
  display: flex;
}

button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s;
}

button:hover {
  color: #333; /* Слегка темнеет при наведении */
}
</style>
