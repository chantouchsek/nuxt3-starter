<script setup lang="ts">
definePageMeta({
	icon: 'mdi-home',
	title: 'Homepage',
	drawerIndex: 0,
})

const name = ref('')
</script>

<template>
	<div class="relative text-center">
		<VIcon class="mb-4" color="primary" icon="mdi-vuetify" size="3em" />
		<p>{{ $t('auth.title.login') }}</p>
		<VResponsive class="mx-auto" max-width="300">
			<VTextField
				v-model="name"
				class="mx-auto mt-8"
				clearable
				color="primary"
				label="What's your name?"
				placeholder="Hello World"
			/>
		</VResponsive>
		<VBtn class="mr-2" color="primary" :disabled="!name">
			{{ $t('common.confirm') }}
		</VBtn>
		<VBtn :disabled="!name">{{ $t('common.cancel') }}</VBtn>
	</div>
</template>
