<template>
  <div class="reconstruction-page">
    <h1 class="biograph">Реконструкция</h1>
    <div class="card-container">
      <div
          v-for="model in models"
          :key="model.id"
      >
        <CardComponent
            :image="model.image"
            :title="model.title"
            :description="model.description"
            :link="model.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'ReconstructionPage',
  components: {
    CardComponent,
  },
  data() {
    return {
      models: [],
    };
  },
  created() {
    this.fetchModels();
  },
  methods: {
    async fetchModels() {
      try {
        const response = await axios.get('http://localhost:5001/figures');
        this.models = response.data.map(model => ({
          id: model.id,
          image: model.image_path ? `http://localhost:5001/figures/${model.id}/image` : '',
          title: model.name,
          description: model.description,
          link: `/model/${model.id}`,
        }));
      } catch (error) {
        console.error('Ошибка при загрузке моделей:', error);
      }
    },
  },
};
</script>

<style scoped>
html, body {
  overflow: hidden; /* Убирает отображение вертикальной полосы прокрутки */
  height: 100%; /* Устанавливает высоту для html и body */
}

.reconstruction-page {
  padding: 20px 40px; /* Добавлены отступы по бокам */
  margin-top: 140px; /* Добавлен верхний отступ для учета фиксированного хедера */
  height: calc(100vh - 140px); /* Устанавливает фиксированную высоту страницы */
  overflow-y: scroll; /* Сохраняет возможность прокрутки */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.reconstruction-page::-webkit-scrollbar {
  width: 0px;  /* Убирает отображение полосы прокрутки */
}

.biograph {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px; /* Добавлен нижний отступ */
  font-size: 2.5rem;
  color: #333;
}

.card-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); /* Ширина карточек */
  width: 100%; /* Ширина контейнера */
  box-sizing: border-box; /* Включает padding в ширину контейнера */
}
</style>
