<script lang="ts">
export default defineComponent({
  name: 'ErrorPage',
})
</script>

<template>
  <div class="wrapper">
    <VIcon class="logo mb-4" icon="mdi-view-grid-outline" />
    <p class="text-h5">
      404 Not Found
    </p>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  top: calc(50vh - 250px);
  text-align: center;
  opacity: 0.6;
}
.logo {
  font-size: 12em;
  opacity: 0.2;
}
</style>
