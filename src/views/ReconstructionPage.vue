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
import CardComponent from '@/components/CardComponent.vue';
import model1 from '@/assets/para.png';
import model2 from '@/assets/povoz.png';
import model3 from '@/assets/plat4.png';

export default {
  name: 'ReconstructionPage',
  components: {
    CardComponent,
  },
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
  margin-top: 100px; /* Добавлен верхний отступ */
}

.biograph {
  text-align: center;
  margin-top: 20px;
  font-size: 2.5rem;
  color: #333;
}
</style>
