<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
</script>
<template>
  <header class="header">
    <Header />
  </header>
  <main>
    <slot />
  </main>
</template>
