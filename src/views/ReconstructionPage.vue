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
          <div class="card bg-dark text-white darken-card">
            <img :src="model.image" class="card-img" :alt="model.title" />
            <div class="card-img-overlay d-flex flex-column justify-content-end p-3">
              <h5 class="card-title">{{ model.title }}</h5>
              <p class="card-text">{{ model.description }}</p>
              <a :href="model.link" class="btn btn-info mt-auto">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import model1 from '@/assets/para.png';
import model2 from '@/assets/povoz.png';
import model3 from '@/assets/plat4.png';

export default {
  name: 'ReconstructionPage',
  data() {
    return {
      models: [
        {
          id: 1,
          image: model1,
          title: 'Модель женского русского народного костюма',
          description: 'Познакомьтесь с русским народным костюмом. Представленная модель хранится в Липецком областном краеведческом музее.',
          link: '/plat_1.html',
        },
        {
          id: 2,
          image: model2,
          title: 'Модель женского русского народного костюма',
          description: 'Познакомьтесь с русским народным костюмом. Представленная модель хранится в Липецком областном краеведческом музее.',
          link: '/plat_2.html',
        },
        {
          id: 3,
          image: model3,
          title: 'Романовская игрушка',
          description: 'Познакомьтесь с романовской игрушкой. Представленная модель хранится в Липецком областном краеведческом музее.',
          link: '/toy_1.html',
        },
        // Добавьте остальные модели по аналогии
      ],
    };
  },
};
</script>

<style scoped>
.reconstruction-page {
  padding: 20px;
}

.biograph {
  text-align: center;
  margin-top: 20px;
  font-size: 2.5rem;
  color: #333;
}

.darken-card {
  background-color: rgba(0, 0, 0, 0.8); /* Ensure dark overlay */
  border: none;
  transition: transform 0.3s;
}

.darken-card:hover {
  transform: scale(1.05);
}

.card-img {
  height: 300px; /* Adjust height as needed */
  object-fit: cover;
  filter: brightness(0.7); /* Darken image */
}

.card-title {
  margin-bottom: 8px;
  font-size: 1.25rem;
  color: #fff; /* White text for better contrast */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.card-text {
  margin-bottom: 20px;
  color: #fff; /* White text for better contrast */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.card-img-overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.btn-info {
  background-color: #17a2b8;
  border: none;
  transition: background-color 0.3s;
  margin-top: auto;
}

.btn-info:hover {
  background-color: #138496;
}
</style>
