<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
})

const title = computed(() => t((route.meta.title as string) || 'app.name'))
</script>

<template>
  <Html :dir="head.htmlAttrs?.dir" :lang="head.htmlAttrs?.lang">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :href="link.href"
          :hreflang="link.hreflang"
          :rel="link.rel"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :content="meta.content" :property="meta.property" />
      </template>
    </Head>
    <Body>
      <VApp>
        <VMain>
          <VContainer class="fill-height bg-grey-lighten-4" fluid>
            <VLayout class="items-center justify-center w-full" full-height>
              <slot />
            </VLayout>
          </VContainer>
        </VMain>
      </VApp>
    </Body>
  </Html>
</template>
