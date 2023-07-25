<template>
  <div class="h-full bg-light text-black overflow-x-hidden">
    <div class="flex flex-col h-full">
      <Common-Header />
      <slot />
      <Common-Footer />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: 'DefaultLayout',
})
</script>

<style scoped></style>
