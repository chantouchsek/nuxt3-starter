<script setup lang="ts">
const route = useRoute()
const { t, te } = useI18n()
const head = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: 'id',
	addSeoAttributes: true,
})

const title = computed(() => {
	const title = (route.meta.title as string) ?? 'Amazing Site'

	return te(title) ? t(title) : title
})
</script>

<template>
	<div>
		<Html :dir="head.htmlAttrs.dir" :lang="head.htmlAttrs.lang">
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
					<Meta
						:id="meta.id"
						:content="meta.content"
						:property="meta.property"
					/>
				</template>
			</Head>
			<Body>
				<VApp>
					<VMain>
						<slot />
					</VMain>
				</VApp>
			</Body>
		</Html>
	</div>
</template>
