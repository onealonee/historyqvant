<template>
  <div class="reconstruction-page">
    <h1 class="biograph">Реконструкция</h1>
    <div class="container mt-5">
      <div class="row">
        <div
            class="col-md-3 col-sm-4 mb-4 px-2"
            v-for="model in models"
            :key="model.id"
        >
          <div class="card bg-dark text-white darken-card">
            <img :src="model.image" class="card-img" :alt="model.title" />
            <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <h5 class="card-title">{{ model.title }}</h5>
              <p class="card-text text-justify">{{ model.description }}</p>
              <div class="mt-auto">
                <a :href="model.link" class="btn btn-info">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReconstructionPage',
  data() {
    return {
      models: [
        {
          id: 1,
          image: '@/assets/para.png',
          title: 'Модель женского русского народного костюма',
          description: 'Познакомьтесь с русским народным костюмом. Представленная модель хранится в Липецком областном краеведческом музее.',
          link: '/plat_1.html',
        },
        {
          id: 2,
          image: '@/assets/model2.jpg',
          title: 'Модель женского русского народного костюма',
          description: 'Познакомьтесь с русским народным костюмом. Представленная модель хранится в Липецком областном краеведческом музее.',
          link: '/plat_2.html',
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
}

.darken-card {
  background-color: rgba(0, 0, 0, 0.6);
}

.card-title {
  margin: 0 0 -8px 0 !important;
}

.card-text {
  margin-bottom: 10px;
}

.card-img-overlay {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
}

.btn-info {
  margin: -20px 0 0 0 !important;
}
</style>
