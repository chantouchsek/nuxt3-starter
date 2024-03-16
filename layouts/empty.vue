<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
})
</script>

<template>
  <Html :dir="head.htmlAttrs?.dir" :lang="head.htmlAttrs?.lang">
    <Body>
      <VApp>
        <VMain>
          <VContainer fill-height fluid>
            <slot />
          </VContainer>
        </VMain>
      </VApp>
    </Body>
  </Html>
</template>
