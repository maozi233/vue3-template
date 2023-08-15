<template lang="pug">
div welcome login at: {{ loginTime }}
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const loginTime = ref()

onMounted(() => {
  const route = useRoute()
  console.log(route.path, ' mounted')
  loginTime.value = new Date().toLocaleString()
})

</script>
