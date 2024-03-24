<script setup lang="ts">
const router = useRouter()
const drawerState = useState('drawer', () => true)
const { mobile, lgAndUp, width } = useVDisplay()

const drawer = computed({
  get: () => drawerState.value || !mobile.value,
  set(val) {
    drawerState.value = val
  },
})
const rail = computed(() => !drawerState.value && !mobile.value)

const routes = router.getRoutes().filter((r) => r.path.lastIndexOf('/') === 0)
routes.sort((a, b) => (Number(a.meta?.drawerIndex) ?? 99) - (Number(b.meta?.drawerIndex) ?? 98))

nextTick(() => {
  drawerState.value = lgAndUp.value && width.value !== 1280
})
</script>

<template>
  <VNavigationDrawer v-model="drawer" :expand-on-hover="rail" :rail="rail">
    <template #prepend>
      <VList>
        <VListItem>
          <template #prepend>
            <VIcon color="primary" icon="mdi-vuetify" size="x-large" />
          </template>
          <VListItemTitle class="text-h5 font-bold">
            Vuetify
            <span class="text-primary">Admin</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </template>
    <VList density="compact" nav>
      <AppDrawerItem v-for="route in routes" :key="route.name" :item="route" />
    </VList>
    <VSpacer />
    <template #append>
      <VListItem class="px-0 flex flex-col justify-center">
        <div class="text-caption pt-6 pt-md-0 text-center">
          &copy; Copyright {{ new Date().getFullYear() }}
        </div>
      </VListItem>
    </template>
  </VNavigationDrawer>
</template>
