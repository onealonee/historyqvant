<template>
  <div class="card bg-dark text-white darken-card">
    <div class="card-img-container">
      <img :src="image" class="card-img" :alt="title" />
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px; /* Increase card height */
}

.darken-card:hover {
  transform: scale(1.05);
}

.card-img-container {
  flex: 1; /* Allow the image container to grow */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Fill the entire height of the card */
  overflow: hidden; /* Hide overflow to ensure centering */
}

.card-img {
  width: 100%; /* Ensure image covers the card width */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure image covers the card while maintaining aspect ratio */
}

.card-title {
  margin-bottom: 12px; /* Slightly larger margin */
  font-size: 1.25rem; /* Larger font size */
  color: #fff; /* White text for better contrast */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.card-text {
  margin-bottom: 12px; /* Slightly larger margin */
  color: #fff; /* White text for better contrast */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.card-img-overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem; /* Reduce padding */
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
