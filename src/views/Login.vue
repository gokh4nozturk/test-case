<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(email.value, password.value);
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>
