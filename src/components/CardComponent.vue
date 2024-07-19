<template>
  <div class="card bg-dark text-white darken-card">
    <img :src="image" class="card-img" :alt="title" />
    <div class="card-img-overlay d-flex flex-column justify-content-end p-3">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a :href="link" class="btn btn-info mt-auto">Подробнее</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
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
