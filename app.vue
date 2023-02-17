<script setup>
const store = await useStoryblok('home', { version: "draft" })
</script>
<template>
  <pre>{{ story }}</pre>
</template>

