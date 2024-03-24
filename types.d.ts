declare module '@nuxt-alt/auth' {
  interface UserInfo {
    id: string
    email: string
    name: string
  }
}
declare module 'vue-router' {
  interface RouteMeta {
    icon?: string
    title?: string
    drawerIndex?: number
    /**
     * If disable or hide breadcrumb. Default is enabled
     */
    breadcrumb?: 'hidden' | false
  }
}

export {}
