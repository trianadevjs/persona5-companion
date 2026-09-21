<script setup lang="ts">
import ConfidantCard from '~/components/confidants/ConfidantCard.vue'

const confidants = [
  {
    id: 'akechi',
    arcana: 'Justice',
    rank: 0,
    image: '/images/confidants/Akechi/default.jpg',
    hoverImage: '/images/confidants/Akechi/hover.jpg',
  },
  {
    id: 'makoto',
    arcana: 'Priestess',
    rank: 3,
    image: '/images/confidants/Makoto/default.jpg',
    hoverImage: '/images/confidants/Makoto/hover.jpg',
  },
  {
    id: 'ryuji',
    arcana: 'Chariot',
    rank: 6,
    image: '/images/confidants/Ryuji/default.jpg',
    hoverImage: '/images/confidants/Ryuji/hover.jpg',
  },
  {
    id: 'ann',
    arcana: 'Lovers',
    rank: 4,
    image: '/images/confidants/Ann/default.jpg',
    hoverImage: '/images/confidants/Ann/hover.jpg',
  },
]
</script>

<template>
  <div class="home-page">

    <!-- HERO -->
    <section class="hero">

      <!-- Decoración de fondo -->
      <div class="hero-noise" />

      <div class="hero-content">

        <span class="take-your-time">
          TAKE YOUR TIME
        </span>

        <div class="title">
          <h1>CONFIDANT</h1>
          <h2>TRACKER</h2>
        </div>

        <p class="description">
          <span>Lleva el control de tus confidentes y no pierdas</span>
          <span>ninguna oportunidad de subir de rango.</span>
        </p>

        <NuxtLink
          to="/confidentes"
          class="start-button"
        >
          <span>VER CONFIDENTES</span>
          <strong>›</strong>
        </NuxtLink>

      </div>

    </section>


    <!-- CONFIDANTS -->
    <section class="progress-section">

      <header class="section-header">
        <span>PROGRESO</span>
        <h2>Confidentes</h2>
      </header>

      <div class="confidants-grid">
        <ConfidantCard
          v-for="confidant in confidants"
          :key="confidant.id"
          v-bind="confidant"
        />
      </div>

    </section>

  </div>
</template>

<style scoped src="../assets/css/pages/home.css"></style>
