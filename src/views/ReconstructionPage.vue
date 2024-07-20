<template>
  <div class="reconstruction-page">
    <h1 class="biograph">Реконструкция</h1>
    <div class="container mt-5">
      <div class="row">
        <div
            class="col-lg-3 col-md-4 col-sm-6 mb-4"
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
          image: model.image_path ? `http://localhost:5001/figures/${model.id}/image` : '', // Используйте model.id
          title: model.name,
          description: model.description,
          link: `/model/${model.id}`, // Замените на нужный путь
        }));
      } catch (error) {
        console.error('Ошибка при загрузке моделей:', error);
      }
    },
  },
};
</script>

<style scoped>
.reconstruction-page {
  padding: 20px;
  margin-top: 100px; /* Добавлен верхний отступ */
}

.biograph {
  text-align: center;
  margin-top: 20px;
  font-size: 2.5rem;
  color: #333;
}
</style>
