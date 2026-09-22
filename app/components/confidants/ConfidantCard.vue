<script setup lang="ts">
import { withBase } from 'ufo'

interface Props {
  id: string
  arcana: string
  rank: number
  image: string
  hoverImage: string
}

const props = defineProps<Props>()

const appConfig = useRuntimeConfig()

const imageSrc = computed(() =>
  withBase(props.image, appConfig.app.baseURL)
)

const hoverImageSrc = computed(() =>
  withBase(props.hoverImage, appConfig.app.baseURL)
)

const progress = computed(() => {
  return Math.min(Math.max(props.rank, 0), 10) * 10
})

</script>

<template>
  <NuxtLink
    :to="`/confidants/${id}`"
    class="confidant-card"
  >
    <!-- Imagen normal -->
    <img
      :src="imageSrc"
      :alt="id"
      class="card-image card-image-default"
    >

    <!-- Imagen hover -->
    <img
      :src="hoverImage"
      alt=""
      class="card-image card-image-hover"
    >

    <!-- Información -->
    <div class="card-content">

      <div class="card-stats">

        <div class="stats-row">
          <div class="rank">
            <span class="rank-label">
              RANK
            </span>

            <strong>
              {{ rank }}
            </strong>

            <span class="rank-total">
              / 10
            </span>
          </div>
          <span class="arcana">
            {{ arcana }}
          </span>
        </div>

        <div class="progress-bar" aria-hidden="true">
          <div
            class="progress"
            :style="{ width: `${progress}%` }"
          />
        </div>

      </div>

      <div class="details">
        VER DETALLES
        <span>→</span>
      </div>

    </div>
  </NuxtLink>
</template>

<style scoped src="../../assets/css/components/confidant-card.css"></style>
