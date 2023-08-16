<template lang="pug">
el-empty(:description="desc")
  el-button(type="primary" @click="goBack") 点击返回
</template>

<script>
</script>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const desc = ref('')

onMounted(() => {
  const route = useRoute()
  desc.value = `未找到页面${route.path}`
})

const goBack = () => {
  router.back()
}
</script>
