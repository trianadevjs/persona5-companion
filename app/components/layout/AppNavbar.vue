<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Confidentes', to: '/' },
  { label: 'Calendario', to: '/calendar' },
  { label: 'Progreso', to: '/progress' }
]
</script>

<template>
      <header class="p5-navbar">
    <NuxtLink to="/" class="brand">
      <span class="brand-p5">P5</span>
      <span class="brand-text">COMPANION</span>
    </NuxtLink>

    <nav class="nav-links">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav-link"
        :class="{ active: route.path === link.to }"
      >
        <span>{{ link.label }}</span>
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped src="../../assets/css/components/app-navbar.css"></style>