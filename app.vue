<script setup lang="ts">
const { meta, matched } = useRoute()
const theme = useVTheme()

provide(
  'my-theme',
  computed(() => (theme.current.value.dark ? 'dark' : undefined)),
)

const title = computed(() => meta?.title ?? matched[0]?.meta?.title ?? '')
const { locale } = useI18n()
const appConfig = useAppConfig()

useHead({
  title,
  titleTemplate: `%s - ${appConfig.title}`,
  htmlAttrs: { lang: locale },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})
useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
