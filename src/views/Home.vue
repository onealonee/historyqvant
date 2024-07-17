<template>
  <div class="home">
    <div class="background">
      <div class="content">
        <h1>Добро пожаловать в Исторический Кванториум</h1>
        <p>Изучайте историю вместе с нами!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background {
  background-image: url('@/assets/instuction_2.png'); /* Путь к вашему изображению */
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  position: relative;
}

.background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Черный полупрозрачный наложение */
}

.content {
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 3em;
  margin: 0;
}

p {
  font-size: 1.5em;
}
</style>
