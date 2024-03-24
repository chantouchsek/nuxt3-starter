<script setup lang="ts">
import { object, string } from 'zod'

definePageMeta({
  auth: 'guest',
  title: 'auth.title.login',
  layout: 'auth',
})

const $auth = useAuth()

const rememberMe = ref(false)
const validationSchema = toTypedSchema(
  object({
    email: string().email(),
    password: string().min(6),
  }),
)
const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema,
  initialValues: { email: '', password: '' },
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit(async ({ email, password }) => {
  await $auth.loginWith('local', { body: { email, password } })
})
</script>

<template>
  <VForm @submit.prevent="onSubmit">
    <VCard :loading="isSubmitting" width="500">
      <VCardText>
        <VCardTitle>{{ $t('auth.login') }}</VCardTitle>

        <VTextField v-model="email" :error-messages="errors.email" label="Email" type="email" />
        <VTextField
          v-model="password"
          :error-messages="errors.password"
          label="Password"
          type="password"
        />
        <VCheckbox v-model="rememberMe" label="Remember me" />

        <VCardActions>
          <VSpacer />
          <VBtn
            color="primary"
            :loading="$auth.busy || isSubmitting"
            prepend-icon="mdi-lock"
            :text="$t('auth.login')"
            type="submit"
            variant="outlined"
          />
        </VCardActions>
      </VCardText>
    </VCard>
  </VForm>
</template>
