<template>
  <header class="header">
    <div class="container d-flex justify-content-between align-items-center">
      <nav class="navigation d-flex justify-content-between w-100">
        <div class="left-buttons d-flex flex-grow-1">
          <button @click="navigateTo('video')" class="btn btn-link">Видеоматериалы</button>
          <button @click="navigateTo('reconstruction')" class="btn btn-link">Реконструкция</button>
          <button @click="navigateTo('methodical')" class="btn btn-link">Методические материалы</button>
        </div>
        <div class="logo" @click="navigateToHome">
          <img src="@/assets/logo_w_text_2_2.png" alt="Исторический кванториум" class="logo-image" />
        </div>
        <div class="right-buttons d-flex flex-grow-1 justify-content-end">
          <button @click="navigateTo('local_history')" class="btn btn-link">Кредение</button>
          <button @click="navigateTo('biographies')" class="btn btn-link">Биографии</button>
          <button @click="navigateTo('intellectual_games')" class="btn btn-link">Интеллектуальные игры</button>
        </div>
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
    },
    navigateToHome() {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(173, 216, 230, 0.5); /* Прозрачный фон */
  color: #fff;
  padding: 20px 0; /* Увеличен padding для большей высоты */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10; /* Убедитесь, что хедер находится выше основного контента */
}

.container {
  max-width: 100%; /* Увеличена максимальная ширина контейнера */
  margin: 0 auto;
  padding: 0 20px; /* Увеличен padding для контейнера */
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-buttons, .right-buttons {
  display: flex;
  flex: 1;
}

.left-buttons {
  justify-content: flex-start;
  margin-right: 0; /* Убираем дополнительный отступ справа */
}

.right-buttons {
  justify-content: flex-end;
  margin-left: 0; /* Убираем дополнительный отступ слева */
}

button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px; /* Увеличен размер шрифта кнопок */
  margin: 0 10px; /* Уменьшен отступ между кнопками */
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none; /* Убираем подчеркивание */
}

button:hover {
  color: #333; /* Слегка темнеет при наведении */
}

.logo {
  text-align: center;
  flex: 0 1 auto; /* Логотип занимает свое место, не растягивая контейнер */
  cursor: pointer; /* Указываем, что логотип кликабелен */
}

.logo-image {
  max-height: 80px; /* Увеличен размер логотипа */
}
</style>
