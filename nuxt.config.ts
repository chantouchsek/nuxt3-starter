export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true, timeline: { enabled: true } },
  vue: { propsDestructure: true },
  runtimeConfig: {
    public: {
      http: {
        browserBaseURL: '/',
      },
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  modules: [
    '@nuxt-alt/auth',
    '@nuxt-alt/http',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@vue-macros/nuxt',
    '@unocss/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'dayjs-nuxt',
    'vuetify-nuxt-module',
    '@nuxt/fonts',
    '@vee-validate/nuxt',
    '@nuxt/eslint',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        flag: 'us',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.ts',
      },
      {
        code: 'km',
        flag: 'km',
        iso: 'km-KH',
        name: 'ខ្មែរ',
        file: 'km-KH.ts',
      },
    ],
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  vuetify: {
    moduleOptions: {
      prefixComposables: true,
    },
  },
  auth: {
    globalMiddleware: true,
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/dashboard',
    },
    strategies: {
      local: {
        enabled: true,
        name: 'local',
        scheme: 'refresh',
        token: {
          global: true,
          required: true,
          type: 'Bearer',
          property: 'accessToken',
          maxAge: 60 * 60 * 24 * 180,
        },
        refreshToken: {
          data: 'refreshToken',
          property: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30,
        },
        user: {
          property: 'data',
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: 'api/auth/login',
            method: 'post',
          },
          refresh: {
            url: 'api/auth/refresh',
            method: 'post',
          },
          logout: {
            url: 'api/auth/logout',
            method: 'post',
          },
          user: { url: 'api/auth/me', method: 'get' },
        },
      },
    },
  },
  http: {
    credentials: 'include',
    // debug: process.env.NODE_ENV === 'development',
  },
  veeValidate: {
    autoImports: true,
    typedSchemaPackage: 'zod',
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true,
      typescript: {
        strict: true,
      },
    },
  },
})
