<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(email.value, password.value, confirmPassword.value);
};
</script>

<template>
  <div class="wrapper">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>
