<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { issue } from './api/issue';
const message = ref('')
onMounted(async () => {
  try {
    const res = await issue({ username: "test", password: "123" })
    message.value = res
  } catch (err) {
    message.value = err.message ?? 'catch nothing'
  }
})
</script>

<template>
  <div class="app">{{ message }}</div>
</template>
